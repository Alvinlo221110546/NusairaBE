import axios from 'axios';
import db from '../database/Nusairadb.js';

class PredictionService {
  constructor() {
    this.predictions = [];
  }

  static provinceCityMap = {
    "JAWA BARAT": ["Bandung", "Bekasi", "Bogor", "Ciganjur", "Cirebon"],
    "JAWA TENGAH": ["Magelang", "Pekalongan", "Boyolali", "Cilacap", "Kebumen", "KOTA SEMARANG"],
    "JAWA TIMUR": ["Malang", "Surabaya", "Batu", "Blitar", "Kediri"]
  };

  async fetchPredictions(province, city) {
    try {
      console.log('Fetching predictions for:', { province, city });

      // Validasi input
      if (!province || !city) {
        throw new Error('Province dan city harus diisi');
      }

      if (!PredictionService.provinceCityMap[province]?.includes(city)) {
        throw new Error(`Kota ${city} tidak valid untuk provinsi ${province}`);
      }

      const requestBody = {
        province: province,
        city: city,
        years: 1
      };

      console.log('Sending request with body:', requestBody);

      const response = await axios.post(
        'https://app-regresi-harga-lele.1on5dfg60zg3.us-south.codeengine.appdomain.cloud/predict',
        requestBody
      );

      console.log('Received response:', response.data);

      const { monthly_predictions, yearly_averages } = response.data;

      if (!Array.isArray(monthly_predictions) || !Array.isArray(yearly_averages)) {
        throw new Error('Invalid response format from API');
      }

      this.predictions = response.data;

      // Simpan ke database
      await this.savePredictionsToDB(monthly_predictions, yearly_averages, province, city);

      return response.data;

    } catch (error) {
      console.error('Error in fetchPredictions:', error);
      throw new Error(`Failed to fetch predictions: ${error.message}`);
    }
  }

  async savePredictionsToDB(monthly_predictions, yearly_averages, province, city) {
    const connection = await db.getConnection();
    
    try {
      await connection.beginTransaction();

      const predictionYear = new Date().getFullYear();
      console.log('Saving predictions for year:', predictionYear);

      // Hapus prediksi lama untuk provinsi dan kota yang sama
      const deleteQuery = `
        DELETE FROM predictions 
        WHERE province = ? AND city = ? AND prediction_year = ?
      `;
      await connection.execute(deleteQuery, [province, city, predictionYear]);

      // Simpan prediksi bulanan
      for (let i = 0; i < monthly_predictions.length; i++) {
        const month = new Date(2024, i).toLocaleString('id-ID', { month: 'long' });
        const prediction = monthly_predictions[i];

        const query = `
          INSERT INTO predictions (month, prediction, prediction_year, province, city)
          VALUES (?, ?, ?, ?, ?)
        `;
        
        console.log('Executing query:', query, [month, prediction, predictionYear, province, city]);
        await connection.execute(query, [month, prediction, predictionYear, province, city]);
      }

      // Simpan rata-rata tahunan
      const yearlyAverage = yearly_averages[0];
      const yearlyQuery = `
        INSERT INTO predictions (month, prediction, prediction_year, province, city)
        VALUES ('Yearly Average', ?, ?, ?, ?)
      `;
      
      await connection.execute(yearlyQuery, [yearlyAverage, predictionYear, province, city]);

      await connection.commit();
      console.log('All predictions saved successfully');

    } catch (error) {
      await connection.rollback();
      console.error('Error in savePredictionsToDB:', error);
      throw new Error(`Failed to save predictions: ${error.message}`);
    } finally {
      connection.release();
    }
  }

  async getPredictions(province, city) {
    try {
      const predictionYear = new Date().getFullYear();

      const monthlyQuery = `
        SELECT * FROM predictions 
        WHERE prediction_year = ? 
        AND province = ? 
        AND city = ?
        AND month != 'Yearly Average'
        ORDER BY FIELD(month, 
          'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
          'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
        )
      `;

      const yearlyQuery = `
        SELECT * FROM predictions 
        WHERE prediction_year = ? 
        AND province = ? 
        AND city = ?
        AND month = 'Yearly Average'
      `;

      console.log('Executing queries with params:', { predictionYear, province, city });

      const [monthlyRows] = await db.execute(monthlyQuery, [predictionYear, province, city]);
      const [yearlyRows] = await db.execute(yearlyQuery, [predictionYear, province, city]);

      return {
        monthly_predictions: monthlyRows,
        yearly_averages: yearlyRows
      };

    } catch (error) {
      console.error('Error in getPredictions:', error);
      throw new Error(`Failed to get predictions: ${error.message}`);
    }
  }
}

export const predictionService = new PredictionService();
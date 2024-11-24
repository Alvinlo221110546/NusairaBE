import axios from 'axios';
import db from '../database/Nusairadb.js';

class PredictionService {
  constructor() {
    this.predictions = [];
  }
  static provinceCityMap = {
    "JAWA BARAT": ["Bandung", "Bekasi", "Bogor", "Ciganjur", "Cirebon"],
    "JAWA TENGAH": ["Magelang", "Pekalongan", "Boyolali", "Cilacap", "Kebumen"],
    "JAWA TIMUR": ["Malang", "Surabaya", "Batu", "Blitar", "Kediri"]
  };

  async fetchPredictions(province, city) {
    try {
      if (!PredictionService.provinceCityMap[province].includes(city)) {
        throw new Error(`Kota ${city} tidak valid untuk provinsi ${province}`);
      }

      const requestBody = {
        province: province,
        city: city,
        years: 1
      };
      const response = await axios.post('https://app-regresi-harga-lele.1on5dfg60zg3.us-south.codeengine.appdomain.cloud/predict', requestBody);

     
      const { monthly_predictions, yearly_averages } = response.data;

      this.predictions = response.data;

      await this.savePredictionsToDB(monthly_predictions, yearly_averages);

    } catch (error) {
      console.error('Error fetching predictions:', error);
      throw error;
    }
  }

  async savePredictionsToDB(monthly_predictions, yearly_averages) {
    try {
      const predictionYear = new Date().getFullYear(); 
      for (let i = 0; i < monthly_predictions.length; i++) {
        const month = new Date(0, i).toLocaleString('default', { month: 'long' }); 
        const prediction = monthly_predictions[i];

        const query = `
          INSERT INTO predictions (month, prediction, prediction_year)
          VALUES (?, ?, ?)
        `;
        await db.execute(query, [month, prediction, predictionYear]);
      }

      const yearlyAverage = yearly_averages[0]; 
      const query = `
        INSERT INTO predictions (month, prediction, prediction_year)
        VALUES ('Yearly Average', ?, ?)
      `;
      await db.execute(query, [yearlyAverage, predictionYear]);

      console.log('Predictions saved to database successfully');
    } catch (error) {
      console.error('Error saving predictions to database:', error);
      throw error;
    }
  }

  async getPredictions() {
    try {
      const query = `SELECT * FROM predictions WHERE prediction_year = ? ORDER BY FIELD(month, 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December')`;
      const yearlyQuery = `SELECT * FROM predictions WHERE prediction_year = ? AND month = 'Yearly Average'`;

      const predictionYear = new Date().getFullYear(); 

      const monthlyData = await db.execute(query, [predictionYear]);
      const yearlyData = await db.execute(yearlyQuery, [predictionYear]);

      return {
        monthly_predictions: monthlyData,
        yearly_averages: yearlyData
      };
    } catch (error) {
      console.error('Error getting predictions from database:', error);
      throw error;
    }
  }
}

export const predictionService = new PredictionService();

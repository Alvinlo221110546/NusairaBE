// import axios from 'axios';
// import db from '../database/Nusairadb.js';
// import cron from 'node-cron';

// class PredictionService {
//   constructor() {
//     this.predictions = [];
//     this.isRunning = false;
//   }
//   //ini akan digunakan ketika mau memprediksi harga dengan menggunakan model yang dimana itu adalah data kota baru
//   // static provinceCityMap = {
//   //   "JAWA BARAT": [ ""],
//   //   "JAWA TENGAH": [""],
//   //   "JAWA TIMUR": [""]
//   // };

//   // async fetchPredictions(province, city) {
//   //   try {
//   //     console.log('Fetching predictions for:', { province, city });

//   //     // Validasi input
//   //     if (!province || !city) {
//   //       throw new Error('Province dan city harus diisi');
//   //     }

//   //     if (!PredictionService.provinceCityMap[province]?.includes(city)) {
//   //       throw new Error(`Kota ${city} tidak valid untuk provinsi ${province}`);
//   //     }

//   //     const requestBody = {
//   //       province: province,
//   //       city: city,
//   //       years: 1
//   //     };

//   //     console.log('Sending request with body:', requestBody);

//   //     const response = await axios.post(
//   //       'https://app-regresi-harga-lele.1on5dfg60zg3.us-south.codeengine.appdomain.cloud/predict',
//   //       requestBody
//   //     );

//   //     console.log('Received response:', response.data);

//   //     const { monthly_predictions, yearly_averages } = response.data;

//   //     if (!Array.isArray(monthly_predictions) || !Array.isArray(yearly_averages)) {
//   //       throw new Error('Invalid response format from API');
//   //     }

//   //     this.predictions = response.data;

//   //     // Simpan ke database
//   //     await this.savePredictionsToDB(monthly_predictions, yearly_averages, province, city);

//   //     return response.data;

//   //   } catch (error) {
//   //     console.error('Error in fetchPredictions:', error);
//   //     throw new Error(`Failed to fetch predictions: ${error.message}`);
//   //   }
//   // }

//   // async savePredictionsToDB(monthly_predictions, yearly_averages, province, city) {
//   //   const connection = await db.getConnection();
    
//   //   try {
//   //     console.log('=== Debug Info ===');
//   //     console.log('Monthly Predictions:', monthly_predictions);
//   //     console.log('Yearly Averages:', yearly_averages);
//   //     console.log('Province:', province);
//   //     console.log('City:', city);
  
//   //     await connection.beginTransaction();
//   //     const predictionYear = new Date().getFullYear();
  
//   //     // Log sebelum delete
//   //     console.log('Deleting old predictions...');
//   //     const deleteQuery = `
//   //       DELETE FROM predictions 
//   //       WHERE province = ? AND city = ? AND prediction_year = ?
//   //     `;
//   //     await connection.execute(deleteQuery, [province, city, predictionYear]);
  
//   //     // Simpan prediksi bulanan
//   //     for (let i = 0; i < monthly_predictions.length; i++) {
//   //       const month = new Date(2024, i).toLocaleString('id-ID', { month: 'long' });
//   //       const prediction = monthly_predictions[i];
  
//   //       console.log(`Saving prediction for ${month}: ${prediction}`);
        
//   //       const query = `
//   //         INSERT INTO predictions (month, prediction, prediction_year, province, city)
//   //         VALUES (?, ?, ?, ?, ?)
//   //       `;
        
//   //       await connection.execute(query, [month, prediction, predictionYear, province, city]);
//   //     }
  
//   //     // Simpan rata-rata tahunan
//   //     console.log('Saving yearly average:', yearly_averages[0]);
//   //     const yearlyQuery = `
//   //       INSERT INTO predictions (month, prediction, prediction_year, province, city)
//   //       VALUES ('Yearly Average', ?, ?, ?, ?)
//   //     `;
      
//   //     await connection.execute(yearlyQuery, [yearly_averages[0], predictionYear, province, city]);
  
//   //     await connection.commit();
//   //     console.log('Transaction committed successfully');
  
//   //   } catch (error) {
//   //     console.error('=== Error Details ===');
//   //     console.error('Error message:', error.message);
//   //     console.error('Error stack:', error.stack);
//   //     await connection.rollback();
//   //     throw error;
//   //   } finally {
//   //     connection.release();
//   //   }
//   // }

//   // async getPredictions(province, city) {
//   //   try {
//   //     const predictionYear = new Date().getFullYear();

//   //     const monthlyQuery = `
//   //       SELECT * FROM predictions 
//   //       WHERE prediction_year = ? 
//   //       AND province = ? 
//   //       AND city = ?
//   //       AND month != 'Yearly Average'
//   //       ORDER BY FIELD(month, 
//   //         'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
//   //         'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
//   //       )
//   //     `;

//   //     const yearlyQuery = `
//   //       SELECT * FROM predictions 
//   //       WHERE prediction_year = ? 
//   //       AND province = ? 
//   //       AND city = ?
//   //       AND month = 'Yearly Average'
//   //     `;

//   //     console.log('Executing queries with params:', { predictionYear, province, city });

//   //     const [monthlyRows] = await db.execute(monthlyQuery, [predictionYear, province, city]);
//   //     const [yearlyRows] = await db.execute(yearlyQuery, [predictionYear, province, city]);

//   //     return {
//   //       monthly_predictions: monthlyRows,
//   //       yearly_averages: yearlyRows
//   //     };

//   //   } catch (error) {
//   //     console.error('Error in getPredictions:', error);
//   //     throw new Error(`Failed to get predictions: ${error.message}`);
//   //   }
//   // }

//   // async runPredictionsForAllCities() {
//   //   if (this.isRunning) {
//   //     console.log('Prediction job is already running');
//   //     return;
//   //   }

//   //   this.isRunning = true;
//   //   console.log('Starting automated predictions for all cities...');

//   //   try {
//   //     const provinces = Object.keys(PredictionService.provinceCityMap);
      
//   //     for (const province of provinces) {
//   //       const cities = PredictionService.provinceCityMap[province];
        
//   //       for (const city of cities) {
//   //         console.log(`Running prediction for ${province} - ${city}`);
          
//   //         try {
//   //           await this.fetchPredictions(province, city);
//   //           console.log(`Successfully predicted prices for ${province} - ${city}`);
//   //         } catch (error) {
//   //           console.error(`Failed to predict prices for ${province} - ${city}:`, error.message);
//   //           continue;
//   //         }
          
//   //         await new Promise(resolve => setTimeout(resolve, 2000));
//   //       }
//   //     }
      
//   //     console.log('Completed predictions for all cities');
//   //   } catch (error) {
//   //     console.error('Error in runPredictionsForAllCities:', error);
//   //   } finally {
//   //     this.isRunning = false;
//   //   }
//   // }

//   // startScheduler() {
    
//   //   this.runPredictionsForAllCities();

//   //   cron.schedule('0 0 * * *', () => {
//   //     console.log('Running scheduled predictions...');
//   //     this.runPredictionsForAllCities();
//   //   });

//   //   console.log('Prediction scheduler has been started');
//   // }

// }

// export const predictionService = new PredictionService();
import db from '../database/Nusairadb.js';

class PredictionModel {
  static async getPredictionsByProvince(province) {
    try {
      const query = 'SELECT * FROM predictions WHERE province = ?';
      const [rows] = await db.execute(query, [province]);
      return rows; 
    } catch (error) {
      console.error('Error in getPredictionsByProvince model:', error);
      throw new Error('Failed to retrieve predictions from database');
    }
  }
}

export default PredictionModel;

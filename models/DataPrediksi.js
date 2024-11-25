import db from '../database/Nusairadb.js';

class PredictionModel {
  static async getPredictionsGroupedByProvince() {
    try {
      // Define cities by province
      const citiesByProvince = {
        'JAWA BARAT': ['Bandung', 'Bekasi', 'Bogor', 'Cirebon', 'Subang'],
        'JAWA TIMUR': ['Tulungagung', 'Malang', 'Surabaya', 'Blitar', 'Kediri'],
        'JAWA TENGAH': ['Magelang', 'Pekalongan', 'Boyolali', 'Cilacap', 'Kebumen']
      };

      const results = {};
      
      for (const [province, cities] of Object.entries(citiesByProvince)) {
        // Using IN clause for cities in each province
        const placeholders = cities.map(() => '?').join(',');
        const query = `
          SELECT * FROM predictions 
          WHERE city IN (${placeholders}) 
          AND province = ? 
          ORDER BY city, month ASC
        `;
        
        // Add province as the last parameter
        const parameters = [...cities, province];
        const [rows] = await db.execute(query, parameters);
        
        // Group results by city within province
        const citiesData = {};
        rows.forEach(row => {
          if (!citiesData[row.city]) {
            citiesData[row.city] = [];
          }
          citiesData[row.city].push(row);
        });
        
        results[province] = citiesData;
      }
      
      return results;
    } catch (error) {
      console.error('Error in getPredictionsGroupedByProvince model:', error);
      throw new Error('Failed to retrieve predictions for provinces');
    }
  }

  // Get predictions for a specific city
  static async getPredictionsByCity(city) {
    try {
      const query = 'SELECT * FROM predictions WHERE city = ? ORDER BY month ASC';
      const [rows] = await db.execute(query, [city]);
      return rows;
    } catch (error) {
      console.error('Error in getPredictionsByCity model:', error);
      throw new Error('Failed to retrieve predictions from database');
    }
  }
}

export default PredictionModel;
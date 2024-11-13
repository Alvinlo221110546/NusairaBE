import db from '../db.js';

class AncoModel {

  async save(data) {
    try {
      const { pilihKolam, tanggalPanenParsial, waktuPemberianPakan, waktuCekAnco, catatan } = data;

      const [result] = await db.execute(
        'INSERT INTO anco (pilihKolam, tanggalPanenParsial, waktuPemberianPakan, waktuCekAnco, catatan) VALUES (?, ?, ?, ?, ?)', 
        [pilihKolam, tanggalPanenParsial, waktuPemberianPakan, waktuCekAnco, catatan]
      );

      return { id: result.insertId, ...data }; 
    } catch (error) {
      console.error('Error saving Anco data:', error);
      throw error;
    }
  }

 
  async getAll() {
    try {
      const [rows] = await db.execute('SELECT * FROM anco');
      return rows;
    } catch (error) {
      console.error('Error fetching Anco data:', error);
      throw error;
    }
  }

  
  async getById(id) {
    try {
      const [rows] = await db.execute('SELECT * FROM anco WHERE id = ?', [id]);
      return rows[0];
    } catch (error) {
      console.error('Error fetching Anco data by ID:', error);
      throw error;
    }
  }
}

export default new AncoModel();

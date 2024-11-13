import Siklus from '../models/DataMulaiSiklus.js';
import db from '../database/Nusairadb.js'; 

class SiklusController {
  
  static async addSiklus(req, res) {
    try {
      const data = req.body;

     
      await Siklus.save(data, db);

      res.status(201).json({
        message: 'Siklus berhasil disimpan!',
        data,
      });
    } catch (error) {
      console.error('Error saving siklus:', error);
      res.status(500).json({
        message: 'Terjadi kesalahan saat menyimpan data siklus.',
        error: error.message,
      });
    }
  }

 
  static async getSiklus(req, res) {
    try {
      const siklusList = await Siklus.getAll(db);

      res.status(200).json({
        message: 'Data siklus berhasil diambil.',
        data: siklusList,
      });
    } catch (error) {
      console.error('Error retrieving siklus:', error);
      res.status(500).json({
        message: 'Terjadi kesalahan saat mengambil data siklus.',
        error: error.message,
      });
    }
  }
}

export default SiklusController;

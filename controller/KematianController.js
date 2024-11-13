import DataKematianModel from '../models/DataKematian.js';
import db from '../database/Nusairadb.js'; 

class DataKematianController {
  
  static async addDataKematian(req, res) {
    try {
      const { kolam, tanggalTebar, umur, jumlahEkor, totalBerat, multiplier } = req.body;

      const dataKematian = new DataKematianModel(kolam, tanggalTebar, umur, jumlahEkor, totalBerat, multiplier);

    
      const errors = dataKematian.validate();
      if (errors.length > 0) {
        return res.status(400).json({ errors });
      }

     
      await dataKematian.save(db);

      res.status(201).json({
        message: 'Data kematian berhasil disimpan!',
        data: { kolam, tanggalTebar, umur, jumlahEkor, totalBerat, multiplier },
      });
    } catch (error) {
      console.error('Error saving data kematian:', error);
      res.status(500).json({ message: 'Terjadi kesalahan saat menyimpan data kematian.', error: error.message });
    }
  }

  
  static async getDataKematian(req, res) {
    try {
      const dataKematianList = await DataKematianModel.getAll(db);

      res.status(200).json({
        message: 'Data kematian ditemukan',
        data: dataKematianList,
      });
    } catch (error) {
      console.error('Error retrieving data kematian:', error);
      res.status(500).json({ message: 'Terjadi kesalahan saat mengambil data kematian.', error: error.message });
    }
  }
}

export default DataKematianController;

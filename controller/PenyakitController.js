import Penyakit from '../models/DataPenyakit.js';  
import db from '../db';  

class PenyakitController {
  static async addPenyakit(req, res) {
    try {
      const { kolam, tanggalTebar, jenisPenyakit, catatan } = req.body;
      const images = req.files || []; 
      const penyakit = new Penyakit(kolam, tanggalTebar, jenisPenyakit, catatan, images);

      
      const errors = penyakit.validate();
      if (errors.length > 0) {
        return res.status(400).json({ errors });
      }

      
      await penyakit.save(db);

      res.status(201).json({
        message: 'Data penyakit berhasil disimpan!',
        data: { kolam, tanggalTebar, jenisPenyakit, catatan, images },
      });
    } catch (error) {
      console.error('Error saving penyakit:', error);
      res.status(500).json({ message: 'Terjadi kesalahan saat menyimpan data penyakit.', error: error.message });
    }
  }

  static async getPenyakit(req, res) {
    try {
      const penyakitList = await Penyakit.getAll(db);

      res.status(200).json({
        message: 'Data penyakit ditemukan',
        data: penyakitList,
      });
    } catch (error) {
      console.error('Error retrieving penyakit:', error);
      res.status(500).json({ message: 'Terjadi kesalahan saat mengambil data penyakit.', error: error.message });
    }
  }
}

export default PenyakitController;

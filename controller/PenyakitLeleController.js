import PenyakitLele from '../models/DataPenyakitLele.js';
import { v2 as cloudinary } from 'cloudinary';

class PenyakitLeleController {
  static async createPenyakitLele(req, res) {
    try {
      const {
        title,
        date,
        indikasi,
        penyebab,
        penanganan,
        pencegahan,
        gejalaTambahan,
        referensi,
      } = req.body;

      if (!title || !date) {
        return res.status(400).json({
          message: 'Title dan date wajib diisi.',
        });
      }

      const image = req.file ? await PenyakitLeleController.uploadImage(req.file) : '';

      const dataPenyakitLele = {
        title,
        date,
        image,
        indikasi: indikasi || '',
        penyebab: penyebab || '',
        penanganan: penanganan || '',
        pencegahan: pencegahan || '',
        gejalaTambahan: gejalaTambahan || '',
        referensi: referensi || '',
      };

      const result = await PenyakitLele.save(dataPenyakitLele);

      return res.status(200).json({
        message: 'Penyakit Lele berhasil dibuat',
        data: result,
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Gagal membuat Penyakit Lele',
        errors: error.message,
      });
    }
  }

  /**
   * Mengunggah gambar ke Cloudinary
   * @param {Object} file 
   */
  static async uploadImage(file) {
    try {
      return new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          { folder: 'penyakit_lele' },
          (error, result) => {
            if (error) reject(error);
            else resolve(result.secure_url);
          }
        );
        uploadStream.end(file.buffer);
      });
    } catch (error) {
      throw new Error(`Gagal mengunggah gambar: ${error.message}`);
    }
  }


  static async getAllPenyakitLele(req, res) {
    try {
      const result = await PenyakitLele.getAll();
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({
        message: 'Gagal mendapatkan data Penyakit Lele',
        errors: error.message,
      });
    }
  }

  
  static async getPenyakitLeleById(req, res) {
    try {
      const { id } = req.params;
      const result = await PenyakitLele.getById(id);

      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({
        message: `Gagal mendapatkan Penyakit Lele dengan ID ${req.params.id}`,
        errors: error.message,
      });
    }
  }

 
  static async updatePenyakitLele(req, res) {
    try {
      const { id } = req.params;
      const {
        title,
        date,
        indikasi,
        penyebab,
        penanganan,
        pencegahan,
        gejalaTambahan,
        referensi,
      } = req.body;

      const image = req.file ? await PenyakitLeleController.uploadImage(req.file) : undefined;

      const dataPenyakitLele = {
        title,
        date,
        image,
        indikasi,
        penyebab,
        penanganan,
        pencegahan,
        gejalaTambahan,
        referensi,
      };

      const result = await PenyakitLele.update(id, dataPenyakitLele);

      return res.status(200).json({
        message: 'Penyakit Lele berhasil diperbarui',
        data: result,
      });
    } catch (error) {
      return res.status(500).json({
        message: `Gagal memperbarui Penyakit Lele dengan ID ${req.params.id}`,
        errors: error.message,
      });
    }
  }

  
  static async deletePenyakitLele(req, res) {
    try {
      const { id } = req.params;
      await PenyakitLele.delete(id);

      return res.status(200).json({
        message: 'Penyakit Lele berhasil dihapus',
      });
    } catch (error) {
      return res.status(500).json({
        message: `Gagal menghapus Penyakit Lele dengan ID ${req.params.id}`,
        errors: error.message,
      });
    }
  }
}

export default PenyakitLeleController;

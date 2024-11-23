import Penyakit from '../models/DataPenyakit.js';
import { v2 as cloudinary } from 'cloudinary';

class PenyakitController {
  static async createPenyakit(req, res) {
    try {
      const { kolam_id, tanggal_tebar, jenis_penyakit, catatan, gambar } = req.body;

     
      if (!kolam_id || !tanggal_tebar || !jenis_penyakit) {
        return res.status(400).json({
          message: 'Kolam ID, tanggal tebar, dan jenis penyakit wajib diisi.',
        });
      }

      const uploadedImages = gambar && gambar.length > 0 ? gambar : [];

      
      const dataPenyakit = {
        kolam_id,
        tanggal_tebar,
        jenis_penyakit,
        catatan: catatan || '', 
        images: uploadedImages, 
      };

      
      const result = await Penyakit.create(dataPenyakit);

      return res.status(200).json({
        message: 'Penyakit entry berhasil dibuat',
        data: result,
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Gagal membuat entry penyakit',
        errors: error.message,
      });
    }
  }

  /**
   * Mengunggah gambar ke Cloudinary
   * @param {Array} files 
   */
  static async uploadImages(files) {
    try {
      const uploadPromises = files.map((file) => {
        return new Promise((resolve, reject) => {
          const uploadStream = cloudinary.uploader.upload_stream(
            { folder: 'penyakit' },
            (error, result) => {
              if (error) reject(error);
              else resolve(result.secure_url);
            }
          );
          uploadStream.end(file.buffer);
        });
      });

      const uploadedImages = await Promise.all(uploadPromises);
      return uploadedImages;
    } catch (error) {
      throw new Error(`Gagal mengunggah gambar: ${error.message}`);
    }
  }

  
  static async getAllPenyakit(req, res) {
    try {
      const result = await Penyakit.getAll();
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({
        message: 'Gagal mendapatkan data penyakit',
        errors: error.message,
      });
    }
  }
}

export default PenyakitController;

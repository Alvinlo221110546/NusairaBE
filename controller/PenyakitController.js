import Penyakit from '../models/DataPenyakit.js';
import upload from '../middleware/Upload.js';  
import { v2 as cloudinary } from 'cloudinary';

class PenyakitController {
  // Middleware untuk menangani upload multiple images
  static uploadMiddleware = upload.array('images', 3); 

  // Fungsi untuk create data penyakit
  static async createPenyakit(req, res) {
    try {
      const { kolam_id, tanggal_tebar, jenis_penyakit, catatan } = req.body;

      // Proses upload file ke Cloudinary dan ambil path-nya
      const imagePromises = req.files.map(file => {
        return new Promise((resolve, reject) => {
          cloudinary.uploader.upload_stream(
            { folder: 'penyakit_images' }, // Tentukan folder di Cloudinary
            (error, result) => {
              if (error) {
                reject(error);
              } else {
                resolve(result.secure_url); // Ambil URL dari Cloudinary
              }
            }
          ).end(file.buffer); // Kirim file buffer ke Cloudinary
        });
      });

      // Tunggu hingga semua gambar ter-upload ke Cloudinary
      const imagePaths = await Promise.all(imagePromises);

      // Menyiapkan data yang akan disimpan
      const dataPenyakit = {
        kolam_id,
        tanggal_tebar,
        jenis_penyakit,
        catatan,
        images: imagePaths
      };

      // Simpan data penyakit ke database
      const result = await Penyakit.save(dataPenyakit);

      // Kirim respons sukses
      res.status(200).json({
        message: "Penyakit entry created successfully",
        data: result
      });
    } catch (error) {
      // Tangani error
      res.status(400).json({
        message: "Failed to create Penyakit entry",
        errors: error.message
      });
    }
  }

  // Fungsi untuk mendapatkan semua data penyakit
  static async getAllPenyakit(req, res) {
    try {
      const result = await Penyakit.getAll();
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({
        message: "Failed to retrieve Penyakit entries",
        errors: error.message
      });
    }
  }
}

export default PenyakitController;

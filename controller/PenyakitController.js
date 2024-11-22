import Penyakit from '../models/DataPenyakit.js';
import upload from '../middleware/Upload.js';
import { v2 as cloudinary } from 'cloudinary';

class PenyakitController {
  static uploadMiddleware = upload.array('images', 3); 

  static async createPenyakit(req, res) {
    try {
      const { kolam_id, tanggal_tebar, jenis_penyakit, catatan } = req.body;
      
     
      const uploadedImages = await PenyakitController.uploadImages(req.files);

      const dataPenyakit = {
        kolam_id,
        tanggal_tebar,
        jenis_penyakit,
        catatan,
        images: uploadedImages, 
      };

      const result = await Penyakit.save(dataPenyakit);

      res.status(200).json({
        message: "Penyakit entry created successfully",
        data: result
      });
    } catch (error) {
      res.status(400).json({
        message: "Failed to create Penyakit entry",
        errors: error.message
      });
    }
  }

  static async uploadImages(files) {
    try {
      const uploadPromises = files.map(file =>
        cloudinary.uploader.upload_stream(
          { folder: 'penyakit' }, 
          (error, result) => {
            if (error) throw error;
            return result?.secure_url;  
          }
        ).end(file.buffer) 
      );

      const uploadedImages = await Promise.all(uploadPromises);
      return uploadedImages; 
    } catch (error) {
      throw new Error(`Gagal mengupload gambar: ${error.message}`);
    }
  }


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

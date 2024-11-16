import Penyakit from '../models/DataPenyakit.js';
import upload from '../middleware/Upload.js';  

class PenyakitController {
  static uploadMiddleware = upload.array('images', 3); 
  static async createPenyakit(req, res) {
    try {
      const { kolam_id, tanggal_tebar, jenis_penyakit, catatan } = req.body;

      
      const imagePaths = req.files.map(file => file.path);

     
      const dataPenyakit = {
        kolam_id,
        tanggal_tebar,
        jenis_penyakit,
        catatan,
        images: imagePaths
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

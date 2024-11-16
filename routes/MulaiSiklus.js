import express from 'express';
import SiklusController from '../controller/MulaiSiklusController.js';

const router = express.Router();

router.post('/siklus', async (req, res) => {
    try {
      // Proses pemanggilan controller yang menangani logika POST
      await SiklusController.addSiklus(req, res); 
    } catch (error) {
      // Tangani error jika ada masalah di controller
      console.error('Error saat memproses request:', error);
  
      // Kirim respons error dengan detail kesalahan
      res.status(500).json({
        message: 'Terjadi kesalahan saat memproses permintaan.',
        error: error.message, // Bisa menampilkan pesan error untuk debugging
      });
    }
  });
router.get('/siklus', SiklusController.getAllSiklus);

export default router;

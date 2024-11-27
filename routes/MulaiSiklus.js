import express from 'express';
import SiklusController from '../controller/MulaiSiklusController.js';

const router = express.Router();

router.post('/siklus', async (req, res) => {
    try {
      await SiklusController.addSiklus(req, res); 
    } catch (error) {
      console.error('Error saat memproses request:', error);
      res.status(500).json({
        message: 'Terjadi kesalahan saat memproses permintaan.',
        error: error.message, 
      });
    }
  });
router.get('/siklus', SiklusController.getAllSiklus);

export default router;

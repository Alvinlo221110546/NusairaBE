import express from 'express';
import PenyakitLeleController from '../controller/PenyakitLeleController.js'; 

const router = express.Router();

router.post('/penyakit-lele', PenyakitLeleController.addPenyakitLele);
router.get('/penyakit-lele', PenyakitLeleController.getAllPenyakitLele);
router.get('/penyakit-lele/:id', PenyakitLeleController.getPenyakitLeleById);
router.put('/penyakit-lele/:id', PenyakitLeleController.updatePenyakitLele);
router.delete('/penyakit-lele/:id', PenyakitLeleController.deletePenyakitLele);

export default router;

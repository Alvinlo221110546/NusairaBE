import express from 'express';

import PenyakitLeleController from '../controller/PenyakitLeleController.js';

const router = express.Router();


router.get('/penyakit-lele', PenyakitLeleController.getAllPenyakitLele);
router.get('/penyakit-lele/:id', PenyakitLeleController.getPenyakitLeleById);
router.post('/penyakit-lele', PenyakitLeleController.createPenyakitLele);
router.put('/penyakit-lele/:id', PenyakitLeleController.updatePenyakitLele);
router.delete('/penyakit-lele/:id', PenyakitLeleController.deletePenyakitLele);

export default router;
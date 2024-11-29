import express from 'express';
import PenyakitLeleController from '../controller/PenyakitLeleController.js';

const router = express.Router();

router.get('/penyakit-lele', PenyakitLeleController.getAll);
router.get('/penyakit-lele/:id', PenyakitLeleController.getById);
router.post('/penyakit-lele', PenyakitLeleController.save);
router.put('/penyakit-lele/:id', PenyakitLeleController.update);
router.delete('/penyakit-lele/:id', PenyakitLeleController.delete);

export default router;

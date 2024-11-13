import express from 'express';
import PenyakitController from '../controller/PenyakitController.js';

const router = express.Router();


router.post('/penyakit', PenyakitController.addPenyakit);


router.get('/penyakit', PenyakitController.getPenyakit);

export default router;

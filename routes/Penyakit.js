import express from 'express';
import PenyakitController from '../controller/PenyakitController.js';


const router = express.Router();

router.post('/penyakit', PenyakitController.createPenyakit);

router.get('/penyakit', PenyakitController.getAllPenyakit);

export default router;

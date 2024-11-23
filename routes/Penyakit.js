import express from 'express';
import PenyakitController from '../controller/PenyakitController.js';

// Membuat router baru
const router = express.Router();

// Rute untuk membuat entry penyakit, dengan pengunggahan gambar
router.post('/penyakit', PenyakitController.uploadMiddleware, PenyakitController.createPenyakit);

// Rute untuk mengambil semua entry penyakit
router.get('/penyakit', PenyakitController.getAllPenyakit);

export default router;

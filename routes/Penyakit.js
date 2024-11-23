import express from 'express';
import PenyakitController from '../controller/PenyakitController.js';

// Membuat router baru
const router = express.Router();

// Rute untuk membuat entry penyakit tanpa pengunggahan gambar langsung di backend
router.post('/penyakit', PenyakitController.createPenyakit);

// Rute untuk mengambil semua entry penyakit
router.get('/penyakit', PenyakitController.getAllPenyakit);

export default router;

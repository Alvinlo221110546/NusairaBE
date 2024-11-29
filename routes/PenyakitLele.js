import express from 'express';
import { createPenyakitLele, getAllPenyakitLele, getPenyakitLeleById, updatePenyakitLele, deletePenyakitLele } from '../controller/PenyakitLeleController.js';

const router = express.Router();

// Route untuk menangani penyakit lele
router.post('/penyakit-lele', createPenyakitLele); // Untuk menambahkan data penyakit lele
router.get('/penyakit-lele', getAllPenyakitLele); // Untuk mengambil semua data penyakit lele
router.get('/penyakit-lele/:id', getPenyakitLeleById); // Untuk mengambil data penyakit lele berdasarkan ID
router.put('/penyakit-lele/:id', updatePenyakitLele); // Untuk memperbarui data penyakit lele
router.delete('/penyakit-lele/:id', deletePenyakitLele); // Untuk menghapus data penyakit lele berdasarkan ID

export default router;

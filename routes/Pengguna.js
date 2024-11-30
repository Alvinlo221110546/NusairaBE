import express from 'express';
import PenggunaController from '../controller/PenggunaController.js'; // Pastikan path sesuai
import { verifyToken } from '../middleware/authMiddleware.js'; // Pastikan path sesuai

const router = express.Router();

// Rute untuk operasi pada Pengguna

// Menambahkan pengguna baru
router.post('/pengguna', PenggunaController.addPengguna); 

// Mendapatkan semua pengguna
router.get('/pengguna', PenggunaController.getAllPengguna); 

// Mendapatkan pengguna berdasarkan ID
router.get('/pengguna/:id', PenggunaController.getPenggunaById); 

// Mengupdate pengguna berdasarkan ID (memerlukan autentikasi)
router.put('/pengguna/:id', verifyToken, PenggunaController.updatePengguna); 

// Menghapus pengguna berdasarkan ID (memerlukan autentikasi)
router.delete('/pengguna/:id', verifyToken, PenggunaController.deletePengguna); 

// Rute untuk login pengguna
router.post('/pengguna/login', PenggunaController.login); 

export default router;
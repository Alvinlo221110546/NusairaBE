import express from 'express';
import PenggunaController from '../controller/PenggunaController.js'; // Pastikan path sesuai

const router = express.Router();

// Rute untuk operasi pada Pengguna
router.post('/pengguna', PenggunaController.addPengguna); 
router.get('/pengguna', PenggunaController.getAllPengguna); 
router.get('/pengguna/:id', PenggunaController.getPenggunaById); 
router.put('/pengguna/:id', PenggunaController.updatePengguna); 
router.delete('/pengguna/:id', PenggunaController.deletePengguna); 

export default router;

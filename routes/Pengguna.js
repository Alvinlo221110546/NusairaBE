import express from 'express';
import PenggunaController from '../controllers/PenggunaController.js';
import { verifyToken } from '../middleware/authMiddleware.js';

const router = express.Router();

// Rute untuk operasi pada Pengguna
router.post('/pengguna', PenggunaController.addPengguna);
router.get('/pengguna', PenggunaController.getAllPengguna);
router.get('/pengguna/:id', PenggunaController.getPenggunaById);
router.put('/pengguna/:id', verifyToken, PenggunaController.updatePengguna);
router.delete('/pengguna/:id', verifyToken, PenggunaController.deletePengguna);
router.post('/pengguna/login', PenggunaController.login);

export default router;
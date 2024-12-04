import express from 'express';
import PenggunaController from '../controller/PenggunaController.js';

const router = express.Router();

// Rute untuk operasi pada Pengguna
router.post('/', PenggunaController.addPengguna); 
router.get('/', PenggunaController.getAllPengguna); 
router.get('/:id', PenggunaController.getPenggunaById); 
router.put('/:id', PenggunaController.updatePengguna); 
router.delete('/:id', PenggunaController.deletePengguna); 
router.post('/login', PenggunaController.login); // Endpoint login

export default router;
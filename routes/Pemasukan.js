import express from 'express';
import PemasukanController from '../controller/PemasukanControler.js'; // Pastikan path sesuai

const router = express.Router();

// Route untuk menambahkan pemasukan baru
router.post('/pemasukan', PemasukanController.addPemasukan);

// Route untuk mendapatkan semua pemasukan
router.get('/pemasukan', PemasukanController.getAllPemasukan);

// Route untuk mendapatkan pemasukan berdasarkan ID
router.get('/pemasukan/:id', PemasukanController.getPemasukanById);

// Route untuk mengupdate pemasukan berdasarkan ID
router.put('/pemasukan/:id', PemasukanController.updatePemasukan);

// Route untuk menghapus pemasukan berdasarkan ID
router.delete('/pemasukan/:id', PemasukanController.deletePemasukan);

export default router;

import express from 'express';
import PengeluaranController from '../controller/PengeluaranController.js'; // Pastikan path sesuai

const router = express.Router();

// Route untuk menambahkan pengeluaran baru
router.post('/pengeluaran', PengeluaranController.addPengeluaran);

// Route untuk mendapatkan semua pengeluaran
router.get('/pengeluaran', PengeluaranController.getAllPengeluaran);

// Route untuk mendapatkan pengeluaran berdasarkan ID
router.get('/pengeluaran/:id', PengeluaranController.getPengeluaranById);

// Route untuk mengupdate pengeluaran berdasarkan ID
router.put('/pengeluaran/:id', PengeluaranController.updatePengeluaran);

// Route untuk menghapus pengeluaran berdasarkan ID
router.delete('/pengeluaran/:id', PengeluaranController.deletePengeluaran);

export default router;

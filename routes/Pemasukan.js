import express from 'express';
import PemasukanController from '../controller/PemasukanController.js'; // Pastikan path sesuai

const router = express.Router();

// Middleware tambahan (opsional)
const validateRequest = (req, res, next) => {
    // Middleware validasi contoh (untuk autentikasi atau lainnya)
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
    next();
};

// Grouping dan route definition
router.use(validateRequest); // Middleware global untuk semua route di file ini

// Menambahkan pemasukan baru
router.post('/pemasukan', PemasukanController.addPemasukan);

// Mendapatkan semua pemasukan
router.get('/pemasukan', PemasukanController.getAllPemasukan);

// Mendapatkan pemasukan berdasarkan ID
router.get('/pemasukan/:id', PemasukanController.getPemasukanById);

// Mengupdate pemasukan berdasarkan ID
router.put('/pemasukan/:id', PemasukanController.updatePemasukan);

// Menghapus pemasukan berdasarkan ID
router.delete('/pemasukan/:id', PemasukanController.deletePemasukan);

export default router;

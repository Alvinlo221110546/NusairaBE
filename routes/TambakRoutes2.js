import express from 'express';
import Tambak2Controller from '../controller/Tambak2Controller.js';  

const router = express.Router();

// Route untuk menambah Tambak2
router.post('/', async (req, res) => {
    try {
        console.log('Request body:', req.body); 
        // Menggunakan controller untuk menambah tambak2
        await Tambak2Controller.addTambak2(req, res);
    } catch (err) {
        // Menangani error dan mengirimkan response error
        console.error('Error saat menambah tambak2:', err.message);
        res.status(500).json({ error: 'Terjadi kesalahan saat menambah tambak2', details: err.message });
    }
});

// Route untuk mengambil semua Tambak2
router.get('/', async (req, res) => {
    try {
        const tambak2s = await Tambak2Controller.getAllTambak2();
        if (tambak2s.length === 0) {
            return res.status(404).json({ message: 'Tidak ada data tambak2 ditemukan' });
        }
        res.status(200).json(tambak2s);
    } catch (err) {
        console.error('Error saat mengambil data tambak2:', err.message);
        res.status(500).json({ error: 'Terjadi kesalahan saat mengambil data tambak2', details: err.message });
    }
});

// Route untuk mengambil detail Tambak2 berdasarkan ID
router.get('/:id', async (req, res) => {
    try {
        const tambak2 = await Tambak2Controller.getTambak2ById(req.params.id);
        if (!tambak2) {
            return res.status(404).json({ message: 'Tambak2 tidak ditemukan' });
        }
        res.status(200).json(tambak2);
    } catch (err) {
        console.error('Error saat mengambil detail tambak2:', err.message);
        res.status(500).json({ error: 'Terjadi kesalahan saat mengambil detail tambak2', details: err.message });
    }
});

export default router;

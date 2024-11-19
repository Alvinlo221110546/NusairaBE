import express from 'express';
import TambakController from '../controller/TambakController.js';  

const router = express.Router();

// Route untuk menambah Tambak
router.post('/', async (req, res) => {
    try {
        console.log('Request body:', req.body); 
        // Menggunakan controller untuk menambah tambak
        await TambakController.addTambak(req, res);
    } catch (err) {
        // Menangani error dan mengirimkan response error
        console.error('Error saat menambah tambak:', err.message);
        res.status(500).json({ error: 'Terjadi kesalahan saat menambah tambak', details: err.message });
    }
});

// Route untuk mengambil semua Tambak
router.get('/', async (req, res) => {
    try {
        const tambaks = await TambakController.getAllTambak();
        if (tambaks.length === 0) {
            return res.status(404).json({ message: 'Tidak ada data tambak ditemukan' });
        }
        res.status(200).json(tambaks);
    } catch (err) {
        console.error('Error saat mengambil data tambak:', err.message);
        res.status(500).json({ error: 'Terjadi kesalahan saat mengambil data tambak', details: err.message });
    }
});

// Route untuk mengambil detail Tambak berdasarkan ID
router.get('/:id', async (req, res) => {
    try {
        const tambak = await TambakController.getTambakById(req.params.id);
        if (!tambak) {
            return res.status(404).json({ message: 'Tambak tidak ditemukan' });
        }
        res.status(200).json(tambak);
    } catch (err) {
        console.error('Error saat mengambil detail tambak:', err.message);
        res.status(500).json({ error: 'Terjadi kesalahan saat mengambil detail tambak', details: err.message });
    }
});

export default router;

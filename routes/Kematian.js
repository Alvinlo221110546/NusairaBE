import express from 'express';
import KematianController from '../controller/KematianController.js';

const router = express.Router();


router.post('/data-kematian', async (req, res) => {
    try {
        await KematianController.tambahDataKematian(req, res);
    } catch (error) {
        console.error('Terjadi kesalahan saat menambahkan data kematian:', error);
        res.status(500).json({ message: 'Terjadi kesalahan pada server.' });
    }
});


router.get('/data-kematian', async (req, res) => {
    try {
        await KematianController.getAllDataKematian(req, res);
    } catch (error) {
        console.error('Terjadi kesalahan saat mendapatkan data kematian:', error);
        res.status(500).json({ message: 'Terjadi kesalahan pada server.' });
    }
});

export default router;

import express from 'express';
import { createTambak } from '../controller/TambakController.js';

const router = express.Router();


router.post('/', createTambak);  


router.get('/', (req, res) => {
    res.send('Menampilkan semua tambak');
});


router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Menampilkan tambak dengan ID: ${id}`);
});

export default router;

import express from 'express';
import BeritaController from '../controller/BeritaController.js'; 

const router = express.Router();

router.post('/berita', BeritaController.addBerita);
router.get('/berita', BeritaController.getAllBerita);
router.get('/berita/:id', BeritaController.getBeritaById);
router.put('/berita/:id', BeritaController.updateBerita);
router.delete('/berita/:id', BeritaController.deleteBerita);

export default router;

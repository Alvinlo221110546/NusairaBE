import express from 'express';
import BeritaController from '../controller/BeritaController.js';
import adminAuthMiddleware from '../middleware/adminAuthMiddleware.js'; 

const router = express.Router();

router.post('/berita', adminAuthMiddleware, BeritaController.addBerita);
router.put('/berita/:id', adminAuthMiddleware, BeritaController.updateBerita);
router.delete('/berita/:id', adminAuthMiddleware, BeritaController.deleteBerita);
router.get('/berita', BeritaController.getAllBerita);
router.get('/berita/:id', BeritaController.getBeritaById);

export default router;

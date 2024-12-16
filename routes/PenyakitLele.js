import express from 'express';
import { createPenyakitLele, getAllPenyakitLele, getPenyakitLeleById, updatePenyakitLele, deletePenyakitLele } from '../controller/PenyakitLeleController.js';
import adminAuthMiddleware from '../middleware/adminAuthMiddleware.js'; 

const router = express.Router();

router.post('/penyakit-lele',adminAuthMiddleware, createPenyakitLele); 
router.get('/penyakit-lele', getAllPenyakitLele); 
router.get('/penyakit-lele/:id', getPenyakitLeleById); 
router.put('/penyakit-lele/:id',adminAuthMiddleware, updatePenyakitLele); 
router.delete('/penyakit-lele/:id',adminAuthMiddleware, deletePenyakitLele); 

export default router;

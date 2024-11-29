import express from 'express';
import { createPenyakitLele, getAllPenyakitLele, getPenyakitLeleById, updatePenyakitLele, deletePenyakitLele } from '../controller/PenyakitLeleController.js';

const router = express.Router();

router.post('/penyakit-lele', createPenyakitLele); 
router.get('/penyakit-lele', getAllPenyakitLele); 
router.get('/penyakit-lele/:id', getPenyakitLeleById); 
router.put('/penyakit-lele/:id', updatePenyakitLele); 
router.delete('/penyakit-lele/:id', deletePenyakitLele); 

export default router;

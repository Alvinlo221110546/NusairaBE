import express from 'express';
import BukuController from '../controller/BukuController.js';

const router = express.Router();

router.post('/buku', BukuController.create);
router.get('/buku', BukuController.getAll);
router.get('/buku/:id', BukuController.getById);
router.put('/buku/:id', BukuController.update);
router.delete('/buku/:id', BukuController.delete);
router.get('/buku/search', BukuController.searchByTitle);

export default router;

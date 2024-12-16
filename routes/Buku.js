import express from 'express';
import BukuController from '../controller/BukuController.js';
import adminAuthMiddleware from '../middleware/adminAuthMiddleware.js'; 

const router = express.Router();

router.post('/buku',adminAuthMiddleware, BukuController.create);
router.get('/buku', BukuController.getAll);
router.get('/buku/:id', BukuController.getById);
router.put('/buku/:id',adminAuthMiddleware, BukuController.update);
router.delete('/buku/:id',adminAuthMiddleware, BukuController.delete);
router.get('/buku/search', BukuController.searchByTitle);

export default router;

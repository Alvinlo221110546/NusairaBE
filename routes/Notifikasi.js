import express from 'express';
import NotifikasiController from '../controller/NotifikasiController.js'; 
import adminAuthMiddleware from '../middleware/adminAuthMiddleware.js'; 

const router = express.Router();

router.post('/notifikasi',adminAuthMiddleware, NotifikasiController.addNotifikasi);
router.get('/notifikasi', NotifikasiController.getAllNotifikasi);
router.get('/notifikasi/:id', NotifikasiController.getNotifikasiById);
router.put('/notifikasi/:id',adminAuthMiddleware, NotifikasiController.updateNotifikasi);
router.delete('/notifikasi/:id',adminAuthMiddleware, NotifikasiController.deleteNotifikasi);

export default router;

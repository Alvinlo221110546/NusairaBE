import express from 'express';
import NotifikasiController from '../controller/NotifikasiController.js'; 

const router = express.Router();

router.post('/notifikasi', NotifikasiController.addNotifikasi);
router.get('/notifikasi', NotifikasiController.getAllNotifikasi);
router.get('/notifikasi/:id', NotifikasiController.getNotifikasiById);
router.put('/notifikasi/:id', NotifikasiController.updateNotifikasi);
router.delete('/notifikasi/:id', NotifikasiController.deleteNotifikasi);

export default router;

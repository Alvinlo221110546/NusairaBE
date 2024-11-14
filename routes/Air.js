import express from 'express';
import KualitasAirController from '../controller/AirController.js'; 

const router = express.Router();

router.post('/kualitas-air', KualitasAirController.addKualitasAir);
router.get('/kualitas-air', KualitasAirController.getAllKualitasAir);
router.get('/kualitas-air/:id', KualitasAirController.getKualitasAirById);
router.put('/kualitas-air/:id', KualitasAirController.updateKualitasAir);
router.delete('/kualitas-air/:id', KualitasAirController.deleteKualitasAir);

export default router;

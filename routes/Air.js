import express from 'express';
import KualitasAirController from '../controller/AirController.js'; 

const router = express.Router();

router.post('/air', KualitasAirController.addKualitasAir);
router.get('/air', KualitasAirController.getAllKualitasAir);
router.get('/air/:id', KualitasAirController.getKualitasAirById);
router.put('/air/:id', KualitasAirController.updateKualitasAir);
router.delete('/air/:id', KualitasAirController.deleteKualitasAir);

export default router;

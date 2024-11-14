import express from 'express';
import KematianController from '../controller/KematianController.js';

const router = express.Router();

router.post('/kematian', KematianController.tambahDataKematian);


router.get('/kematian', KematianController.getAllDataKematian);

export default router;

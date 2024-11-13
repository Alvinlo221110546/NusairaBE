import express from 'express';
import DataKematianController from '../controller/KematianController.js';

const router = express.Router();


router.post('/data-kematian', DataKematianController.addDataKematian);


router.get('/data-kematian', DataKematianController.getDataKematian);

export default router;

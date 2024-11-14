import express from 'express';
import DataPakanController from '../controller/PakanController.js';

const router = express.Router();


router.post('/data-pakan', DataPakanController.createDataPakan);


router.get('/data-pakan', DataPakanController.getAllDataPakan);


router.get('/data-pakan/:kolamId', DataPakanController.getDataPakanByKolamId);

export default router;


import express from 'express';
import { createDataPakan, getAllDataPakan } from '../controller/PakanController.js';

const router = express.Router();


router.post('/data-pakan', createDataPakan);


router.get('/data-pakan', getAllDataPakan);

export default router;

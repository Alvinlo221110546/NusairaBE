import express from 'express';
import SiklusController from '../controller/MulaiSiklusController.js';

const router = express.Router();


router.post('/siklus', SiklusController.addSiklus);


router.get('/siklus', SiklusController.getSiklus);

export default router;

import express from 'express';
import PredictionController from '../controller/PredictionController.js';

const router = express.Router();


router.get('/predictions', PredictionController.getPredictionsByProvince);

export default router;

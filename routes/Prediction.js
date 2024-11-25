import express from 'express';
import PredictionController from '../controller/PredictionController.js';

const router = express.Router();


router.get('/predictions/provinces', PredictionController.getPredictionsGroupedByProvince);
router.get('/predictions/city/:city', PredictionController.getPredictionsByCity);

export default router;

import express from 'express';
import { getPredictions  } from '../controller/PredictionController.js';

const router = express.Router();

router.get('/predictions', getPredictions);

export default router;


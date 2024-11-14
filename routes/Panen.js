import express from 'express';
import DataPanenController from '../controller/PanenController.js';

const router = express.Router();

router.post('/data-panen', DataPanenController.createDataPanen);
router.get('/data-panen', DataPanenController.getAllDataPanen);

export default router;

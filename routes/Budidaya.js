import express from 'express';
import BudidayaIkanController from '../controller/BudidayaController.js';

const router = express.Router();


router.get('/budidaya-lele', BudidayaIkanController.ambilSemuaData);
router.get('/total-produksi', BudidayaIkanController.ambilTotalProduksi);

export default router;
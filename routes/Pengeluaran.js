import express from 'express';
import PengeluaranController from '../controller/PengeluaranController.js'; 

const router = express.Router();

router.post('/pengeluaran', PengeluaranController.addPengeluaran);
router.get('/pengeluaran', PengeluaranController.getAllPengeluaran);
router.get('/pengeluaran/:id', PengeluaranController.getPengeluaranById);
router.put('/pengeluaran/:id', PengeluaranController.updatePengeluaran);
router.delete('/pengeluaran/:id', PengeluaranController.deletePengeluaran);

export default router;

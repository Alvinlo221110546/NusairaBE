import express from 'express';
import PemasukanController from '../controller/PemasukanControler.js'; 

const router = express.Router();

router.post('/pemasukan', PemasukanController.addPemasukan);
router.get('/pemasukan', PemasukanController.getAllPemasukan);
router.get('/pemasukan/:id', PemasukanController.getPemasukanById);
router.put('/pemasukan/:id', PemasukanController.updatePemasukan);
router.delete('/pemasukan/:id', PemasukanController.deletePemasukan);

export default router;

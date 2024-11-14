import express from 'express';
import AncoController from '../controller/AncoController.js';

const router = express.Router();

router.post('/anco', AncoController.saveAnco);
router.get('/anco', AncoController.getAllAnco);
router.get('/anco/:id', AncoController.getAncoById);

export default router;

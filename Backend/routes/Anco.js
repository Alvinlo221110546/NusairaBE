import express from 'express';
import AncoController from '../controller/AncoController.js'; 

const router = express.Router();


router.post('/anco', AncoController.addAnco);

router.get('/ancos', AncoController.getAllAncos);


router.get('/anco/:id', AncoController.getAncoById);

export default router; 
import { Router } from 'express'; 
import { addDataPanen, getDataPanen } from '../controller/PanenController.js';  

const router = Router();


router.post('/panen', addDataPanen);


router.get('/panen', getDataPanen);

export default router;  
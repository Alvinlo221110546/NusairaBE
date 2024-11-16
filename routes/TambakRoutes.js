import express from 'express';
import TambakController from '../controller/TambakController.js';  

const router = express.Router();

router.post('/', (req, res) => {
    console.log('Request body:', req.body); 
    TambakController.addTambak(req, res);
});

router.get('/', TambakController.getAllTambak);
router.get('/:id', TambakController.getTambakById);



export default router;

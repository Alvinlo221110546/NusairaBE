import express from 'express';
import TambakController from '../controller/TambakController.js';
import authMiddleware from '../middleware/authMiddleware.js'; 

const router = express.Router();

router.post('/', authMiddleware, (req, res) => {
    console.log('Request body:', req.body); 
    TambakController.addTambak(req, res);
});

router.get('/', authMiddleware, TambakController.getAllTambak);
router.get('/:id', authMiddleware, TambakController.getTambakById);
router.put('/:id', authMiddleware, (req, res) => {
    TambakController.updateTambak(req, res);
});
router.delete('/:id', authMiddleware, (req, res) => {
    TambakController.deleteTambak(req, res);
});

export default router;
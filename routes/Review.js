import express from 'express';
import ReviewController from '../controller/ReviewController.js';

const router = express.Router();

// Route untuk membuat review baru
router.post('/', ReviewController.createReview);

// Route untuk mendapatkan semua review berdasarkan supplier_id
router.get('/supplier/:supplierId', ReviewController.getReviewsBySupplierId);

// Route untuk menghapus review berdasarkan ID
router.delete('/:id', ReviewController.deleteReview);

export default router;

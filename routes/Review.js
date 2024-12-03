import express from 'express';
import ReviewController from '../controller/ReviewController.js';

const router = express.Router();

router.get('/reviews', ReviewController.getAllReviews);
router.post('/reviews', ReviewController.createReview);
router.get('/reviews/supplier/:supplierId', ReviewController.getReviewsBySupplierId);
router.delete('/reviews/:id', ReviewController.deleteReview);

export default router;

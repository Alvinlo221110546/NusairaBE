import express from 'express';
import FavoriteController from '../controller/FavoriteController.js';
import authMiddleware from '../middleware/authMiddleware.js'; 

const router = express.Router();

router.post('/favorites', authMiddleware, FavoriteController.addToFavorites);
router.get('/favorites/all', authMiddleware, FavoriteController.getAllFavorites);
router.get('/favorites', authMiddleware, FavoriteController.getFavorites);
router.delete('/favorites/:buku_id', authMiddleware, FavoriteController.removeFavorite);

export default router;
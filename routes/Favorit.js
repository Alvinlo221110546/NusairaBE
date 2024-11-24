import express from 'express';
import FavoriteController from '../controller/FavoritController.js'; // Pastikan path sesuai

const router = express.Router();

router.post('/favorites', FavoriteController.addFavorite);        // Menambahkan buku ke favorit
router.get('/favorites', FavoriteController.getAllFavorites);     // Mendapatkan semua buku favorit
router.delete('/favorites/:id', FavoriteController.deleteFavorite); // Menghapus buku dari favorit

export default router;

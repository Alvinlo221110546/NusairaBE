import Favorite from '../models/DataFavorite.js';

class FavoriteController {
  static async addToFavorites(req, res) {
    try {
      const { buku_id } = req.body;
      const user_id = req.user.id; 

      const favorite = await Favorite.create({ buku_id, user_id });
      
      res.status(201).json({
        message: 'Buku berhasil ditambahkan ke favorit',
        favorite
      });
    } catch (error) {
      if (error.message.includes('sudah ada di daftar favorit')) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ 
          message: 'Gagal menambahkan buku ke favorit', 
          error: error.message 
        });
      }
    }
  }

  static async getFavorites(req, res) {
    try {
      const user_id = req.user.id;

      const favorites = await Favorite.getFavoritesByUser(user_id);
      
      res.status(200).json({
        message: 'Daftar buku favorit berhasil diambil',
        favorites
      });
    } catch (error) {
      res.status(500).json({ 
        message: 'Gagal mengambil daftar favorit', 
        error: error.message 
      });
    }
  }

  static async removeFavorite(req, res) {
    try {
      const { buku_id } = req.params;
      const user_id = req.user.id;

      await Favorite.removeFavorite(buku_id, user_id);
      
      res.status(200).json({
        message: 'Buku berhasil dihapus dari favorit'
      });
    } catch (error) {
      res.status(500).json({ 
        message: 'Gagal menghapus buku dari favorit', 
        error: error.message 
      });
    }
  }
}

export default FavoriteController;
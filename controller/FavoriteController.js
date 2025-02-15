import Favorite from '../models/DataFavorite.js';

class FavoriteController {
  static async addToFavorites(req, res) {
    try {
      const { buku_id } = req.body;
      const user_id = req.user?.id; 
      
      console.log("Parameter diterima:", { user_id, buku_id });
    
      if (!buku_id || user_id === null) {
        console.error("Buku ID atau User ID tidak valid:", { buku_id, user_id });
        return res.status(400).json({ message: "Buku ID atau User ID tidak valid" });
      }

      const favorite = await Favorite.create({ buku_id, user_id });
  
      res.status(200).json({
        message: 'Buku berhasil ditambahkan ke favorit',
        favorite
      });
    } catch (error) {
      if (error.message.includes('sudah ada di daftar favorit')) {
        res.status(400).json({ message: error.message });
      } else {
        console.error("Error saat menambahkan favorit:", error);
        res.status(500).json({
          message: 'Gagal menambahkan buku ke favorit',
          error: error.message
        });
      }
    }
  }
  
  static async getAllFavorites(req, res) {
    try {
      const favorites = await Favorite.getAll(); 
      res.status(200).json({
        message: 'Semua daftar favorit berhasil diambil',
        favorites
      });
    } catch (error) {
      console.error("Error saat mengambil semua daftar favorit:", error);
      res.status(500).json({ 
        message: 'Gagal mengambil semua daftar favorit', 
        error: error.message 
      });
    }
  }
  

  static async getFavorites(req, res) {
    try {
      const user_id = req.user.id;

      if (!user_id) {
        return res.status(400).json({ message: "User ID tidak ditemukan" });
      }

      const favorites = await Favorite.getFavoritesByUser(user_id);
      
      res.status(200).json({
        message: 'Daftar buku favorit berhasil diambil',
        favorites
      });
    } catch (error) {
      console.error("Error saat mengambil daftar favorit:", error);
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

      if (!buku_id || !user_id) {
        return res.status(400).json({ message: "Buku ID atau User ID tidak valid" });
      }

      await Favorite.removeFavorite(buku_id, user_id);
      
      res.status(200).json({
        message: 'Buku berhasil dihapus dari favorit'
      });
    } catch (error) {
      console.error("Error saat menghapus favorit:", error);
      res.status(500).json({ 
        message: 'Gagal menghapus buku dari favorit', 
        error: error.message 
      });
    }
  }
}

export default FavoriteController;

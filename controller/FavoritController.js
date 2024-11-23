import Favorite from '../models/DataFavorit.js'; 

class FavoriteController {
    // Menambahkan buku ke favorit
    async addFavorite(req, res) {
        const { bookId } = req.body;

        if (!bookId) {
            return res.status(400).json({ message: 'ID buku harus diisi!' });
        }

        try {
            await Favorite.save(bookId);
            res.status(201).json({ message: 'Buku berhasil ditambahkan ke favorit!' });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Terjadi kesalahan dalam menambahkan ke favorit', error: err.message });
        }
    }

    // Mendapatkan semua buku favorit
    async getAllFavorites(req, res) {
        try {
            const favorites = await Favorite.getAll();
            if (favorites.length === 0) {
                return res.status(404).json({ message: 'Tidak ada buku favorit yang ditemukan' });
            }
            res.status(200).json(favorites);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Terjadi kesalahan dalam mengambil data favorit', error: err.message });
        }
    }

    // Menghapus buku dari favorit
    async deleteFavorite(req, res) {
        const favoriteId = req.params.id;

        try {
            await Favorite.delete(favoriteId);
            res.status(200).json({ message: 'Buku berhasil dihapus dari favorit!' });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Terjadi kesalahan dalam menghapus dari favorit', error: err.message });
        }
    }
}

export default new FavoriteController();

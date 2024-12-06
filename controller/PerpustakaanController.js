const Buku = require('../models/DataPerpustakaan.js');

module.exports = {
    // Mendapatkan semua buku
    async getAllBooks(req, res) {
        try {
            const books = await Buku.findAll();
            res.status(200).json({ success: true, data: books });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    },

    // Mendapatkan detail buku
    async getBookById(req, res) {
        try {
            const { id } = req.params;
            const book = await Buku.findByPk(id);
            if (!book) return res.status(404).json({ success: false, message: 'Buku tidak ditemukan' });
            res.status(200).json({ success: true, data: book });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    },

    // Menambahkan buku ke favorit
    async addToFavorite(req, res) {
        try {
            const { userId, bukuId } = req.body;
            await UserFavorites.create({ user_id: userId, buku_id: bukuId });
            res.status(201).json({ success: true, message: 'Buku ditambahkan ke favorit' });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    },

    // Menambahkan ke riwayat baca
    async addToReadHistory(req, res) {
        try {
            const { userId, bukuId } = req.body;
            await UserReadHistory.create({ user_id: userId, buku_id: bukuId });
            res.status(201).json({ success: true, message: 'Riwayat baca ditambahkan' });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    },
};

const express = require('express');
const router = express.Router();
const PerpustakaanController = require('../controller/PerpustakaanController');

// Mendapatkan semua buku
router.get('/buku', PerpustakaanController.getAllBooks);

// Mendapatkan detail buku
router.get('/buku/:id', PerpustakaanController.getBookById);

// Menambahkan buku ke favorit
router.post('/buku/favorite', PerpustakaanController.addToFavorite);

// Membaca buku (tambahkan ke riwayat baca)
router.post('/buku/baca', PerpustakaanController.addToReadHistory);

module.exports = router;

import express from 'express';
import BookController from '../controller/BookController.js'; // Pastikan path sesuai

const router = express.Router();

router.post('/books', BookController.addBook);         // Menambahkan buku baru
router.get('/books', BookController.getAllBooks);      // Mendapatkan semua buku
router.get('/books/:id', BookController.getBookById);  // Mendapatkan buku berdasarkan ID
router.put('/books/:id', BookController.updateBook);   // Mengupdate buku berdasarkan ID
router.delete('/books/:id', BookController.deleteBook); // Menghapus buku berdasarkan ID

export default router;

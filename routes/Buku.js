import express from 'express';
import BookController from '../controllers/BukuController.js';

const router = express.Router();

router.post('/book', BookController.addBook);
router.get('/book', BookController.getAllBooks);
router.get('/book/:id', BookController.getBookById);
router.put('/book/:id', BookController.updateBook);
router.delete('/book/:id', BookController.deleteBook);

export default router;

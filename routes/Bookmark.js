import express from 'express';
import BookmarkController from '../controller/BookmarkController.js'; // Pastikan path sesuai

const router = express.Router();

router.post('/bookmarks', BookmarkController.addBookmark);        // Menambahkan buku ke bookmark
router.get('/bookmarks', BookmarkController.getAllBookmarks);     // Mendapatkan semua buku bookmark
router.delete('/bookmarks/:id', BookmarkController.deleteBookmark); // Menghapus buku dari bookmark

export default router;

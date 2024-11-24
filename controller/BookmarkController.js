import Bookmark from '../models/DataBookmark.js'; // Pastikan path sesuai

class BookmarkController {
    // Menambahkan buku ke bookmark
    async addBookmark(req, res) {
        const { bookId } = req.body;

        if (!bookId) {
            return res.status(400).json({ message: 'ID buku harus diisi!' });
        }

        try {
            await Bookmark.save(bookId);
            res.status(201).json({ message: 'Buku berhasil ditambahkan ke bookmark!' });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Terjadi kesalahan dalam menambahkan ke bookmark', error: err.message });
        }
    }

    // Mendapatkan semua buku bookmark
    async getAllBookmarks(req, res) {
        try {
            const bookmarks = await Bookmark.getAll();
            if (bookmarks.length === 0) {
                return res.status(404).json({ message: 'Tidak ada buku bookmark yang ditemukan' });
            }
            res.status(200).json(bookmarks);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Terjadi kesalahan dalam mengambil data bookmark', error: err.message });
        }
    }

    // Menghapus buku dari bookmark
    async deleteBookmark(req, res) {
        const bookmarkId = req.params.id;

        try {
            await Bookmark.delete(bookmarkId);
            res.status(200).json({ message: 'Buku berhasil dihapus dari bookmark!' });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Terjadi kesalahan dalam menghapus dari bookmark', error: err.message });
        }
    }
}

export default new BookmarkController();

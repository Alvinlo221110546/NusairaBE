import Book from '../models/DataBuku.js'; 

class BookController {
    // Menambahkan buku baru
    async addBook(req, res) {
        const { title, author, content, coverImage } = req.body;

        if (!title || !author || !content || !coverImage) {
            return res.status(400).json({ message: 'Semua kolom harus diisi!' });
        }

        try {
            const book = { title, author, content, coverImage };
            await Book.save(book);
            res.status(201).json({ message: 'Buku berhasil ditambahkan!' });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Terjadi kesalahan dalam menambahkan buku', error: err.message });
        }
    }

    // Mendapatkan semua buku
    async getAllBooks(req, res) {
        try {
            const books = await Book.getAll();
            if (books.length === 0) {
                return res.status(404).json({ message: 'Tidak ada buku yang ditemukan' });
            }
            res.status(200).json(books);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Terjadi kesalahan dalam mengambil data buku', error: err.message });
        }
    }

    // Mendapatkan buku berdasarkan ID
    async getBookById(req, res) {
        const bookId = req.params.id;

        try {
            const book = await Book.getById(bookId);
            if (!book) {
                return res.status(404).json({ message: 'Buku tidak ditemukan' });
            }
            res.status(200).json(book);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Terjadi kesalahan dalam mengambil data buku', error: err.message });
        }
    }

    // Mengupdate buku berdasarkan ID
    async updateBook(req, res) {
        const bookId = req.params.id;
        const { title, author, content, coverImage } = req.body;

        if (!title || !author || !content || !coverImage) {
            return res.status(400).json({ message: 'Semua kolom harus diisi!' });
        }

        try {
            const updatedBook = { title, author, content, coverImage };
            await Book.update(bookId, updatedBook);
            res.status(200).json({ message: 'Buku berhasil diperbarui!' });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Terjadi kesalahan dalam mengupdate buku', error: err.message });
        }
    }

    // Menghapus buku berdasarkan ID
    async deleteBook(req, res) {
        const bookId = req.params.id;

        try {
            await Book.delete(bookId);
            res.status(200).json({ message: 'Buku berhasil dihapus!' });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Terjadi kesalahan dalam menghapus buku', error: err.message });
        }
    }
}

export default new BookController();

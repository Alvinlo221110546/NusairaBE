import db from '../database/Nusairadb.js'; 

class Book {
    constructor(data) {
        this.title = data.title;
        this.description = data.description;
        this.image = data.image;
    }

    // Menyimpan buku baru
    static async save(data) {
        try {
            const book = new Book(data);

            const query = 'INSERT INTO book (title, description, image) VALUES (?, ?, ?)';
            const [result] = await db.execute(query, [
                book.title,
                book.description,
                book.image
            ]);
            return result;
        } catch (err) {
            throw new Error('Error saving book: ' + err.message);
        }
    }

    // Mendapatkan semua buku
    static async getAll() {
        try {
            const query = 'SELECT * FROM book';
            const [result] = await db.execute(query);
            return result;
        } catch (err) {
            throw new Error('Error fetching books: ' + err.message);
        }
    }

    // Mendapatkan buku berdasarkan ID
    static async getById(id) {
        try {
            const query = 'SELECT * FROM book WHERE id = ?';
            const [result] = await db.execute(query, [id]);

            if (result.length === 0) {
                throw new Error('Book not found');
            }
            return result[0];
        } catch (err) {
            throw new Error('Error fetching book by ID: ' + err.message);
        }
    }

    // Mengupdate buku berdasarkan ID
    static async update(id, data) {
        try {
            const query = 'UPDATE book SET title = ?, description = ?, image = ? WHERE id = ?';
            const [result] = await db.execute(query, [
                data.title,
                data.description,
                data.image,
                id
            ]);

            if (result.affectedRows === 0) {
                throw new Error('Book not found to update');
            }
            return result;
        } catch (err) {
            throw new Error('Error updating book: ' + err.message);
        }
    }

    // Menghapus buku berdasarkan ID
    static async delete(id) {
        try {
            const query = 'DELETE FROM book WHERE id = ?';
            const [result] = await db.execute(query, [id]);

            if (result.affectedRows === 0) {
                throw new Error('Book not found to delete');
            }

            return result;
        } catch (err) {
            throw new Error('Error deleting book: ' + err.message);
        }
    }
}

export default Book;

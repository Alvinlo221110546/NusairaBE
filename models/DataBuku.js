import db from '../database/Nusairadb.js';

class Book {
    constructor(data) {
        this.title = data.title;
        this.author = data.author;
        this.content = data.content;
        this.coverImage = data.coverImage;
    }

    static async save(data) {
        try {
            const book = new Book(data);
            const query = 'INSERT INTO books (title, author, content, cover_image) VALUES (?, ?, ?, ?)';
            const [result] = await db.execute(query, [
                book.title,
                book.author,
                book.content,
                book.coverImage,
            ]);
            return result;
        } catch (err) {
            throw new Error('Error saving book: ' + err.message);
        }
    }

    static async getAll() {
        try {
            const [result] = await db.execute('SELECT * FROM books');
            return result;
        } catch (err) {
            throw new Error('Error fetching all books: ' + err.message);
        }
    }

    static async getById(id) {
        try {
            const query = 'SELECT * FROM books WHERE id = ?';
            const [result] = await db.execute(query, [id]);

            if (result.length === 0) {
                throw new Error('Book not found');
            }
            return result[0];
        } catch (err) {
            throw new Error('Error fetching book by ID: ' + err.message);
        }
    }

    static async update(id, data) {
        try {
            const query = 'UPDATE books SET title = ?, author = ?, content = ?, cover_image = ? WHERE id = ?';
            const [result] = await db.execute(query, [
                data.title,
                data.author,
                data.content,
                data.coverImage,
                id,
            ]);

            if (result.affectedRows === 0) {
                throw new Error('Book not found to update');
            }

            return result;
        } catch (err) {
            throw new Error('Error updating book: ' + err.message);
        }
    }

    static async delete(id) {
        try {
            const query = 'DELETE FROM books WHERE id = ?';
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

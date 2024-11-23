import db from '../database/Nusairadb.js';

class Bookmark {
    static async save(bookId) {
        try {
            const query = 'INSERT INTO bookmarks (book_id) VALUES (?)';
            const [result] = await db.execute(query, [bookId]);
            return result;
        } catch (err) {
            throw new Error('Error saving bookmark: ' + err.message);
        }
    }

    static async getAll() {
        try {
            const [result] = await db.execute(`
                SELECT bookmarks.id, books.title, books.author, books.cover_image 
                FROM bookmarks 
                JOIN books ON bookmarks.book_id = books.id
            `);
            return result;
        } catch (err) {
            throw new Error('Error fetching all bookmarks: ' + err.message);
        }
    }

    static async delete(id) {
        try {
            const query = 'DELETE FROM bookmarks WHERE id = ?';
            const [result] = await db.execute(query, [id]);

            if (result.affectedRows === 0) {
                throw new Error('Bookmark not found to delete');
            }

            return result;
        } catch (err) {
            throw new Error('Error deleting bookmark: ' + err.message);
        }
    }
}

export default Bookmark;

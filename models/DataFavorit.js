import db from '../database/Nusairadb.js';

class Favorite {
    static async save(bookId) {
        try {
            const query = 'INSERT INTO favorites (book_id) VALUES (?)';
            const [result] = await db.execute(query, [bookId]);
            return result;
        } catch (err) {
            throw new Error('Error saving favorite: ' + err.message);
        }
    }

    static async getAll() {
        try {
            const [result] = await db.execute(`
                SELECT favorites.id, books.title, books.author, books.cover_image 
                FROM favorites 
                JOIN books ON favorites.book_id = books.id
            `);
            return result;
        } catch (err) {
            throw new Error('Error fetching all favorites: ' + err.message);
        }
    }

    static async delete(id) {
        try {
            const query = 'DELETE FROM favorites WHERE id = ?';
            const [result] = await db.execute(query, [id]);

            if (result.affectedRows === 0) {
                throw new Error('Favorite not found to delete');
            }

            return result;
        } catch (err) {
            throw new Error('Error deleting favorite: ' + err.message);
        }
    }
}

export default Favorite;

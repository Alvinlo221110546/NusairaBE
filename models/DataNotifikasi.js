import db from '../database/Nusairadb.js';

class Notifikasi {
    constructor(data) {
        this.type = data.type;
        this.date = data.date;
        this.title = data.title;
        this.description = data.description;
        this.image = data.image;
        this.user_id = data.user_id;
    }

    static async save(data) {
        try {
            const query = `
                INSERT INTO notifikasi (type, date, title, description, image, user_id)
                VALUES (?, ?, ?, ?, ?, ?)
            `;
            const [result] = await db.execute(query, [
                data.type,
                data.date,
                data.title,
                data.description,
                data.image,
                data.user_id,
            ]);
            return result;
        } catch (error) {
            console.error("Error saving notification:", error.message);
            throw error;
        }
    }

    static async getAll() {
        try {
            const query = 'SELECT * FROM notifikasi';
            const [results] = await db.execute(query);
            return results;
        } catch (error) {
            console.error("Error fetching all notifications:", error.message);
            throw error;
        }
    }

    static async getById(id) {
        try {
            const query = 'SELECT * FROM notifikasi WHERE id = ?';
            const [results] = await db.execute(query, [id]);
            return results[0];
        } catch (error) {
            console.error(`Error fetching notification with ID ${id}:`, error.message);
            throw error;
        }
    }

    static async update(id, data) {
        try {
            const query = `
                UPDATE notifikasi
                SET type = ?, date = ?, title = ?, description = ?, image = ?, user_id = ?, updated_at = ?
                WHERE id = ?
            `;
            const [result] = await db.execute(query, [
                data.type,
                data.date,
                data.title,
                data.description,
                data.image,
                data.user_id,
                new Date(),
                id,
            ]);
            return result;
        } catch (error) {
            console.error(`Error updating notification with ID ${id}:`, error.message);
            throw error;
        }
    }

    static async delete(id) {
        try {
            const query = 'DELETE FROM notifikasi WHERE id = ?';
            const [result] = await db.execute(query, [id]);
            return result;
        } catch (error) {
            console.error(`Error deleting notification with ID ${id}:`, error.message);
            throw error;
        }
    }
}

export default Notifikasi;

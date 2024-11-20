import db from '../database/Nusairadb.js'; 

class Berita {
    constructor(data) {
        this.writer = data.writer;
        this.title = data.title;
        this.description = data.description;
        this.content = data.content;
        this.image = data.image;
        this.date = data.date;
    }

    static async save(data) {
        try {
            const berita = new Berita(data);

            const query = 'INSERT INTO berita (writer, title, description, content, image, date) VALUES (?, ?, ?, ?, ?, ?)';
            const [result] = await db.execute(query, [
                berita.writer,
                berita.title,
                berita.description,
                berita.content,
                berita.image,
                berita.date
            ]);
            return result;
        } catch (err) {
            throw new Error('Error saving berita: ' + err.message);
        }
    }

    static async getAll() {
        try {
            const [result] = await db.execute('SELECT * FROM berita');
            return result;
        } catch (err) {
            throw new Error('Error fetching all berita: ' + err.message);
        }
    }

    static async getById(id) {
        try {
            const query = 'SELECT * FROM berita WHERE id = ?';
            const [result] = await db.execute(query, [id]);

            if (result.length === 0) {
                throw new Error('Berita not found');
            }
            return result[0];
        } catch (err) {
            throw new Error('Error fetching berita by ID: ' + err.message);
        }
    }

    static async update(id, data) {
        try {
            const query = 'UPDATE berita SET writer = ?, title = ?, description = ?, content = ?, image = ?, date = ?, updated_at = ? WHERE id = ?';
            const [result] = await db.execute(query, [
                data.writer,
                data.title,
                data.description,
                data.content,
                data.image,
                data.date,
                new Date(),
                id
            ]);

            if (result.affectedRows === 0) {
                throw new Error('Berita not found to update');
            }

            return result;
        } catch (err) {
            throw new Error('Error updating berita: ' + err.message);
        }
    }

    static async delete(id) {
        try {
            const query = 'DELETE FROM berita WHERE id = ?';
            const [result] = await db.execute(query, [id]);

            if (result.affectedRows === 0) {
                throw new Error('Berita not found to delete');
            }

            return result;
        } catch (err) {
            throw new Error('Error deleting berita: ' + err.message);
        }
    }
}

export default Berita;

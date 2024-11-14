import db from '../database/Nusairadb.js'; // Pastikan ini sesuai dengan koneksi database Anda

class Berita {
    constructor(data) {
        this.writer = data.writer;
        this.title = data.title;
        this.description = data.description;
        this.content = data.content;
        this.image = data.image;
        this.date = data.date;
    }

    // Menyimpan data berita ke dalam database
    static async save(data) {
        return new Promise((resolve, reject) => {
            const berita = new Berita(data);

            db.query(
                'INSERT INTO berita (writer, title, description, content, image, date) VALUES (?, ?, ?, ?, ?, ?)',
                [
                    berita.writer,
                    berita.title,
                    berita.description,
                    berita.content,
                    berita.image,
                    berita.date
                ],
                (err, result) => {
                    if (err) {
                        return reject(err);
                    }
                    resolve(result);
                }
            );
        });
    }

    // Mengambil semua berita
    static getAll() {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM berita', (err, result) => {
                if (err) {
                    return reject(err);
                }
                resolve(result);
            });
        });
    }

    // Mengambil berita berdasarkan ID
    static getById(id) {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM berita WHERE id = ?', [id], (err, result) => {
                if (err) {
                    return reject(err);
                }
                resolve(result[0]);
            });
        });
    }

    // Mengupdate berita berdasarkan ID
    static update(id, data) {
        return new Promise((resolve, reject) => {
            db.query(
                'UPDATE berita SET writer = ?, title = ?, description = ?, content = ?, image = ?, date = ?, updated_at = ? WHERE id = ?',
                [
                    data.writer,
                    data.title,
                    data.description,
                    data.content,
                    data.image,
                    data.date,
                    new Date(),
                    id
                ],
                (err, result) => {
                    if (err) {
                        return reject(err);
                    }
                    resolve(result);
                }
            );
        });
    }

    
    static delete(id) {
        return new Promise((resolve, reject) => {
            db.query('DELETE FROM berita WHERE id = ?', [id], (err, result) => {
                if (err) {
                    return reject(err);
                }
                resolve(result);
            });
        });
    }
}

export default Berita;

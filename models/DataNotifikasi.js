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
        return new Promise((resolve, reject) => {
            const notifikasi = new Notifikasi(data);

            db.query(
                'INSERT INTO notifikasi (type, date, title, description, image, user_id) VALUES (?, ?, ?, ?, ?, ?)',
                [
                    notifikasi.type,
                    notifikasi.date,
                    notifikasi.title,
                    notifikasi.description,
                    notifikasi.image,
                    notifikasi.user_id
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

    
    static getAll() {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM notifikasi', (err, result) => {
                if (err) {
                    return reject(err);
                }
                resolve(result);
            });
        });
    }

    
    static getById(id) {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM notifikasi WHERE id = ?', [id], (err, result) => {
                if (err) {
                    return reject(err);
                }
                resolve(result[0]);
            });
        });
    }

   
    static update(id, data) {
        return new Promise((resolve, reject) => {
            db.query(
                'UPDATE notifikasi SET type = ?, date = ?, title = ?, description = ?, image = ?, user_id = ?, updated_at = ? WHERE id = ?',
                [
                    data.type,
                    data.date,
                    data.title,
                    data.description,
                    data.image,
                    data.user_id,
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
            db.query('DELETE FROM notifikasi WHERE id = ?', [id], (err, result) => {
                if (err) {
                    return reject(err);
                }
                resolve(result);
            });
        });
    }
}

export default Notifikasi;

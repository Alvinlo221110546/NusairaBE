import db from '../database/Nusairadb.js'; // Pastikan sesuai dengan konfigurasi koneksi database Anda

class Pemasukan {
    constructor(data) {
        this.date = data.date;
        this.kategori = data.kategori;
        this.jumlah = data.jumlah;
        this.harga = data.harga;
        this.keterangan = data.keterangan;
        this.total = data.total;
        this.user_id = data.user_id;
    }

    // Menyimpan pemasukan ke dalam database
    static async save(data) {
        return new Promise((resolve, reject) => {
            const pemasukan = new Pemasukan(data);

            db.query(
                'INSERT INTO pemasukan (date, kategori, jumlah, harga, keterangan, total, user_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
                [
                    pemasukan.date,
                    pemasukan.kategori,
                    pemasukan.jumlah,
                    pemasukan.harga,
                    pemasukan.keterangan,
                    pemasukan.total,
                    pemasukan.user_id
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

    // Mengambil semua pemasukan
    static getAll() {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM pemasukan', (err, result) => {
                if (err) {
                    return reject(err);
                }
                resolve(result);
            });
        });
    }

    // Mengambil pemasukan berdasarkan ID
    static getById(id) {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM pemasukan WHERE id = ?', [id], (err, result) => {
                if (err) {
                    return reject(err);
                }
                resolve(result[0]);
            });
        });
    }

    // Mengupdate pemasukan berdasarkan ID
    static update(id, data) {
        return new Promise((resolve, reject) => {
            db.query(
                'UPDATE pemasukan SET date = ?, kategori = ?, jumlah = ?, harga = ?, keterangan = ?, total = ?, user_id = ?, updated_at = ? WHERE id = ?',
                [
                    data.date,
                    data.kategori,
                    data.jumlah,
                    data.harga,
                    data.keterangan,
                    data.total,
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

    // Menghapus pemasukan berdasarkan ID
    static delete(id) {
        return new Promise((resolve, reject) => {
            db.query('DELETE FROM pemasukan WHERE id = ?', [id], (err, result) => {
                if (err) {
                    return reject(err);
                }
                resolve(result);
            });
        });
    }
}

export default Pemasukan;

import db from '../database/Nusairadb.js'; // Pastikan sesuai dengan konfigurasi koneksi database Anda

class Pengeluaran {
    constructor(data) {
        this.date = data.date;
        this.jenis_pengeluaran = data.jenis_pengeluaran;
        this.nama_barang = data.nama_barang;
        this.catatan = data.catatan;
        this.status = data.status;
        this.sisa_tagihan = data.sisa_tagihan;
        this.user_id = data.user_id;
    }

    // Menyimpan pengeluaran ke dalam database
    static async save(data) {
        return new Promise((resolve, reject) => {
            const pengeluaran = new Pengeluaran(data);

            db.query(
                'INSERT INTO pengeluaran (date, jenis_pengeluaran, nama_barang, catatan, status, sisa_tagihan, user_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
                [
                    pengeluaran.date,
                    pengeluaran.jenis_pengeluaran,
                    pengeluaran.nama_barang,
                    pengeluaran.catatan,
                    pengeluaran.status,
                    pengeluaran.sisa_tagihan,
                    pengeluaran.user_id
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

    // Mengambil semua pengeluaran
    static getAll() {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM pengeluaran', (err, result) => {
                if (err) {
                    return reject(err);
                }
                resolve(result);
            });
        });
    }

    // Mengambil pengeluaran berdasarkan ID
    static getById(id) {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM pengeluaran WHERE id = ?', [id], (err, result) => {
                if (err) {
                    return reject(err);
                }
                resolve(result[0]);
            });
        });
    }

    // Mengupdate pengeluaran berdasarkan ID
    static update(id, data) {
        return new Promise((resolve, reject) => {
            db.query(
                'UPDATE pengeluaran SET date = ?, jenis_pengeluaran = ?, nama_barang = ?, catatan = ?, status = ?, sisa_tagihan = ?, user_id = ?, updated_at = ? WHERE id = ?',
                [
                    data.date,
                    data.jenis_pengeluaran,
                    data.nama_barang,
                    data.catatan,
                    data.status,
                    data.sisa_tagihan,
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

    // Menghapus pengeluaran berdasarkan ID
    static delete(id) {
        return new Promise((resolve, reject) => {
            db.query('DELETE FROM pengeluaran WHERE id = ?', [id], (err, result) => {
                if (err) {
                    return reject(err);
                }
                resolve(result);
            });
        });
    }
}

export default Pengeluaran;

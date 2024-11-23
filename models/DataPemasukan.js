import db from '../database/Nusairadb.js';

class Pemasukan {
    constructor(data) {
        this.date = data.date;
        this.kategori = data.kategori;
        this.jumlah = data.jumlah;
        this.harga = data.harga;
        this.keterangan = data.keterangan;
        this.total = data.total;
        this.tambak_id = data.tambak_id;
    }

    // Menyimpan pemasukan ke database
    static async save(data) {
        try {
            const pemasukan = new Pemasukan(data);
            const [result] = await db.execute(
                'INSERT INTO pemasukan (date, kategori, jumlah, harga, keterangan, total, tambak_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
                [
                    pemasukan.date,
                    pemasukan.kategori,
                    pemasukan.jumlah,
                    pemasukan.harga,
                    pemasukan.keterangan,
                    pemasukan.total,
                    pemasukan.tambak_id
                ]
            );
            return result;
        } catch (error) {
            console.error('Error saving pemasukan:', error);
            throw error;
        }
    }

    // Mengambil semua pemasukan
    static async getAll() {
        try {
            const [rows] = await db.execute('SELECT * FROM pemasukan ORDER BY date DESC');
            return rows;
        } catch (error) {
            console.error('Error getting all pemasukan:', error);
            throw error;
        }
    }

    // Mengambil pemasukan berdasarkan ID
    static async getById(id) {
        try {
            const [rows] = await db.execute(
                'SELECT * FROM pemasukan WHERE id = ?', 
                [id]
            );
            return rows[0];
        } catch (error) {
            console.error('Error getting pemasukan by ID:', error);
            throw error;
        }
    }

    // Mengupdate pemasukan berdasarkan ID
    static async update(id, data) {
        try {
            const [result] = await db.execute(
                `UPDATE pemasukan 
                 SET date = ?, 
                     kategori = ?, 
                     jumlah = ?, 
                     harga = ?, 
                     keterangan = ?, 
                     total = ?, 
                     tambak_id = ?, 
                     updated_at = CURRENT_TIMESTAMP 
                 WHERE id = ?`,
                [
                    data.date,
                    data.kategori,
                    data.jumlah,
                    data.harga,
                    data.keterangan,
                    data.total,
                    data.tambak_id,
                    id
                ]
            );
            return result;
        } catch (error) {
            console.error('Error updating pemasukan:', error);
            throw error;
        }
    }

    // Menghapus pemasukan berdasarkan ID
    static async delete(id) {
        try {
            const [result] = await db.execute(
                'DELETE FROM pemasukan WHERE id = ?', 
                [id]
            );
            return result;
        } catch (error) {
            console.error('Error deleting pemasukan:', error);
            throw error;
        }
    }
}

export default Pemasukan;
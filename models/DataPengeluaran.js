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
        try {
            const pengeluaran = new Pengeluaran(data);
            const query = `
                INSERT INTO pengeluaran 
                (date, jenis_pengeluaran, nama_barang, catatan, status, sisa_tagihan, user_id) 
                VALUES (?, ?, ?, ?, ?, ?, ?)
            `;
            const [result] = await db.execute(query, [
                pengeluaran.date,
                pengeluaran.jenis_pengeluaran,
                pengeluaran.nama_barang,
                pengeluaran.catatan,
                pengeluaran.status,
                pengeluaran.sisa_tagihan,
                pengeluaran.user_id
            ]);
            return result;
        } catch (err) {
            console.error("Error saving pengeluaran:", err);
            throw err;
        }
    }

    // Mengambil semua pengeluaran
    static async getAll() {
        try {
            const query = 'SELECT * FROM pengeluaran';
            const [rows] = await db.execute(query);
            return rows;
        } catch (err) {
            console.error("Error fetching all pengeluaran:", err);
            throw err;
        }
    }

    // Mengambil pengeluaran berdasarkan ID
    static async getById(id) {
        try {
            const query = 'SELECT * FROM pengeluaran WHERE id = ?';
            const [rows] = await db.execute(query, [id]);
            return rows[0];
        } catch (err) {
            console.error(`Error fetching pengeluaran with ID ${id}:`, err);
            throw err;
        }
    }

    // Mengupdate pengeluaran berdasarkan ID
    static async update(id, data) {
        try {
            const query = `
                UPDATE pengeluaran 
                SET 
                    date = ?, 
                    jenis_pengeluaran = ?, 
                    nama_barang = ?, 
                    catatan = ?, 
                    status = ?, 
                    sisa_tagihan = ?, 
                    user_id = ?, 
                    updated_at = CURRENT_TIMESTAMP 
                WHERE id = ?
            `;
            const [result] = await db.execute(query, [
                data.date,
                data.jenis_pengeluaran,
                data.nama_barang,
                data.catatan,
                data.status,
                data.sisa_tagihan,
                data.user_id,
                id
            ]);
            return result;
        } catch (err) {
            console.error(`Error updating pengeluaran with ID ${id}:`, err);
            throw err;
        }
    }

    // Menghapus pengeluaran berdasarkan ID
    static async delete(id) {
        try {
            const query = 'DELETE FROM pengeluaran WHERE id = ?';
            const [result] = await db.execute(query, [id]);
            return result;
        } catch (err) {
            console.error(`Error deleting pengeluaran with ID ${id}:`, err);
            throw err;
        }
    }
}

export default Pengeluaran;

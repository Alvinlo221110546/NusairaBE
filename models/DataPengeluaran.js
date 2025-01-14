import db from '../database/Nusairadb.js'; 

class Pengeluaran {
    constructor(data) {
        this.date = data.date;
        this.jenis_pengeluaran = data.jenis_pengeluaran;
        this.nama_barang = data.nama_barang;
        this.catatan = data.catatan;
        this.status = data.status;
        this.sisa_tagihan = data.sisa_tagihan;
        this.tambak_id = data.tambak_id; 
    }

  
    static async save(data) {
        try {
            const pengeluaran = new Pengeluaran(data);
            const query = `
                INSERT INTO pengeluaran 
                (date, jenis_pengeluaran, nama_barang, catatan, status, sisa_tagihan, tambak_id) 
                VALUES (?, ?, ?, ?, ?, ?, ?)
            `;
            const [result] = await db.execute(query, [
                pengeluaran.date,
                pengeluaran.jenis_pengeluaran,
                pengeluaran.nama_barang,
                pengeluaran.catatan,
                pengeluaran.status,
                pengeluaran.sisa_tagihan,
                pengeluaran.tambak_id 
            ]);
            return result;
        } catch (err) {
            console.error("Error saving pengeluaran:", err);
            throw err;
        }
    }

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
                    tambak_id = ?,  // Ganti user_id menjadi tambak_id
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
                data.tambak_id, 
                id
            ]);
            return result;
        } catch (err) {
            console.error(`Error updating pengeluaran with ID ${id}:`, err);
            throw err;
        }
    }

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
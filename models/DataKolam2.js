import db from '../database/Nusairadb.js';

class Tambak2 {
    constructor(data) {
        this.tambak_id = data.tambak_id;
        this.nama_kolam = data.nama_kolam;
        this.tipe_kolam = data.tipe_kolam;
        this.panjang = data.panjang;
        this.lebar = data.lebar;
        this.kedalaman = data.kedalaman;
        this.jumlah_anco = data.jumlah_anco;
        this.size = this.hitungSize();
    }

    hitungSize() {
        return this.panjang * this.lebar * this.kedalaman;
    }

    static async validate(data) {
        const errors = [];

        if (!data.nama_kolam) errors.push("Nama kolam harus diisi.");
        if (!data.tipe_kolam) errors.push("Tipe kolam harus diisi.");
        if (data.panjang <= 0) errors.push("Panjang kolam harus lebih dari 0.");
        if (data.lebar <= 0) errors.push("Lebar kolam harus lebih dari 0.");
        if (data.kedalaman <= 0) errors.push("Kedalaman kolam harus lebih dari 0.");
        if (data.jumlah_anco <= 0) errors.push("Jumlah anco kolam harus lebih dari 0.");

        return errors;
    }

    static async save(data) {
        const validationErrors = await Tambak2.validate(data);
        if (validationErrors.length > 0) {
            throw new Error(validationErrors.join(", "));
        }

        const query = `
            INSERT INTO tambak2 (tambak_id, nama_kolam, tipe_kolam, panjang, lebar, kedalaman, size, jumlah_anco) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `;
        try {
            const [result] = await db.promise().query(query, [
                data.tambak_id,
                data.nama_kolam,
                data.tipe_kolam,
                data.panjang,
                data.lebar,
                data.kedalaman,
                data.size,
                data.jumlah_anco
            ]);
            return result;
        } catch (err) {
            throw new Error('Gagal menyimpan data Tambak2: ' + err.message);
        }
    }

    static async getKolamByTambakId(tambak_id) {
        try {
            const query = 'SELECT * FROM tambak2 WHERE tambak_id = ?';
            const [result] = await db.promise().query(query, [tambak_id]);
            return result;
        } catch (err) {
            throw new Error('Gagal mendapatkan kolam dari Tambak2: ' + err.message);
        }
    }

    static async getAll() {
        try {
            const query = 'SELECT * FROM tambak2';
            const [result] = await db.promise().query(query);
            return result;
        } catch (err) {
            throw new Error('Gagal mendapatkan data Tambak2: ' + err.message);
        }
    }

    static async update(tambak_id, data) {
        const validationErrors = await Tambak2.validate(data);
        if (validationErrors.length > 0) {
            throw new Error(validationErrors.join(", "));
        }

        const query = `
            UPDATE tambak2 
            SET nama_kolam = ?, tipe_kolam = ?, panjang = ?, lebar = ?, kedalaman = ?, size = ?, jumlah_anco = ? 
            WHERE tambak_id = ?
        `;
        try {
            const [result] = await db.promise().query(query, [
                data.nama_kolam,
                data.tipe_kolam,
                data.panjang,
                data.lebar,
                data.kedalaman,
                data.size,
                data.jumlah_anco,
                tambak_id
            ]);
            return result;
        } catch (err) {
            throw new Error('Gagal mengupdate Tambak2: ' + err.message);
        }
    }

    static async delete(tambak_id) {
        try {
            const query = 'DELETE FROM tambak2 WHERE tambak_id = ?';
            const [result] = await db.promise().query(query, [tambak_id]);
            return result;
        } catch (err) {
            throw new Error('Gagal menghapus Tambak2: ' + err.message);
        }
    }
}

export { Tambak2 };

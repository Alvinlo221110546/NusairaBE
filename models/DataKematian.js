import db from '../database/Nusairadb.js';

class Kematian {
    constructor(data) {
        this.kolam_id = data.kolam_id;
        this.tanggal_tebar = data.tanggal_tebar;
        this.umur = data.umur;
        this.jumlah_ekor = data.jumlah_ekor || null;
        this.total_berat = data.total_berat || null;
        this.multiplier = data.multiplier;
        this.size = this.calculateSize();
    }

    calculateSize() {
        if (this.total_berat && this.multiplier) {
            return this.total_berat * this.multiplier;
        }
        return null;
    }

    static async validate(data) {
        const errors = [];

        if (!data.tanggal_tebar) {
            errors.push("Tanggal tebar harus diisi.");
        }

        if (data.umur <= 0) {
            errors.push("Umur harus lebih dari 0.");
        }

        if (!data.jumlah_ekor && !data.total_berat) {
            errors.push("Salah satu dari Jumlah Ekor atau Total Berat harus diisi.");
        }

        if (data.jumlah_ekor && data.total_berat) {
            errors.push("Hanya salah satu dari Jumlah Ekor atau Total Berat yang boleh diisi.");
        }

        return errors;
    }

    static async save(data) {
        try {
            const validationErrors = await Kematian.validate(data);
            if (validationErrors.length > 0) {
                throw new Error(validationErrors.join(", "));
            }

            let size = 0;
            if (data.total_berat && data.multiplier) {
                if (data.multiplier <= 0) {
                    throw new Error("Multiplier tidak boleh lebih dari nol.");
                }
                size = data.total_berat * data.multiplier;
            }

            const query = 'INSERT INTO kematian (kolam_id, tanggal_tebar, umur, jumlah_ekor, total_berat, multiplier, size) VALUES (?, ?, ?, ?, ?, ?, ?)';
            const params = [
                data.kolam_id,
                data.tanggal_tebar,
                data.umur,
                data.jumlah_ekor,
                data.total_berat,
                data.multiplier,
                size
            ];

            const [result] = await db.execute(query, params);
            return {
                ...data,
                size: size,
                id: result.insertId
            };
        } catch (error) {
            throw error;
        }
    }

    static async getAll() {
        try {
            const [result] = await db.execute('SELECT * FROM kematian');
            return result;
        } catch (err) {
            throw err;
        }
    }

    static async getById(id) {
        try {
            const [result] = await db.execute('SELECT * FROM kematian WHERE id = ?', [id]);
            return result[0];
        } catch (err) {
            throw err;
        }
    }
}

export default Kematian;

import db from '../database/Nusairadb.js'; 

class AncoModel {
    constructor(data) {
        this.kolam_id = data.kolam_id;
        this.tanggal_panen_parsial = data.tanggal_panen_parsial;
        this.waktu_pemberian_pakan = data.waktu_pemberian_pakan;
        this.waktu_cek_anco = data.waktu_cek_anco;
        this.catatan = data.catatan || null;
    }

    static async validate(data) {
        const errors = [];

        if (!data.kolam_id) errors.push("Kolam ID harus diisi.");
        if (!data.tanggal_panen_parsial) errors.push("Tanggal Panen Parsial harus diisi.");
        if (!data.waktu_cek_anco) errors.push("Waktu Cek Anco harus diisi.");
        if (!data.waktu_pemberian_pakan) errors.push("Waktu Pemberian Pakan harus diisi.");

        return errors;
    }

    static async save(data) {
        try {
            const validationErrors = await AncoModel.validate(data);

            if (validationErrors.length > 0) {
                throw new Error(validationErrors.join(", "));
            }

            const query = 'INSERT INTO anco (kolam_id, tanggal_panen_parsial, waktu_pemberian_pakan, waktu_cek_anco, catatan) VALUES (?, ?, ?, ?, ?)';
            const [result] = await db.execute(query, [
                data.kolam_id,
                data.tanggal_panen_parsial,
                data.waktu_pemberian_pakan,
                data.waktu_cek_anco,
                data.catatan
            ]);
            return result;
        } catch (error) {
            throw new Error('Error saving anco: ' + error.message);
        }
    }
    static async getAll() {
        try {
            const query = 'SELECT * FROM anco';
            const [result] = await db.execute(query);
            return result;
        } catch (error) {
            throw new Error('Error fetching all anco: ' + error.message);
        }
    }

    static async getById(id) {
        try {
            const query = 'SELECT * FROM anco WHERE id = ?';
            const [result] = await db.execute(query, [id]);

            if (result.length === 0) {
                throw new Error('Anco not found');
            }

            return result[0];
        } catch (error) {
            throw new Error('Error fetching anco by ID: ' + error.message);
        }
    }
    
}

export default AncoModel;

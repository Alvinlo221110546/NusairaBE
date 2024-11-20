import db from '../database/Nusairadb.js';

class DataPakan {
    constructor(data) {
        this.kolam_id = data.kolam_id;
        this.tanggal = data.tanggal;
        this.waktu = data.waktu;
        this.puasa = data.puasa || false;
        this.jumlah = data.jumlah || null;
        this.catatan = data.catatan || null;
    }

    static validate(data) {
        const errors = [];

        if (!data.kolam_id) errors.push("Kolam ID harus diisi.");
        if (!data.tanggal) errors.push("Tanggal harus diisi.");
        if (!data.waktu) errors.push("Waktu harus diisi.");
        if (data.jumlah && data.jumlah <= 0) errors.push("Jumlah harus lebih dari 0.");

        return errors;
    }

    static async save(data) {
        const validationErrors = this.validate(data);
        if (validationErrors.length > 0) {
            throw new Error(validationErrors.join(", "));
        }

        try {
            const query = `
                INSERT INTO data_pakan (kolam_id, tanggal, waktu, puasa, jumlah, catatan)
                VALUES (?, ?, ?, ?, ?, ?)
            `;
            const [result] = await db.execute(query, [
                data.kolam_id,
                data.tanggal,
                data.waktu,
                data.puasa,
                data.jumlah,
                data.catatan,
            ]);
            return result;
        } catch (error) {
            console.error("Error saving data pakan:", error.message);
            throw error;
        }
    }

    static async getAll() {
        try {
            const [results] = await db.execute('SELECT * FROM data_pakan');
            return results;
        } catch (error) {
            console.error("Error fetching all data pakan:", error.message);
            throw error;
        }
    }
}

export default DataPakan;

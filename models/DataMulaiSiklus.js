import db from '../database/Nusairadb.js';

class Siklus {
    constructor(data) {
        this.kolam_id = data.kolam_id;
        this.lama_persiapan = data.lama_persiapan;
        this.total_tebar = data.total_tebar;
        this.metode_penebaran_benih = data.metode_penebaran_benih;
        this.umur_awal = data.umur_awal;
        this.batas_biomass_per_luas = data.batas_biomass_per_luas;
        this.target_size = data.target_size;
        this.target_sr = data.target_sr;
        this.target_fcr = data.target_fcr;
        this.harga_pakan = data.harga_pakan;
        this.jumlah_anco = data.jumlah_anco;
        this.metode_prediksi_sr = data.metode_prediksi_sr;
        this.catatan = data.catatan;
        this.tanggal = data.tanggal;
    }
    static validate(data) {
        const errors = [];
        if (data.lama_persiapan <= 0) errors.push("Lama persiapan harus lebih dari 0.");
        if (data.total_tebar <= 0) errors.push("Total tebar harus lebih dari 0.");
        if (data.jumlah_anco < 0) errors.push("Jumlah anco tidak boleh negatif.");
        if (!data.tanggal) errors.push("Tanggal harus diisi.");
        return errors;
    }

    static async save(data) {
        try {
            const validationErrors = Siklus.validate(data);
            if (validationErrors.length > 0) {
                throw new Error(validationErrors.join(", "));
            }

            const query = `
                INSERT INTO siklus (kolam_id, lama_persiapan, total_tebar, metode_penebaran_benih, umur_awal, batas_biomass_per_luas, target_size, target_sr, target_fcr, harga_pakan, jumlah_anco, metode_prediksi_sr, catatan, tanggal)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `;

            const values = [
                data.kolam_id,
                data.lama_persiapan,
                data.total_tebar,
                data.metode_penebaran_benih,
                data.umur_awal,
                data.batas_biomass_per_luas,
                data.target_size,
                data.target_sr,
                data.target_fcr,
                data.harga_pakan,
                data.jumlah_anco,
                data.metode_prediksi_sr,
                data.catatan,
                data.tanggal
            ];

            const [result] = await db.execute(query, values);
            return result; 
        } catch (error) {
            throw new Error("Gagal menyimpan data siklus: " + error.message);
        }
    }

    static async getAll() {
        try {
            const [results] = await db.execute('SELECT * FROM siklus');
            return results;
        } catch (error) {
            throw new Error("Gagal mengambil data siklus: " + error.message);
        }
    }
}

export default Siklus;

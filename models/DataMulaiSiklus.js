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
        // if (!data.kolam_id) errors.push("Kolam harus dipilih.");
        if (data.lama_persiapan <= 0) errors.push("Lama persiapan harus lebih dari 0.");
        if (data.total_tebar <= 0) errors.push("Total tebar harus lebih dari 0.");
        if (data.jumlah_anco < 0) errors.push("Jumlah anco tidak boleh negatif.");
        if (!data.tanggal) errors.push("Tanggal harus diisi.");
        return errors;
    }

    static save(data) {
        return new Promise((resolve, reject) => {
            const validationErrors = Siklus.validate(data);
            if (validationErrors.length > 0) {
                return reject(new Error(validationErrors.join(", ")));
            }

            db.query(
                'INSERT INTO siklus (kolam_id, lama_persiapan, total_tebar, metode_penebaran_benih, umur_awal, batas_biomass_per_luas, target_size, target_sr, target_fcr, harga_pakan, jumlah_anco, metode_prediksi_sr, catatan, tanggal) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', 
                [
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

    static getAll() {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM siklus', (err, result) => {
                if (err) {
                    return reject(err);
                }
                resolve(result);
            });
        });
    }
}

export default Siklus;

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

   
    static async validate(data) {
        const errors = [];

        if (!data.kolam_id) errors.push("Kolam ID harus diisi.");
        if (!data.tanggal) errors.push("Tanggal harus diisi.");
        if (!data.waktu) errors.push("Waktu harus diisi.");
        if (data.jumlah && data.jumlah <= 0) errors.push("Jumlah harus lebih dari 0.");

        return errors;
    }

    
    static async save(data) {
        try {
            const validationErrors = await DataPakan.validate(data);
            if (validationErrors.length > 0) {
                throw new Error(validationErrors.join(", "));
            }

            const query = `
                INSERT INTO data_pakan (kolam_id, tanggal, waktu, puasa, jumlah, catatan)
                VALUES (?, ?, ?, ?, ?, ?)
            `;

            return new Promise((resolve, reject) => {
                db.query(
                    query,
                    [data.kolam_id, data.tanggal, data.waktu, data.puasa, data.jumlah, data.catatan],
                    (err, result) => {
                        if (err) {
                            return reject(err);
                        }
                        resolve(result);
                    }
                );
            });
        } catch (error) {
            return Promise.reject(error);
        }
    }

    
    static async getAll() {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM data_pakan', (err, results) => {
                if (err) {
                    return reject(err);
                }
                resolve(results);
            });
        });
    }
}

export default DataPakan;

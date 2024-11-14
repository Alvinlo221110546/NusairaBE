import db from '../database/Nusairadb.js';

class DataPakan {
    constructor(data) {
        this.kolamId = data.kolamId;
        this.tanggal = data.tanggal;
        this.waktu = data.waktu;
        this.puasa = data.puasa || false;
        this.jumlah = data.jumlah || null;
        this.catatan = data.catatan || null;
    }

    // Validasi data input
    static async validate(data) {
        const errors = [];

  
        if (!data.kolamId) errors.push("Kolam ID harus diisi.");

   
        if (!data.tanggal) errors.push("Tanggal harus diisi.");

      
        if (!data.waktu) errors.push("Waktu harus diisi.");

        if (data.jumlah && data.jumlah <= 0) errors.push("Jumlah harus lebih dari 0.");

        return errors;
    }

    static save(data) {
        return new Promise((resolve, reject) => {
            DataPakan.validate(data).then((validationErrors) => {
                if (validationErrors.length > 0) {
                    return reject(new Error(validationErrors.join(", ")));
                }

                const query = `
                    INSERT INTO data_pakan (kolamId, tanggal, waktu, puasa, jumlah, catatan)
                    VALUES (?, ?, ?, ?, ?, ?)
                `;
                
                db.query(
                    query, 
                    [data.kolamId, data.tanggal, data.waktu, data.puasa, data.jumlah, data.catatan],
                    (err, result) => {
                        if (err) {
                            return reject(err);
                        }
                        resolve(result);
                    }
                );
            }).catch((error) => reject(error));
        });
    }

    static getAll() {
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

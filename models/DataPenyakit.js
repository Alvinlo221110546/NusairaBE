import db from '../database/Nusairadb.js'; 

class Penyakit {
    constructor(data) {
        this.kolamId = data.kolamId; 
        this.tanggalTebar = data.tanggalTebar;
        this.jenisPenyakit = data.jenisPenyakit;
        this.catatan = data.catatan || null;
        this.images = data.images || []; 
    }

    
    static async validate(data) {
        const errors = [];
        
        if (!data.kolamId) errors.push("Kolam ID harus diisi.");
        if (!data.tanggalTebar) errors.push("Tanggal Tebar harus diisi.");
        if (!data.jenisPenyakit) errors.push("Jenis Penyakit harus diisi.");

        return errors;
    }

  
    static save(data) {
        return new Promise((resolve, reject) => {
            Penyakit.validate(data).then((validationErrors) => {
                if (validationErrors.length > 0) {
                    return reject(new Error(validationErrors.join(", ")));
                }

                
                const query = `
                    INSERT INTO penyakit (kolamId, tanggal_tebar, jenis_penyakit, catatan, images)
                    VALUES (?, ?, ?, ?, ?)
                `;
                const values = [
                    data.kolamId,
                    data.tanggalTebar,
                    data.jenisPenyakit,
                    data.catatan,
                    JSON.stringify(data.images)
                ];

                db.query(query, values, (err, result) => {
                    if (err) {
                        return reject(err);
                    }
                    resolve(result);
                });
            }).catch((error) => reject(error));
        });
    }

    
    static getAll() {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM penyakit', (err, result) => {
                if (err) {
                    return reject(err);
                }
                resolve(result);
            });
        });
    }
}

export default Penyakit;

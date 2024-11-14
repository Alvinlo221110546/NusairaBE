import db from '../database/Nusairadb.js'; 

class AncoModel {
    constructor(data) {
        this.kolamId = data.kolamId;
        this.tanggalPanenParsial = data.tanggalPanenParsial;
        this.waktuPemberianPakan = data.waktuPemberianPakan;
        this.waktuCekAnco = data.waktuCekAnco;
        this.catatan = data.catatan || null;
    }

    
    static async validate(data) {
        const errors = [];
      
        if (!data.kolamId) errors.push("Kolam ID harus diisi.");

     
        if (!data.tanggalPanenParsial) errors.push("Tanggal Panen Parsial harus diisi.");

        if (!data.waktuCekAnco) errors.push("Waktu Cek Anco harus diisi.");

        
        if (!data.waktuPemberianPakan) errors.push("Waktu Pemberian Pakan harus diisi.");

        return errors;
    }

   
    static save(data) {
        return new Promise((resolve, reject) => {
            AncoModel.validate(data).then((validationErrors) => {
                if (validationErrors.length > 0) {
                    return reject(new Error(validationErrors.join(", ")));
                }

                db.query(
                    'INSERT INTO anco (kolamId, tanggalPanenParsial, waktuPemberianPakan, waktuCekAnco, catatan) VALUES (?, ?, ?, ?, ?)', 
                    [
                        data.kolamId, 
                        data.tanggalPanenParsial, 
                        data.waktuPemberianPakan, 
                        data.waktuCekAnco, 
                        data.catatan
                    ], 
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
            db.query('SELECT * FROM anco', (err, result) => {
                if (err) {
                    return reject(err);
                }
                resolve(result);
            });
        });
    }

    static getById(id) {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM anco WHERE id = ?', [id], (err, result) => {
                if (err) {
                    return reject(err);
                }
                resolve(result[0]);
            });
        });
    }
}

export default AncoModel;

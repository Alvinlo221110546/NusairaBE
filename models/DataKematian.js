import db from '../database/Nusairadb.js'; 

class Kematian {
    constructor(data) {
        this.kolamId = data.kolamId; 
        this.tanggalTebar = data.tanggalTebar;
        this.umur = data.umur;
        this.jumlahEkor = data.jumlahEkor || null;
        this.totalBerat = data.totalBerat || null;
        this.multiplier = data.multiplier;
    }

    
    static async validate(data) {
        const errors = [];
       
        if (!data.tanggalTebar) errors.push("Tanggal tebar harus diisi.");

        
        if (data.umur <= 0) errors.push("Umur harus lebih dari 0.");
        
        
        if (!data.jumlahEkor && !data.totalBerat) {
            errors.push("Salah satu dari Jumlah Ekor atau Total Berat harus diisi.");
        }

   
        if (data.jumlahEkor && data.totalBerat) {
            errors.push("Hanya salah satu dari Jumlah Ekor atau Total Berat yang boleh diisi.");
        }

    
        if (data.multiplier <= 0) errors.push("Multiplier harus lebih dari 0.");

        return errors;
    }

 
    static save(data) {
        return new Promise((resolve, reject) => {
            Kematian.validate(data).then((validationErrors) => {
                if (validationErrors.length > 0) {
                    return reject(new Error(validationErrors.join(", ")));
                }

                db.query(
                    'INSERT INTO kematian (kolamId, tanggalTebar, umur, jumlahEkor, totalBerat, multiplier) VALUES (?, ?, ?, ?, ?, ?)', 
                    [
                        data.kolamId, 
                        data.tanggalTebar, 
                        data.umur, 
                        data.jumlahEkor, 
                        data.totalBerat, 
                        data.multiplier
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
            db.query('SELECT * FROM kematian', (err, result) => {
                if (err) {
                    return reject(err);
                }
                resolve(result);
            });
        });
    }
}

export default Kematian;

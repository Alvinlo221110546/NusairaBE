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

        // if (data.multiplier <= 0) {
        //     errors.push("Multiplier harus lebih dari 0.");
        // }

        return errors;
    }

    static async save(data) {
        return new Promise((resolve, reject) => {
            Kematian.validate(data).then((validationErrors) => {
                if (validationErrors.length > 0) {
                    return reject(new Error(validationErrors.join(", ")));
                }
                let size = 0;
                if (data.total_berat && data.multiplier) {
                    if (data.multiplier <= 0) {
                        return reject(new Error("Multiplier tidak boleh lebih dari nol."));
                    }
                    size = data.total_berat * data.multiplier;
                }

                db.query(
                    'INSERT INTO kematian (kolam_id, tanggal_tebar, umur, jumlah_ekor, total_berat, multiplier, size) VALUES (?, ?, ?, ?, ?, ?, ?)',
                    [
                        data.kolam_id,
                        data.tanggal_tebar,
                        data.umur,
                        data.jumlah_ekor,
                        data.total_berat,
                        data.multiplier,
                        size  
                    ],
                    (err, result) => {
                        if (err) {
                            return reject(err);
                        }
                        
                        resolve({
                            ...data,
                            size: size,  
                            id: result.insertId
                        });
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


    static getById(id) {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM kematian WHERE id = ?', [id], (err, result) => {
                if (err) {
                    return reject(err);
                }
                resolve(result[0]);
            });
        });
    }

  
    
}

export default Kematian;

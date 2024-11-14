import db from '../database/Nusairadb.js';

class Kematian {
    constructor(data) {
        this.kolam_id = data.kolam_id;
        this.tanggal_tebar = data.tanggal_tebar;
        this.umur = data.umur;
        this.jumlah_ekor = data.jumlah_ekor || null;
        this.total_berat = data.total_berat || null;
        this.multiplier = data.multiplier;
    }

 
    static async validate(data) {
        const errors = [];

        if (!data.tanggal_tebar) errors.push("Tanggal tebar harus diisi.");
        if (data.umur <= 0) errors.push("Umur harus lebih dari 0.");
        
        
        if (!data.jumlah_ekor && !data.total_berat) {
            errors.push("Salah satu dari Jumlah Ekor atau Total Berat harus diisi.");
        }
        if (data.jumlah_ekor && data.total_berat) {
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
                    'INSERT INTO kematian (kolam_id, tanggal_tebar, umur, jumlah_ekor, total_berat, multiplier) VALUES (?, ?, ?, ?, ?, ?)',
                    [
                        data.kolam_id,
                        data.tanggal_tebar,
                        data.umur,
                        data.jumlah_ekor,
                        data.total_berat,
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

    //belum digunakan
    // static update(id, data) {
    //     return new Promise((resolve, reject) => {
    //         db.query(
    //             'UPDATE kematian SET kolam_id = ?, tanggal_tebar = ?, umur = ?, jumlah_ekor = ?, total_berat = ?, multiplier = ?, updated_at = ? WHERE id = ?',
    //             [
    //                 data.kolam_id,
    //                 data.tanggal_tebar,
    //                 data.umur,
    //                 data.jumlah_ekor,
    //                 data.total_berat,
    //                 data.multiplier,
    //                 new Date(),
    //                 id
    //             ],
    //             (err, result) => {
    //                 if (err) {
    //                     return reject(err);
    //                 }
    //                 resolve(result);
    //             }
    //         );
    //     });
    // }

    //belum digunakan
    // static delete(id) {
    //     return new Promise((resolve, reject) => {
    //         db.query('DELETE FROM kematian WHERE id = ?', [id], (err, result) => {
    //             if (err) {
    //                 return reject(err);
    //             }
    //             resolve(result);
    //         });
    //     });
    // }
}

export default Kematian;

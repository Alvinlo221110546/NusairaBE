import db from '../database/Nusairadb.js';

class AncoModel {
    constructor(data) {
        this.kolam_id = data.kolam_id;
        this.tanggal_panen_parsial = data.tanggal_panen_parsial;
        this.waktu_pemberian_pakan = data.waktu_pemberian_pakan;
        this.waktu_cek_anco = data.waktu_cek_anco;
        this.catatan = data.catatan || null;
    }


    static async validate(data) {
        const errors = [];

        if (!data.kolam_id) errors.push("Kolam ID harus diisi.");
        if (!data.tanggal_panen_parsial) errors.push("Tanggal Panen Parsial harus diisi.");
        if (!data.waktu_cek_anco) errors.push("Waktu Cek Anco harus diisi.");
        if (!data.waktu_pemberian_pakan) errors.push("Waktu Pemberian Pakan harus diisi.");

        return errors;
    }


    static save(data) {
        return new Promise((resolve, reject) => {
            AncoModel.validate(data).then((validationErrors) => {
                if (validationErrors.length > 0) {
                    return reject(new Error(validationErrors.join(", ")));
                }

                db.query(
                    'INSERT INTO anco (kolam_id, tanggal_panen_parsial, waktu_pemberian_pakan, waktu_cek_anco, catatan) VALUES (?, ?, ?, ?, ?)',
                    [
                        data.kolam_id,
                        data.tanggal_panen_parsial,
                        data.waktu_pemberian_pakan,
                        data.waktu_cek_anco,
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

   //belum digunakan
    // static update(id, data) {
    //     return new Promise((resolve, reject) => {
    //         db.query(
    //             'UPDATE anco SET kolam_id = ?, tanggal_panen_parsial = ?, waktu_pemberian_pakan = ?, waktu_cek_anco = ?, catatan = ?, updated_at = ? WHERE id = ?',
    //             [
    //                 data.kolam_id,
    //                 data.tanggal_panen_parsial,
    //                 data.waktu_pemberian_pakan,
    //                 data.waktu_cek_anco,
    //                 data.catatan,
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
    //         db.query('DELETE FROM anco WHERE id = ?', [id], (err, result) => {
    //             if (err) {
    //                 return reject(err);
    //             }
    //             resolve(result);
    //         });
    //     });
    // }
}

export default AncoModel;

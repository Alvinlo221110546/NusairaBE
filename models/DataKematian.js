import db from '../database/Nusairadb.js';

class Kematian {
    constructor(data) {
        this.kolam_id = data.kolam_id;
        this.tanggal_tebar = data.tanggal_tebar;
        this.umur = data.umur;
        this.jumlah_ekor = data.jumlah_ekor || null;
        this.total_berat = data.total_berat || null;
        this.multiplier = data.multiplier;
        this.size = this.calculateSize();  // Menghitung size di constructor
    }

    // Perhitungan size
    calculateSize() {
        // Jika total_berat dan multiplier ada, hitung size
        if (this.total_berat && this.multiplier) {
            return this.total_berat * this.multiplier;
        }
        return null;  // Jika tidak ada total_berat atau multiplier, size akan null
    }

    // Validation Method
    static async validate(data) {
        const errors = [];

        // Ensure tanggal_tebar is provided
        if (!data.tanggal_tebar) {
            errors.push("Tanggal tebar harus diisi.");
        }

        // Ensure umur is a positive number
        if (data.umur <= 0) {
            errors.push("Umur harus lebih dari 0.");
        }

        // Ensure either jumlah_ekor or total_berat is provided, but not both
        if (!data.jumlah_ekor && !data.total_berat) {
            errors.push("Salah satu dari Jumlah Ekor atau Total Berat harus diisi.");
        }

        if (data.jumlah_ekor && data.total_berat) {
            errors.push("Hanya salah satu dari Jumlah Ekor atau Total Berat yang boleh diisi.");
        }

        // Ensure multiplier is provided and valid
        if (data.multiplier <= 0) {
            errors.push("Multiplier harus lebih dari 0.");
        }

        return errors;
    }

    // Save Method
    static async save(data) {
        return new Promise((resolve, reject) => {
            // Validasi data
            Kematian.validate(data).then((validationErrors) => {
                if (validationErrors.length > 0) {
                    return reject(new Error(validationErrors.join(", ")));
                }
    
                // Menghitung 'size' berdasarkan 'total_berat' dan 'multiplier'
                let size = 0;
                if (data.total_berat && data.multiplier) {
                    // Validasi multiplier tidak boleh 0 atau negatif
                    if (data.multiplier <= 0) {
                        return reject(new Error("Multiplier tidak boleh lebih dari nol."));
                    }
    
                    // Menghitung size
                    size = data.total_berat * data.multiplier;
                }
    
                // Insert data ke database dengan menyimpan 'size'
                db.query(
                    'INSERT INTO kematian (kolam_id, tanggal_tebar, umur, jumlah_ekor, total_berat, multiplier, size) VALUES (?, ?, ?, ?, ?, ?, ?)',
                    [
                        data.kolam_id,
                        data.tanggal_tebar,
                        data.umur,
                        data.jumlah_ekor,
                        data.total_berat,
                        data.multiplier,
                        size  // Menyimpan hasil perhitungan size
                    ],
                    (err, result) => {
                        if (err) {
                            return reject(err);
                        }
                        // Setelah berhasil insert, kembalikan hasil dengan perhitungan size
                        resolve({
                            ...data,
                            size: size,  // Mengirimkan size yang telah dihitung ke frontend
                            id: result.insertId
                        });
                    }
                );
            }).catch((error) => reject(error));
        });
    }
    

    // Get All Data Method
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

    // Get Data by ID
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

    // Uncomment and implement if needed
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

    // Uncomment and implement if needed
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

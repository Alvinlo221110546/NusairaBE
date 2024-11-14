import db from '../database/Nusairadb.js'; 

class Siklus {
    constructor(data) {
        this.kolamId = data.kolamId;
        this.lamaPersiapan = data.lamaPersiapan;
        this.totalTebar = data.totalTebar;
        this.metodePenebaranBenih = data.metodePenebaranBenih;
        this.umurAwal = data.umurAwal;
        this.batasBiomassPerLuas = data.batasBiomassPerLuas;
        this.targetSize = data.targetSize;
        this.targetSR = data.targetSR;
        this.targetFCR = data.targetFCR;
        this.hargaPakan = data.hargaPakan;
        this.jumlahAnco = data.jumlahAnco;
        this.metodePrediksiSR = data.metodePrediksiSR;
        this.catatan = data.catatan;
        this.tanggal = data.tanggal;
    }

    static validate(data) {
        const errors = [];
        if (!data.kolamId) errors.push("Kolam harus dipilih.");
        if (data.lamaPersiapan <= 0) errors.push("Lama persiapan harus lebih dari 0.");
        if (data.totalTebar <= 0) errors.push("Total tebar harus lebih dari 0.");
        if (data.jumlahAnco < 0) errors.push("Jumlah anco tidak boleh negatif.");
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
                'INSERT INTO siklus (kolamId, lamaPersiapan, totalTebar, metodePenebaranBenih, umurAwal, batasBiomassPerLuas, targetSize, targetSR, targetFCR, hargaPakan, jumlahAnco, metodePrediksiSR, catatan, tanggal) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', 
                [
                    data.kolamId, 
                    data.lamaPersiapan, 
                    data.totalTebar, 
                    data.metodePenebaranBenih,
                    data.umurAwal, 
                    data.batasBiomassPerLuas, 
                    data.targetSize, 
                    data.targetSR, 
                    data.targetFCR, 
                    data.hargaPakan, 
                    data.jumlahAnco, 
                    data.metodePrediksiSR, 
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

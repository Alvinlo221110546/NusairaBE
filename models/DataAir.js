import db from '../database/Nusairadb.js';

class KualitasAir {
    constructor(data) {
        this.location = data.location;
        this.ph = data.ph;
        this.suhu = data.suhu;
        this.oksigen = data.oksigen;
        this.salinitas = data.salinitas;
        this.date = data.date;
        this.user_id = data.user_id;
        this.tambak_id = data.tambak_id;
    }

  
    static async save(data) {
        return new Promise((resolve, reject) => {
            const kualitasAir = new KualitasAir(data);

            db.query(
                'INSERT INTO kualitas_air (location, ph, suhu, oksigen, salinitas, date, user_id, tambak_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
                [
                    kualitasAir.location,
                    kualitasAir.ph,
                    kualitasAir.suhu,
                    kualitasAir.oksigen,
                    kualitasAir.salinitas,
                    kualitasAir.date,
                    kualitasAir.user_id,
                    kualitasAir.tambak_id
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
            db.query('SELECT * FROM kualitas_air', (err, result) => {
                if (err) {
                    return reject(err);
                }
                resolve(result);
            });
        });
    }

    static getById(id) {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM kualitas_air WHERE id = ?', [id], (err, result) => {
                if (err) {
                    return reject(err);
                }
                resolve(result[0]);
            });
        });
    }

    static update(id, data) {
        return new Promise((resolve, reject) => {
            db.query(
                'UPDATE kualitas_air SET location = ?, ph = ?, suhu = ?, oksigen = ?, salinitas = ?, date = ?, user_id = ?, tambak_id = ?, updated_at = ? WHERE id = ?',
                [
                    data.location,
                    data.ph,
                    data.suhu,
                    data.oksigen,
                    data.salinitas,
                    data.date,
                    data.user_id,
                    data.tambak_id,
                    new Date(),
                    id
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

  
    static delete(id) {
        return new Promise((resolve, reject) => {
            db.query('DELETE FROM kualitas_air WHERE id = ?', [id], (err, result) => {
                if (err) {
                    return reject(err);
                }
                resolve(result);
            });
        });
    }
}

export default KualitasAir;

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
        const kualitasAir = new KualitasAir(data);
        try {
            const result = await db.execute(
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
                ]
            );
            return result;
        } catch (err) {
            throw new Error(`Error saving data: ${err.message}`);
        }
    }

    static async getAll() {
        try {
            const result = await db.execute('SELECT * FROM kualitas_air');
            return result;
        } catch (err) {
            throw new Error(`Error retrieving data: ${err.message}`);
        }
    }

    static async getById(id) {
        try {
            const result = await db.execute('SELECT * FROM kualitas_air WHERE id = ?', [id]);
            return result[0];  
        } catch (err) {
            throw new Error(`Error retrieving data by ID: ${err.message}`);
        }
    }

    static async update(id, data) {
        try {
            const result = await db.execute(
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
                ]
            );
            return result;
        } catch (err) {
            throw new Error(`Error updating data: ${err.message}`);
        }
    }

    static async delete(id) {
        try {
            const result = await db.execute('DELETE FROM kualitas_air WHERE id = ?', [id]);
            return result;
        } catch (err) {
            throw new Error(`Error deleting data: ${err.message}`);
        }
    }
}

export default KualitasAir;

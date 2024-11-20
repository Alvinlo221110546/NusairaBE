import db from '../database/Nusairadb.js';

class KualitasAir {
    constructor(data) {
        this.ph = data.ph;
        this.suhu = data.suhu;
        this.oksigen = data.oksigen;
        this.salinitas = data.salinitas;
        this.tambak_id = data.tambak_id;
    }

    static async save(data) {
        const kualitasAir = new KualitasAir(data);
        try {
            const result = await db.execute(
                'INSERT INTO air (ph, suhu, oksigen, salinitas, tambak_id) VALUES (?, ?, ?, ?, ?)',
                [
                    kualitasAir.ph,
                    kualitasAir.suhu,
                    kualitasAir.oksigen,
                    kualitasAir.salinitas,
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
            const result = await db.execute('SELECT * FROM air');
            return result;
        } catch (err) {
            throw new Error(`Error retrieving data: ${err.message}`);
        }
    }

    static async getById(id) {
        try {
            const result = await db.execute('SELECT * FROM air WHERE id = ?', [id]);
            return result[0];  
        } catch (err) {
            throw new Error(`Error retrieving data by ID: ${err.message}`);
        }
    }

    static async update(id, data) {
        try {
            const result = await db.execute(
                'UPDATE air SET ph = ?, suhu = ?, oksigen = ?, salinitas = ?, tambak_id = ?, updated_at = ? WHERE id = ?',
                [
                    data.ph,
                    data.suhu,
                    data.oksigen,
                    data.salinitas,
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
            const result = await db.execute('DELETE FROM air WHERE id = ?', [id]);
            return result;
        } catch (err) {
            throw new Error(`Error deleting data: ${err.message}`);
        }
    }
}

export default KualitasAir;

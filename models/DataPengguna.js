import db from '../database/Nusairadb.js';

class Pengguna {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.email = data.email;
        this.role = data.role;
        this.password = data.password;
        this.pekerjaan = data.pekerjaan;
        this.jenis_kelamin = data.jenis_kelamin;
        this.no_hp = data.no_hp;
        this.lokasi = data.lokasi;
        this.foto_profile = data.foto_profile;
        this.created_at = data.created_at || new Date();
        this.updated_at = data.updated_at || new Date();
    }

    static async save(data) {
        try {
            const pengguna = new Pengguna(data);

            const query = `
                INSERT INTO pengguna (
                    id, name, email, role, password, pekerjaan, jenis_kelamin, no_hp, lokasi, foto_profile, created_at, updated_at
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `;
            const [result] = await db.execute(query, [
                pengguna.id,
                pengguna.name,
                pengguna.email,
                pengguna.role,
                pengguna.password,
                pengguna.pekerjaan,
                pengguna.jenis_kelamin,
                pengguna.no_hp,
                pengguna.lokasi,
                pengguna.foto_profile,
                pengguna.created_at,
                pengguna.updated_at
            ]);
            return result;
        } catch (err) {
            throw new Error('Error saving pengguna: ' + err.message);
        }
    }

    static async getAll() {
        try {
            const [result] = await db.execute('SELECT * FROM pengguna');
            return result;
        } catch (err) {
            throw new Error('Error fetching all pengguna: ' + err.message);
        }
    }

    static async getById(id) {
        try {
            const query = 'SELECT * FROM pengguna WHERE id = ?';
            const [result] = await db.execute(query, [id]);

            if (result.length === 0) {
                throw new Error('Pengguna not found');
            }
            return result[0];
        } catch (err) {
            throw new Error('Error fetching pengguna by ID: ' + err.message);
        }
    }

    static async update(id, data) {
        try {
            const query = `
                UPDATE pengguna 
                SET name = ?, email = ?, role = ?, password = ?, pekerjaan = ?, jenis_kelamin = ?, no_hp = ?, lokasi = ?, foto_profile = ?, updated_at = ? 
                WHERE id = ?
            `;
            const [result] = await db.execute(query, [
                data.name,
                data.email,
                data.role,
                data.password,
                data.pekerjaan,
                data.jenis_kelamin,
                data.no_hp,
                data.lokasi,
                data.foto_profile,
                new Date(),
                id
            ]);

            if (result.affectedRows === 0) {
                throw new Error('Pengguna not found to update');
            }

            return result;
        } catch (err) {
            throw new Error('Error updating pengguna: ' + err.message);
        }
    }

    static async delete(id) {
        try {
            const query = 'DELETE FROM pengguna WHERE id = ?';
            const [result] = await db.execute(query, [id]);

            if (result.affectedRows === 0) {
                throw new Error('Pengguna not found to delete');
            }

            return result;
        } catch (err) {
            throw new Error('Error deleting pengguna: ' + err.message);
        }
    }

    // Metode untuk mendapatkan pengguna berdasarkan email
    static async getByEmail(email) {
        try {
            const query = 'SELECT * FROM pengguna WHERE email = ?';
            const [result] = await db.execute(query, [email]);

            if (result.length === 0) {
                return null; // Tidak ditemukan
            }
            return result[0]; // Mengembalikan pengguna
        } catch (err) {
            throw new Error('Error fetching pengguna by email: ' + err.message);
        }
    }
}

export default Pengguna;
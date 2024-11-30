// models/User.js
import db from '../database/Nusairadb.js';
import bcrypt from 'bcrypt';

class User {
    constructor(data) {
        this.email = data.email;
        this.password = data.password; // Password harus dihash sebelum disimpan
    }

    static async findByEmail(email) {
        try {
            const [rows] = await db.execute('SELECT * FROM users WHERE email = ?', [email]);
            return rows[0]; // Mengembalikan pengguna jika ditemukan
        } catch (error) {
            throw new Error('Error fetching user: ' + error.message);
        }
    }

    static async register(data) {
        const { email, password } = data;
        const hashedPassword = await bcrypt.hash(password, 10);
        try {
            const [result] = await db.execute('INSERT INTO users (email, password) VALUES (?, ?)', [email, hashedPassword]);
            return result.insertId; // Mengembalikan ID pengguna yang baru dibuat
        } catch (error) {
            throw new Error('Error registering user: ' + error.message);
        }
    }
}

export default User;
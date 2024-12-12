import db from '../database/Nusairadb.js';
import bcrypt from 'bcryptjs'; // Tambahkan bcrypt untuk hashing password

class UserProfile {

    constructor(data) {
        this.name = data.name;
        this.email = data.email;
        this.password = data.password; // Password baru
        this.foto_profile = data.foto_profile || null; // Ganti profilePicture dengan foto_profile
        this.pekerjaan = data.pekerjaan || null;
        this.jenis_kelamin = data.jenis_kelamin || null;
        this.lokasi = data.lokasi || null;
        this.no_hp = data.no_hp || null;
        this.created_at = data.created_at || new Date().toISOString();
    }

    static validate(data) {
        const errors = [];

        if (!data.name) errors.push("Name harus diisi.");
        if (!data.email) errors.push("Email harus diisi.");
        if (!data.password) errors.push("Password harus diisi.");

        return errors;
    }

    // Fungsi untuk hash password sebelum disimpan
    static async hashPassword(password) {
        const salt = await bcrypt.genSalt(10);
        return await bcrypt.hash(password, salt);
    }

    static async save(data) {
        const validationErrors = this.validate(data);
        if (validationErrors.length > 0) {
            throw new Error(validationErrors.join(", "));
        }

        try {
            // Hash password jika ada
            const hashedPassword = await this.hashPassword(data.password);

            const query = `
                INSERT INTO pengguna (name, email, password, foto_profile, pekerjaan, jenis_kelamin, lokasi, no_hp, created_at)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
            `;
            const [result] = await db.execute(query, [
                data.name,  
                data.email,
                hashedPassword, // Menyimpan hashed password
                data.foto_profile, // Ganti profilePicture dengan foto_profile
                data.pekerjaan,
                data.jenis_kelamin,
                data.lokasi,
                data.no_hp,
                data.created_at
            ]);
            return result;
        } catch (error) {
            console.error("Error saving user profile:", error.message);
            throw error;
        }
    }

    static async getUserById(userId) {
        try {
            const [result] = await db.execute('SELECT * FROM pengguna WHERE id = ?', [userId]);
            return result[0];  
        } catch (error) {
            console.error("Error fetching user by ID:", error.message);
            throw error;
        }
    }

    static async deleteUserById(userId) {
        try {
            const query = 'DELETE FROM pengguna WHERE id = ?';
            const [result] = await db.execute(query, [userId]);
            return result.affectedRows > 0; 
        } catch (error) {
            console.error("Error deleting user by ID:", error.message);
            throw error;
        }
    }

    // Metode untuk mengupdate profil pengguna
    static async updateUserProfile(userId, data) {
        try {
            const updateData = [
                data.name,
                data.email,
                data.pekerjaan,
                data.jenis_kelamin,
                data.lokasi,
                data.no_hp,
                data.foto_profile, // Ganti profilePicture dengan foto_profile
                userId
            ];

            // Jika ada password baru, hash passwordnya
            if (data.password) {
                const hashedPassword = await this.hashPassword(data.password);
                updateData[2] = hashedPassword; // Ganti password dengan hashed password
            }

            const query = `
                UPDATE pengguna 
                SET name = ?, email = ?, password = ?, pekerjaan = ?, jenis_kelamin = ?, lokasi = ?, no_hp = ?, foto_profile = ?
                WHERE id = ?
            `;
            const [result] = await db.execute(query, updateData);
            return result.affectedRows > 0; // Jika ada perubahan, return true
        } catch (error) {
            console.error("Error updating user profile:", error.message);
            throw error;
        }
    }
}

export default UserProfile;

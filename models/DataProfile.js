import db from '../database/Nusairadb.js';

class UserProfile {
    constructor(data) {
        this.name = data.name; // Mengganti username dengan name
        this.email = data.email;
        this.password = data.password;
        this.profilePicture = data.profilePicture || null;
        this.pekerjaan = data.pekerjaan || null;
        this.jenis_kelamin = data.jenis_kelamin || null;
        this.lokasi = data.lokasi || null;
        this.no_hp = data.no_hp || null;
        this.created_at = data.created_at || new Date().toISOString(); // Menambahkan created_at
    }

    static validate(data) {
        const errors = [];

        if (!data.name) errors.push("Name harus diisi.");  // Mengubah validasi untuk name
        if (!data.email) errors.push("Email harus diisi.");
        if (!data.password) errors.push("Password harus diisi.");

        return errors;
    }

    static async save(data) {
        const validationErrors = this.validate(data);
        if (validationErrors.length > 0) {
            throw new Error(validationErrors.join(", "));
        }

        try {
            const query = `
                INSERT INTO pengguna (name, email, password, profilePicture, pekerjaan, jenis_kelamin, lokasi, no_hp, created_at)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
            `;
            const [result] = await db.execute(query, [
                data.name,  
                data.email,
                data.password,
                data.profilePicture,
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
}

export default UserProfile;

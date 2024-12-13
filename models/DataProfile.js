import db from '../database/Nusairadb.js';

class UserProfile {
    constructor(data) {
        this.name = data.name;
        this.email = data.email;
        this.password = data.password; 
        this.foto_profile = data.foto_profile || ''; 
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

        return errors;
    }

    static async save(data) {
        const validationErrors = this.validate(data);
        if (validationErrors.length > 0) {
            throw new Error(validationErrors.join(", "));
        }

        try {
            const query = `
                INSERT INTO pengguna (name, email, password, foto_profile, pekerjaan, jenis_kelamin, lokasi, no_hp, created_at)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
            `;
            const [result] = await db.execute(query, [
                data.name,  
                data.email,
                data.password,  // Tidak mengubah password, langsung pakai password yang diterima
                data.foto_profile, 
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

    static async updateUserProfile(userId, data) {
        try {
            const fields = [];
            const values = [];

            if (data.foto_profile) {
                fields.push("foto_profile = ?");
                values.push(data.foto_profile);
            }
    
            // Hanya tambahkan field yang valid
            if (data.name) {
                fields.push("name = ?");
                values.push(data.name);
            }
            if (data.email) {
                fields.push("email = ?");
                values.push(data.email);
            }
            if (data.pekerjaan) {
                fields.push("pekerjaan = ?");
                values.push(data.pekerjaan);
            }
            if (data.jenis_kelamin) {
                fields.push("jenis_kelamin = ?");
                values.push(data.jenis_kelamin);
            }
            if (data.lokasi) {
                fields.push("lokasi = ?");
                values.push(data.lokasi);
            }
            if (data.no_hp) {
                fields.push("no_hp = ?");
                values.push(data.no_hp);
            }
        
            if (fields.length === 0) {
                throw new Error("No fields to update.");
            }
    
            // Pastikan query hanya mencakup kolom yang benar, tidak menyertakan password
            const query = `UPDATE pengguna SET ${fields.join(", ")} WHERE id = ?`;
            values.push(userId);
    
            const [result] = await db.execute(query, values);
            return result.affectedRows > 0;
        } catch (error) {
            console.error("Error updating user profile:", error.message); // Debugging error log
            throw error;
        }
    }
    
}

export default UserProfile;

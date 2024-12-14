import db from '../database/Nusairadb.js';

class UserModel {
    static async getUserById(userId) {
        try {
            const [result] = await db.execute('SELECT * FROM pengguna WHERE id = ?', [userId]);
            return result[0];
        } catch (error) {
            console.error("Error fetching user by ID:", error.message);
            throw error;
        }
    }

    static async updatePassword(userId, hashedPassword) {
        try {
            const query = 'UPDATE pengguna SET password = ? WHERE id = ?';
            const [result] = await db.execute(query, [hashedPassword, userId]);
            return result.affectedRows > 0; 
        } catch (error) {
            console.error("Error updating password:", error.message);
            throw error;
        }
    }
}

export default UserModel;

import bcrypt from 'bcrypt';
import UserModel from '../models/DataUser.js';

class UserController {
    static async changePassword(req, res) {
        const userId = req.user.id; 
        const { oldPassword, newPassword } = req.body;

        if (!oldPassword || !newPassword) {
            return res.status(400).json({ message: "Semua field harus diisi." });
        }

        try {
            const user = await UserModel.getUserById(userId);
            if (!user) {
                return res.status(404).json({ message: "User tidak ditemukan." });
            }

            const isPasswordValid = await bcrypt.compare(oldPassword, user.password);
            if (!isPasswordValid) {
                return res.status(400).json({ message: "Password lama tidak sesuai." });
            }

            const hashedNewPassword = await bcrypt.hash(newPassword, 10);

            const isUpdated = await UserModel.updatePassword(userId, hashedNewPassword);
            if (isUpdated) {
                return res.status(200).json({ message: "Password berhasil diubah." });
            } else {
                return res.status(500).json({ message: "Gagal mengubah password." });
            }
        } catch (error) {
            console.error("Error in changePassword:", error.message);
            return res.status(500).json({ message: "Terjadi kesalahan pada server." });
        }
    }
}

export default UserController;

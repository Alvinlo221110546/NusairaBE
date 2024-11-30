// controllers/AuthController.js
import User from '../models/User.js';
import bcrypt from 'bcrypt';

class AuthController {
    async login(req, res) {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Email dan Kata Sandi harus diisi.' });
        }

        try {
            const user = await User.findByEmail(email);
            if (!user) {
                return res.status(401).json({ message: 'Email atau kata sandi salah.' });
            }

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(401).json({ message: 'Email atau kata sandi salah.' });
            }

            // Jika login berhasil, Anda bisa mengembalikan token atau data pengguna
            res.status(200).json({ message: 'Login Berhasil!', user: { email: user.email } });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Terjadi kesalahan pada server.', error: error.message });
        }
    }
}

export default new AuthController();
import Pengguna from '../models/DataPengguna.js';
import bcrypt from 'bcrypt';

class PenggunaController {
  async login(req, res) {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'Email dan kata sandi harus diisi!' });
    }

    try {
      const pengguna = await Pengguna.getByEmail(email);
      if (!pengguna) {
        return res.status(404).json({ message: 'Pengguna tidak ditemukan' });
      }

      const isMatch = await bcrypt.compare(password, pengguna.password);
      if (!isMatch) {
        return res.status(401).json({ message: 'Kata sandi salah' });
      }

      // Simpan status login di session atau cookie jika diperlukan
      res.status(200).json({ message: 'Login berhasil' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Terjadi kesalahan saat autentikasi', error: err.message });
    }
  }
}

export default new PenggunaController();
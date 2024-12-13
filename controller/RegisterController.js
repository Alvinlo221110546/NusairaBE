import bcrypt from 'bcryptjs';
import Register from "../models/DataRegister.js";

export const registerUser = async (req, res) => {
  const { name, username, email, password, no_hp, pekerjaan, jenis_kelamin, lokasi } = req.body;

  if (!name || !username || !email || !password || !no_hp || !pekerjaan || !jenis_kelamin || !lokasi) {
    return res.status(400).json({ message: "Semua data harus diisi" });
  }

  try {
    const existingUser = await Register.findByEmail(email);
    if (existingUser) {
      return res.status(400).json({ message: "Email sudah terdaftar" });
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);

    const userId = await Register.create(name, username, email, hashedPassword, "user", no_hp, pekerjaan, jenis_kelamin, lokasi);

    res.status(200).json({ message: "Registrasi berhasil", userId });
  } catch (error) {
    res.status(500).json({ message: "Terjadi kesalahan saat registrasi", error: error.message });
  }
};

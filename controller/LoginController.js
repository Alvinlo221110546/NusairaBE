import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Pengguna from "../models/DataLogin.js";

/**
 * Fungsi untuk login pengguna
 * @param {Request} req - Request dari client
 * @param {Response} res - Response dari server
 */
export const loginUser = async (req, res) => {
  // Ambil input dan sanitasi
  const email = req.body.email || null; // Ganti undefined dengan null
  const password = req.body.password || null; // Ganti undefined dengan null

  // Validasi input
  if (!email || !password) {
    return res.status(400).json({ message: "Email dan password harus diisi" });
  }

  try {
    // Mencari pengguna berdasarkan email
    console.log("Email diterima dari request:", email); // Debugging log
    const pengguna = await Pengguna.findOneByEmail(email);

    if (!pengguna) {
      return res.status(404).json({ message: "Pengguna tidak ditemukan" });
    }

    console.log("Pengguna ditemukan:", pengguna); // Debugging log

    // Verifikasi password
    const isPasswordValid = await bcrypt.compare(password, pengguna.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Kredensial tidak valid" });
    }

    // Membuat JWT
    const token = jwt.sign(
      { id: pengguna.id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({
      message: "Login berhasil",
      token,
      profile: { id: pengguna.id, name: pengguna.name, email: pengguna.email },
    });
  } 
  catch (error) {
    console.error("Error saat login:", error.message); // Debugging log
    res.status(500).json({ message: "Terjadi kesalahan saat login", error: error.message });
  }
};

/**
 * Fungsi untuk registrasi pengguna baru
 * @param {Request} req - Request dari client
 * @param {Response} res - Response dari server
 */
export const registerUser = async (req, res) => {
  // Ambil input dan sanitasi
  const name = req.body.name || null;
  const email = req.body.email || null;
  const password = req.body.password || null;
  const role = req.body.role || "user"; // Default role 'user'

  // Validasi input
  if (!name || !email || !password) {
    return res.status(400).json({ message: "Semua data harus diisi" });
  }

  try {
    // Periksa apakah email sudah terdaftar
    console.log("Email untuk registrasi:", email); // Debugging log
    const existingUser = await Pengguna.findOneByEmail(email);
    if (existingUser) {
      return res.status(400).json({ message: "Email sudah terdaftar" });
    }

    console.log("Email belum terdaftar, melanjutkan registrasi."); // Debugging log

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Simpan pengguna baru
    const result = await Pengguna.create(name, email, hashedPassword, role);
    console.log("Hasil registrasi:", result); // Debugging log

    res.status(201).json({ message: "Registrasi berhasil" });
  } catch (error) {
    console.error("Error saat registrasi:", error.message); // Debugging log
    res.status(500).json({ message: "Terjadi kesalahan saat registrasi", error: error.message });
  }
};

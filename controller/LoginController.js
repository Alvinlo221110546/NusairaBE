import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Pengguna from "../models/DataLogin.js";


/**
 * Fungsi untuk login pengguna
 * @param {Request} req - Request dari client
 * @param {Response} res - Response dari server
 */
export const loginUser = async (req, res) => {
  const email = req.body.email || null; 
  const password = req.body.password || null; 

  if (!email || !password) {
    return res.status(400).json({ message: "Email dan password harus diisi" });
  }

  try {
    console.log("Email diterima dari request:", email); 
    const pengguna = await Pengguna.findOneByEmail(email);

    if (!pengguna) {
      return res.status(404).json({ message: "Pengguna tidak ditemukan" });
    }

    console.log("Pengguna ditemukan:", pengguna); 

    const isPasswordValid = await bcrypt.compare(password, pengguna.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Kredensial tidak valid" });
    }

    const token = jwt.sign(
      { id: pengguna.id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.cookie("token", token, {
      httpOnly: true, 
      secure: process.env.NODE_ENV === "production", 
      maxAge: 3600 * 1000, 
    });

    res.status(200).json({
      message: "Login berhasil",
      profile: { id: pengguna.id, name: pengguna.name, email: pengguna.email },
    });
  } 
  catch (error) {
    console.error("Error saat login:", error.message);
    res.status(500).json({ message: "Terjadi kesalahan saat login", error: error.message });
  }
};

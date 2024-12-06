import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

/**
 * Middleware untuk otentikasi pengguna
 * @param {Request} req - Request dari client
 * @param {Response} res - Response dari server
 * @param {Function} next - Melanjutkan ke middleware berikutnya
 */
const authMiddleware = (req, res, next) => {
  try {
    // Ambil token dari header Authorization
    const authHeader = req.headers.authorization;

    // Validasi keberadaan token
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        message: "Akses ditolak, token tidak tersedia atau format salah",
      });
    }

    // Ekstraksi token
    const token = authHeader.split(" ")[1];

    // Validasi keberadaan secret key
    if (!process.env.JWT_SECRET) {
      return res.status(500).json({
        message: "Server error: JWT_SECRET tidak ditemukan di environment variables",
      });
    }

    // Verifikasi token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Menyimpan data pengguna ke request untuk digunakan di middleware/route berikutnya
    req.user = decoded;

    // Melanjutkan ke middleware berikutnya
    next();
  } catch (err) {
    // Menangani error saat token tidak valid atau kadaluarsa
    let errorMessage = "Token tidak valid atau kadaluarsa";

    if (err.name === "TokenExpiredError") {
      errorMessage = "Token sudah kadaluarsa";
    } else if (err.name === "JsonWebTokenError") {
      errorMessage = "Token tidak valid";
    }

    return res.status(403).json({
      message: errorMessage,
      error: err.message,
    });
  }
};

export default authMiddleware;

import jwt from 'jsonwebtoken';

// Middleware untuk memverifikasi token JWT
export const verifyToken = (req, res, next) => {
    // Ambil token dari header Authorization
    const token = req.headers['authorization']?.split(' ')[1]; // Mengambil token setelah 'Bearer'

    if (!token) {
        return res.status(401).json({ message: 'Token tidak ditemukan, akses ditolak!' });
    }

    // Verifikasi token
    jwt.verify(token, process.env.JWT_SECRET || 'secret_key', (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Token tidak valid, akses ditolak!' });
        }

        // Simpan informasi pengguna ke dalam request untuk digunakan di rute berikutnya
        req.userId = decoded.id;
        req.userEmail = decoded.email; // Jika Anda ingin mengambil email juga
        next(); // Melanjutkan ke rute berikutnya
    });
};
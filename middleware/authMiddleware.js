import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Token tidak ditemukan, akses ditolak!' });
    }

    jwt.verify(token, process.env.JWT_SECRET || 'secret_key', (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Token tidak valid, akses ditolak!' });
        }

        req.userId = decoded.id;
        req.userEmail = decoded.email;
        next();
    });
};
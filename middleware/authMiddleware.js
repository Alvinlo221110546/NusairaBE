import jwt from 'jsonwebtoken';
import db from '../database/Nusairadb.js'; 

const authMiddleware = async (req, res, next) => {
    try {
        const token = req.cookies.token; 

        if (!token) {
            return res.status(401).json({ message: 'Token tidak tersedia. Akses ditolak!' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decoded.id;

        const [user] = await db.execute('SELECT * FROM pengguna WHERE id = ?', [userId]);
        if (!user.length) {
            return res.status(401).json({ message: 'Pengguna tidak valid!' });
        }

        req.user = { id: userId, ...user[0] };

        next();
    } catch (error) {
        console.error(error);
        res.status(403).json({ message: 'Token tidak valid!', error: error.message });
    }
};

export default authMiddleware;

import multer from 'multer';
import path from 'path';

// Set up multer storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // Tentukan lokasi folder untuk menyimpan file
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        // Berikan nama file unik dengan menambahkan timestamp
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

// Tentukan batas ukuran file dan tipe file yang diterima
const upload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // Maksimal 5MB
    fileFilter: (req, file, cb) => {
        // Memfilter hanya file gambar
        const filetypes = /jpeg|jpg|png|gif/;
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = filetypes.test(file.mimetype);

        if (extname && mimetype) {
            return cb(null, true);
        } else {
            cb(new Error('Hanya gambar yang diperbolehkan!'));
        }
    }
}).single('foto_profile'); // Menangani upload dengan field 'foto_profile'

// Middleware untuk menangani upload
export const uploadFileMiddleware = (req, res, next) => {
    upload(req, res, (err) => {
        if (err) {
            return res.status(400).json({ message: err.message });
        }
        next(); // Jika berhasil, lanjut ke handler selanjutnya
    });
};

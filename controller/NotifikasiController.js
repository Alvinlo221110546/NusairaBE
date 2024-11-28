import Notifikasi from '../models/DataNotifikasi.js';

class NotifikasiController {
    async addNotifikasi(req, res) {
        const { type, date, title, description } = req.body;

        if (!type || !date || !title || !description) {
            return res.status(400).json({ message: 'Semua kolom harus diisi!' });
        }

        try {
            const notifikasi = { type, date, title, description };
            await Notifikasi.save(notifikasi);
            res.status(201).json({ message: 'Notifikasi berhasil ditambahkan!' });
        } catch (err) {
            console.error('Error saat menambahkan notifikasi:', err);
            res.status(500).json({
                message: 'Terjadi kesalahan dalam menambahkan notifikasi',
                error: err.message,
            });
        }
    }

    async getAllNotifikasi(req, res) {
        try {
            const notifikasiData = await Notifikasi.getAll();
            res.status(200).json(notifikasiData); // Tetap return array kosong jika data tidak ada
        } catch (err) {
            console.error('Error saat mengambil semua notifikasi:', err);
            res.status(500).json({
                message: 'Terjadi kesalahan dalam mengambil data notifikasi',
                error: err.message,
            });
        }
    }

    async getNotifikasiById(req, res) {
        const notifikasiId = req.params.id;

        try {
            const notifikasi = await Notifikasi.getById(notifikasiId);
            if (!notifikasi) {
                return res.status(404).json({ message: 'Notifikasi tidak ditemukan' });
            }
            res.status(200).json(notifikasi);
        } catch (err) {
            console.error('Error saat mengambil notifikasi berdasarkan ID:', err);
            res.status(500).json({
                message: 'Terjadi kesalahan dalam mengambil data notifikasi',
                error: err.message,
            });
        }
    }

    async updateNotifikasi(req, res) {
        const notifikasiId = req.params.id;
        const { type, date, title, description } = req.body;

        if (!type || !date || !title || !description) {
            return res.status(400).json({ message: 'Semua kolom harus diisi!' });
        }

        try {
            const updatedNotifikasi = { type, date, title, description };
            await Notifikasi.update(notifikasiId, updatedNotifikasi);
            res.status(200).json({ message: 'Notifikasi berhasil diperbarui!' });
        } catch (err) {
            console.error('Error saat mengupdate notifikasi:', err);
            res.status(500).json({
                message: 'Terjadi kesalahan dalam mengupdate notifikasi',
                error: err.message,
            });
        }
    }

    async deleteNotifikasi(req, res) {
        const notifikasiId = req.params.id;

        try {
            await Notifikasi.delete(notifikasiId);
            res.status(200).json({ message: 'Notifikasi berhasil dihapus!' });
        } catch (err) {
            console.error('Error saat menghapus notifikasi:', err);
            res.status(500).json({
                message: 'Terjadi kesalahan dalam menghapus notifikasi',
                error: err.message,
            });
        }
    }
}

export default new NotifikasiController();

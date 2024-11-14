import Notifikasi from '../models/DataNotifikasi.js'; // Pastikan path sesuai

class NotifikasiController {
    // Menambahkan notifikasi baru
    async addNotifikasi(req, res) {
        const { type, date, title, description, image, user_id } = req.body;

        if (!type || !date || !title || !description || !image || !user_id) {
            return res.status(400).json({ message: 'Semua kolom harus diisi!' });
        }

        try {
            const notifikasi = { type, date, title, description, image, user_id };
            await Notifikasi.save(notifikasi);
            res.status(201).json({ message: 'Notifikasi berhasil ditambahkan!' });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Terjadi kesalahan dalam menambahkan notifikasi', error: err.message });
        }
    }

    // Mendapatkan semua notifikasi
    async getAllNotifikasi(req, res) {
        try {
            const notifikasiData = await Notifikasi.getAll();

            if (notifikasiData.length === 0) {
                return res.status(404).json({ message: 'Tidak ada notifikasi yang ditemukan' });
            }

            res.status(200).json(notifikasiData);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Terjadi kesalahan dalam mengambil data notifikasi', error: err.message });
        }
    }

    // Mendapatkan notifikasi berdasarkan ID
    async getNotifikasiById(req, res) {
        const notifikasiId = req.params.id;

        try {
            const notifikasi = await Notifikasi.getById(notifikasiId);
            if (!notifikasi) {
                return res.status(404).json({ message: 'Notifikasi tidak ditemukan' });
            }
            res.status(200).json(notifikasi);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Terjadi kesalahan dalam mengambil data notifikasi', error: err.message });
        }
    }

    // Mengupdate notifikasi berdasarkan ID
    async updateNotifikasi(req, res) {
        const notifikasiId = req.params.id;
        const { type, date, title, description, image, user_id } = req.body;

        if (!type || !date || !title || !description || !image || !user_id) {
            return res.status(400).json({ message: 'Semua kolom harus diisi!' });
        }

        try {
            const updatedNotifikasi = { type, date, title, description, image, user_id };
            await Notifikasi.update(notifikasiId, updatedNotifikasi);
            res.status(200).json({ message: 'Notifikasi berhasil diperbarui!' });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Terjadi kesalahan dalam mengupdate notifikasi', error: err.message });
        }
    }

    // Menghapus notifikasi berdasarkan ID
    async deleteNotifikasi(req, res) {
        const notifikasiId = req.params.id;

        try {
            await Notifikasi.delete(notifikasiId);
            res.status(200).json({ message: 'Notifikasi berhasil dihapus!' });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Terjadi kesalahan dalam menghapus notifikasi', error: err.message });
        }
    }
}

export default new NotifikasiController();

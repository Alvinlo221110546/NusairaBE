import Pemasukan from '../models/DataPemasukan.js'; // Pastikan path sesuai

class PemasukanController {
    // Menambahkan pemasukan baru
    async addPemasukan(req, res) {
        const { date, kategori, jumlah, harga, keterangan, total, user_id } = req.body;

        if (!date || !kategori || jumlah === undefined || harga === undefined || !keterangan || total === undefined || !user_id) {
            return res.status(400).json({ message: 'Semua kolom harus diisi!' });
        }

        try {
            const pemasukan = { date, kategori, jumlah, harga, keterangan, total, user_id };
            await Pemasukan.save(pemasukan);
            res.status(201).json({ message: 'Pemasukan berhasil ditambahkan!' });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Terjadi kesalahan dalam menambahkan pemasukan', error: err.message });
        }
    }

    // Mendapatkan semua pemasukan
    async getAllPemasukan(req, res) {
        try {
            const pemasukanData = await Pemasukan.getAll();

            if (pemasukanData.length === 0) {
                return res.status(404).json({ message: 'Tidak ada pemasukan yang ditemukan' });
            }

            res.status(200).json(pemasukanData);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Terjadi kesalahan dalam mengambil data pemasukan', error: err.message });
        }
    }

    // Mendapatkan pemasukan berdasarkan ID
    async getPemasukanById(req, res) {
        const pemasukanId = req.params.id;

        try {
            const pemasukan = await Pemasukan.getById(pemasukanId);
            if (!pemasukan) {
                return res.status(404).json({ message: 'Pemasukan tidak ditemukan' });
            }
            res.status(200).json(pemasukan);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Terjadi kesalahan dalam mengambil data pemasukan', error: err.message });
        }
    }

    // Mengupdate pemasukan berdasarkan ID
    async updatePemasukan(req, res) {
        const pemasukanId = req.params.id;
        const { date, kategori, jumlah, harga, keterangan, total, user_id } = req.body;

        if (!date || !kategori || jumlah === undefined || harga === undefined || !keterangan || total === undefined || !user_id) {
            return res.status(400).json({ message: 'Semua kolom harus diisi!' });
        }

        try {
            const updatedPemasukan = { date, kategori, jumlah, harga, keterangan, total, user_id };
            await Pemasukan.update(pemasukanId, updatedPemasukan);
            res.status(200).json({ message: 'Pemasukan berhasil diperbarui!' });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Terjadi kesalahan dalam mengupdate pemasukan', error: err.message });
        }
    }

    // Menghapus pemasukan berdasarkan ID
    async deletePemasukan(req, res) {
        const pemasukanId = req.params.id;

        try {
            await Pemasukan.delete(pemasukanId);
            res.status(200).json({ message: 'Pemasukan berhasil dihapus!' });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Terjadi kesalahan dalam menghapus pemasukan', error: err.message });
        }
    }
}

export default new PemasukanController();
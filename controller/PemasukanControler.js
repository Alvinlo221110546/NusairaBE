import Pemasukan from '../models/DataPemasukan.js';
class PemasukanController {
    async addPemasukan(req, res) {
        const { date, kategori, jumlah, harga, keterangan, total, tambak_id } = req.body;

        if (!date || !kategori || jumlah === undefined || harga === undefined || !keterangan || total === undefined || !tambak_id) {
            return res.status(400).json({ message: 'Semua kolom harus diisi!' });
        }

        try {
            const pemasukan = { date, kategori, jumlah, harga, keterangan, total, tambak_id };
            await Pemasukan.save(pemasukan);
            res.status(200).json({ message: 'Pemasukan berhasil ditambahkan!' });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Terjadi kesalahan dalam menambahkan pemasukan', error: err.message });
        }
    }

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

    async updatePemasukan(req, res) {
        const pemasukanId = req.params.id;
        const { date, kategori, jumlah, harga, keterangan, total, tambak_id } = req.body;

        if (!date || !kategori || jumlah === undefined || harga === undefined || !keterangan || total === undefined || !tambak_id) {
            return res.status(400).json({ message: 'Semua kolom harus diisi!' });
        }

        try {
            const updatedPemasukan = { date, kategori, jumlah, harga, keterangan, total, tambak_id };
            await Pemasukan.update(pemasukanId, updatedPemasukan);
            res.status(200).json({ message: 'Pemasukan berhasil diperbarui!' });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Terjadi kesalahan dalam mengupdate pemasukan', error: err.message });
        }
    }

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

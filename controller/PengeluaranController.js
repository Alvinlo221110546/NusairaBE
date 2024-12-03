import Pengeluaran from '../models/DataPengeluaran.js'; // Pastikan path sesuai

class PengeluaranController {
    // Menambahkan pengeluaran baru
    async addPengeluaran(req, res) {
        const { date, jenis_pengeluaran, nama_barang, catatan, status, sisa_tagihan, tambak_id } = req.body;
        console.log(req.body);

        // Validasi input
        if (!date || !jenis_pengeluaran || !nama_barang || !catatan || !status || sisa_tagihan === undefined || !tambak_id) {
            return res.status(400).json({ message: 'Semua kolom harus diisi!' });
        }

        try {
            const pengeluaran = { date, jenis_pengeluaran, nama_barang, catatan, status, sisa_tagihan, tambak_id };
            await Pengeluaran.save(pengeluaran);
            res.status(201).json({ message: 'Pengeluaran berhasil ditambahkan!' });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Terjadi kesalahan dalam menambahkan pengeluaran', error: err.message });
        }
    }

    // Mendapatkan semua pengeluaran
    async getAllPengeluaran(req, res) {
        try {
            const pengeluaranData = await Pengeluaran.getAll();

            if (pengeluaranData.length === 0) {
                return res.status(404).json({ message: 'Tidak ada pengeluaran yang ditemukan' });
            }

            res.status(200).json(pengeluaranData);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Terjadi kesalahan dalam mengambil data pengeluaran', error: err.message });
        }
    }

    // Mendapatkan pengeluaran berdasarkan ID
    async getPengeluaranById(req, res) {
        const pengeluaranId = req.params.id;

        try {
            const pengeluaran = await Pengeluaran.getById(pengeluaranId);
            if (!pengeluaran) {
                return res.status(404).json({ message: 'Pengeluaran tidak ditemukan' });
            }
            res.status(200).json(pengeluaran);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Terjadi kesalahan dalam mengambil data pengeluaran', error: err.message });
        }
    }

    // Mengupdate pengeluaran berdasarkan ID
    async updatePengeluaran(req, res) {
        const pengeluaranId = req.params.id;
        const { date, jenis_pengeluaran, nama_barang, catatan, status, sisa_tagihan, tambak_id } = req.body;

        // Validasi input
        if (!date || !jenis_pengeluaran || !nama_barang || !catatan || !status || sisa_tagihan === undefined || !tambak_id) {
            return res.status(400).json({ message: 'Semua kolom harus diisi!' });
        }

        try {
            const updatedPengeluaran = { date, jenis_pengeluaran, nama_barang, catatan, status, sisa_tagihan, tambak_id };
            await Pengeluaran.update(pengeluaranId, updatedPengeluaran);
            res.status(200).json({ message: 'Pengeluaran berhasil diperbarui!' });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Terjadi kesalahan dalam mengupdate pengeluaran', error: err.message });
        }
    }

    // Menghapus pengeluaran berdasarkan ID
    async deletePengeluaran(req, res) {
        const pengeluaranId = req.params.id;

        try {
            await Pengeluaran.delete(pengeluaranId);
            res.status(200).json({ message: 'Pengeluaran berhasil dihapus!' });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Terjadi kesalahan dalam menghapus pengeluaran', error: err.message });
        }
    }
}

export default new PengeluaranController();
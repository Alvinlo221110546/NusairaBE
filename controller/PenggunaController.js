import Pengguna from '../models/DataPengguna.js'; // Pastikan path sesuai

class PenggunaController {
    // Menambahkan pengguna baru
    async addPengguna(req, res) {
        const { name, email, role, password, pekerjaan, jenis_kelamin, no_hp, lokasi, foto_profile } = req.body;

        if (!name || !email || !role || !password || !pekerjaan || !jenis_kelamin || !no_hp || !lokasi || !foto_profile) {
            return res.status(400).json({ message: 'Semua kolom harus diisi!' });
        }

        try {
            const pengguna = { name, email, role, password, pekerjaan, jenis_kelamin, no_hp, lokasi, foto_profile };
            await Pengguna.save(pengguna);
            res.status(201).json({ message: 'Pengguna berhasil ditambahkan!' });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Terjadi kesalahan dalam menambahkan pengguna', error: err.message });
        }
    }

    // Mendapatkan semua pengguna
    async getAllPengguna(req, res) {
        try {
            const penggunaData = await Pengguna.getAll();

            if (penggunaData.length === 0) {
                return res.status(404).json({ message: 'Tidak ada pengguna yang ditemukan' });
            }

            res.status(200).json(penggunaData);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Terjadi kesalahan dalam mengambil data pengguna', error: err.message });
        }
    }

    // Mendapatkan pengguna berdasarkan ID
    async getPenggunaById(req, res) {
        const penggunaId = req.params.id;

        try {
            const pengguna = await Pengguna.getById(penggunaId);
            if (!pengguna) {
                return res.status(404).json({ message: 'Pengguna tidak ditemukan' });
            }
            res.status(200).json(pengguna);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Terjadi kesalahan dalam mengambil data pengguna', error: err.message });
        }
    }

    // Mengupdate pengguna berdasarkan ID
    async updatePengguna(req, res) {
        const penggunaId = req.params.id;
        const { name, email, role, password, pekerjaan, jenis_kelamin, no_hp, lokasi, foto_profile } = req.body;

        if (!name || !email || !role || !password || !pekerjaan || !jenis_kelamin || !no_hp || !lokasi || !foto_profile) {
            return res.status(400).json({ message: 'Semua kolom harus diisi!' });
        }

        try {
            const updatedPengguna = { name, email, role, password, pekerjaan, jenis_kelamin, no_hp, lokasi, foto_profile };
            await Pengguna.update(penggunaId, updatedPengguna);
            res.status(200).json({ message: 'Pengguna berhasil diperbarui!' });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Terjadi kesalahan dalam mengupdate pengguna', error: err.message });
        }
    }

    // Menghapus pengguna berdasarkan ID
    async deletePengguna(req, res) {
        const penggunaId = req.params.id;

        try {
            await Pengguna.delete(penggunaId);
            res.status(200).json({ message: 'Pengguna berhasil dihapus!' });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Terjadi kesalahan dalam menghapus pengguna', error: err.message });
        }
    }
}

export default new PenggunaController();

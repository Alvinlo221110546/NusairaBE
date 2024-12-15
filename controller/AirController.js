import KualitasAir from '../models/DataAir.js'; 

class KualitasAirController {
    async addKualitasAir(req, res) {
        const { ph, suhu, oksigen, salinitas, tambak_id } = req.body;

        if (ph === undefined || suhu === undefined || oksigen === undefined || salinitas === undefined || !tambak_id) {
            return res.status(400).json({ message: 'Semua kolom harus diisi!' });
        }

        try {
            const kualitasAir = { ph, suhu, oksigen, salinitas, tambak_id };
            await KualitasAir.save(kualitasAir);
            res.status(200).json({ message: 'Kualitas air berhasil ditambahkan!' });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Terjadi kesalahan dalam menambahkan kualitas air', error: err.message });
        }
    }

    async getAllKualitasAir(req, res) {
        try {
            const kualitasAirData = await KualitasAir.getAll();

            if (kualitasAirData.length === 0) {
                return res.status(404).json({ message: 'Tidak ada data kualitas air yang ditemukan' });
            }

            res.status(200).json(kualitasAirData);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Terjadi kesalahan dalam mengambil data kualitas air', error: err.message });
        }
    }

    async getKualitasAirById(req, res) {
        const kualitasAirId = req.params.id;

        try {
            const kualitasAir = await KualitasAir.getById(kualitasAirId);
            if (!kualitasAir) {
                return res.status(404).json({ message: 'Kualitas air tidak ditemukan' });
            }
            res.status(200).json(kualitasAir);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Terjadi kesalahan dalam mengambil data kualitas air', error: err.message });
        }
    }

    async updateKualitasAir(req, res) {
        const kualitasAirId = req.params.id;
        const { ph, suhu, oksigen, salinitas, tambak_id } = req.body;

        if (ph === undefined || suhu === undefined || oksigen === undefined || salinitas === undefined || !tambak_id) {
            return res.status(400).json({ message: 'Semua kolom harus diisi!' });
        }

        try {
            const updatedKualitasAir = { ph, suhu, oksigen, salinitas, tambak_id };
            await KualitasAir.update(kualitasAirId, updatedKualitasAir);
            res.status(200).json({ message: 'Kualitas air berhasil diperbarui!' });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Terjadi kesalahan dalam mengupdate kualitas air', error: err.message });
        }
    }

    async deleteKualitasAir(req, res) {
        const kualitasAirId = req.params.id;

        try {
            await KualitasAir.delete(kualitasAirId);
            res.status(200).json({ message: 'Kualitas air berhasil dihapus!' });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Terjadi kesalahan dalam menghapus kualitas air', error: err.message });
        }
    }
}

export default new KualitasAirController();

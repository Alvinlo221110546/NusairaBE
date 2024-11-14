import Berita from '../models/DataBerita.js'; // Pastikan path sesuai

class BeritaController {
    // Menambahkan berita baru
    async addBerita(req, res) {
        const { writer, title, description, content, image, date } = req.body;

        if (!writer || !title || !description || !content || !image || !date) {
            return res.status(400).json({ message: 'Semua kolom harus diisi!' });
        }

        try {
            const berita = { writer, title, description, content, image, date };
            await Berita.save(berita);
            res.status(201).json({ message: 'Berita berhasil ditambahkan!' });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Terjadi kesalahan dalam menambahkan berita', error: err.message });
        }
    }

    // Mendapatkan semua berita
    async getAllBerita(req, res) {
        try {
            const beritaData = await Berita.getAll();

            if (beritaData.length === 0) {
                return res.status(404).json({ message: 'Tidak ada berita yang ditemukan' });
            }

            res.status(200).json(beritaData);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Terjadi kesalahan dalam mengambil data berita', error: err.message });
        }
    }

    // Mendapatkan berita berdasarkan ID
    async getBeritaById(req, res) {
        const beritaId = req.params.id;

        try {
            const berita = await Berita.getById(beritaId);
            if (!berita) {
                return res.status(404).json({ message: 'Berita tidak ditemukan' });
            }
            res.status(200).json(berita);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Terjadi kesalahan dalam mengambil data berita', error: err.message });
        }
    }

    // Mengupdate berita berdasarkan ID
    async updateBerita(req, res) {
        const beritaId = req.params.id;
        const { writer, title, description, content, image, date } = req.body;

        if (!writer || !title || !description || !content || !image || !date) {
            return res.status(400).json({ message: 'Semua kolom harus diisi!' });
        }

        try {
            const updatedBerita = { writer, title, description, content, image, date };
            await Berita.update(beritaId, updatedBerita);
            res.status(200).json({ message: 'Berita berhasil diperbarui!' });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Terjadi kesalahan dalam mengupdate berita', error: err.message });
        }
    }

    // Menghapus berita berdasarkan ID
    async deleteBerita(req, res) {
        const beritaId = req.params.id;

        try {
            await Berita.delete(beritaId);
            res.status(200).json({ message: 'Berita berhasil dihapus!' });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Terjadi kesalahan dalam menghapus berita', error: err.message });
        }
    }
}

export default new BeritaController();

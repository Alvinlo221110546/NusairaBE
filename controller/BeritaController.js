import Berita from '../models/DataBerita.js'; 

class BeritaController {
    async addBerita(req, res) {
        const { writer, title, description, content, image, date } = req.body;

        try {
            const berita = { writer, title, description, content, image, date };
            const savedBerita = await Berita.save(berita);
            res.status(201).json({ 
                message: 'Berita berhasil ditambahkan!', 
                berita: savedBerita 
            });
        } catch (err) {
            res.status(500).json({ 
                message: 'Terjadi kesalahan dalam menambahkan berita', 
                error: err.message 
            });
        }
    }

   
    async getAllBerita(req, res) {
        try {
            const beritaData = await Berita.getAll();
            res.status(200).json({
                total: beritaData.length,
                berita: beritaData
            });
        } catch (err) {
            res.status(500).json({ 
                message: 'Terjadi kesalahan dalam mengambil data berita', 
                error: err.message 
            });
        }
    }

   
    async getBeritaById(req, res) {
        const beritaId = req.params.id;

        try {
            const berita = await Berita.getById(beritaId);
            res.status(200).json(berita);
        } catch (err) {
            res.status(404).json({ 
                message: 'Berita tidak ditemukan', 
                error: err.message 
            });
        }
    }

   
    async updateBerita(req, res) {
        const beritaId = req.params.id;
        const { writer, title, description, content, image, date } = req.body;

        try {
            const updatedBerita = { writer, title, description, content, image, date };
            const result = await Berita.update(beritaId, updatedBerita);
            res.status(200).json({ 
                message: 'Berita berhasil diperbarui!', 
                updatedRows: result.affectedRows 
            });
        } catch (err) {
            res.status(500).json({ 
                message: 'Terjadi kesalahan dalam mengupdate berita', 
                error: err.message 
            });
        }
    }

    
    async deleteBerita(req, res) {
        const beritaId = req.params.id;

        try {
            await Berita.delete(beritaId);
            res.status(200).json({ message: 'Berita berhasil dihapus!' });
        } catch (err) {
            res.status(500).json({ 
                message: 'Terjadi kesalahan dalam menghapus berita', 
                error: err.message 
            });
        }
    }
}

export default new BeritaController();
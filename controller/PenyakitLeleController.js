import  PenyakitLele  from '../models/DataPenyakitLele.js'; // Importing the PenyakitLele model

class PenyakitLeleController {
    // Add a new Penyakit Lele
    async addPenyakitLele(req, res) {
        const { title, content, image, date } = req.body;

        // Check if all required fields are provided
        if (!title || !content || !image || !date) {
            return res.status(400).json({ message: 'Semua kolom harus diisi!' });
        }

        try {
            // Create a new PenyakitLele instance and save it
            const penyakitLele = new PenyakitLele(title, content, image, date);
            await penyakitLele.simpan();  // Simpan the data to the database

            res.status(201).json({ message: 'Penyakit Lele berhasil ditambahkan!' });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Terjadi kesalahan dalam menambahkan penyakit lele', error: err.message });
        }
    }

    // Get a Penyakit Lele by ID
    async getPenyakitLeleById(req, res) {
        const penyakitLeleId = req.params.id;

        try {
            // Retrieve the PenyakitLele record by ID
            const penyakitLele = await PenyakitLele.getById(penyakitLeleId);

            if (!penyakitLele) {
                return res.status(404).json({ message: 'Penyakit Lele tidak ditemukan' });
            }

            res.status(200).json(penyakitLele);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Terjadi kesalahan dalam mengambil data penyakit lele', error: err.message });
        }
    }

    // Get all Penyakit Lele records
    async getAllPenyakitLele(req, res) {
        try {
            // Get all records from PenyakitLele model
            const penyakitLeleList = await PenyakitLele.getAll();

            if (penyakitLeleList.length === 0) {
                return res.status(404).json({ message: 'Tidak ada data penyakit lele' });
            }

            res.status(200).json(penyakitLeleList);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Terjadi kesalahan dalam mengambil data penyakit lele', error: err.message });
        }
    }

    // Update a Penyakit Lele record by ID
    async updatePenyakitLele(req, res) {
        const penyakitLeleId = req.params.id;
        const { title, content, image, date } = req.body;

        try {
            // Update the PenyakitLele record by ID
            const result = await PenyakitLele.update(penyakitLeleId, { title, content, image, date });

            if (result.affectedRows === 0) {
                return res.status(404).json({ message: 'Penyakit Lele tidak ditemukan' });
            }

            res.status(200).json({ message: 'Penyakit Lele berhasil diupdate' });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Terjadi kesalahan dalam mengupdate data penyakit lele', error: err.message });
        }
    }

    // Delete a Penyakit Lele record by ID
    async deletePenyakitLele(req, res) {
        const penyakitLeleId = req.params.id;

        try {
            // Delete the PenyakitLele record by ID
            const result = await PenyakitLele.delete(penyakitLeleId);

            if (result.affectedRows === 0) {
                return res.status(404).json({ message: 'Penyakit Lele tidak ditemukan' });
            }

            res.status(200).json({ message: 'Penyakit Lele berhasil dihapus' });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Terjadi kesalahan dalam menghapus penyakit lele', error: err.message });
        }
    }
}

export default new PenyakitLeleController();

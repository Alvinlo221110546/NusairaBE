import Pemasukan from '../models/DataPemasukan.js'; // Pastikan path sesuai
import Joi from 'joi'; // Gunakan untuk validasi input

class PemasukanController {
    // Validasi menggunakan Joi
    validateInput(data) {
        const schema = Joi.object({
            date: Joi.date().required(),
            kategori: Joi.string().required(),
            jumlah: Joi.number().integer().required(),
            harga: Joi.number().required(),
            keterangan: Joi.string().required(),
            total: Joi.number().required(),
            user_id: Joi.number().integer().required(),
        });

        return schema.validate(data);
    }

    // Menambahkan pemasukan baru
    async addPemasukan(req, res) {
        const { error } = this.validateInput(req.body);
        if (error) {
            return res.status(400).json({ success: false, message: error.details[0].message });
        }

        try {
            const pemasukan = req.body;
            await Pemasukan.save(pemasukan);
            res.status(201).json({ success: true, message: 'Pemasukan berhasil ditambahkan!' });
        } catch (err) {
            console.error('Error adding pemasukan:', err);
            res.status(500).json({ success: false, message: 'Terjadi kesalahan dalam menambahkan pemasukan', error: err.message });
        }
    }

    // Mendapatkan semua pemasukan
    async getAllPemasukan(req, res) {
        try {
            const pemasukanData = await Pemasukan.getAll();
            res.status(200).json({ success: true, data: pemasukanData });
        } catch (err) {
            console.error('Error fetching pemasukan:', err);
            res.status(500).json({ success: false, message: 'Terjadi kesalahan dalam mengambil data pemasukan', error: err.message });
        }
    }

    // Mendapatkan pemasukan berdasarkan ID
    async getPemasukanById(req, res) {
        const pemasukanId = req.params.id;

        if (!pemasukanId) {
            return res.status(400).json({ success: false, message: 'ID pemasukan diperlukan' });
        }

        try {
            const pemasukan = await Pemasukan.getById(pemasukanId);
            if (!pemasukan) {
                return res.status(404).json({ success: false, message: 'Pemasukan tidak ditemukan' });
            }
            res.status(200).json({ success: true, data: pemasukan });
        } catch (err) {
            console.error('Error fetching pemasukan by ID:', err);
            res.status(500).json({ success: false, message: 'Terjadi kesalahan dalam mengambil data pemasukan', error: err.message });
        }
    }

    // Mengupdate pemasukan berdasarkan ID
    async updatePemasukan(req, res) {
        const pemasukanId = req.params.id;

        if (!pemasukanId) {
            return res.status(400).json({ success: false, message: 'ID pemasukan diperlukan' });
        }

        const { error } = this.validateInput(req.body);
        if (error) {
            return res.status(400).json({ success: false, message: error.details[0].message });
        }

        try {
            const updatedPemasukan = req.body;
            const result = await Pemasukan.update(pemasukanId, updatedPemasukan);

            if (result.affectedRows === 0) {
                return res.status(404).json({ success: false, message: 'Pemasukan tidak ditemukan' });
            }

            res.status(200).json({ success: true, message: 'Pemasukan berhasil diperbarui!' });
        } catch (err) {
            console.error('Error updating pemasukan:', err);
            res.status(500).json({ success: false, message: 'Terjadi kesalahan dalam mengupdate pemasukan', error: err.message });
        }
    }

    // Menghapus pemasukan berdasarkan ID
    async deletePemasukan(req, res) {
        const pemasukanId = req.params.id;

        if (!pemasukanId) {
            return res.status(400).json({ success: false, message: 'ID pemasukan diperlukan' });
        }

        try {
            const result = await Pemasukan.delete(pemasukanId);

            if (result.affectedRows === 0) {
                return res.status(404).json({ success: false, message: 'Pemasukan tidak ditemukan' });
            }

            res.status(200).json({ success: true, message: 'Pemasukan berhasil dihapus!' });
        } catch (err) {
            console.error('Error deleting pemasukan:', err);
            res.status(500).json({ success: false, message: 'Terjadi kesalahan dalam menghapus pemasukan', error: err.message });
        }
    }
}

export default new PemasukanController();

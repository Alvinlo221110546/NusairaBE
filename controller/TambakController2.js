import { Tambak } from '../models/DataTambak.js';
import { Kolam } from '../models/DataKolam.js';
import Joi from 'joi'; // Untuk validasi input

class TambakController {
    // Schema untuk validasi input
    tambakSchema = Joi.object({
        nama: Joi.string().required(),
        negara: Joi.string().required(),
        provinsi: Joi.string().required(),
        kabupaten: Joi.string().required(),
        alamat: Joi.string().required(),
        jumlahKolam: Joi.number().integer().min(1).required(),
        kolamDetails: Joi.array().items(
            Joi.object({
                NamaKolam: Joi.string().required(),
                tipeKolam: Joi.string().required(),
                panjang: Joi.number().positive().required(),
                lebar: Joi.number().positive().required(),
                kedalaman: Joi.number().positive().required(),
                jumlahAnco: Joi.number().integer().required(),
            })
        ).required(),
    });

    // Tambah Tambak dan Kolam
    async addTambak(req, res) {
        // Validasi input
        const { error } = this.tambakSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        const { nama, negara, provinsi, kabupaten, alamat, jumlahKolam, kolamDetails } = req.body;

        try {
            // Simpan data tambak
            const tambak = await Tambak.save({
                nama,
                negara,
                provinsi,
                kabupaten,
                alamat,
                jumlahKolam,
            });

            if (!tambak || !tambak.id) {
                throw new Error('Gagal menyimpan data Tambak');
            }

            // Simpan data kolam (menggunakan Promise.all untuk efisiensi)
            const kolamPromises = kolamDetails.map((kolamData) => {
                const kolam = {
                    tambak_id: tambak.id,
                    nama_kolam: kolamData.NamaKolam,
                    tipe_kolam: kolamData.tipeKolam,
                    panjang: kolamData.panjang,
                    lebar: kolamData.lebar,
                    kedalaman: kolamData.kedalaman,
                    size: kolamData.panjang * kolamData.lebar * kolamData.kedalaman,
                    jumlah_anco: kolamData.jumlahAnco,
                };
                return Kolam.save(kolam);
            });
            await Promise.all(kolamPromises);

            res.status(201).json({ message: 'Tambak dan kolam berhasil ditambahkan!' });
        } catch (err) {
            console.error('Error pada addTambak:', err.message, err.stack);
            res.status(500).json({ message: 'Terjadi kesalahan dalam menambahkan tambak dan kolam', error: err.message });
        }
    }

    // Ambil Tambak berdasarkan ID
    async getTambakById(req, res) {
        const tambakId = req.params.id;

        try {
            const tambak = await Tambak.getDetailById(tambakId);

            if (!tambak) {
                return res.status(404).json({ message: 'Tambak tidak ditemukan' });
            }

            res.status(200).json(tambak);
        } catch (err) {
            console.error('Error pada getTambakById:', err.message, err.stack);
            res.status(500).json({ message: 'Terjadi kesalahan dalam mengambil data tambak', error: err.message });
        }
    }

    // Ambil Semua Tambak
    async getAllTambak(req, res) {
        try {
            const tambakData = await Tambak.getAllTambak();

            res.status(200).json({
                message: tambakData.length > 0 ? 'Data tambak berhasil diambil' : 'Tidak ada tambak yang ditemukan',
                data: tambakData,
            });
        } catch (err) {
            console.error('Error pada getAllTambak:', err.message, err.stack);
            res.status(500).json({ message: 'Terjadi kesalahan dalam mengambil data tambak dan kolam', error: err.message });
        }
    }
}

export default new TambakController();

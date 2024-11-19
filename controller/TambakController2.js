import { Tambak2 } from '../models/DataTambak2.js';  // Mengganti Tambak ke Tambak2
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

    // Tambah Tambak2 dan Kolam
    async addTambak(req, res) {
        // Validasi input
        const { error } = this.tambakSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        const { nama, negara, provinsi, kabupaten, alamat, jumlahKolam, kolamDetails } = req.body;

        try {
            // Simpan data tambak2
            const tambak2 = await Tambak2.save({
                nama,
                negara,
                provinsi,
                kabupaten,
                alamat,
                jumlahKolam,
            });

            if (!tambak2 || !tambak2.id) {
                throw new Error('Gagal menyimpan data Tambak2');
            }

            // Simpan data kolam (menggunakan Promise.all untuk efisiensi)
            const kolamPromises = kolamDetails.map((kolamData) => {
                const kolam = {
                    tambak_id: tambak2.id,
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

            res.status(201).json({ message: 'Tambak2 dan kolam berhasil ditambahkan!' });
        } catch (err) {
            console.error('Error pada addTambak2:', err.message, err.stack);
            res.status(500).json({ message: 'Terjadi kesalahan dalam menambahkan tambak2 dan kolam', error: err.message });
        }
    }

    // Ambil Tambak2 berdasarkan ID
    async getTambakById(req, res) {
        const tambakId = req.params.id;

        try {
            const tambak2 = await Tambak2.getDetailById(tambakId);

            if (!tambak2) {
                return res.status(404).json({ message: 'Tambak2 tidak ditemukan' });
            }

            res.status(200).json(tambak2);
        } catch (err) {
            console.error('Error pada getTambakById:', err.message, err.stack);
            res.status(500).json({ message: 'Terjadi kesalahan dalam mengambil data tambak2', error: err.message });
        }
    }

    // Ambil Semua Tambak2
    async getAllTambak(req, res) {
        try {
            const tambak2Data = await Tambak2.getAllTambak();

            res.status(200).json({
                message: tambak2Data.length > 0 ? 'Data tambak2 berhasil diambil' : 'Tidak ada tambak2 yang ditemukan',
                data: tambak2Data,
            });
        } catch (err) {
            console.error('Error pada getAllTambak2:', err.message, err.stack);
            res.status(500).json({ message: 'Terjadi kesalahan dalam mengambil data tambak2 dan kolam', error: err.message });
        }
    }
}

export default new TambakController();

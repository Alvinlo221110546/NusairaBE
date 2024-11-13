
import { Tambak } from '../models/DataTambak.js';

const createTambak = async (req, res) => {
    try {
        
        const { nama, negara, provinsi, kabupaten, alamat, jumlahKolam } = req.body;

        
        if (!jumlahKolam || isNaN(jumlahKolam) || jumlahKolam <= 0) {
            return res.status(400).json({ message: 'Jumlah Kolam harus diisi dan lebih dari 0' });
        }

       
        const tambak = new Tambak(nama, negara, provinsi, kabupaten, alamat, jumlahKolam);

       
        tambak.tambahKolam(jumlahKolam);

       
        const tambakResult = await tambak.simpan(); 
        await tambak.simpanKolam();  
        res.status(201).json({
            message: 'Tambak dan kolam berhasil dibuat',
            tambak: tambakResult
        });
    } catch (error) {
        
        console.error(error);
        res.status(500).json({ message: 'Terjadi kesalahan', error: error.message });
    }
};

export { createTambak };

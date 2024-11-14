import { Tambak } from '../models/DataTambak.js'; 
import { Kolam } from '../models/DataKolam.js';  

class TambakController {
    async addTambak(req, res) {
        const { nama, negara, provinsi, kabupaten, alamat, jumlahKolam, kolamDetails } = req.body;
        
        
        if (!nama || !negara || !provinsi || !kabupaten || !alamat || !jumlahKolam || !kolamDetails) {
            return res.status(400).json({ message: 'Semua kolom harus diisi!' });
        }

        try {
            
            const tambak = new Tambak(nama, negara, provinsi, kabupaten, alamat, jumlahKolam);
            await tambak.simpan();  
            for (let i = 0; i < jumlahKolam; i++) {
                const kolam = new Kolam(
                    tambak.id,  
                    kolamDetails[i].namaKolam,  
                    kolamDetails[i].tipeKolam,  
                    kolamDetails[i].panjang,   
                    kolamDetails[i].lebar,      
                    kolamDetails[i].kedalaman   
                );
                await kolam.simpan(); 
            }

            res.status(201).json({ message: 'Tambak dan kolam berhasil ditambahkan!' });

        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Terjadi kesalahan dalam menambahkan tambak dan kolam', error: err.message });
        }
    }

   
    async getTambakById(req, res) {
        const tambakId = req.params.id;

        try {
            const tambak = await Tambak.getDetailById(tambakId);
            res.status(200).json(tambak);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Terjadi kesalahan dalam mengambil data tambak', error: err.message });
        }
    }

    async getAllTambak(req, res) {
        try {
            const tambakData = await Tambak.getAllTambak();

            if (tambakData.length === 0) {
                return res.status(404).json({ message: 'Tidak ada tambak yang ditemukan' });
            }

            res.status(200).json(tambakData); 
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Terjadi kesalahan dalam mengambil data tambak dan kolam', error: err.message });
        }
    }
}

export default new TambakController();

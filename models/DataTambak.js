import db from '../database/Nusairadb.js';
import { Kolam } from './DataKolam.js';

class Tambak {
    constructor(data) {
        this.id = data.id || null;
        this.nama = data.nama;
        this.negara = data.negara;
        this.provinsi = data.provinsi;
        this.kabupaten = data.kabupaten;
        this.alamat = data.alamat;
        this.jumlahKolam = data.jumlahKolam;
        this.kolamDetails = [];
    }

    tambahKolam(tipeKolam) {
        for (let i = 0; i < this.jumlahKolam; i++) {
            const kolam = new Kolam(
                this.id, 
                `Kolam ${i + 1}`, 
                tipeKolam, 
                10, 
                5,  
                2   
            );
            this.kolamDetails.push(kolam);
        }
    }

    static async save(data) {
        try {
            const tambak = new Tambak(data);
            const query = `
                INSERT INTO tambak (nama, negara, provinsi, kabupaten, alamat, jumlah_kolam) 
                VALUES (?, ?, ?, ?, ?, ?)
            `;
            const [result] = await db.execute(query, [
                tambak.nama,
                tambak.negara,
                tambak.provinsi,
                tambak.kabupaten,
                tambak.alamat,
                tambak.jumlahKolam,
            ]);
            tambak.id = result.insertId;

            await tambak.saveKolam();
            return tambak;
        } catch (error) {
            throw new Error('Gagal menyimpan data Tambak: ' + error.message);
        }
    }

    async saveKolam() {
        try {
            await Promise.all(this.kolamDetails.map((kolam) => kolam.save(this.id)));
        } catch (error) {
            throw new Error('Gagal menyimpan kolam: ' + error.message);
        }
    }

    // Mengambil detail tambak dengan ID kolam
    static async getDetailById(id) {
        try {
            const [tambakResult] = await db.execute('SELECT * FROM tambak WHERE id = ?', [id]);
            if (tambakResult.length === 0) {
                throw new Error('Tambak tidak ditemukan');
            }

            const tambak = tambakResult[0];
            const [kolamResult] = await db.execute('SELECT id, nama_kolam, tipe_kolam, panjang, lebar, kedalaman, jumlah_anco FROM kolam WHERE tambak_id = ?', [id]);

            tambak.kolamDetails = kolamResult.map((kolam) => ({
                id: kolam.id,
                namaKolam: kolam.nama_kolam,
                tipeKolam: kolam.tipe_kolam,
                panjang: kolam.panjang,
                lebar: kolam.lebar,
                kedalaman: kolam.kedalaman,
                jumlahAnco: kolam.jumlah_anco
            }));

            return tambak;
        } catch (error) {
            throw new Error('Gagal mengambil detail Tambak: ' + error.message);
        }
    }

    // Simple method untuk mendapatkan ID kolam
    static async getKolamByTambakId(tambakId) {
        try {
            const [result] = await db.execute('SELECT id, nama_kolam FROM kolam WHERE tambak_id = ?', [tambakId]);
            return result;
        } catch (error) {
            throw new Error('Gagal mengambil data kolam: ' + error.message);
        }
    }
}

export { Tambak };
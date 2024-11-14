import db from '../database/Nusairadb.js';
import { Kolam } from './DataKolam.js';  
class Tambak {
    constructor(id, nama, negara, provinsi, kabupaten, alamat, jumlahKolam) {
        this.id = id;
        this.nama = nama;
        this.negara = negara;
        this.provinsi = provinsi;
        this.kabupaten = kabupaten;
        this.alamat = alamat;
        this.jumlahKolam = jumlahKolam;
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

    async simpan() {
        const query = `INSERT INTO tambak (nama, negara, provinsi, kabupaten, alamat, jumlah_kolam) VALUES (?, ?, ?, ?, ?, ?)`;
        try {
            const [result] = await db.promise().query(query, [this.nama, this.negara, this.provinsi, this.kabupaten, this.alamat, this.jumlahKolam]);
            return result;
        } catch (err) {
            throw err;
        }
    }


    async simpanKolam() {
        try {
            await Promise.all(this.kolamDetails.map(kolam => kolam.simpan()));
        } catch (err) {
            throw new Error('Gagal menyimpan kolam: ' + err.message);
        }
    }

    static async getDetailById(id) {
        try {
            const [tambakResult] = await db.promise().query('SELECT * FROM tambak WHERE id = ?', [id]);
            if (tambakResult.length === 0) {
                throw new Error('Tambak tidak ditemukan');
            }

            const tambak = tambakResult[0];
            const [kolamResult] = await db.promise().query('SELECT * FROM kolam WHERE tambak_id = ?', [id]);

            tambak.kolamDetails = kolamResult.map(kolam => ({
                namaKolam: kolam.nama_kolam,
                tipeKolam: kolam.tipe_kolam,
                panjang: kolam.panjang,
                lebar: kolam.lebar,
                kedalaman: kolam.kedalaman,
            }));

            return tambak;
        } catch (err) {
            throw err;
        }
    }

    static async getAllTambak() {
        try {
            const [tambakResult] = await db.promise().query('SELECT * FROM tambak');
            if (tambakResult.length === 0) {
                return [];
            }
            for (let tambak of tambakResult) {
                const [kolamResult] = await db.promise().query('SELECT * FROM kolam WHERE tambak_id = ?', [tambak.id]);

                tambak.kolamDetails = kolamResult.map(kolam => ({
                    namaKolam: kolam.nama_kolam,
                    tipeKolam: kolam.tipe_kolam,
                    panjang: kolam.panjang,
                    lebar: kolam.lebar,
                    kedalaman: kolam.kedalaman,
                }));
            }

            return tambakResult; 
        } catch (err) {
            throw new Error('Gagal mengambil data tambak dan kolam: ' + err.message);
        }
    }
}

export { Tambak };

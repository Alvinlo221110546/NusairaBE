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
                10, // Panjang (contoh nilai)
                5,  // Lebar (contoh nilai)
                2   // Kedalaman (contoh nilai)
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

    static async getDetailById(id) {
        try {
            const [tambakResult] = await db.execute('SELECT * FROM tambak WHERE id = ?', [id]);
            if (tambakResult.length === 0) {
                throw new Error('Tambak tidak ditemukan');
            }

            const tambak = tambakResult[0];
            const [kolamResult] = await db.execute('SELECT * FROM kolam WHERE tambak_id = ?', [id]);

            tambak.kolamDetails = kolamResult.map((kolam) => ({
                namaKolam: kolam.nama_kolam,
                tipeKolam: kolam.tipe_kolam,
                panjang: kolam.panjang,
                lebar: kolam.lebar,
                kedalaman: kolam.kedalaman,
                jumlahAnco: kolam.jumlah_anco,
            }));

            return tambak;
        } catch (error) {
            throw new Error('Gagal mengambil detail Tambak: ' + error.message);
        }
    }


    static async getAllTambak() {
        try {
            const [tambakResult] = await db.execute('SELECT * FROM tambak');
            if (tambakResult.length === 0) {
                return [];
            }
            await Promise.all(
                tambakResult.map(async (tambak) => {
                    const [kolamResult] = await db.execute('SELECT * FROM kolam WHERE tambak_id = ?', [tambak.id]);
                    tambak.kolamDetails = kolamResult.map((kolam) => ({
                        id: kolam.id,
                        namaKolam: kolam.nama_kolam,
                        tipeKolam: kolam.tipe_kolam,
                        panjang: kolam.panjang,
                        lebar: kolam.lebar,
                        kedalaman: kolam.kedalaman,
                        jumlahAnco: kolam.jumlah_anco,
                    }));
                })
            );

            return tambakResult;
        } catch (error) {
            throw new Error('Gagal mengambil data Tambak dan Kolam: ' + error.message);
        }
    }

    static async update(id, data) {
        try {
            const query = `
                UPDATE tambak 
                SET nama = ?, negara = ?, provinsi = ?, kabupaten = ?, alamat = ?
                WHERE id = ?
            `;
            const values = [
                data.nama,
                data.negara,
                data.provinsi,
                data.kabupaten,
                data.alamat,
                id
            ];
    
            const [result] = await db.execute(query, values);
            return result;
        } catch (error) {
            throw new Error('Gagal memperbarui data Tambak: ' + error.message);
        }
    }
    
    static async delete(id) {
        try {
            await Kolam.delete(id);
            const query = 'DELETE FROM tambak WHERE id = ?';
            const [result] = await db.execute(query, [id]);
            return result;
        } catch (error) {
            throw new Error('Gagal menghapus data Tambak: ' + error.message);
        }
    }
        
}

export { Tambak };

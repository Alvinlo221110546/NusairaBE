import db from '../database/Nusairadb.js';
import { Kolam } from './DataKolam.js';

class Tambak {
    constructor(data) {
        this.id = data.id || null;
        this.userId = data.userId;
        this.nama = data.nama;
        this.negara = data.negara;
        this.provinsi = data.provinsi;
        this.kabupaten = data.kabupaten;
        this.alamat = data.alamat;
        this.jumlahKolam = data.jumlahKolam;
        this.kolamDetails = [];
    }

    static async save(data, userId) { 
        try {
            const tambak = new Tambak({
                ...data,
                userId 
            });
            
            const query = `
                INSERT INTO tambak (user_id, nama, negara, provinsi, kabupaten, alamat, jumlah_kolam) 
                VALUES (?, ?, ?, ?, ?, ?, ?)
            `;
            const [result] = await db.execute(query, [
                tambak.userId,
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

    static async getDetailById(id, userId) { 
        try {
            const [tambakResult] = await db.execute(
                'SELECT * FROM tambak WHERE id = ? AND user_id = ?', 
                [id, userId]
            );
            if (tambakResult.length === 0) {
                throw new Error('Tambak tidak ditemukan atau tidak memiliki akses');
            }

            const tambak = tambakResult[0];
            const [kolamResult] = await db.execute(
                'SELECT * FROM kolam WHERE tambak_id = ?', 
                [id]
            );

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

    static async getAllTambak(userId) { 
        try {
            const [tambakResult] = await db.execute(
                'SELECT * FROM tambak WHERE user_id = ?', 
                [userId]
            );
            if (tambakResult.length === 0) {
                return [];
            }
            await Promise.all(
                tambakResult.map(async (tambak) => {
                    const [kolamResult] = await db.execute(
                        'SELECT * FROM kolam WHERE tambak_id = ?', 
                        [tambak.id]
                    );
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

    static async update(id, data, userId) {
        try {
            const query = `
                UPDATE tambak 
                SET nama = ?, negara = ?, provinsi = ?, kabupaten = ?, alamat = ?
                WHERE id = ? AND user_id = ?
            `;
            const values = [
                data.nama,
                data.negara,
                data.provinsi,
                data.kabupaten,
                data.alamat,
                id,
                userId
            ];
    
            const [result] = await db.execute(query, values);
            
            if (result.affectedRows === 0) {
                throw new Error('Tambak tidak ditemukan atau tidak memiliki akses');
            }
            
            return result;
        } catch (error) {
            throw new Error('Gagal memperbarui data Tambak: ' + error.message);
        }
    }
    
    static async delete(id, userId) { 
        try {
            await Kolam.delete(id);
            
            const query = 'DELETE FROM tambak WHERE id = ? AND user_id = ?';
            const [result] = await db.execute(query, [id, userId]);
            
            if (result.affectedRows === 0) {
                throw new Error('Tambak tidak ditemukan atau tidak memiliki akses');
            }
            
            return result;
        } catch (error) {
            throw new Error('Gagal menghapus data Tambak: ' + error.message);
        }
    }
}

export { Tambak };
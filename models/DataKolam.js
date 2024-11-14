import db from '../database/Nusairadb.js';

class Kolam {
    constructor(tambakId, namaKolam, tipeKolam, panjang, lebar, kedalaman) {
        this.tambakId = tambakId; 
        this.namaKolam = namaKolam;
        this.tipeKolam = tipeKolam;
        this.panjang = panjang;
        this.lebar = lebar;
        this.kedalaman = kedalaman;
        this.size = this.hitungSize();
    }

    hitungSize() {
        return this.panjang * this.lebar * this.kedalaman;
    }

    simpan() {
        const query = `INSERT INTO kolam (tambak_id, nama_kolam, tipe_kolam, panjang, lebar, kedalaman, size) VALUES (?, ?, ?, ?, ?, ?, ?)`;
        return new Promise((resolve, reject) => {
            db.query(query, [this.tambakId, this.namaKolam, this.tipeKolam, this.panjang, this.lebar, this.kedalaman, this.size], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    static async getKolamByTambakId(tambakId) {
        try {
            const query = 'SELECT * FROM kolam WHERE tambak_id = ?';
            const [result] = await db.promise().query(query, [tambakId]);
            return result;
        } catch (err) {
            throw new Error('Gagal mendapatkan kolam: ' + err.message);
        }
    }
}

export { Kolam };

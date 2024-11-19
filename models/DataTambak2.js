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

  // Simpan Tambak dan Kolam
  static async save(data) {
    try {
      const tambak = new Tambak(data);

      const query = `
        INSERT INTO tambak (nama, negara, provinsi, kabupaten, alamat, jumlah_kolam) 
        VALUES (?, ?, ?, ?, ?, ?)
      `;
      const [result] = await db.promise().query(query, [
        tambak.nama,
        tambak.negara,
        tambak.provinsi,
        tambak.kabupaten,
        tambak.alamat,
        tambak.jumlahKolam,
      ]);
      tambak.id = result.insertId;

      // Tambahkan Kolam jika ada
      if (data.kolamDetails && data.kolamDetails.length > 0) {
        tambak.kolamDetails = await Promise.all(
          data.kolamDetails.map((kolam) => Kolam.save({ tambak_id: tambak.id, ...kolam }))
        );
      }

      return tambak;
    } catch (err) {
      throw new Error('Gagal menyimpan data Tambak: ' + err.message);
    }
  }

  // Ambil Detail Tambak Berdasarkan ID
  static async getDetailById(id) {
    try {
      const queryTambak = 'SELECT * FROM tambak WHERE id = ?';
      const [tambakResult] = await db.promise().query(queryTambak, [id]);

      if (tambakResult.length === 0) {
        throw new Error('Tambak tidak ditemukan');
      }

      const tambak = tambakResult[0];
      const kolam = await Kolam.getByTambakId(id); // Delegasikan ke model Kolam
      tambak.kolamDetails = kolam;

      return tambak;
    } catch (err) {
      throw new Error('Gagal mengambil detail Tambak: ' + err.message);
    }
  }

  // Ambil Semua Tambak
  static async getAllTambak() {
    try {
      const query = `
        SELECT t.*, k.nama_kolam, k.tipe_kolam, k.panjang, k.lebar, k.kedalaman, k.jumlah_anco 
        FROM tambak t
        LEFT JOIN kolam k ON t.id = k.tambak_id
      `;
      const [results] = await db.promise().query(query);

      const tambakMap = {};

      results.forEach((row) => {
        if (!tambakMap[row.id]) {
          tambakMap[row.id] = {
            id: row.id,
            nama: row.nama,
            negara: row.negara,
            provinsi: row.provinsi,
            kabupaten: row.kabupaten,
            alamat: row.alamat,
            jumlahKolam: row.jumlah_kolam,
            kolamDetails: [],
          };
        }
        if (row.nama_kolam) {
          tambakMap[row.id].kolamDetails.push({
            namaKolam: row.nama_kolam,
            tipeKolam: row.tipe_kolam,
            panjang: row.panjang,
            lebar: row.lebar,
            kedalaman: row.kedalaman,
            jumlahAnco: row.jumlah_anco,
          });
        }
      });

      return Object.values(tambakMap);
    } catch (err) {
      throw new Error('Gagal mengambil data Tambak dan Kolam: ' + err.message);
    }
  }
}

export { Tambak };

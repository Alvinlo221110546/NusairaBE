import db from '../database/Nusairadb.js';
import { Kolam } from './DataKolam.js';

class Tambak2 {
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

  // Simpan Tambak2 dan Kolam
  static async save(data) {
    try {
      const tambak2 = new Tambak2(data);

      const query = `
        INSERT INTO tambak2 (nama, negara, provinsi, kabupaten, alamat, jumlah_kolam) 
        VALUES (?, ?, ?, ?, ?, ?)
      `;
      const [result] = await db.promise().query(query, [
        tambak2.nama,
        tambak2.negara,
        tambak2.provinsi,
        tambak2.kabupaten,
        tambak2.alamat,
        tambak2.jumlahKolam,
      ]);
      tambak2.id = result.insertId;

      // Tambahkan Kolam jika ada
      if (data.kolamDetails && data.kolamDetails.length > 0) {
        tambak2.kolamDetails = await Promise.all(
          data.kolamDetails.map((kolam) => Kolam.save({ tambak_id: tambak2.id, ...kolam }))
        );
      }

      return tambak2;
    } catch (err) {
      throw new Error('Gagal menyimpan data Tambak2: ' + err.message);
    }
  }

  // Ambil Detail Tambak2 Berdasarkan ID
  static async getDetailById(id) {
    try {
      const queryTambak2 = 'SELECT * FROM tambak2 WHERE id = ?';
      const [tambak2Result] = await db.promise().query(queryTambak2, [id]);

      if (tambak2Result.length === 0) {
        throw new Error('Tambak2 tidak ditemukan');
      }

      const tambak2 = tambak2Result[0];
      const kolam = await Kolam.getByTambakId(id); // Delegasikan ke model Kolam
      tambak2.kolamDetails = kolam;

      return tambak2;
    } catch (err) {
      throw new Error('Gagal mengambil detail Tambak2: ' + err.message);
    }
  }

  // Ambil Semua Tambak2
  static async getAllTambak2() {
    try {
      const query = `
        SELECT t.*, k.nama_kolam, k.tipe_kolam, k.panjang, k.lebar, k.kedalaman, k.jumlah_anco 
        FROM tambak2 t
        LEFT JOIN kolam k ON t.id = k.tambak_id
      `;
      const [results] = await db.promise().query(query);

      const tambak2Map = {};

      results.forEach((row) => {
        if (!tambak2Map[row.id]) {
          tambak2Map[row.id] = {
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
          tambak2Map[row.id].kolamDetails.push({
            namaKolam: row.nama_kolam,
            tipeKolam: row.tipe_kolam,
            panjang: row.panjang,
            lebar: row.lebar,
            kedalaman: row.kedalaman,
            jumlahAnco: row.jumlah_anco,
          });
        }
      });

      return Object.values(tambak2Map);
    } catch (err) {
      throw new Error('Gagal mengambil data Tambak2 dan Kolam: ' + err.message);
    }
  }
}

export { Tambak2 };

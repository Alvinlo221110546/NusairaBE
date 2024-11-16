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
        10,  // Length (example value)
        5,   // Width (example value)
        2    // Depth (example value)
      );
      this.kolamDetails.push(kolam);
    }
  }

 
  static async save(data) {
    const tambak = new Tambak(data);
    const query = `
      INSERT INTO tambak (nama, negara, provinsi, kabupaten, alamat, jumlah_kolam) 
      VALUES (?, ?, ?, ?, ?, ?)
    `;
    try {
      const [result] = await db.promise().query(query, [
        tambak.nama,
        tambak.negara,
        tambak.provinsi,
        tambak.kabupaten,
        tambak.alamat,
        tambak.jumlahKolam
      ]);
      tambak.id = result.insertId;  
      await tambak.saveKolam();  
      return tambak;
    } catch (err) {
      throw new Error('Gagal menyimpan data Tambak: ' + err.message);
    }
  }

  
  async saveKolam() {
    try {
      await Promise.all(this.kolamDetails.map(kolam => kolam.save(this.id)));
    } catch (err) {
      throw new Error('Gagal menyimpan kolam: ' + err.message);
    }
  }
  


  static async getDetailById(id) {
    try {
      console.log("Mencari tambak dengan ID:", id);
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
        jumlahAnco: kolam.jumlah_anco
      }));
  
      return tambak;
    } catch (err) {
      throw new Error('Gagal mengambil detail Tambak: ' + err.message);
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
          jumlahAnco :kolam.jumlah_anco
        }));
      }

      return tambakResult; 
    } catch (err) {
      throw new Error('Gagal mengambil data Tambak dan Kolam: ' + err.message);
    }
  }
}

export { Tambak };

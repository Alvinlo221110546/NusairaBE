
import db from '../db.js'; 

class DataPanen {
  constructor(kolam, tanggal, berat, size, hargaJual, status, catatan) {
    this.kolam = kolam;
    this.tanggal = tanggal;
    this.berat = berat;
    this.size = size;
    this.hargaJual = hargaJual;
    this.status = status;
    this.catatan = catatan;
  }

  
  static async save(data) {
    try {
      const query = `
        INSERT INTO data_panen (kolam, tanggal, berat, size, hargaJual, status, catatan)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `;
      const [result] = await db.execute(query, [
        data.kolam,
        data.tanggal,
        data.berat,
        data.size,
        data.hargaJual,
        data.status,
        data.catatan,
      ]);
      return result;
    } catch (err) {
      throw new Error("Gagal menyimpan data panen: " + err.message);
    }
  }

  
  static async getAll() {
    try {
      const query = `SELECT * FROM data_panen`;
      const [rows] = await db.execute(query);
      return rows;
    } catch (err) {
      throw new Error("Gagal mengambil data panen: " + err.message);
    }
  }
}

export default DataPanen; 
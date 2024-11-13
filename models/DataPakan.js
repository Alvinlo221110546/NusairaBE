
import db from '../db.js'; 

class DataPakan {
  constructor(kolam, tanggal, waktu, puasa, jumlah, catatan) {
    this.kolam = kolam;
    this.tanggal = tanggal;
    this.waktu = waktu;
    this.puasa = puasa;
    this.jumlah = jumlah;
    this.catatan = catatan;
  }

  
  save() {
    const query = `
      INSERT INTO data_pakan (kolam, tanggal, waktu, puasa, jumlah, catatan)
      VALUES (?, ?, ?, ?, ?, ?)
    `;
    
    return new Promise((resolve, reject) => {
      db.query(
        query, 
        [this.kolam, this.tanggal, this.waktu, this.puasa, this.jumlah, this.catatan],
        (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }
      );
    });
  }

  
  static getAll() {
    const query = 'SELECT * FROM data_pakan';

    return new Promise((resolve, reject) => {
      db.query(query, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }
}

export default DataPakan;

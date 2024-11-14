import db from '../database/Nusairadb.js';

class DataPanen {
  constructor(data) {
    this.kolamId = data.kolamId; 
    this.tanggal = data.tanggal;
    this.berat = data.berat;
    this.size = data.size;
    this.hargaJual = data.hargaJual;
    this.status = data.status;
    this.catatan = data.catatan;
  }


  static async validate(data) {
    const errors = [];
    
   
    if (!data.kolamId) errors.push("Kolam ID harus diisi.");
   
    if (!data.tanggal) errors.push("Tanggal harus diisi.");
    
 
    if (data.berat <= 0) errors.push("Berat harus lebih dari 0.");
  
    if (!data.size) errors.push("Size harus diisi.");
    
  
    if (data.hargaJual <= 0) errors.push("Harga jual harus lebih dari 0.");

    if (!data.status) errors.push("Status harus diisi.");
    
    return errors;
  }

  static save(data) {
    return new Promise((resolve, reject) => {
      DataPanen.validate(data).then((validationErrors) => {
        if (validationErrors.length > 0) {
          return reject(new Error(validationErrors.join(", ")));
        }

        
        db.query(
          'INSERT INTO data_panen (kolamId, tanggal, berat, size, hargaJual, status, catatan) VALUES (?, ?, ?, ?, ?, ?, ?)', 
          [
            data.kolamId, 
            data.tanggal, 
            data.berat, 
            data.size, 
            data.hargaJual, 
            data.status, 
            data.catatan
          ], 
          (err, result) => {
            if (err) {
              return reject(err);
            }
            resolve(result);
          }
        );
      }).catch((error) => reject(error));
    });
  }


  static getAll() {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM data_panen', (err, result) => {
        if (err) {
          return reject(err);
        }
        resolve(result);
      });
    });
  }
}

export default DataPanen;

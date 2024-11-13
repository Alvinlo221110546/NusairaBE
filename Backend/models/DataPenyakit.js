class Penyakit {
    constructor(kolam, tanggalTebar, jenisPenyakit, catatan, images) {
      this.kolam = kolam;
      this.tanggalTebar = tanggalTebar;
      this.jenisPenyakit = jenisPenyakit;
      this.catatan = catatan;
      this.images = images; 
    }
  
    
    validate() {
      let errors = [];
      if (!this.kolam) errors.push('Kolam is required.');
      if (!this.tanggalTebar) errors.push('Tanggal Tebar is required.');
      if (!this.jenisPenyakit) errors.push('Jenis Penyakit is required.');
      return errors;
    }
  
   
    async save(db) {
      const query = `
        INSERT INTO penyakit (kolam, tanggal_tebar, jenis_penyakit, catatan, images)
        VALUES (?, ?, ?, ?, ?)
      `;
      const values = [this.kolam, this.tanggalTebar, this.jenisPenyakit, this.catatan, JSON.stringify(this.images)];
      return new Promise((resolve, reject) => {
        db.execute(query, values, (err, result) => {
          if (err) reject(err);
          resolve(result);
        });
      });
    }
  
    
    static async getAll(db) {
      const query = `SELECT * FROM penyakit`;
      return new Promise((resolve, reject) => {
        db.execute(query, (err, results) => {
          if (err) reject(err);
          resolve(results);
        });
      });
    }
  }
  
  export default Penyakit;
  
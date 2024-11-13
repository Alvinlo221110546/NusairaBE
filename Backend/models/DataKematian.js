class DataKematianModel {
    constructor(kolam, tanggalTebar, umur, jumlahEkor, totalBerat, multiplier) {
      this.kolam = kolam;
      this.tanggalTebar = tanggalTebar;
      this.umur = umur;
      this.jumlahEkor = jumlahEkor;
      this.totalBerat = totalBerat;
      this.multiplier = multiplier;
    }
  
   
    validate() {
      let errors = [];
  
      if (this.jumlahEkor === '' || Number(this.jumlahEkor) <= 0) {
        errors.push('Field jumlahEkor tidak boleh kosong atau negatif.');
      }
  
      if (this.totalBerat === '' || Number(this.totalBerat) <= 0) {
        errors.push('Field totalBerat tidak boleh kosong atau negatif.');
      }
  
      if (this.multiplier === '' || Number(this.multiplier) <= 0) {
        errors.push('Field multiplier tidak boleh kosong atau negatif.');
      }
  
      return errors;
    }
  
    
    calculateTotalDeaths(trackingMethod) {
      if (trackingMethod === 'jumlahEkor') {
        return parseInt(this.jumlahEkor) || 0;
      } else {
        const weight = parseFloat(this.totalBerat) || 0;
        const mult = parseFloat(this.multiplier) || 0;
        const totalWeightInKg = this.convertToKilograms(weight, 'kg');
        const internationalAverageWeightPerEkor = 0.25;
        return Math.round((totalWeightInKg * mult) / internationalAverageWeightPerEkor);
      }
    }
  
   
    convertToKilograms(weight, unit) {
      switch (unit) {
        case 'g':
          return weight * 0.001;
        case 'ton':
          return weight * 1000;
        default:
          return weight;
      }
    }
  
    async save(db) {
      const totalDeaths = this.calculateTotalDeaths('jumlahEkor');
      const query = `
        INSERT INTO data_kematian (kolam, tanggal_tebar, umur, jumlah_ekor, total_berat, multiplier, total_deaths)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `;
      const values = [this.kolam, this.tanggalTebar, this.umur, this.jumlahEkor, this.totalBerat, this.multiplier, totalDeaths];
      
      return new Promise((resolve, reject) => {
        db.execute(query, values, (err, result) => {
          if (err) reject(err);
          resolve(result);
        });
      });
    }
  
   
    static async getAll(db) {
      const query = `SELECT * FROM data_kematian`;
      return new Promise((resolve, reject) => {
        db.execute(query, (err, results) => {
          if (err) reject(err);
          resolve(results);
        });
      });
    }
  }
  
  export default DataKematianModel;
  
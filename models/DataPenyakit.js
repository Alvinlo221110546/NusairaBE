import db from '../database/Nusairadb.js';

class Penyakit {
  constructor(data) {
    this.kolam_id = data.kolam_id;
    this.tanggal_tebar = data.tanggal_tebar;
    this.jenis_penyakit = data.jenis_penyakit;
    this.catatan = data.catatan || null;
    this.images = data.images || []; 
  }

  static async validate(data) {
    const errors = [];

    if (!data.kolam_id) errors.push("Kolam ID harus diisi.");
    if (!data.tanggal_tebar) errors.push("Tanggal Tebar harus diisi.");
    if (!data.jenis_penyakit) errors.push("Jenis Penyakit harus diisi.");
    if (!data.images || !Array.isArray(data.images) || data.images.length === 0) {
      errors.push("Minimal satu gambar harus diunggah.");
    }

    return errors;
  }

  static async save(data) {
    try {
      const validationErrors = await Penyakit.validate(data);
      if (validationErrors.length > 0) {
        throw new Error(validationErrors.join(", "));
      }

      const query = `
        INSERT INTO penyakit (kolam_id, tanggal_tebar, jenis_penyakit, catatan, images)
        VALUES (?, ?, ?, ?, ?)
      `;
      
      const values = [
        data.kolam_id,
        data.tanggal_tebar,
        data.jenis_penyakit,
        data.catatan,
        data.images ? data.images.join(',') : null, 
      ];

      const [result] = await db.execute(query, values);
      return result;
    } catch (error) {
      throw new Error(`Gagal menyimpan data penyakit: ${error.message}`);
    }
  }

  static async create(data) {
    return await Penyakit.save(data); 
  }
  static async getAll() {
    try {
      const query = 'SELECT * FROM penyakit';
      const [results] = await db.execute(query);
    
      results.forEach(result => {
        result.images = result.images ? result.images.split(',').filter(img => img.trim() !== '') : [];
      });
    
      return results;
    } catch (error) {
      throw new Error(`Gagal mengambil data penyakit: ${error.message}`);
    }
  }
}

export default Penyakit;
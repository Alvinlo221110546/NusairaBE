import db from '../database/Nusairadb.js';

class PenyakitLele {
  constructor(data) {
    this.id = data.id || null;
    this.title = data.title || '';
    this.date = data.date || null; 
    this.image = data.image || []; 
    this.indikasi = data.indikasi || null;
    this.penyebab = data.penyebab || null;
    this.penanganan = data.penanganan || null;
    this.pencegahan = data.pencegahan || null;
    this.gejalaTambahan = data.gejalaTambahan || null;
    this.referensi = data.referensi || null;
  }

  static async validate(data) {
    const errors = [];

    if (!data.title) errors.push("Judul (title) harus diisi.");
    if (!data.date) errors.push("Tanggal (date) harus diisi.");
    if (!data.image || !Array.isArray(data.image) || data.image.length === 0) {
      errors.push("Minimal satu gambar harus diunggah.");
    }

    return errors;
  }

  static async save(data) {
    try {
      const validationErrors = await PenyakitLele.validate(data);
      if (validationErrors.length > 0) {
        throw new Error(validationErrors.join(", "));
      }

      const penyakitLele = new PenyakitLele(data);
      const query = `
        INSERT INTO penyakit_lele (title, date, image, indikasi, penyebab, penanganan, pencegahan, gejalaTambahan, referensi)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
      `;
      const [result] = await db.execute(query, [
        penyakitLele.title,
        penyakitLele.date,
        penyakitLele.image.join(','), 
        penyakitLele.indikasi,
        penyakitLele.penyebab,
        penyakitLele.penanganan,
        penyakitLele.pencegahan,
        penyakitLele.gejalaTambahan,
        penyakitLele.referensi,
      ]);
      penyakitLele.id = result.insertId;
      return penyakitLele;
    } catch (error) {
      console.error('Error saat menyimpan Penyakit Lele:', error.message);
      throw new Error('Gagal menyimpan data Penyakit Lele.');
    }
  }

  static async getAll() {
    const query = 'SELECT * FROM penyakit_lele';
    try {
      const [results] = await db.execute(query);

      results.forEach(result => {
        result.image = result.image ? result.image.split(',').filter(img => img.trim() !== '') : [];
      });

      return results;
    } catch (error) {
      console.error('Error saat mengambil semua data Penyakit Lele:', error.message);
      throw new Error('Gagal mengambil data Penyakit Lele.');
    }
  }

  static async getById(id) {
    const query = 'SELECT * FROM penyakit_lele WHERE id = ?';
    try {
      const [results] = await db.execute(query, [id]);
      if (results.length === 0) {
        throw new Error(`Data dengan ID ${id} tidak ditemukan.`);
      }

      const result = results[0];
      result.image = result.image ? result.image.split(',').filter(img => img.trim() !== '') : [];

      return result;
    } catch (error) {
      console.error('Error saat mengambil data Penyakit Lele berdasarkan ID:', error.message);
      throw new Error(`Gagal mengambil data Penyakit Lele dengan ID ${id}.`);
    }
  }

  static async update(id, data) {
    try {
      const validationErrors = await PenyakitLele.validate(data);
      if (validationErrors.length > 0) {
        throw new Error(validationErrors.join(", "));
      }

      const query = `
        UPDATE penyakit_lele
        SET title = ?, date = ?, image = ?, indikasi = ?, penyebab = ?, penanganan = ?, pencegahan = ?, gejalaTambahan = ?, referensi = ?
        WHERE id = ?
      `;
      const [result] = await db.execute(query, [
        data.title,
        data.date,
        data.image.join(','), 
        data.indikasi,
        data.penyebab,
        data.penanganan,
        data.pencegahan,
        data.gejalaTambahan,
        data.referensi,
        id,
      ]);
      if (result.affectedRows === 0) {
        throw new Error(`Data dengan ID ${id} tidak ditemukan untuk diperbarui.`);
      }
      return result;
    } catch (error) {
      console.error('Error saat memperbarui Penyakit Lele:', error.message);
      throw new Error(`Gagal memperbarui data Penyakit Lele dengan ID ${id}.`);
    }
  }

  static async delete(id) {
    const query = 'DELETE FROM penyakit_lele WHERE id = ?';
    try {
      const [result] = await db.execute(query, [id]);
      if (result.affectedRows === 0) {
        throw new Error(`Data dengan ID ${id} tidak ditemukan untuk dihapus.`);
      }
      return result;
    } catch (error) {
      console.error('Error saat menghapus Penyakit Lele:', error.message);
      throw new Error(`Gagal menghapus data Penyakit Lele dengan ID ${id}.`);
    }
  }
}

export default PenyakitLele;

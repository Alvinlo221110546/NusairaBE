import db from '../database/Nusairadb.js';

class PenyakitLele {
  constructor(data) {
    this.id = data.id || null;
    this.title = data.title || '';
    this.date = data.date || null; 
    this.image = data.image || '';
    this.indikasi = data.indikasi || null;
    this.penyebab = data.penyebab || null;
    this.penanganan = data.penanganan || null;
    this.pencegahan = data.pencegahan || null;
    this.gejalaTambahan = data.gejalaTambahan || null;
    this.referensi = data.referensi || null;
  }

  static async save(data) {
    try {
      // Validasi manual
      const requiredFields = ['title', 'date', 'image', 'indikasi', 'penyebab', 'penanganan', 'pencegahan', 'gejalaTambahan', 'referensi'];
      const missingFields = requiredFields.filter(field => !data[field]);
      
      if (missingFields.length > 0) {
        throw new Error(`Field yang hilang: ${missingFields.join(', ')}`);
      }
  
      // Jika ada validasi lainnya (misalnya format image atau date), bisa ditambahkan di sini
  
      const penyakitLele = new PenyakitLele(data);
      const query = `
        INSERT INTO penyakit_lele (title, date, image, indikasi, penyebab, penanganan, pencegahan, gejalaTambahan, referensi)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
      `;
      const [result] = await db.execute(query, [
        penyakitLele.title,
        penyakitLele.date,
        penyakitLele.image.join(','), // Pastikan formatnya sesuai dengan database (misalnya, jika image adalah array, gabungkan dengan koma)
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
      return results[0];
    } catch (error) {
      console.error('Error saat mengambil data Penyakit Lele berdasarkan ID:', error.message);
      throw new Error(`Gagal mengambil data Penyakit Lele dengan ID ${id}.`);
    }
  }

  static async update(id, data) {
    const query = `
      UPDATE penyakit_lele
      SET title = ?, date = ?, image = ?, indikasi = ?, penyebab = ?, penanganan = ?, pencegahan = ?, gejalaTambahan = ?, referensi = ?
      WHERE id = ?
    `;
    try {
      const [result] = await db.execute(query, [
        data.title,
        data.date,
        data.image,
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

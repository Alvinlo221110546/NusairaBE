import db from '../database/Nusairadb.js';

class PenyakitLele {
  constructor(data) {
    this.id = data.id || null;
    this.title = data.title;
    this.content = data.content;
    this.image = data.image;
    this.date = data.date;
    this.created_at = data.created_at || new Date();
    this.updated_at = data.updated_at || new Date();
  }

  static async save(data) {
    const penyakitLele = new PenyakitLele(data);
    const query = `
      INSERT INTO PENYAKIT_LELE (title, content, image, date, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?, ?)
    `;
    try {
      const [result] = await db.execute(query, [
        penyakitLele.title,
        penyakitLele.content,
        penyakitLele.image,
        penyakitLele.date,
        penyakitLele.created_at,
        penyakitLele.updated_at,
      ]);
      penyakitLele.id = result.insertId;
      return penyakitLele;
    } catch (error) {
      console.error('Error saat menyimpan Penyakit Lele:', error.message);
      throw new Error('Gagal menyimpan data Penyakit Lele.');
    }
  }

  static async getAll() {
    const query = 'SELECT * FROM PENYAKIT_LELE';
    try {
      const [results] = await db.execute(query);
      return results;
    } catch (error) {
      console.error('Error saat mengambil semua data Penyakit Lele:', error.message);
      throw new Error('Gagal mengambil data Penyakit Lele.');
    }
  }

  static async getById(id) {
    const query = 'SELECT * FROM PENYAKIT_LELE WHERE id = ?';
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
      UPDATE PENYAKIT_LELE 
      SET title = ?, content = ?, image = ?, date = ?, updated_at = ? 
      WHERE id = ?
    `;
    try {
      const [result] = await db.execute(query, [
        data.title,
        data.content,
        data.image,
        data.date,
        new Date(),
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
    const query = 'DELETE FROM PENYAKIT_LELE WHERE id = ?';
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

import db from '../database/Nusairadb.js';

class Berita {
  constructor(data) {
    this.id = data.id || null;
    this.writer = 'admin';  
    this.image_writer = 'assets/img/assets_foto/f2.png';  
    this.title = data.title || '';
    this.excerpt = data.excerpt || '';
    this.content = data.content || '';
    this.image = data.image || '';  
    this.date = data.date || null;
  }

  static async save(data) {
    try {
      const requiredFields = ['title', 'excerpt', 'content', 'image', 'date'];
      const missingFields = requiredFields.filter(field => !data[field]);
      
      if (missingFields.length > 0) {
        throw new Error(`Field yang hilang: ${missingFields.join(', ')}`);
      }

      const berita = new Berita(data);
      const query = `
        INSERT INTO berita (writer, image_writer, title, excerpt, content, image, date)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `;
      const [result] = await db.execute(query, [
        berita.writer,
        berita.image_writer,
        berita.title,
        berita.excerpt,
        berita.content,
        berita.image,
        berita.date
      ]);
      berita.id = result.insertId;
      return berita;
    } catch (error) {
      console.error('Error saat menyimpan Berita:', error.message);
      throw new Error('Gagal menyimpan data Berita.');
    }
  }

  static async getAll() {
    const query = 'SELECT * FROM berita';
    try {
      const [results] = await db.execute(query);
      return results;
    } catch (error) {
      console.error('Error saat mengambil semua data Berita:', error.message);
      throw new Error('Gagal mengambil data Berita.');
    }
  }

  static async getById(id) {
    const query = 'SELECT * FROM berita WHERE id = ?';
    try {
      const [results] = await db.execute(query, [id]);
      if (results.length === 0) {
        throw new Error(`Data dengan ID ${id} tidak ditemukan.`);
      }
      return results[0];
    } catch (error) {
      console.error('Error saat mengambil data Berita berdasarkan ID:', error.message);
      throw new Error(`Gagal mengambil data Berita dengan ID ${id}.`);
    }
  }

  static async update(id, data) {
    const query = `
      UPDATE berita
      SET writer = ?, image_writer = ?, title = ?, excerpt = ?, content = ?, image = ?, date = ?
      WHERE id = ?
    `;
    try {
      const [result] = await db.execute(query, [
        data.writer,
        data.image_writer,
        data.title,
        data.excerpt,
        data.content,
        data.image,
        data.date,
        id,
      ]);
      if (result.affectedRows === 0) {
        throw new Error(`Data dengan ID ${id} tidak ditemukan untuk diperbarui.`);
      }
      return result;
    } catch (error) {
      console.error('Error saat memperbarui Berita:', error.message);
      throw new Error(`Gagal memperbarui data Berita dengan ID ${id}.`);
    }
  }

  static async delete(id) {
    const query = 'DELETE FROM berita WHERE id = ?';
    try {
      const [result] = await db.execute(query, [id]);
      if (result.affectedRows === 0) {
        throw new Error(`Data dengan ID ${id} tidak ditemukan untuk dihapus.`);
      }
      return result;
    } catch (error) {
      console.error('Error saat menghapus Berita:', error.message);
      throw new Error(`Gagal menghapus data Berita dengan ID ${id}.`);
    }
  }
}

export default Berita;

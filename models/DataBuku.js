import db from '../database/Nusairadb.js';

class Buku {
  constructor(data) {
    this.id = data.id || null;
    this.judul = data.judul || '';
    this.deskripsi = data.deskripsi || '';
    this.tanggal_terbit = data.tanggal_terbit || null;
    this.link_pdf = data.link_pdf || '';
    this.image = data.image || ''; 
  }

  static async save(data) {
    try {
      const requiredFields = ['judul', 'deskripsi', 'tanggal_terbit', 'link_pdf', 'image'];
      const missingFields = requiredFields.filter(field => !data[field]);
      
      if (missingFields.length > 0) {
        throw new Error(`Field yang hilang: ${missingFields.join(', ')}`);
      }
  
      const buku = new Buku(data);
      const query = `
        INSERT INTO perpustakaan (judul, deskripsi, tanggal_terbit, link_pdf, image)
        VALUES (?, ?, ?, ?, ?)
      `;
      const [result] = await db.execute(query, [
        buku.judul,
        buku.deskripsi,
        buku.tanggal_terbit,
        buku.link_pdf,
        buku.image
      ]);
      buku.id = result.insertId;
      return buku;
    } catch (error) {
      console.error('Error saat menyimpan Buku:', error.message);
      throw new Error('Gagal menyimpan data Buku.');
    }
  }
  
  static async getAll() {
    const query = 'SELECT * FROM perpustakaan';
    try {
      const [results] = await db.execute(query);
      return results;
    } catch (error) {
      console.error('Error saat mengambil semua data Buku:', error.message);
      throw new Error('Gagal mengambil data Buku.');
    }
  }

  static async getById(id) {
    const query = 'SELECT * FROM perpustakaan WHERE id = ?';
    try {
      const [results] = await db.execute(query, [id]);
      if (results.length === 0) {
        throw new Error(`Buku dengan ID ${id} tidak ditemukan.`);
      }
      return results[0];
    } catch (error) {
      console.error('Error saat mengambil data Buku berdasarkan ID:', error.message);
      throw new Error(`Gagal mengambil data Buku dengan ID ${id}.`);
    }
  }

  static async update(id, data) {
    const query = `
      UPDATE perpustakaan
      SET judul = ?, deskripsi = ?, tanggal_terbit = ?, link_pdf = ?, image = ?
      WHERE id = ?
    `;
    try {
      const [result] = await db.execute(query, [
        data.judul,
        data.deskripsi,
        data.tanggal_terbit,
        data.link_pdf,
        data.image,
        id
      ]);
      if (result.affectedRows === 0) {
        throw new Error(`Buku dengan ID ${id} tidak ditemukan untuk diperbarui.`);
      }
      return result;
    } catch (error) {
      console.error('Error saat memperbarui Buku:', error.message);
      throw new Error(`Gagal memperbarui data Buku dengan ID ${id}.`);
    }
  }

  static async delete(id) {
    const query = 'DELETE FROM perpustakaan WHERE id = ?';
    try {
      const [result] = await db.execute(query, [id]);
      if (result.affectedRows === 0) {
        throw new Error(`Buku dengan ID ${id} tidak ditemukan untuk dihapus.`);
      }
      return result;
    } catch (error) {
      console.error('Error saat menghapus Buku:', error.message);
      throw new Error(`Gagal menghapus data Buku dengan ID ${id}.`);
    }
  }

  static async searchByTitle(judul) {
    const query = 'SELECT * FROM perpustakaan WHERE judul LIKE ?';
    try {
      const [results] = await db.execute(query, [`%${judul}%`]);
      return results;
    } catch (error) {
      console.error('Error saat mencari Buku berdasarkan judul:', error.message);
      throw new Error('Gagal mencari Buku.');
    }
  }
}

export default Buku;

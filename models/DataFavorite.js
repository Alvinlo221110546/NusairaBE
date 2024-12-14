import db from '../database/Nusairadb.js';

class Favorite {
  constructor(data) {
    this.id = data.id || "";
    this.buku_id = data.buku_id || "";
    this.user_id = data.user_id || "";
    this.created_at = data.created_at || new Date();
  }

  static async create(data) {
    try {
      if (!data.buku_id || !data.user_id) {
        throw new Error('Buku ID dan User ID harus disediakan');
      }

      const existingFavorite = await this.findByBookAndUser(data.buku_id, data.user_id);
      if (existingFavorite) {
        throw new Error('Buku sudah ada di daftar favorit');
      }
      const createdAt = data.created_at || new Date();


      const query = `
        INSERT INTO favorites (buku_id, user_id, created_at)
        VALUES (?, ?, ?)
      `;
      const [result] = await db.execute(query, [
        data.buku_id,
        data.user_id,
        createdAt
      ]);

      return {
        id: result.insertId,
        ...data
      };
    } catch (error) {
      console.error('Error saat membuat favorit:', error.message);
      throw error;
    }
  }

  static async findByBookAndUser(bukuId, userId) {
    const query = 'SELECT * FROM favorites WHERE buku_id = ? AND user_id = ?';
    try {
      const [results] = await db.execute(query, [bukuId, userId]);
      return results.length > 0 ? results[0] : null;
    } catch (error) {
      console.error('Error saat mencari favorit:', error.message);
      throw error;
    }
  }

  static async getAll() {
    const query = `
      SELECT * FROM favorites
      ORDER BY created_at DESC
    `;
    try {
      const [results] = await db.execute(query);
      return results;
    } catch (error) {
      console.error('Error saat mengambil semua favorit:', error.message);
      throw error;
    }
  }
  

  static async getFavoritesByUser(userId) {
    const query = `
      SELECT f.id, f.buku_id, f.created_at, 
             b.judul, b.deskripsi, b.tanggal_terbit, b.link_pdf, b.image
      FROM favorites f
      JOIN perpustakaan b ON f.buku_id = b.id
      WHERE f.user_id = ?
      ORDER BY f.created_at DESC
    `;
    try {
      const [results] = await db.execute(query, [userId]);
      return results;
    } catch (error) {
      console.error('Error saat mengambil daftar favorit:', error.message);
      throw error;
    }
  }

  static async removeFavorite(bukuId, userId) {
    const query = 'DELETE FROM favorites WHERE buku_id = ? AND user_id = ?';
    try {
      const [result] = await db.execute(query, [bukuId, userId]);
      if (result.affectedRows === 0) {
        throw new Error('Buku favorit tidak ditemukan');
      }
      return result;
    } catch (error) {
      console.error('Error saat menghapus favorit:', error.message);
      throw error;
    }
  }
}

export default Favorite;
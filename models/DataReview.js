import db from '../database/Nusairadb.js';

class Review {
  constructor(data) {
    this.id = data.id || null;
    this.supplier_id = data.supplier_id || null;
    this.reviewer_name = data.reviewer_name || '';
    this.review_text = data.review_text || '';
    this.rating = data.rating || 0;
  }

  static async save(data) {
    try {
      const requiredFields = ['supplier_id', 'reviewer_name', 'review_text', 'rating'];
      const missingFields = requiredFields.filter(field => !data[field]);

      if (missingFields.length > 0) {
        throw new Error(`Field yang hilang: ${missingFields.join(', ')}`);
      }

      const query = `
        INSERT INTO supplier_reviews 
        (supplier_id, reviewer_name, review_text, rating)
        VALUES (?, ?, ?, ?)
      `;

      const [result] = await db.execute(query, [
        data.supplier_id,
        data.reviewer_name,
        data.review_text,
        data.rating
      ]);

      return { id: result.insertId, ...data };
    } catch (error) {
      console.error('Error saat menyimpan Review:', error.message);
      throw new Error('Gagal menyimpan Review.');
    }
  }

  static async getBySupplierId(supplierId) {
    const query = 'SELECT * FROM supplier_reviews WHERE supplier_id = ?';
    try {
      const [results] = await db.execute(query, [supplierId]);
      return results;
    } catch (error) {
      console.error('Error saat mengambil Review:', error.message);
      throw new Error('Gagal mengambil Review.');
    }
  }

  static async getAll() {
    const query = 'SELECT * FROM supplier_reviews';
    try {
      const [results] = await db.execute(query);
      return results;
    } catch (error) {
      console.error('Error saat mengambil semua Review:', error.message);
      throw new Error('Gagal mengambil semua Review.');
    }
  }

  static async delete(id) {
    const query = 'DELETE FROM supplier_reviews WHERE id = ?';
    try {
      const [result] = await db.execute(query, [id]);
      if (result.affectedRows === 0) {
        throw new Error(`Review dengan ID ${id} tidak ditemukan untuk dihapus.`);
      }
      return result;
    } catch (error) {
      console.error('Error saat menghapus Review:', error.message);
      throw new Error('Gagal menghapus Review.');
    }
  }
}

export default Review;

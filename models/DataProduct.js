import db from '../database/Nusairadb.js';

class Product {
  constructor(data) {
    this.id = data.id || null;
    this.supplier_id = data.supplier_id || null;
    this.title = data.title || '';
    this.description = data.description || '';
    this.price = data.price || 0;
    this.image = data.image || '';
  }

  static async save(supplierId, data) {
    try {
      const requiredFields = ['title', 'description', 'price'];
      const missingFields = requiredFields.filter(field => !data[field]);
      
      if (missingFields.length > 0) {
        throw new Error(`Field yang hilang: ${missingFields.join(', ')}`);
      }

      const product = new Product({
        ...data,
        supplier_id: supplierId
      });

      const query = `
        INSERT INTO products 
        (supplier_id, title, description, price, image)
        VALUES (?, ?, ?, ?, ?)
      `;
      
      const [result] = await db.execute(query, [
        product.supplier_id,
        product.title,
        product.description,
        product.price,
        product.image
      ]);

      product.id = result.insertId;
      return product;
    } catch (error) {
      console.error('Error saat menyimpan Product:', error.message);
      throw new Error('Gagal menyimpan data Product.');
    }
  }

  static async getProductsBySupplierId(supplierId) {
    const query = 'SELECT * FROM products WHERE supplier_id = ?';
    try {
      const [results] = await db.execute(query, [supplierId]);
      return results;
    } catch (error) {
      console.error('Error saat mengambil Produk berdasarkan Supplier ID:', error.message);
      throw new Error(`Gagal mengambil data Produk untuk Supplier ID ${supplierId}.`);
    }
  }

  static async updateProduct(id, data) {
    const query = `
      UPDATE products
      SET title = ?, description = ?, price = ?, image = ?
      WHERE id = ?
    `;
    try {
      const [result] = await db.execute(query, [
        data.title,
        data.description,
        data.price,
        data.image,
        id
      ]);

      if (result.affectedRows === 0) {
        throw new Error(`Data Produk dengan ID ${id} tidak ditemukan untuk diperbarui.`);
      }
      return result;
    } catch (error) {
      console.error('Error saat memperbarui Produk:', error.message);
      throw new Error(`Gagal memperbarui data Produk dengan ID ${id}.`);
    }
  }

  static async deleteProduct(id) {
    const query = 'DELETE FROM products WHERE id = ?';
    try {
      const [result] = await db.execute(query, [id]);
      if (result.affectedRows === 0) {
        throw new Error(`Data Produk dengan ID ${id} tidak ditemukan untuk dihapus.`);
      }
      return result;
    } catch (error) {
      console.error('Error saat menghapus Produk:', error.message);
      throw new Error(`Gagal menghapus data Produk dengan ID ${id}.`);
    }
  }
}

export default Product;
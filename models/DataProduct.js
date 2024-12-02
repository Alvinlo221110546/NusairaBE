import db from '../database/Nusairadb.js';

class Product {
  constructor(data) {
    this.product_id = data.product_id || null;
    this.product_supplier_id = data.product_supplier_id || null;
    this.product_title = data.product_title || '';
    this.product_description = data.product_description || '';
    this.product_price = data.product_price || 0;
    this.product_image = data.product_image || '';
  }

  static async save(supplierId, data) {
    try {
      const requiredFields = ['product_title', 'product_description', 'product_price'];
      const missingFields = requiredFields.filter(field => !data[field]);
      
      if (missingFields.length > 0) {
        throw new Error(`Field yang hilang: ${missingFields.join(', ')}`);
      }

      const product = new Product({
        ...data,
        product_supplier_id: supplierId
      });

      const query = `
        INSERT INTO products 
        (supplier_id, title, description, price, image)
        VALUES (?, ?, ?, ?, ?)
      `;
      
      const [result] = await db.execute(query, [
        product.product_supplier_id,
        product.product_title,
        product.product_description,
        product.product_price,
        product.product_image
      ]);

      product.product_id = result.insertId;
      return product;
    } catch (error) {
      console.error('Error saat menyimpan Product:', error.message);
      throw new Error('Gagal menyimpan data Product.');
    }
  }

  static async getProductsBySupplierId(supplierId) {
    const query = `
      SELECT 
        id AS product_id, 
        supplier_id AS product_supplier_id, 
        title AS product_title, 
        description AS product_description, 
        price AS product_price, 
        image AS product_image 
      FROM products 
      WHERE supplier_id = ?;
    `;
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
        data.product_title,
        data.product_description,
        data.product_price,
        data.product_image,
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

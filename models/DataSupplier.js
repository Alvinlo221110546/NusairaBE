import db from '../database/Nusairadb.js';

class Supplier {
  constructor(data) {
    this.id = data.id || null;
    this.supplier = data.supplier || '';
    this.province = data.province || [];
    this.location = data.location || [];
    this.description = data.description || '';
    this.image = data.image || '';
    this.availability = data.availability || 'Stok Tersedia';
    this.whatsapp = data.whatsapp || '';
    this.products = data.products || [];
  }

  static async save(data) {
    try {
      const requiredFields = ['supplier', 'description', 'image', 'whatsapp'];
      const missingFields = requiredFields.filter(field => !data[field]);

      if (missingFields.length > 0) {
        throw new Error(`Field yang hilang: ${missingFields.join(', ')}`);
      }

      const supplier = new Supplier(data);
      const query = `
        INSERT INTO suppliers 
        (supplier, province, location, description, image, availability, whatsapp, products)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      `;

      const [result] = await db.execute(query, [
        supplier.supplier,
        supplier.province, // No JSON.stringify here
        supplier.location, // No JSON.stringify here
        supplier.description,
        supplier.image,
        supplier.availability,
        supplier.whatsapp,
        JSON.stringify(supplier.products), // Only JSON.stringify for products
      ]);

      supplier.id = result.insertId;
      return supplier;
    } catch (error) {
      console.error('Error saat menyimpan Supplier:', error.message);
      throw new Error('Gagal menyimpan data Supplier.');
    }
  }

  static async getAll() {
    const query = 'SELECT * FROM suppliers';
    try {
      const [results] = await db.execute(query);
      return results.map(result => ({
        ...result,
        province: result.province, 
        location: result.location, 
        products: JSON.parse(result.products), 
      }));
    } catch (error) {
      console.error('Error saat mengambil semua data Supplier:', error.message);
      throw new Error('Gagal mengambil data Supplier.');
    }
  }

  static async getById(id) {
    const query = 'SELECT * FROM suppliers WHERE id = ?';
    try {
      const [results] = await db.execute(query, [id]);
      if (results.length === 0) {
        throw new Error(`Data Supplier dengan ID ${id} tidak ditemukan.`);
      }

      const result = results[0];
      return {
        ...result,
        province: result.province, 
        location: result.location, 
        products: JSON.parse(result.products), 
      };
    } catch (error) {
      console.error('Error saat mengambil data Supplier berdasarkan ID:', error.message);
      throw new Error(`Gagal mengambil data Supplier dengan ID ${id}.`);
    }
  }

  static async update(id, data) {
    const query = `
      UPDATE suppliers
      SET supplier = ?, province = ?, location = ?, description = ?, 
          image = ?, availability = ?, whatsapp = ?, 
          products = ?
      WHERE id = ?
    `;
    try {
      const [result] = await db.execute(query, [
        data.supplier,
        data.province, 
        data.location, 
        data.description,
        data.image,
        data.availability,
        data.whatsapp,
        JSON.stringify(data.products), 
        id,
      ]);

      if (result.affectedRows === 0) {
        throw new Error(`Data Supplier dengan ID ${id} tidak ditemukan untuk diperbarui.`);
      }
      return result;
    } catch (error) {
      console.error('Error saat memperbarui Supplier:', error.message);
      throw new Error(`Gagal memperbarui data Supplier dengan ID ${id}.`);
    }
  }

  static async delete(id) {
    const query = 'DELETE FROM suppliers WHERE id = ?';
    try {
      const [result] = await db.execute(query, [id]);
      if (result.affectedRows === 0) {
        throw new Error(`Data Supplier dengan ID ${id} tidak ditemukan untuk dihapus.`);
      }
      return result;
    } catch (error) {
      console.error('Error saat menghapus Supplier:', error.message);
      throw new Error(`Gagal menghapus data Supplier dengan ID ${id}.`);
    }
  }
}

export default Supplier;

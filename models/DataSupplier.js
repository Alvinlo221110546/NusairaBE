import db from '../database/Nusairadb.js';

class Supplier {
  constructor(data) {
    this.id = data.id || null;
    this.supplier = data.supplier || '';
    this.province = data.province || [];
    this.location = data.location || [];
    this.description = data.description || '';
    this.image = data.image || '';
    this.rating = data.rating || 0;
    this.availability = data.availability || 'Stok Tersedia';
    this.whatsapp = data.whatsapp || '';
    this.products = data.products || [];
    this.reviews = data.reviews || [];
  }

  static async save(data) {
    try {
      const requiredFields = ['supplier', 'description', 'image', 'rating', 'whatsapp'];
      const missingFields = requiredFields.filter(field => !data[field]);
      
      if (missingFields.length > 0) {
        throw new Error(`Field yang hilang: ${missingFields.join(', ')}`);
      }

      const supplier = new Supplier(data);
      const query = `
        INSERT INTO suppliers 
        (supplier, province, location, description, image, rating, availability, whatsapp, products, reviews)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `;
      
      const [result] = await db.execute(query, [
        supplier.supplier,
        JSON.stringify(supplier.province),
        JSON.stringify(supplier.location),
        supplier.description,
        supplier.image,
        supplier.rating,
        supplier.availability,
        supplier.whatsapp,
        JSON.stringify(supplier.products),
        JSON.stringify(supplier.reviews)
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
        province: JSON.parse(result.province),
        location: JSON.parse(result.location),
        products: JSON.parse(result.products),
        reviews: JSON.parse(result.reviews)
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
        province: JSON.parse(result.province),
        location: JSON.parse(result.location),
        products: JSON.parse(result.products),
        reviews: JSON.parse(result.reviews)
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
          image = ?, rating = ?, availability = ?, whatsapp = ?, 
          products = ?, reviews = ?
      WHERE id = ?
    `;
    try {
      const [result] = await db.execute(query, [
        data.supplier,
        JSON.stringify(data.province),
        JSON.stringify(data.location),
        data.description,
        data.image,
        data.rating,
        data.availability,
        data.whatsapp,
        JSON.stringify(data.products),
        JSON.stringify(data.reviews),
        id
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

  static async getByProvince(province) {
    const query = 'SELECT * FROM suppliers WHERE JSON_CONTAINS(province, ?)';
    try {
      const [results] = await db.execute(query, [JSON.stringify(province)]);
      return results.map(result => ({
        ...result,
        province: JSON.parse(result.province),
        location: JSON.parse(result.location),
        products: JSON.parse(result.products),
        reviews: JSON.parse(result.reviews)
      }));
    } catch (error) {
      console.error('Error saat mengambil Supplier berdasarkan Provinsi:', error.message);
      throw new Error(`Gagal mengambil data Supplier dari Provinsi ${province}.`);
    }
  }

  static async getByLocation(location) {
    const query = 'SELECT * FROM suppliers WHERE JSON_CONTAINS(location, ?)';
    try {
      const [results] = await db.execute(query, [JSON.stringify(location)]);
      return results.map(result => ({
        ...result,
        province: JSON.parse(result.province),
        location: JSON.parse(result.location),
        products: JSON.parse(result.products),
        reviews: JSON.parse(result.reviews)
      }));
    } catch (error) {
      console.error('Error saat mengambil Supplier berdasarkan Lokasi:', error.message);
      throw new Error(`Gagal mengambil data Supplier dari Lokasi ${location}.`);
    }
  }
}

export default Supplier;
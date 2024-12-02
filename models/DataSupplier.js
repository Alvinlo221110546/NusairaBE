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
        (supplier, province, location, description, image, availability, whatsapp)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `;

      const [result] = await db.execute(query, [
        supplier.supplier,
        supplier.province, 
        supplier.location, 
        supplier.description,
        supplier.image,
        supplier.availability,
        supplier.whatsapp,
      ]);

      supplier.id = result.insertId;
      return supplier;
    } catch (error) {
      console.error('Error saat menyimpan Supplier:', error.message);
      throw new Error('Gagal menyimpan data Supplier.');
    }
  }

  static async getAll(includeProducts = true) {
    const query = includeProducts
      ? `
        SELECT s.*, p.product_id, p.product_title, p.product_description, p.product_price, p.product_image
        FROM suppliers s
        LEFT JOIN products p ON s.id = p.product_supplier_id;
      `
      : `
        SELECT * FROM suppliers;
      `;
  
    try {
      const [results] = await db.execute(query);
      console.log("Results from database:", results);
  
      if (includeProducts) {
        const suppliersMap = new Map();
  
        results.forEach(row => {
          if (!suppliersMap.has(row.id)) {
            suppliersMap.set(row.id, {
              id: row.id,
              supplier: row.supplier,
              province: row.province || [],
              location: row.location || [],
              description: row.description,
              image: row.image,
              availability: row.availability,
              whatsapp: row.whatsapp,
              products: [],
            });
          }
  
          if (row.product_id) {
            suppliersMap.get(row.id).products.push({
              id: row.product_id,
              title: row.product_title,
              description: row.product_description,
              price: row.product_price,
              image: row.product_image,
            });
          }
        });
  
        return Array.from(suppliersMap.values());
      } else {
        return results.map(result => ({
          ...result,
          province: result.province || [],
          location: result.location || [],
          products: [],
        }));
      }
    } catch (error) {
      console.error('Error saat mengambil semua data Supplier:', error.message);
      throw new Error('Gagal mengambil data Supplier.');
    }
  }
  

  static async getById(id, includeProducts = true) {
    const query = includeProducts
      ? `
        SELECT s.*, p.product_id, p.product_title, p.product_description, p.product_price, p.product_image
        FROM suppliers s
        LEFT JOIN products p ON s.id = p.product_supplier_id
        WHERE s.id = ?;
      `
      : `
        SELECT * FROM suppliers WHERE id = ?;
      `;
  
    try {
      const [results] = await db.execute(query, [id]);
  
      if (results.length === 0) {
        throw new Error(`Data Supplier dengan ID ${id} tidak ditemukan.`);
      }
  
      if (includeProducts) {
        const supplier = {
          id: results[0].id,
          supplier: results[0].supplier,
          province: results[0].province || [],
          location: results[0].location || [],
          description: results[0].description,
          image: results[0].image,
          availability: results[0].availability,
          whatsapp: results[0].whatsapp,
          products: results[0].product_id
            ? results.map(row => ({
                id: row.product_id,
                title: row.product_title,
                description: row.product_description,
                price: row.product_price,
                image: row.product_image,
              }))
            : [],
        };
        return supplier;
      } else {
        const result = results[0];
        return {
          ...result,
          province: result.province || [],
          location: result.location || [],
          products: [],
        };
      }
    } catch (error) {
      console.error('Error saat mengambil data Supplier berdasarkan ID:', error.message);
      throw new Error(`Gagal mengambil data Supplier dengan ID ${id}.`);
    }
  }
  

  static async update(id, data) {
    const query = `
      UPDATE suppliers
      SET supplier = ?, province = ?, location = ?, description = ?, 
          image = ?, availability = ?, whatsapp = ?
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

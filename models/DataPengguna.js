import db from '../database/Nusairadb.js';

class Pengguna {
    static async save(pengguna) {
      const { name, email, password, role, pekerjaan, jenis_kelamin, no_hp, lokasi, foto_profile } = pengguna;
      const [result] = await db.execute(
        'INSERT INTO pengguna (name, email, password, role, pekerjaan, jenis_kelamin, no_hp, lokasi, foto_profile) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [name, email, password, role, pekerjaan, jenis_kelamin, no_hp, lokasi, foto_profile]
      );
      return result;
    }
  
    static async getAll() {
      const [rows] = await db.query('SELECT * FROM pengguna');
      return rows;
    }
  
    static async getById(id) {
      const [rows] = await db.query('SELECT * FROM pengguna WHERE id = ?', [id]);
      return rows[0];
    }
  
    static async update(id, pengguna) {
      const { name, email, password, role, pekerjaan, jenis_kelamin, no_hp, lokasi, foto_profile } = pengguna;
      await db.execute(
        'UPDATE pengguna SET name = ?, email = ?, password = ?, role = ?, pekerjaan = ?, jenis_kelamin = ?, no_hp = ?, lokasi = ?, foto_profile = ? WHERE id = ?',
        [name, email, password, role, pekerjaan, jenis_kelamin, no_hp, lokasi, foto_profile, id]
      );
    }
  
    static async delete(id) {
      await db.execute('DELETE FROM pengguna WHERE id = ?', [id]);
    }
  
    static async getByEmail(email) {
      const [rows] = await db.query('SELECT * FROM pengguna WHERE email = ?', [email]);
      return rows[0];
    }
  }
  
  export default Pengguna;
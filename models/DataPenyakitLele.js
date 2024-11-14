import db from '../database/Nusairadb.js'; 

class PenyakitLele {
  constructor(data) {
    this.id = data.id || null; 
    this.title = data.title;
    this.content = data.content;
    this.image = data.image;
    this.date = data.date;
    this.created_at = data.created_at || new Date(); 
    this.updated_at = data.updated_at || new Date(); 
  }


  static async save(data) {
    const penyakitLele = new PenyakitLele(data);
    return new Promise((resolve, reject) => {
      const query = `
        INSERT INTO PENYAKIT_LELE (title, content, image, date, created_at, updated_at)
        VALUES (?, ?, ?, ?, ?, ?)
      `;
      db.query(query, [
        penyakitLele.title,
        penyakitLele.content,
        penyakitLele.image,
        penyakitLele.date,
        penyakitLele.created_at,
        penyakitLele.updated_at,
      ], (err, result) => {
        if (err) {
          return reject(err);
        }
        penyakitLele.id = result.insertId;
        resolve(penyakitLele); 
      });
    });
  }

  
  static getAll() {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM PENYAKIT_LELE', (err, result) => {
        if (err) {
          return reject(err);
        }
        resolve(result); 
      });
    });
  }


  static getById(id) {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM PENYAKIT_LELE WHERE id = ?', [id], (err, result) => {
        if (err) {
          return reject(err);
        }
        resolve(result[0] || null); 
      });
    });
  }


  static update(id, data) {
    return new Promise((resolve, reject) => {
      const query = `
        UPDATE PENYAKIT_LELE SET title = ?, content = ?, image = ?, date = ?, updated_at = ?
        WHERE id = ?
      `;
      db.query(query, [
        data.title,
        data.content,
        data.image,
        data.date,
        new Date(), 
        id,
      ], (err, result) => {
        if (err) {
          return reject(err);
        }
        resolve(result);
      });
    });
  }

  
  static delete(id) {
    return new Promise((resolve, reject) => {
      db.query('DELETE FROM PENYAKIT_LELE WHERE id = ?', [id], (err, result) => {
        if (err) {
          return reject(err);
        }
        resolve(result); 
      });
    });
  }
}

export default PenyakitLele;

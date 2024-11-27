import db from '../database/Nusairadb.js';

class Contact {
  constructor(data) {
    this.nama = data.nama;
    this.email = data.email;
    this.subjek = data.subjek;
    this.pesan = data.pesan;
    this.tanggal = data.tanggal || new Date();
    this.status = data.status || 'pending';
  }

  static validate(data) {
    const errors = [];

    if (!data.nama || data.nama.trim() === '') {
      errors.push("Nama harus diisi.");
    }

    if (!data.email || !this.isValidEmail(data.email)) {
      errors.push("Email tidak valid.");
    }

    if (!data.subjek || data.subjek.trim() === '') {
      errors.push("Subjek harus diisi.");
    }

    if (!data.pesan || data.pesan.trim() === '') {
      errors.push("Pesan harus diisi.");
    }

    return errors;
  }

  static isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  static async save(data) {
    const validationErrors = this.validate(data);
    if (validationErrors.length > 0) {
      throw new Error(validationErrors.join(", "));
    }

    try {
      const query = `
        INSERT INTO contact_messages (nama, email, subjek, pesan, tanggal, status)
        VALUES (?, ?, ?, ?, ?, ?)
      `;
      const [result] = await db.execute(query, [
        data.nama,
        data.email,
        data.subjek,
        data.pesan,
        data.tanggal || new Date(),
        data.status || 'pending'
      ]);
      return result;
    } catch (error) {
      console.error("Error saving contact message:", error.message);
      throw error;
    }
  }

  static async getAll() {
    try {
      const [results] = await db.execute('SELECT * FROM contact_messages ORDER BY tanggal DESC');
      return results;
    } catch (error) {
      console.error("Error fetching all contact messages:", error.message);
      throw error;
    }
  }

  static async getUnreadMessages() {
    try {
      const [results] = await db.execute('SELECT * FROM contact_messages WHERE status = ? ORDER BY tanggal DESC', ['pending']);
      return results;
    } catch (error) {
      console.error("Error fetching unread messages:", error.message);
      throw error;
    }
  }

  static async markAsRead(messageId) {
    try {
      const query = 'UPDATE contact_messages SET status = ? WHERE id = ?';
      const [result] = await db.execute(query, ['read', messageId]);
      return result;
    } catch (error) {
      console.error("Error marking message as read:", error.message);
      throw error;
    }
  }

  static async delete(messageId) {
    try {
      const query = 'DELETE FROM contact_messages WHERE id = ?';
      const [result] = await db.execute(query, [messageId]);
      if (result.affectedRows === 0) {
        throw new Error('Pesan tidak ditemukan atau sudah dihapus.');
      }
      return result;
    } catch (error) {
      console.error("Error deleting message:", error.message);
      throw error;
    }
  }
}

export default Contact;
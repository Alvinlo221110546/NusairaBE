import db from "../database/Nusairadb.js";
import { v4 as uuidv4 } from "uuid";

class Tagihan {
  constructor(data) {
    this.id = data.id || uuidv4();
    this.invoiceNumber = data.invoice_number;
    this.dueDate = data.due_date;
    this.amount = data.amount;
    this.total = data.total;
    this.user_id = data.user_id;
    this.paket_id = data.paket_id;
    this.status = data.status;
    this.created_at = data.created_at || new Date();
    this.updated_at = data.updated_at || new Date();
  }

  static async save(data) {
    try {
      if (data.status !== 0 && data.status !== 1) {
        throw new Error(
          "Invalid status value. Allowed values are 0 (belum_bayar) or 1 (sudah_bayar)."
        );
      }

      const tagihan = new Tagihan(data);

      const query = `
      INSERT INTO tagihan (
          id, invoice_number, due_date, amount, total, user_id, paket_id, status, created_at, updated_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
  
      const [result] = await db.execute(query, [
        tagihan.id,
        tagihan.invoiceNumber,
        tagihan.dueDate,
        tagihan.amount,
        tagihan.total,
        tagihan.user_id,
        tagihan.paket_id,
        tagihan.status,
        tagihan.created_at,
        tagihan.updated_at,
      ]);
      return result;
    } catch (err) {
      throw new Error("Error saving tagihan: " + err.message);
    }
  }

  static async getAll() {
    try {
      const query = `
                SELECT tagihan.*, paket.name, paket.price
                FROM tagihan
                INNER JOIN paket ON tagihan.paket_id = paket.id
            `;
      const [result] = await db.execute(query);
      console.log(result);
      return result;
    } catch (err) {
      throw new Error("Error fetching all tagihan: " + err.message);
    }
  }

  static async getById(id) {
    try {
      const query = `
                SELECT tagihan.*, paket.name, paket.price
                FROM tagihan
                INNER JOIN paket ON tagihan.paket_id = paket.id
                WHERE tagihan.id = ?
            `;
      const [result] = await db.execute(query, [id]);

      if (result.length === 0) {
        throw new Error("Tagihan not found");
      }
      return result[0];
    } catch (err) {
      throw new Error("Error fetching tagihan by ID: " + err.message);
    }
  }

  static async getByUserId(user_id) {
    try {
      const query = `
            SELECT tagihan.*, paket.name, paket.price
            FROM tagihan
            INNER JOIN paket ON tagihan.paket_id = paket.id
            WHERE tagihan.user_id = ?`;
      const [result] = await db.execute(query, [user_id]);
      return result;
    } catch (err) {
      throw new Error("Error fetching tagihan for user: " + err.message);
    }
  }

  static async update(id, data) {
    try {
      if (data.status !== 0 && data.status !== 1) {
        throw new Error(
          "Invalid status value. Allowed values are 0 (belum_bayar) or 1 (sudah_bayar)."
        );
      }

      const query = `
                UPDATE tagihan
                SET nvoice_number = ?, due_date = ?, amount = ?, total = ?, user_id = ?, paket_id = ?, status = ?, updated_at = ?
                WHERE id = ?
            `;
      const [result] = await db.execute(query, [
        data.invoiceNumber,
        data.dueDate,
        data.amount,
        data.total,
        data.user_id,
        data.paket_id,
        data.status,
        new Date(),
        id,
      ]);

      if (result.affectedRows === 0) {
        throw new Error("Tagihan not found to update");
      }

      return result;
    } catch (err) {
      throw new Error("Error updating tagihan: " + err.message);
    }
  }

  static async delete(id) {
    try {
      const query = "DELETE FROM tagihan WHERE id = ?";
      const [result] = await db.execute(query, [id]);

      if (result.affectedRows === 0) {
        throw new Error("Tagihan not found to delete");
      }

      return result;
    } catch (err) {
      throw new Error("Error deleting tagihan: " + err.message);
    }
  }
}

export default Tagihan;

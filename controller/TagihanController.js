import Tagihan from "../models/Tagihan.js";

class TagihanController {
  async addTagihan(req, res) {
    const { invoiceNumber, dueDate, amount, total, user_id, paket_id, status } = req.body;

    if (!invoiceNumber || !dueDate || amount === undefined || total === undefined || !user_id || !paket_id || status === undefined) {
      return res.status(400).json({ message: "Semua kolom harus diisi!" });
    }

    try {
      const result = await Tagihan.save({
        invoiceNumber,
        dueDate,
        amount,
        total,
        user_id,
        paket_id,
        status,
      });

      res.status(201).json({
        message: "Tagihan berhasil ditambahkan!",
        data: result,
      });
    } catch (err) {
      res.status(500).json({
        message: "Terjadi kesalahan saat menambahkan tagihan",
        error: err.message,
      });
    }
  }

  async getAllTagihan(req, res) {
    try {
      const result = await Tagihan.getAll();
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json({
        message: "Terjadi kesalahan saat mengambil data tagihan",
        error: err.message,
      });
    }
  }

  async getTagihanById(req, res) {
    const { id } = req.params;

    try {
      const result = await Tagihan.getById(id);
      res.status(200).json(result);
    } catch (err) {
      res.status(404).json({
        message: "Tagihan tidak ditemukan",
        error: err.message,
      });
    }
  }

  async getTagihanByUserId(req, res) {
    const { user_id } = req.params;

    try {
      const result = await Tagihan.getByUserId(user_id);
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json({
        message: "Terjadi kesalahan saat mengambil data tagihan untuk pengguna",
        error: err.message,
      });
    }
  }

  async updateTagihan(req, res) {
    const { id } = req.params;
    const { invoiceNumber, dueDate, amount, total, user_id, paket_id, status } = req.body;

    if (!invoiceNumber || !dueDate || amount === undefined || total === undefined || !user_id || !paket_id || status === undefined) {
      return res.status(400).json({ message: "Semua kolom harus diisi!" });
    }

    try {
      const result = await Tagihan.update(id, {
        invoiceNumber,
        dueDate,
        amount,
        total,
        user_id,
        paket_id,
        status,
      });

      res.status(200).json({
        message: "Tagihan berhasil diperbarui!",
        data: result,
      });
    } catch (err) {
      res.status(404).json({
        message: "Tagihan tidak ditemukan untuk diperbarui",
        error: err.message,
      });
    }
  }

  async deleteTagihan(req, res) {
    const { id } = req.params;

    try {
      const result = await Tagihan.delete(id);
      res.status(200).json({ message: "Tagihan berhasil dihapus!" });
    } catch (err) {
      res.status(404).json({
        message: "Tagihan tidak ditemukan untuk dihapus",
        error: err.message,
      });
    }
  }
}

export default new TagihanController();

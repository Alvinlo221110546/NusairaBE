import Tagihan from "../models/DataTagihan.js";

class TagihanController {
  async addTagihan(req, res) {
    const { id, invoiceNumber, dueDate, amount, total, user_id } = req.body;

    if (
      !id ||
      !invoiceNumber ||
      !dueDate ||
      amount === undefined ||
      total === undefined ||
      !user_id
    ) {
      return res.status(400).json({ message: "Semua kolom harus diisi!" });
    }

    try {
      const tagihan = { id, invoiceNumber, dueDate, amount, total, user_id };
      await Tagihan.save(tagihan);
      res.status(201).json({ message: "Tagihan berhasil ditambahkan!" });
    } catch (err) {
      console.error(err);
      res
        .status(500)
        .json({
          message: "Terjadi kesalahan dalam menambahkan tagihan",
          error: err.message,
        });
    }
  }

  async getAllTagihan(req, res) {
    const user_id = req.user.id;

    try {
      let tagihan;

      if (req.user.role === "admin") {
        tagihan = await Tagihan.getAll();
      } else {
        tagihan = await Tagihan.getByUserId(user_id);
      }

      if (!tagihan || tagihan.length === 0) {
        return res.status(200).json([]);
      }

      res.status(200).json(tagihan);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({
          message: "Terjadi kesalahan saat mengambil data tagihan",
          error: error.message,
        });
    }
  }

  async getTagihanById(req, res) {
    const tagihanId = req.params.id;

    try {
      const tagihan = await Tagihan.findByPk(tagihanId);

      if (!tagihan) {
        return res.status(404).json({ message: "Tagihan tidak ditemukan" });
      }
      res.status(200).json(tagihan);
    } catch (err) {
      console.error(err);
      res
        .status(500)
        .json({
          message: "Terjadi kesalahan dalam mengambil data tagihan",
          error: err.message,
        });
    }
  }

  async updateTagihan(req, res) {
    const tagihanId = req.params.id;
    const { invoiceNumber, dueDate, amount, total, user_id } = req.body;

    if (
      !invoiceNumber ||
      !dueDate ||
      amount === undefined ||
      total === undefined ||
      !user_id
    ) {
      return res.status(400).json({ message: "Semua kolom harus diisi!" });
    }

    try {
      const updatedTagihan = { invoiceNumber, dueDate, amount, total, user_id };

      const [updatedRows] = await Tagihan.update(updatedTagihan, {
        where: { id: tagihanId },
      });

      if (updatedRows === 0) {
        return res
          .status(404)
          .json({ message: "Tagihan tidak ditemukan untuk diperbarui" });
      }

      res.status(200).json({ message: "Tagihan berhasil diperbarui!" });
    } catch (err) {
      console.error(err);
      res
        .status(500)
        .json({
          message: "Terjadi kesalahan dalam mengupdate tagihan",
          error: err.message,
        });
    }
  }

  async deleteTagihan(req, res) {
    const tagihanId = req.params.id;

    try {
      const deletedRows = await Tagihan.destroy({ where: { id: tagihanId } });

      if (deletedRows === 0) {
        return res
          .status(404)
          .json({ message: "Tagihan tidak ditemukan untuk dihapus" });
      }

      res.status(200).json({ message: "Tagihan berhasil dihapus!" });
    } catch (err) {
      console.error(err);
      res
        .status(500)
        .json({
          message: "Terjadi kesalahan dalam menghapus tagihan",
          error: err.message,
        });
    }
  }
}

export default new TagihanController();

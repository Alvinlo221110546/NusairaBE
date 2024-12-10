import Buku from '../models/DataBuku.js';

class BukuController {
  static async create(req, res) {
    try {
      const data = req.body;
      const buku = await Buku.save(data);
      res.status(201).json({
        message: 'Buku berhasil dibuat.',
        data: buku,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }

  static async getAll(req, res) {
    try {
      const bukuList = await Buku.getAll();
      res.status(200).json(bukuList);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }

  static async getById(req, res) {
    try {
      const { id } = req.params;
      const buku = await Buku.getById(id);
      res.status(200).json(buku);
    } catch (error) {
      res.status(404).json({
        message: error.message,
      });
    }
  }

  static async update(req, res) {
    try {
      const { id } = req.params;
      const data = req.body;
      await Buku.update(id, data);
      res.status(200).json({
        message: 'Buku berhasil diperbarui.',
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.params;
      await Buku.delete(id);
      res.status(200).json({
        message: 'Buku berhasil dihapus.',
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }

  static async searchByTitle(req, res) {
    try {
      const { judul } = req.query;
      const results = await Buku.searchByTitle(judul);
      res.status(200).json(results);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
}

export default BukuController;

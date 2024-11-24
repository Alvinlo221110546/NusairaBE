import PenyakitLele from '../models/DataPenyakitLele';

class PenyakitLeleController {
  static async getAll(req, res) {
    try {
      const data = await PenyakitLele.getAll();
      res.status(200).json({
        success: true,
        message: 'Data berhasil diambil.',
        data,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Gagal mengambil data Penyakit Lele.',
        error: error.message,
      });
    }
  }

  static async getById(req, res) {
    const { id } = req.params;
    try {
      const data = await PenyakitLele.getById(id);
      res.status(200).json({
        success: true,
        message: `Data dengan ID ${id} berhasil diambil.`,
        data,
      });
    } catch (error) {
      res.status(404).json({
        success: false,
        message: `Gagal mengambil data dengan ID ${id}.`,
        error: error.message,
      });
    }
  }

  static async save(req, res) {
    const { title, date, image, indikasi, penyebab, penanganan, pencegahan, gejalaTambahan, referensi } = req.body;

    if (!title || !date || !image) {
      return res.status(400).json({
        success: false,
        message: 'Kolom title, date, dan image wajib diisi.',
      });
    }

    try {
      const data = await PenyakitLele.save({
        title,
        date,
        image,
        indikasi,
        penyebab,
        penanganan,
        pencegahan,
        gejalaTambahan,
        referensi,
      });

      res.status(201).json({
        success: true,
        message: 'Data berhasil disimpan.',
        data,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Gagal menyimpan data Penyakit Lele.',
        error: error.message,
      });
    }
  }

  static async update(req, res) {
    const { id } = req.params;
    const { title, date, image, indikasi, penyebab, penanganan, pencegahan, gejalaTambahan, referensi } = req.body;

    if (!title || !date || !image) {
      return res.status(400).json({
        success: false,
        message: 'Kolom title, date, dan image wajib diisi.',
      });
    }

    try {
      const result = await PenyakitLele.update(id, {
        title,
        date,
        image,
        indikasi,
        penyebab,
        penanganan,
        pencegahan,
        gejalaTambahan,
        referensi,
      });

      res.status(200).json({
        success: true,
        message: `Data dengan ID ${id} berhasil diperbarui.`,
        result,
      });
    } catch (error) {
      res.status(404).json({
        success: false,
        message: `Gagal memperbarui data dengan ID ${id}.`,
        error: error.message,
      });
    }
  }

  static async delete(req, res) {
    const { id } = req.params;

    try {
      const result = await PenyakitLele.delete(id);
      res.status(200).json({
        success: true,
        message: `Data dengan ID ${id} berhasil dihapus.`,
        result,
      });
    } catch (error) {
      res.status(404).json({
        success: false,
        message: `Gagal menghapus data dengan ID ${id}.`,
        error: error.message,
      });
    }
  }
}

export default PenyakitLeleController;

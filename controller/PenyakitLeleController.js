import PenyakitLele from "../models/DataPenyakitLele.js";

// Menangani request untuk menambahkan data penyakit lele baru
export const createPenyakitLele = async (req, res) => {
  try {
    const { title, date, image, indikasi, penyebab, penanganan, pencegahan, gejalaTambahan, referensi } = req.body;

    // Validasi data yang diterima
    const penyakitLeleData = {
      title,
      date,
      image,
      indikasi,
      penyebab,
      penanganan,
      pencegahan,
      gejalaTambahan,
      referensi
    };

    // Simpan data penyakit lele menggunakan model
    const penyakitLele = await PenyakitLele.save(penyakitLeleData);

    res.status(200).json({
      message: "Penyakit Lele berhasil ditambahkan.",
      data: penyakitLele
    });
  } catch (error) {
    console.error("Error saat membuat data penyakit lele:", error.message);
    res.status(500).json({ message: "Gagal membuat data penyakit lele." });
  }
};

// Menangani request untuk mengambil semua data penyakit lele
export const getAllPenyakitLele = async (req, res) => {
  try {
    const penyakitLeleList = await PenyakitLele.getAll();
    res.status(200).json({
      message: "Berhasil mengambil data penyakit lele.",
      data: penyakitLeleList
    });
  } catch (error) {
    console.error("Error saat mengambil data penyakit lele:", error.message);
    res.status(500).json({ message: "Gagal mengambil data penyakit lele." });
  }
};

// Menangani request untuk mengambil data penyakit lele berdasarkan ID
export const getPenyakitLeleById = async (req, res) => {
  try {
    const { id } = req.params;
    const penyakitLele = await PenyakitLele.getById(id);
    res.status(200).json({
      message: "Berhasil mengambil data penyakit lele.",
      data: penyakitLele
    });
  } catch (error) {
    console.error(`Error saat mengambil data penyakit lele dengan ID ${req.params.id}:`, error.message);
    res.status(500).json({ message: `Gagal mengambil data penyakit lele dengan ID ${req.params.id}.` });
  }
};

// Menangani request untuk memperbarui data penyakit lele berdasarkan ID
export const updatePenyakitLele = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, date, image, indikasi, penyebab, penanganan, pencegahan, gejalaTambahan, referensi } = req.body;

    // Validasi dan persiapkan data untuk update
    const penyakitLeleData = {
      title,
      date,
      image,
      indikasi,
      penyebab,
      penanganan,
      pencegahan,
      gejalaTambahan,
      referensi
    };

    // Perbarui data penyakit lele menggunakan model
    const result = await PenyakitLele.update(id, penyakitLeleData);

    res.status(200).json({
      message: "Penyakit Lele berhasil diperbarui.",
      data: result
    });
  } catch (error) {
    console.error(`Error saat memperbarui penyakit lele dengan ID ${req.params.id}:`, error.message);
    res.status(500).json({ message: `Gagal memperbarui penyakit lele dengan ID ${req.params.id}.` });
  }
};

// Menangani request untuk menghapus data penyakit lele berdasarkan ID
export const deletePenyakitLele = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await PenyakitLele.delete(id);

    res.status(200).json({
      message: "Penyakit Lele berhasil dihapus.",
      data: result
    });
  } catch (error) {
    console.error(`Error saat menghapus penyakit lele dengan ID ${req.params.id}:`, error.message);
    res.status(500).json({ message: `Gagal menghapus penyakit lele dengan ID ${req.params.id}.` });
  }
};

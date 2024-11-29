import PenyakitLele from "../models/DataPenyakitLele.js";

export const createPenyakitLele = async (req, res) => {
  try {
    const { title, date, image, indikasi, penyebab, penanganan, pencegahan, gejalaTambahan, referensi } = req.body;

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

export const updatePenyakitLele = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, date, image, indikasi, penyebab, penanganan, pencegahan, gejalaTambahan, referensi } = req.body;

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

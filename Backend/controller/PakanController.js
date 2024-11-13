import DataPakan from '../models/DataPakan.js';

const createDataPakan = async (req, res) => {
  const { kolam, tanggal, waktu, puasa, jumlah, catatan } = req.body;

  
  if (!kolam || !tanggal || !waktu || !jumlah) {
    return res.status(400).json({
      message: 'Kolam, tanggal, waktu, dan jumlah harus diisi.',
    });
  }

  try {
    
    const dataPakan = new DataPakan(kolam, tanggal, waktu, puasa, jumlah, catatan);

    
    const result = await dataPakan.save();

    res.status(201).json({
      message: 'Data Pakan berhasil ditambahkan',
      data: result,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Terjadi kesalahan saat menyimpan data',
      error: error.message,
    });
  }
};

const getAllDataPakan = async (req, res) => {
  try {
    const dataPakan = await DataPakan.getAll();
    res.status(200).json({
      message: 'Data Pakan berhasil diambil',
      data: dataPakan,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Terjadi kesalahan saat mengambil data',
      error: error.message,
    });
  }
};

export { createDataPakan, getAllDataPakan };

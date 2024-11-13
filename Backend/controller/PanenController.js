import DataPanen from '../models/DataPanen.js'; 

const addDataPanen = async (req, res) => {
  try {
    const { kolam, tanggal, berat, size, hargaJual, status, catatan } = req.body;

    
    if (!kolam || !tanggal || !berat || !size || !hargaJual || !status) {
      return res.status(400).json({ message: "Semua field wajib diisi." });
    }

    
    const dataPanen = new DataPanen(kolam, tanggal, berat, size, hargaJual, status, catatan);
    const result = await DataPanen.save(dataPanen);

  
    res.status(200).json({ message: "Data panen berhasil disimpan", result });
  } catch (err) {
    console.error("Error saving data panen:", err);
    res.status(500).json({ message: "Terjadi kesalahan", error: err.message });
  }
};

const getDataPanen = async (req, res) => {
  try {
    const data = await DataPanen.getAll();
    res.status(200).json(data);
  } catch (err) {
    console.error("Error fetching data panen:", err);
    res.status(500).json({ message: "Terjadi kesalahan", error: err.message });
  }
};

export { addDataPanen, getDataPanen };  
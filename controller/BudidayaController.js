import BudidayaIkan from '../models/DataBudidayaIkan.js';

class BudidayaIkanController {
  static async ambilSemuaData(req, res) {
    try {
      const { provinsi, kota, tahun } = req.query;
      const data = await BudidayaIkan.dapatkanDataBudidaya({ 
        provinsi, 
        kota, 
        tahun 
      });
      res.json(data);
    } catch (error) {
      res.status(500).json({ 
        pesan: 'Gagal mengambil data budidaya ikan', 
        error: error.message 
      });
    }
  }

  static async ambilTotalProduksi(req, res) {
    try {
      const totalProduksi = await BudidayaIkan.dapatkanTotalProduksi();
      res.json(totalProduksi);
    } catch (error) {
      res.status(500).json({ 
        pesan: 'Gagal mengambil total produksi', 
        error: error.message 
      });
    }
  }
}

export default BudidayaIkanController;
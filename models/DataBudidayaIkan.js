import db from '../database/Nusairadb.js';

class BudidayaIkan {
  constructor(data) {
    this.provinsi = data.province;
    this.kota = data.city;
    this.tahun = data.year;
    this.volume = data.volume;
    this.pendapatanTotal = data.total_revenue;
    this.hargaPasar = data.market_price;
    this.diimporPada = data.imported_at;
  }

  static async dapatkanDataBudidaya(opsi = {}) {
    const { provinsi = null, kota = null, tahun = null } = opsi;

    try {
      let query = `
        SELECT * FROM catfish_production 
        WHERE 1=1
      `;
      const params = [];

      if (provinsi) {
        query += ` AND province = ?`;
        params.push(provinsi);
      }

      if (kota) {
        query += ` AND city = ?`;
        params.push(kota);
      }

      if (tahun) {
        query += ` AND year = ?`;
        params.push(tahun);
      }

      query += ` ORDER BY total_revenue DESC`;

      const [rows] = await db.execute(query, params);
      return rows.map(row => new BudidayaIkan(row));

    } catch (error) {
      console.error('Kesalahan dalam mengambil data budidaya:', error);
      throw new Error(`Gagal mengambil data budidaya: ${error.message}`);
    }
  }

  static async dapatkanTotalProduksi() {
    try {
      const query = `
        SELECT 
          SUM(volume) as total_volume, 
          SUM(total_revenue) as total_pendapatan 
        FROM catfish_production
      `;
      const [result] = await db.execute(query);
      return result[0];
    } catch (error) {
      console.error('Kesalahan dalam menghitung total produksi:', error);
      throw new Error(`Gagal menghitung total produksi: ${error.message}`);
    }
  }
}

export default BudidayaIkan;
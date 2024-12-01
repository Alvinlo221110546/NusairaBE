// import db from '../database/Nusairadb.js';
// import cron from 'node-cron';

// class CatfishProductionService {
//   static staticData = [
//     {
//       province: "JAWA TENGAH",
//       city: "CILACAP", 
//       year: 2019,
//       volume: 2552880,
//       totalRevenue: 39075377000
//     },
//     {
//       province: "JAWA TENGAH", 
//       city: "BOYOLALI", 
//       year: 2019,
//       volume: 26996762,
//       totalRevenue: 431948192000
//     },
//     {
//       province: "JAWA TENGAH", 
//       city: "KEBUMEN", 
//       year: 2019,
//       volume: 923807,
//       totalRevenue: 14780912000
//     },
//     {
//       province: "JAWA BARAT", 
//       city: "KOTA BANDUNG", 
//       year: 2019,
//       volume: 51015,
//       totalRevenue: 867255000
//     },
//     {
//       province: "JAWA BARAT", 
//       city: "KOTA BEKASI", 
//       year: 2019,
//       volume: 1232020,
//       totalRevenue: 21096220000
//     },
//     {
//       province: "JAWA BARAT", 
//       city: "KOTA BOGOR", 
//       year: 2019,
//       volume: 2249790,
//       totalRevenue: 38246430000
//     },
//     {
//       province: "JAWA BARAT", 
//       city: "KOTA CIREBON", 
//       year: 2019,
//       volume: 73645,
//       totalRevenue: 1104675000
//     },
//     {
//       province: "JAWA BARAT", 
//       city: "SUBANG", 
//       year: 2019,
//       volume: 2672040,
//       totalRevenue: 53440800000
//     },
//     {
//       province: "JAWA TIMUR", 
//       city: "TULUNGAGUNG", 
//       year: 2019,
//       volume: 10006869,
//       totalRevenue: 153563838948
//     },
//     {
//       province: "JAWA TIMUR", 
//       city: "JEMBER", 
//       year: 2020,
//       volume: 7525300,
//       totalRevenue: 112879500000
//     },
//     {
//       province: "JAWA TIMUR", 
//       city: "MALANG", 
//       year: 2019,
//       volume: 8139701,
//       totalRevenue: 122095515000
//     },
//     {
//       province: "JAWA TIMUR", 
//       city: "BLITAR", 
//       year: 2019,
//       volume: 10383300,
//       totalRevenue: 145629300000
//     }
//   ];

//   constructor() {
//     this.isRunning = false;
//   }

//   calculateMarketPrice(volume, totalRevenue) {
//     return Math.round(totalRevenue / volume * 100) / 100;
//   }

//   async processAndSaveProduction() {
//     const connection = await db.getConnection();
    
//     try {
//       await connection.beginTransaction();

//       // Hapus data lama
//       await connection.execute('TRUNCATE TABLE catfish_production');

//       // Proses dan simpan data
//       for (const item of CatfishProductionService.staticData) {
//         const marketPrice = this.calculateMarketPrice(item.volume, item.totalRevenue);

//         const insertQuery = `
//           INSERT INTO catfish_production 
//           (province, city, year, volume, total_revenue, market_price, imported_at)
//           VALUES (?, ?, ?, ?, ?, ?, NOW())
//         `;
        
//         await connection.execute(insertQuery, [
//           item.province, 
//           item.city, 
//           item.year,
//           item.volume,
//           item.totalRevenue,
//           marketPrice
//         ]);
//       }

//       await connection.commit();
//       console.log('Data produksi ikan lele berhasil diproses dan disimpan');

//     } catch (error) {
//       console.error('Kesalahan saat memproses data:', error);
//       await connection.rollback();
//       throw error;
//     } finally {
//       connection.release();
//     }
//   }

//   async getProductions(province = null, city = null, year = null) {
//     try {
//       let query = `
//         SELECT * FROM catfish_production 
//         WHERE 1=1
//       `;
//       const params = [];

//       if (province) {
//         query += ` AND province = ?`;
//         params.push(province);
//       }

//       if (city) {
//         query += ` AND city = ?`;
//         params.push(city);
//       }

//       if (year) {
//         query += ` AND year = ?`;
//         params.push(year);
//       }

//       query += ` ORDER BY total_revenue DESC`;

//       const [rows] = await db.execute(query, params);

//       return rows;

//     } catch (error) {
//       console.error('Kesalahan dalam mengambil data produksi:', error);
//       throw new Error(`Gagal mengambil data produksi: ${error.message}`);
//     }
//   }

//   startScheduler() {
//     // Jalankan sekali saat service dimulai
//     this.processAndSaveProduction();

//     // Jadwalkan pengolahan data setiap hari pukul 00:00
//     cron.schedule('0 0 * * *', () => {
//       console.log('Memproses ulang data produksi...');
//       this.processAndSaveProduction();
//     });

//     console.log('Scheduler pengolahan data produksi telah dimulai');
//   }
// }

// export const catfishProductionService = new CatfishProductionService();
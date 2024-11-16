import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

// Konfigurasi database
const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

// Buat pool koneksi database
const db = mysql.createPool(dbConfig);

// Tes koneksi saat aplikasi berjalan
(async () => {
  try {
    const connection = await db.getConnection();
    console.log('Connected to the database');
    connection.release(); // Kembalikan koneksi ke pool
  } catch (err) {
    console.error('Error connecting to the database:', err.message);
  }
})();

export default db;
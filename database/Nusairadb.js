import mysql from 'mysql2/promise'; // Gunakan versi promise dari mysql2
import dotenv from 'dotenv';

dotenv.config();

// Konfigurasi koneksi database
const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  url: process.env.DB_URL,
};

// Buat pool koneksi database
const db = mysql.createPool(dbConfig);

// Tes koneksi saat aplikasi mulai
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

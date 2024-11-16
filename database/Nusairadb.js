import mysql from 'mysql2/promise'; // Menggunakan promise untuk penanganan async/await
import dotenv from 'dotenv';

dotenv.config();

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

// Buat pool koneksi
const db = mysql.createPool(dbConfig);

// Cek koneksi ke database
(async () => {
  try {
    const connection = await db.getConnection();
    console.log('Connected to the database');
    connection.release(); // Kembalikan koneksi ke pool
  } catch (err) {
    console.error('Error connecting to the database:', err.message);
  }
})();

// Fungsi untuk memeriksa tabel
const checkTables = async () => {
  try {
    const [results] = await db.query('SHOW TABLES');
    console.log('Tables in database:', results);
  } catch (err) {
    console.error('Error querying tables:', err.message);
  }
};

// Export pool untuk digunakan di tempat lain
export default db;
export { checkTables };

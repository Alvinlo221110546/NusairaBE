import mysql from 'mysql2/promise'; 
import dotenv from 'dotenv';

dotenv.config();


const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  url: process.env.DB_URL,
  waitForConnections: true,
  connectionLimit: 10, 
  queueLimit: 0,
};


const db = mysql.createPool(dbConfig);


(async () => {
  try {
    const connection = await db.getConnection();
    console.log('Connected to the database');
    connection.release();
  } catch (err) {
    console.error('Error connecting to the database:', err.message);
  }
})();

export default db;



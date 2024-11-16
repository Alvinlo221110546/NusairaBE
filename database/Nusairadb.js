import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

// const db = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   database: process.env.DATABASE_URL,
// });

// COBA INI GI , PAKAI CREATE POOL

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  database: process.env.DATABASE_URL,
});


db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database');
});


//ini untuk cek table
// connection.query('SHOW TABLES', (err, results) => {
//   if (err) {
//       console.error('Gagal melakukan query:', err);
//   } else {
//       console.log('Tables in database:', results);
//   }
// });


export default db;

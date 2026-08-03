const mysql = require('mysql2/promise');
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env') });

const pool = mysql.createPool({
  host: process.env.DB_HOST || '127.0.0.1',
  port: Number(process.env.DB_PORT || 3306),
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'nayara_industries',
  waitForConnections: true,
  connectionLimit: 10,
  namedPlaceholders: true,
});

async function ping() {
  const conn = await pool.getConnection();
  try {
    await conn.query('SELECT 1');
    return true;
  } finally {
    conn.release();
  }
}

module.exports = { pool, ping };

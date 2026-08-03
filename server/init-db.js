const fs = require('fs');
const path = require('path');
const mysql = require('mysql2/promise');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

async function init() {
  const schema = fs.readFileSync(path.join(__dirname, 'schema.sql'), 'utf8');
  const statements = schema
    .split(/;\s*\n/)
    .map((s) => s.trim())
    .filter(Boolean);

  const conn = await mysql.createConnection({
    host: process.env.DB_HOST || '127.0.0.1',
    port: Number(process.env.DB_PORT || 3306),
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    multipleStatements: true,
  });

  try {
    for (const sql of statements) {
      await conn.query(sql);
    }
    console.log('Database ready: nayara_industries');
    console.log('Tables: contact_messages, career_applications');
  } finally {
    await conn.end();
  }
}

init().catch((err) => {
  console.error('DB init failed:', err.message);
  process.exit(1);
});

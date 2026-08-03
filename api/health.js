const { ping } = require('../server/db');

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ ok: false, message: 'Method not allowed' });
  }

  try {
    await ping();
    return res.status(200).json({
      ok: true,
      db: 'connected',
      database: process.env.DB_NAME || 'nayara_industries',
    });
  } catch (err) {
    return res.status(500).json({
      ok: false,
      db: 'error',
      message: err.message || 'Database unavailable',
    });
  }
};

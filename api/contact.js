const { pool } = require('../server/db');

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, message: 'Method not allowed' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
    const name = String(body.name || '').trim();
    const email = String(body.email || '').trim();
    const subject = String(body.subject || '').trim();
    const message = String(body.message || '').trim();
    const source = String(body.source || 'website').trim();

    if (!name || !email) {
      return res.status(400).json({ ok: false, message: 'Name and email are required.' });
    }

    const [result] = await pool.execute(
      `INSERT INTO contact_messages (name, email, subject, message, source)
       VALUES (:name, :email, :subject, :message, :source)`,
      { name, email, subject: subject || null, message: message || null, source }
    );

    return res.status(200).json({
      ok: true,
      id: result.insertId,
      message: 'Thank you. Your message has been saved.',
    });
  } catch (err) {
    console.error('Contact save failed:', err.message);
    return res.status(500).json({
      ok: false,
      message: 'Could not save your message. Please try again.',
    });
  }
};

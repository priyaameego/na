const { pool } = require('../server/db');

/**
 * Careers API on Vercel (JSON fallback).
 * Full multipart resume upload works best on the local Express server.
 * On Vercel, send JSON fields; resume_path is stored as a placeholder if no file stream.
 */
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
    const contentType = String(req.headers['content-type'] || '');
    if (contentType.includes('multipart/form-data')) {
      return res.status(501).json({
        ok: false,
        message: 'Resume upload on Vercel needs local/server hosting. Please email resume to info@nayaragroup.com or try again from the production API host.',
      });
    }

    const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
    const name = String(body.name || '').trim();
    const email = String(body.email || '').trim();
    const phone = String(body.phone || '').trim();
    const position = String(body.position || '').trim();
    const message = String(body.message || '').trim();

    if (!name || !email || !phone || !position || !message) {
      return res.status(400).json({ ok: false, message: 'Please fill all required fields.' });
    }

    const [result] = await pool.execute(
      `INSERT INTO career_applications (name, email, phone, position, message, resume_path)
       VALUES (:name, :email, :phone, :position, :message, :resume_path)`,
      {
        name,
        email,
        phone,
        position,
        message,
        resume_path: 'pending-email-resume',
      }
    );

    return res.status(200).json({
      ok: true,
      id: result.insertId,
      message: 'Application submitted successfully.',
    });
  } catch (err) {
    console.error('Career save failed:', err.message);
    return res.status(500).json({
      ok: false,
      message: err.message || 'Could not submit application.',
    });
  }
};

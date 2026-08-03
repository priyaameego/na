const path = require('path');
const fs = require('fs');
const express = require('express');
const cors = require('cors');
const multer = require('multer');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

const { pool, ping } = require('./db');

const app = express();
const PORT = Number(process.env.PORT || 3457);
const ROOT = path.join(__dirname, '..');
const UPLOAD_DIR = path.join(ROOT, 'uploads', 'resumes');

fs.mkdirSync(UPLOAD_DIR, { recursive: true });

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, UPLOAD_DIR),
  filename: (_req, file, cb) => {
    const safe = file.originalname.replace(/[^a-zA-Z0-9._-]/g, '_');
    cb(null, `${Date.now()}-${safe}`);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    const ok = /\.(pdf|doc|docx)$/i.test(file.originalname);
    cb(ok ? null : new Error('Only PDF, DOC, DOCX resumes are allowed'), ok);
  },
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(ROOT, { extensions: ['html'] }));

app.get('/api/health', async (_req, res) => {
  try {
    await ping();
    res.json({ ok: true, db: 'connected', database: process.env.DB_NAME || 'nayara_industries' });
  } catch (err) {
    res.status(500).json({ ok: false, db: 'error', message: err.message });
  }
});

app.post('/api/contact', async (req, res) => {
  try {
    const name = String(req.body.name || '').trim();
    const email = String(req.body.email || '').trim();
    const subject = String(req.body.subject || '').trim();
    const message = String(req.body.message || '').trim();
    const source = String(req.body.source || 'website').trim();

    if (!name || !email) {
      return res.status(400).json({ ok: false, message: 'Name and email are required.' });
    }

    const [result] = await pool.execute(
      `INSERT INTO contact_messages (name, email, subject, message, source)
       VALUES (:name, :email, :subject, :message, :source)`,
      { name, email, subject: subject || null, message: message || null, source }
    );

    res.json({ ok: true, id: result.insertId, message: 'Thank you. Your message has been saved.' });
  } catch (err) {
    console.error('Contact save failed:', err.message);
    res.status(500).json({ ok: false, message: 'Could not save your message. Please try again.' });
  }
});

app.post('/api/careers', upload.single('resume'), async (req, res) => {
  try {
    const name = String(req.body.name || '').trim();
    const email = String(req.body.email || '').trim();
    const phone = String(req.body.phone || '').trim();
    const position = String(req.body.position || '').trim();
    const message = String(req.body.message || '').trim();

    if (!name || !email || !phone || !position || !message) {
      if (req.file) fs.unlink(req.file.path, () => {});
      return res.status(400).json({ ok: false, message: 'Please fill all required fields.' });
    }

    if (!req.file) {
      return res.status(400).json({ ok: false, message: 'Resume file is required.' });
    }

    const resumePath = path.relative(ROOT, req.file.path).replace(/\\/g, '/');

    const [result] = await pool.execute(
      `INSERT INTO career_applications (name, email, phone, position, message, resume_path)
       VALUES (:name, :email, :phone, :position, :message, :resume_path)`,
      { name, email, phone, position, message, resume_path: resumePath }
    );

    res.json({ ok: true, id: result.insertId, message: 'Application submitted successfully.' });
  } catch (err) {
    console.error('Career save failed:', err.message);
    if (req.file) fs.unlink(req.file.path, () => {});
    res.status(500).json({ ok: false, message: err.message || 'Could not submit application.' });
  }
});

app.use((err, _req, res, _next) => {
  console.error(err.message);
  res.status(400).json({ ok: false, message: err.message || 'Request failed.' });
});

async function boot() {
  try {
    await ping();
    console.log(`MySQL connected → ${process.env.DB_NAME || 'nayara_industries'}`);
  } catch (err) {
    console.error('MySQL connection failed:', err.message);
    console.error('Start XAMPP MySQL, then run: npm run db:init');
    process.exit(1);
  }

  app.listen(PORT, () => {
    console.log(`Nayara site + API running at http://localhost:${PORT}`);
  });
}

boot();

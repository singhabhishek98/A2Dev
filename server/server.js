import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import demoRoutes from './routes/demo.js';

dotenv.config();
const app = express();
app.use(helmet());
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(morgan('dev'));
app.use('/api/demo', demoRoutes);
app.get('/api/health', (_req, res) => res.json({ ok: true }));
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || '';
async function start() {
  try {
    if (!MONGODB_URI) console.warn('⚠️  MONGODB_URI not set.');
    else { await mongoose.connect(MONGODB_URI); console.log('✅ MongoDB connected'); }
    app.listen(PORT, () => console.log(`✅ Server running on ${PORT}`));
  } catch (e) { console.error('❌ Start failed', e); process.exit(1); }
}
start();

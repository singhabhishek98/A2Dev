import { Router } from 'express';
import DemoLead from '../models/DemoLead.js';
const router = Router();
router.post('/', async (req, res) => {
  try {
    const { name, email, contactNumber, institutionName, requirements } = req.body;
    if (!name || !email || !contactNumber || !institutionName)
      return res.status(400).json({ message: 'Missing required fields' });
    const lead = await DemoLead.create({ name, email, contactNumber, institutionName, requirements });
    res.status(201).json({ message: 'Saved', lead });
  } catch (e) { res.status(500).json({ message: 'Server error' }); }
});
router.get('/', async (_req, res) => {
  try { const leads = await DemoLead.find().sort({ createdAt: -1 }).limit(50); res.json(leads); }
  catch { res.status(500).json({ message: 'Server error' }); }
});
export default router;

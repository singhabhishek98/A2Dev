import mongoose from 'mongoose';
const DemoLeadSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, lowercase: true, trim: true },
  contactNumber: { type: String, required: true, trim: true },
  institutionName: { type: String, required: true, trim: true },
  requirements: { type: String, default: '' },
}, { timestamps: true });
export default mongoose.model('DemoLead', DemoLeadSchema);

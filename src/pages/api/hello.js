// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: "John Doe" });
// }
import connectDB from './connectDB';
import mongoose from 'mongoose';

const TestSchema = new mongoose.Schema({ ping: String });
const Test = mongoose.models.Test || mongoose.model('Test', TestSchema);

export default async function handler(req, res) {
  await connectDB();

  const result = await Test.create({ ping: 'pong' });

  res.status(200).json({
    success: true,
    message: 'MongoDB is working',
    data: result,
  });
}

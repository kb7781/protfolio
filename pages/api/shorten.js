import mongoose from 'mongoose';
import ShortUrl from '../../models/ShortUrl';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env');
}

// Connect to MongoDB
const connectDB = async () => {
  if (mongoose.connections[0].readyState) return;
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
};

// Generate a random short code
const generateShortCode = () => {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let shortCode = '';
  for (let i = 0; i < 6; i++) {
    shortCode += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return shortCode;
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: 'URL is required' });
  }

  try {
    await connectDB();

    // Generate a unique short code
    let shortCode;
    let existingUrl;
    do {
      shortCode = generateShortCode();
      existingUrl = await ShortUrl.findOne({ shortCode });
    } while (existingUrl);

    // Create new short URL
    const shortUrl = await ShortUrl.create({
      originalUrl: url,
      shortCode,
    });

    res.status(200).json({
      shortUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/s/${shortCode}`,
      originalUrl: url,
    });
  } catch (error) {
    console.error('Error creating short URL:', error);
    res.status(500).json({ error: 'Error creating short URL' });
  }
}
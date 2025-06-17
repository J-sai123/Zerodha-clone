const mongoose = require('mongoose');


require('dotenv').config();
const MONGO_URL = process.env.MONGO_URL;
mongoose.connect(MONGO_URL);

const connectDB = async () => {
  try {
  await mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
    console.log('✅ MongoDB connected');
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error);
    process.exit(1);
  }
};

module.exports = connectDB;

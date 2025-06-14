const {schema, model} = require('mongoose');
const mongoose = require('mongoose');

const HoldingsSchema = new mongoose.Schema({
      _id: String, // MongoDB ObjectId
  userId: String, // Reference to user
  instrument: String,
  qty: Number,
  avgCost: Number,
  ltp: Number,
  curVal: Number,
  pnl: Number,
  netChg: Number,
  dayChg: Number,
  createdAt: Date,
  updatedAt: Date,
});
module.exports={HoldingsSchema};
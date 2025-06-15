const mongoose = require("mongoose");

const holdingsSchema = new mongoose.Schema({
  userId: String,
  instrument: String,
  qty: Number,
  avgCost: Number,
  ltp: Number,
  curVal: Number,
  pnl: Number,
  netChg: Number,
  dayChg: Number,
  price: Number,
  orderType: String,
  status: String,
}, { timestamps: true });

module.exports = holdingsSchema;

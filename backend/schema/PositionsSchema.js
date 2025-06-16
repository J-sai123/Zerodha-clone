const mongoose = require("mongoose");

const PositionsSchema = new mongoose.Schema({
  instrument: String,
  type: String,
  qty: Number,
  avgCost: Number,
  ltp: Number,
  curVal: Number,
  pnl: Number,
  netChg: Number,
  dayChg: Number
});

module.exports = PositionsSchema;

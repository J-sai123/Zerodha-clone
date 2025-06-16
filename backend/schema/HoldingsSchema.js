const mongoose = require("mongoose");

const holdingsSchema = new mongoose.Schema({
   instrument: { type: String, required: true },
  type: { type: String }, // <-- add this if you're keeping it
  qty: { type: Number, required: true },
  avgCost: { type: Number, required: true },
  ltp: { type: Number, required: true },
  curVal: { type: Number, required: true },
  pnl: { type: Number, required: true },
  netChg: { type: Number, required: true },
  dayChg: { type: Number, required: true }
}, { timestamps: true });

module.exports = holdingsSchema;

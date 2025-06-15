const mongoose = require("mongoose");

const PositionsSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true, // Reference to user
    },
    product: {
      type: String,
      required: true, // e.g., "MIS", "CNC", etc.
    },
    instrument: {
      type: String,
      required: true, // Name of the stock/instrument
    },
    qty: {
      type: Number,
      required: true, // Quantity
    },
    avg: {
      type: Number,
      required: true, // Average price
    },
    ltp: {
      type: Number,
      required: true, // Last traded price
    },
    pnl: {
      type: Number,
      required: true, // Profit and loss
    },
    chg: {
      type: Number,
      required: true, // Change in value/percentage
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt
  }
);

module.exports = PositionsSchema;

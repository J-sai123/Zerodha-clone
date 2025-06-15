const mongoose = require("mongoose");

const OrdersSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true, // User placing the order
    },
    instrument: {
      type: String,
      required: true, // Stock/instrument name
    },
    product: {
      type: String,
      required: true, // Product type (e.g., CNC, MIS)
    },
    qty: {
      type: Number,
      required: true, // Quantity
    },
    orderType: {
      type: String,
      required: true, // Order type (e.g., Buy/Sell/Limit/Market)
    },
    price: {
      type: Number,
      required: true, // Order price
    },
    status: {
      type: String,
      default: "Pending", // Order status (Pending/Executed/Cancelled)
    },
  },
  {
    timestamps: true, // createdAt and updatedAt
  }
);

module.exports = OrdersSchema;

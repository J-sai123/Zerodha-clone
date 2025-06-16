const mongoose = require("mongoose");

const OrdersSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  instrument: { type: String, required: true },
  product: { type: String, required: true },
  qty: { type: Number, required: true },
  orderType: { type: String, required: true },
  price: { type: Number, required: true },
  status: { type: String, default: "Pending" },
}, { timestamps: true });

module.exports = OrdersSchema;

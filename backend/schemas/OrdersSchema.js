const {schema, model} = require('mongoose');
const mongoose = require('mongoose');

const OrdersSchema = new mongoose.Schema({
  _id: String, // MongoDB ObjectId
  userId: String, // Reference to user
  instrument: String,
  qty: Number,
  price: Number,
  orderType: String, // e.g., 'buy', 'sell'
  status: String, // e.g., 'completed', 'pending', 'cancelled'
  createdAt: Date,
  updatedAt: Date,
});


module.exports = { OrdersSchema };
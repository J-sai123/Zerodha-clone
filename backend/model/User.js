const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  mobileNumber: {
    type: Number,
    required: true,
    unique: true
  }
});

module.exports = mongoose.model('User', userSchema);

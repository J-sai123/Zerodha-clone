const {schema, model} = require('mongoose');
const mongoose = require('mongoose');

const PositionsSchema = new mongoose.Schema({
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
});     
module.exports = { PositionsSchema };
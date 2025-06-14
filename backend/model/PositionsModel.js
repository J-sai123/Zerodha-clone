const { model, Schema } = require('mongoose');
const mongoose = require('mongoose');

const { PositionsModel, PositionsSchema } = require('../schemas/PositionsSchema');

const PositionsModel = mongoose.model('Positions', this.PositionsModel);  
module.exports = { PositionsModel };
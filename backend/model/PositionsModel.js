const mongoose = require("mongoose");
const PositionsSchema = require("../schema/PositionsSchema");

const PositionsModel = mongoose.model("Position", PositionsSchema);
module.exports = PositionsModel;

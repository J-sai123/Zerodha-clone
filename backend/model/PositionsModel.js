const mongoose = require("mongoose");
const PositionsSchema = require("../schema/PositionsSchema");

const PositionssModel = mongoose.model("Holdings", PositionsSchema);
module.exports = PositionssModel;

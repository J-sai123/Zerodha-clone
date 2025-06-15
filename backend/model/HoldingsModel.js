const mongoose = require("mongoose");
const holdingsSchema = require("../schema/HoldingsSchema");

const HoldingsModel = mongoose.model("Holdings", holdingsSchema);
module.exports = HoldingsModel;

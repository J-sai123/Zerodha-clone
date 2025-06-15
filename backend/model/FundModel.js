const mongoose = require("mongoose");
const FundsSchema = require("../schema/FundsSchema");

const FundsModel = mongoose.model("Funds", FundsSchema);

module.exports = FundsModel;

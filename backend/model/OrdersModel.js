const mongoose = require("mongoose");
const OrdersSchema = require("../schema/OrdersSchema");

const OrdersModel = mongoose.model("Holdings", OrdersSchema);
module.exports = OrdersModel;

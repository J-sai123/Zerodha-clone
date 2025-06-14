const { model, Schema } = require('mongoose');
const mongoose = require('mongoose');

const { OrdersModel, OrdersSchema } = require('../schemas/OrdersSchema');

const OrdersModel = new model('Orders',OrdersSchema);
module.exports = { OrdersModel };   

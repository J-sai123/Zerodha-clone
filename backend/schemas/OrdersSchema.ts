import { Schema } from 'mongoose';

const OrdersSchema = new Schema({
  
    _id: { type: Schema.Types.ObjectId }, // MongoDB ObjectId
  userId: { type: Schema.Types.String }, // Reference to user
  instrument: { type: Schema.Types.String },
  qty: { type: Schema.Types.Number },
  avgCost: { type: Schema.Types.Number },
  ltp: { type: Schema.Types.Number },
  curVal: { type: Schema.Types.Number },
  pnl: { type: Schema.Types.Number },
  netChg: { type: Schema.Types.Number },
  dayChg: { type: Schema.Types.Number },
  createdAt: { type: Schema.Types.Date, default: Date.now },
  updatedAt: { type: Schema.Types.Date, default: Date.now },
});

export default OrdersSchema;
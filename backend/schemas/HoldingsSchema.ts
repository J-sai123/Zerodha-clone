import mongoose, { Schema, Document } from 'mongoose';

interface IHolding extends Document {
  instrument: string;
  qty: number;
  avgCost: number;
  ltp: number;
  curVal: number;
  pnl: number;
  netChg: number;
  dayChg: number;
}

const HoldingsSchema: Schema = new Schema({
  instrument: { type: String, required: true },
  qty: { type: Number, required: true },
  avgCost: { type: Number, required: true },
  ltp: { type: Number, required: true },
  curVal: { type: Number, required: true },
  pnl: { type: Number, required: true },
  netChg: { type: Number, required: true },
  dayChg: { type: Number, required: true },
});

export default mongoose.model<IHolding>('Holdings', HoldingsSchema);

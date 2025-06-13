import mongoose, { model } from 'mongoose';
import HoldingsSchema from '../schemas/HoldingsSchema';
// Define Holdings type here if the module is missing



const HoldingsModel = mongoose.model('Holding', HoldingsSchema);
export default HoldingsModel;
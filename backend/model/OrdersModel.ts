import { model } from 'mongoose';
import OrdersSchema from '../schemas/OrdersSchema';
// Define Holdings type here if the module is missing



const OrdersModel = model('Orders', OrdersSchema);
export default OrdersModel;
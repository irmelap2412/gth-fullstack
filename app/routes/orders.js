import express from 'express'
import { getOrder, getOrders, createOrder, editOrder, deleteOrder } from '../controllers/orders.js';

const orderRouter = express.Router();

orderRouter.get('/', getOrders);

orderRouter.get('/:id', getOrder);

orderRouter.post('/', createOrder);

orderRouter.put('/:id', editOrder);

orderRouter.delete('/:id', deleteOrder);

export default orderRouter;
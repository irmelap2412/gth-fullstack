import express from 'express'
import { getRestaurant, getRestaurants, createRestaurant, editRestaurant, deleteRestaurant } from '../controllers/restaurants.js';

const restaurantRouter = express.Router();

restaurantRouter.get('/', getRestaurants);

restaurantRouter.get('/:id', getRestaurant);

restaurantRouter.post('/', createRestaurant);

restaurantRouter.put('/:id', editRestaurant);

restaurantRouter.delete('/:id', deleteRestaurant);

export default restaurantRouter;
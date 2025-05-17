import express from 'express'
import { getRestaurant, getRestaurants, createRestaurant, editRestaurant, deleteRestaurant } from '../controllers/restaurants.js';

const router = express.Router();

router.get('/', getRestaurants);

router.get('/:id', getRestaurant);

router.post('/', createRestaurant);

router.put('/:id', editRestaurant);

router.delete('/:id', deleteRestaurant);

export default router;
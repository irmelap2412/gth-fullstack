import express from 'express'
import { getDish, getDishes, createDish, editDish, deleteDish } from '../controllers/dishes.js';

const dishRouter = express.Router();

dishRouter.get('/', getDishes);

dishRouter.get('/:id', getDish);

dishRouter.post('/', createDish);

dishRouter.put('/:id', editDish);

dishRouter.delete('/:id', deleteDish);

export default dishRouter;
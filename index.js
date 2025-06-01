import express from 'express';
import restaurants from './app/routes/restaurants.js';
import logger from './app/middleware/logger.js';
import dotenv from 'dotenv'
import { errorHandler, notFoundHandler } from './app/middleware/errorHandler.js';


const port = process.env.PORT || 8080;
const app = express();

dotenv.config();


app.use(express.json());
app.use(logger);

app.use('/restaurants', restaurants);

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(port, () => console.log(`Server is listening on port ${port}`));
import express from 'express';
import restaurants from './app/routes/restaurants.js'
import logger from './app/middleware/logger.js';

const port = process.env.PORT || 8080;
const app = express();

app.use(express.json());
app.use(logger);

app.use('/restaurants', restaurants);

app.listen(port, () => console.log(`Server is listening on port ${port}`));
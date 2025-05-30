const restaurants = [
    {
        id: 1,
        name: "Pizza bar",
        rate: 3.4,
        location: {
            city: 'Tuzla'
        }
    },
    {
        id: 2,
        name: "Mozaik",
        rate: 4.1
    }
];

export const getRestaurants = (req, res, next) => {
  try {
    let filteredRestaurants = restaurants

    if (req.query.name) {
      filteredRestaurants = filteredRestaurants.filter((r) =>
        r.name.toLowerCase().includes(req.query.name.toLowerCase()),
      )
    }

    if (req.query.rate) {
      const rateValue = Number.parseFloat(req.query.rate)
      if (isNaN(rateValue)) {
        return next({
          status: 400,
          msg: "Rate must be a valid number",
        })
      }
      filteredRestaurants = filteredRestaurants.filter((r) => r.rate > rateValue)
    }


    if (req.query.city) {
      filteredRestaurants = filteredRestaurants.filter(
        (r) => r.location && r.location.city && r.location.city.toLowerCase() === req.query.city.toLowerCase(),
      )
    }

    res.json(filteredRestaurants)
  } catch (error) {
    next(error)
  }
};

export const getRestaurant = (req, res, next) => {
    console.log('Fetching restaurant with id ' + req.params.id);

    const id = parseInt(req.params.id);
    if (!id) {
        return res.status(400).send('Invalid id');
    }

    const restaurant = restaurants.find(r => r.id == id);
    if (!restaurant) {
        next({
            status: 404,
            msg: ""
        });
    }

    res.json(restaurant);
};

export const createRestaurant = (req, res) => {
    console.log("Adding new restaurant");

    const restaurant = req.body;
    restaurant.id = restaurants.length + 1;
    restaurants.push(restaurant);

    res.status(201).json(restaurant);
};

export const editRestaurant = (req, res) => {
    console.log("Updating restaurant with id " + req.params.id);

    const id = parseInt(req.params.id);
    if (!id) {
        return res.status(400).send('Invalid id');
    }

    const restaurantIndex = restaurants.findIndex(r => r.id == id);
    if (restaurantIndex < 0) {
        return res.status(404).send("Restaurant with id " + id + " does not exist");
    }

    restaurants[restaurantIndex].name = req.body.name;
    restaurants[restaurantIndex].rate = req.body.rate;
    res.status(200).end();
};

export const deleteRestaurant = (req, res) => {
    console.log("Deleting restaurant with id " + req.params.id);

    const id = parseInt(req.params.id);
    if (!id) {
        return res.status(400).send('Invalid id');
    }

    const restaurantIndex = restaurants.findIndex(r => r.id == id);
    if (restaurantIndex < 0) {
        return res.status(404).send("Restaurant with id " + id + " does not exist");
    }

    restaurants.splice(restaurantIndex, 1);
    res.status(200).end();
};
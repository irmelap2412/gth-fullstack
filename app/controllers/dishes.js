const dishes = [
  {
    id: 1,
    name: "Pizza margarita",
    description: "Lorem ipsum",
    image: '',
    price: 14.90,
    restaurantId: 1,
    categoryId: 1
  },
  {
    id: 2,
    name: "Mali durum",
    description: "Lorem ipsum",
    image: '',
    price: 6.90,
    restaurantId: 2,
    categoryId: 1
  }
]

export const getDishes = (req, res, next) => {
  try {
    let filteredDishes = dishes;

    if (req.query.name) {
      filteredDishes = filteredDishes.filter((r) =>
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
      filteredDishes = filteredDishes.filter((r) => r.rate > rateValue)
    }


    if (req.query.city) {
      filteredDishes = filteredDishes.filter(
        (r) => r.location && r.location.city && r.location.city.toLowerCase() === req.query.city.toLowerCase(),
      )
    }

    res.json(filteredDishes)
  } catch (error) {
    next(error);
  }
};

export const getDish = (req, res, next) => {
    console.log('Fetching dish with id ' + req.params.id);

    const id = parseInt(req.params.id);
    if (!id) {
        return res.status(400).send('Invalid id');
    }

    const dish = dishes.find(r => r.id == id);
    if (!dish) {
        next({
            status: 404,
            msg: ""
        });
    }

    res.json(dish);
};

export const createDish = (req, res) => {
    console.log("Adding new dish");

    const dish = req.body;
    dish.id = dishes.length + 1;
    dishes.push(dish);

    res.status(201).json(dish);
};

export const editDish = (req, res) => {
    console.log("Updating dish with id " + req.params.id);

    const id = parseInt(req.params.id);
    if (!id) {
        return res.status(400).send('Invalid id');
    }

    const dishIndex = dishes.findIndex(r => r.id == id);
    if (dishIndex < 0) {
        return res.status(404).send("dish with id " + id + " does not exist");
    }

    dishes[dishIndex].name = req.body.name;
    dishes[dishIndex].rate = req.body.rate;
    res.status(200).end();
};

export const deleteDish = (req, res) => {
    console.log("Deleting dish with id " + req.params.id);

    const id = parseInt(req.params.id);
    if (!id) {
        return res.status(400).send('Invalid id');
    }

    const dishIndex = dishes.findIndex(r => r.id == id);
    if (dishIndex < 0) {
        return res.status(404).send("dish with id " + id + " does not exist");
    }

    dishes.splice(dishIndex, 1);
    res.status(200).end();
};
const orders = [
  {
    id: 1,
    userId: 1,
    restaurantId: 1,
    locationId: 1,
    createdAt: new Date("2024-01-15"),
    status: "completed",

  },
  {
    id: 2,
    userId: 2,
    restaurantId: 2,
    locationId: 2,
    createdAt: new Date("2024-01-16"),
    status: "pending",
  },
]

export const getOrders = (req, res, next) => {
  try {
    let filteredOrders = Orders

    if (req.query.name) {
      filteredOrders = filteredOrders.filter((r) =>
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
      filteredOrders = filteredOrders.filter((r) => r.rate > rateValue)
    }


    if (req.query.city) {
      filteredOrders = filteredOrders.filter(
        (r) => r.location && r.location.city && r.location.city.toLowerCase() === req.query.city.toLowerCase(),
      )
    }

    res.json(filteredOrders)
  } catch (error) {
    next(error)
  }
};

export const getOrder = (req, res, next) => {
    console.log('Fetching Order with id ' + req.params.id);

    const id = parseInt(req.params.id);
    if (!id) {
        return res.status(400).send('Invalid id');
    }

    const order = orders.find(r => r.id == id);
    if (!order) {
        next({
            status: 404,
            msg: ""
        });
    }

    res.json(Order);
};

export const createOrder = (req, res) => {
    console.log("Adding new Order");

    const order = req.body;
    order.id = orders.length + 1;
    orders.push(order);

    res.status(201).json(order);
};

export const editOrder = (req, res) => {
    console.log("Updating Order with id " + req.params.id);

    const id = parseInt(req.params.id);
    if (!id) {
        return res.status(400).send('Invalid id');
    }

    const orderIndex = orders.findIndex(r => r.id == id);
    if (orderIndex < 0) {
        return res.status(404).send("Order with id " + id + " does not exist");
    }

    orders[orderIndex].name = req.body.name;
    orders[orderIndex].rate = req.body.rate;
    res.status(200).end();
};

export const deleteOrder = (req, res) => {
    console.log("Deleting Order with id " + req.params.id);

    const id = parseInt(req.params.id);
    if (!id) {
        return res.status(400).send('Invalid id');
    }

    const orderIndex = orders.findIndex(r => r.id == id);
    if (orderIndex < 0) {
        return res.status(404).send("Order with id " + id + " does not exist");
    }

    orders.splice(orderIndex, 1);
    res.status(200).end();
};
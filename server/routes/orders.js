const express = require('express');
const router = express.Router();
const Order = require('../models/order-model');
require('../mongo').connect();


// GET
router.get('/', (req, res) => {
    const { limit, skip } = req.query;

    Order.find().sort({ shipDate: 1 }).skip(Number(skip)).limit(Number(limit))
        .then((orders) => res.json(orders))
        .catch((err) => res.status(500).send(err));

});

router.get('/length', (req, res) => {
    Order.count({})
        .then((count) => res.json(count))
        .catch((err) => res.status(500).send(err));
});

// CREATE
router.post('/', (req, res) => {
    const order = new Order({ ...req.body });

    order.save()
        .then(() => res.json(order))
        .catch((err) => res.status(500).send(err));
});

module.exports = router;

const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// Create a new order
router.post('/', async (req, res) => {
  // Here you would typically integrate with a payment gateway
  // For this example, we'll just create an order without actual payment processing

  const order = new Order({
    products: req.body.products,
    totalAmount: req.body.totalAmount
  });

  try {
    const newOrder = await order.save();
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;

// const express = require('express');

// const router = express.Router();
// const stripe = require('stripe')(process.env.STRIPE_KEY);

// router.post('/', (req, res) => {
//   stripe.charges.create(
//     {
//       source: req.body.tokenId,
//       amount: req.body.amount,
//       currency: 'USD'
//     },
//     (stripeErr, stripeRes) => {
//       if (stripeErr) {
//         res.status(500).json(stripeErr);
//       } else {
//         res.status(200).json(stripeRes);
//       }
//     }
//   );
// });

// module.exports = router;
// require("dotenv").config();
// const express = require("express");
// const router = express.Router();
// const stripe = require("stripe")(process.env.STRIPE_KEY);

// router.post("/", async (req, res) => {
//   try {
//     // Input validation
//     const { tokenId, amount } = req.body;
//     if (!tokenId || !amount || isNaN(amount)) {
//       return res.status(400).json({ error: "Invalid request data" });
//     }

//     // Create a charge
//     const charge = await stripe.charges.create({
//       source: tokenId,
//       amount: Math.round(amount * 100), // Convert amount to cents
//       currency: "USD",
//     });

//     // Send the response
//     res.status(200).json(charge);
//   } catch (error) {
//     console.error("Error processing payment:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

// module.exports = router;
// require("dotenv").config();
// const express = require("express");
// const router = express.Router();
// const stripe = require("stripe")(process.env.STRIPE_KEY);
// const { createOrder } = require("../controllers/order");

// router.post("/", async (req, res) => {
//   try {
//     // Input validation
//     const { tokenId, amount } = req.body;
//     if (!tokenId || !amount || isNaN(amount)) {
//       return res.status(400).json({ error: "Invalid request data" });
//     }

//     // Create a charge
//     const charge = await stripe.charges.create({
//       source: tokenId,
//       amount: Math.round(amount * 100), // Convert amount to cents
//       currency: "USD",
//     });

//     // After Stripe charge is successful, create the order
//     // Here, you may adjust the order creation logic based on your application
//     const order = createOrder(req, res); // Assuming createOrder function handles order creation

//     // Redirect to order POST endpoint or send a response indicating success
//     res.redirect(303, "/api/orders"); // Redirect to the order POST endpoint
//   } catch (error) {
//     console.error("Error processing payment:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

// module.exports = router;
require("dotenv").config();
// Import required modules and dependencies
const express = require("express");
const router = express.Router();
const stripe = require("stripe")(process.env.STRIPE_KEY);
const createOrder = require("../controllers/orderfun");

// Define the route handler for processing payments
router.post("/", async (req, res) => {
  try {
    // Input validation
    const { tokenId, amount } = req.body;
    if (!tokenId || !amount || isNaN(amount)) {
      return res.status(400).json({ error: "Invalid request data" });
    }

    // Create a charge
    const charge = await stripe.charges.create({
      source: tokenId,
      amount: Math.round(amount * 100), // Convert amount to cents
      currency: "USD",
    });

    // After Stripe charge is successful, create the order
    const order = await createOrder(req.body);

    // Send a response indicating success
    res.status(201).json({
      message: "Order is created successfully.",
      order: order,
    });
  } catch (error) {
    console.error("Error processing payment:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Export the router
module.exports = router;

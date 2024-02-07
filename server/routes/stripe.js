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
require("dotenv").config();
const express = require("express");
const router = express.Router();
const stripe = require("stripe")(process.env.STRIPE_KEY);

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

    // Send the response
    res.status(200).json(charge);
  } catch (error) {
    console.error("Error processing payment:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;

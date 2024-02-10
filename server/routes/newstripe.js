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

//webhook
router.post("/webhook", async (req, res) => {
  const sig = req.headers["stripe-signature"];
  const event = stripe.webhooks.constructEvent(
    req.body,
    sig,
    process.env.STRIPE_WEBHOOK_SECRET
  );

  try {
    // Handle the webhook event appropriately
    switch (event.type) {
      case "payment_intent.succeeded":
        // Here, you can handle the payment intent succeeded event
        console.log("Payment intent succeeded:", event.data.object);
        break;
      case "payment_intent.payment_failed":
        // Handle payment intent failed event
        console.log("Payment intent failed:", event.data.object);
        break;
      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    // Respond with a 200 status to acknowledge receipt of the webhook
    res.sendStatus(200);
  } catch (error) {
    console.error("Error handling webhook event:", error);
    res.sendStatus(500);
  }
});

module.exports = router;

// Export the router
module.exports = router;

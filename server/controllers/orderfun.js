// Import required modules and dependencies
const Order = require("../models/Order");

// Define the createOrder function
const createOrder = async (orderData) => {
  try {
    // Create a new order instance
    const newOrder = new Order(orderData);

    // Save the order to the database
    const savedOrder = await newOrder.save();

    // Return the saved order
    return savedOrder;
  } catch (err) {
    // If an error occurs, throw the error
    throw err;
  }
};

// Export the createOrder function
module.exports = createOrder;

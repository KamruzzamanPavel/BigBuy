const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    tokenId: {
      type: String,
      default: "Stripe_token",
    },
    amount: {
      type: Number,
      required: true,
    },
    userId: {
      // type: Schema.Types.ObjectId,
      // ref: 'User',
      type: String,
      required: true,
    },
    products: [
      {
        productId: {
          // type: Schema.Types.ObjectId,
          // ref: 'Product',
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],

    shipping: {
      type: String,
    },
    status: {
      type: String,
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", orderSchema);

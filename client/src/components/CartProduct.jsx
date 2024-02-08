import React from "react";
import { useDispatch } from "react-redux";
import {
  removeProduct,
  incrementQuantity,
  decrementQuantity,
} from "../store/cart-slice";
import { Delete } from "@mui/icons-material";

const CartProduct = ({ product }) => {
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeProduct({ productId: product._id, size: product.size }));
  };

  const handleIncrementQuantity = () => {
    dispatch(incrementQuantity({ productId: product._id, size: product.size }));
  };

  const handleDecrementQuantity = () => {
    dispatch(decrementQuantity({ productId: product._id, size: product.size }));
  };

  return (
    <div className=" p-4 flex flex-col md:flex-row justify-between mb-4 border border-gray-300 rounded-md">
      <div className="flex flex-col md:flex-row">
        <div className="md:mr-8 mb-8 md:mb-0">
          <img
            className="w-full h-full md:w-64 md:h-64"
            src={product.image}
            alt={product.title}
          />
        </div>
        <div>
          <div className="mb-6">
            <span className="font-bold">Product:</span> {product.title}
          </div>
          <div className="mb-6">
            <span className="font-bold">ID:</span> {product._id}
          </div>
          <div className="mb-6">
            <span className="font-bold">Size:</span> {product.size}
          </div>
          <div className="flex items-center">
            <button
              onClick={handleRemoveFromCart}
              className="px-4 py-2 bg-white text-gray-800 border border-gray-300 rounded-md shadow-md hover:shadow-lg hover:bg-red-600 transition duration-300 ease-in-out m-4"
            >
              <Delete />
            </button>

            <button
              onClick={handleIncrementQuantity}
              className="px-4 py-2 bg-white text-gray-800 border border-gray-300 rounded-md shadow-md hover:shadow-lg hover:bg-gray-100 transition duration-300 ease-in-out m-4"
            >
              +
            </button>

            <button
              onClick={handleDecrementQuantity}
              className="px-4 py-2 bg-white text-gray-800 border border-gray-300 rounded-md shadow-md hover:shadow-lg hover:bg-gray-100 transition duration-300 ease-in-out m-4"
            >
              -
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-start mb-8">
          <span className="px-4 py-2 bg-white text-gray-800 border border-gray-300 rounded-md shadow-md hover:shadow-lg hover:bg-gray-100 transition duration-300 ease-in-out m-4">
            {product.quantity}
          </span>
        </div>
        <span className="block mb-6 text-4xl">
          $ {product.quantity * product.price}
        </span>
      </div>
    </div>
  );
};

export default CartProduct;

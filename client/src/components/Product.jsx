import React, { useState } from "react";
import { Link } from "react-router-dom";

const Product = ({ id, title, image }) => {
  const [overlayIsShown, setOverlayIsShown] = useState(false);

  return (
    <figure
      className="relative "
      onMouseEnter={() => setOverlayIsShown(true)}
      onMouseLeave={() => setOverlayIsShown(false)}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover  hover:scale-105"
      />

      {overlayIsShown && (
        <Link
          to={`/products/${id}`}
          className="absolute inset-0 flex flex-col justify-center items-center p-2 text-white bg-black bg-opacity-60 transition-opacity duration-1000"
        >
          <h2 className="mb-4 text-xl md:text-2xl lg:text-3xl font-bold text-center">
            {title}
          </h2>
          <button className="px-4 py-2 text-sm md:text-base bg-white text-black  hover:bg-teal-600 hover:text-white transition duration-300">
            Shop Now
          </button>
        </Link>
      )}
    </figure>
  );
};

export default Product;

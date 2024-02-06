import React, { useState } from "react";

import { Link } from "react-router-dom";

const Product = ({ id, title, image }) => {
  const [overlayIsShown, setOverlayIsShown] = useState(false);

  return (
    <>
      <figure
        className="relative"
        onMouseEnter={() => {
          setOverlayIsShown(true);
        }}
        onMouseLeave={() => {
          setOverlayIsShown(false);
        }}
      >
        <img src={image} alt={title} className="w-full h-full object-cover" />

        {overlayIsShown && (
          <Link
            to={`/products/${id}`}
            className="z-100 left-0 w-full h-full flex flex-col justify-center p-2 cursor-pointer absolute top-0 bg-black/50 items-center"
          >
            <h2 className="mb-4 p-2 uppercase text-xl sm:text-2xl md:text-3xl text-white font-bold text-center">
              {title}
            </h2>
            <button className="border p-2 bg-white text-black text-md md:text-lg hover:bg-teal-600 hover:border-none hover:text-white transition ease-out	duration-500">
              Shop Now
            </button>
          </Link>
        )}
      </figure>
    </>
  );
};

export default Product;

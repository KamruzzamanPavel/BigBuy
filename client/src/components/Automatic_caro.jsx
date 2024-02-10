import React, { useState, useEffect } from "react";

import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { Link } from "react-scroll";

const CAROUSEL_DATA = [
  {
    url: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1399&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    url: "https://images.unsplash.com/photo-1571898219555-7a1d0c3bea5a?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    url: "https://images.unsplash.com/photo-1515940279136-2f419eea8051?q=80&w=1257&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Automatic_caro = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % CAROUSEL_DATA.length);
    }, 5000); // Adjust the duration as needed

    return () => clearInterval(intervalId);
  }, []);

  const incrementIndex = () => {
    setCurrentIndex((currentIndex) => {
      return (currentIndex + 1) % CAROUSEL_DATA.length;
    });
  };

  const decrementIndex = () => {
    setCurrentIndex((currentIndex) => {
      return currentIndex === 0 ? CAROUSEL_DATA.length - 1 : currentIndex - 1;
    });
  };

  return (
    <section className="h-carousel relative bg-red-300 m-8">
      <div
        onClick={decrementIndex}
        className="w-14 h-14 rounded-full bg-gray-100/50 absolute top-1/2 left-4 cursor-pointer"
      >
        <ArrowLeft className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10" />
      </div>
      <img
        src={CAROUSEL_DATA[currentIndex].url}
        className="w-full h-full object-cover"
      />
      <div className="absolute h-full w-full top-0 left-0 bg-black/30"></div>
      <div className="absolute h-full w-full top-0 left-0 flex flex-col justify-center items-center text-slate-200 uppercase px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">winter sale</h1>
        <p className="tracking-wider mb-16 text-md md:text-xl">
          don't compromise on style! get flat 30% off for new arrivals.
        </p>
        <Link
          to="categories"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <button className="border p-3 bg-white text-black text-lg hover:bg-teal-600 hover:border-none hover:text-white transition ease-out	duration-500">
            Shop Now <ArrowRight />
          </button>
        </Link>
      </div>
      <div
        onClick={incrementIndex}
        className="w-12 h-12 rounded-full bg-gray-100/50 absolute top-1/2 right-4 cursor-pointer"
      >
        <ArrowRight className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2" />
      </div>
    </section>
  );
};

export default Automatic_caro;

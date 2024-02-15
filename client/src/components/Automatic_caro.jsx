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

const AutomaticCarousel = () => {
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
    <section className="relative m-2 mb-0">
      <div className="carousel-wrapper relative">
        <div onClick={decrementIndex} className="carousel-control left-control">
          <ArrowLeft className="control-icon" />
        </div>
        <div className="carousel-frame relative">
          <img
            src={CAROUSEL_DATA[currentIndex].url}
            className="carousel-image object-cover w-full h-80 sm:h-96 md:h-120 lg:h-144"
            alt="carousel-image"
          />
          <div className="p-4 carousel-overlay absolute inset-0 flex flex-col items-center justify-center text-white">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-8">
              Spring Sale !!!
            </h1>
            <p className="text-center tracking-wide mb-4 text-sm md:text-base lg:text-lg">
              Don't compromise on style! Get flat 30% off for new arrivals.
            </p>
            <Link
              to="categories"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <button className="border p-2 sm:p-3 bg-white text-black text-sm md:text-base lg:text-lg hover:bg-teal-600 hover:border-none hover:text-white transition ease-out duration-500">
                Shop Now <ArrowRight />
              </button>
            </Link>
          </div>
        </div>
        <div
          onClick={incrementIndex}
          className="carousel-control right-control"
        >
          <ArrowRight className="control-icon" />
        </div>
      </div>
    </section>
  );
};

export default AutomaticCarousel;

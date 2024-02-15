import React, { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled =
        document.body.scrollTop > 20 || document.documentElement.scrollTop > 20;
      setIsVisible(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up scroll event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // This triggers smooth scrolling
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg focus:outline-none focus:shadow-outline transition-all duration-500 ${
        isVisible ? "block" : "hidden"
      }`}
    >
      &#8679;
    </button>
  );
};

export default ScrollToTop;

import React, { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show button when user scrolls down
    window.onscroll = () => {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Clean up scroll event listener
    return () => {
      window.onscroll = null;
    };
  }, []);

  const scrollToTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg focus:outline-none focus:shadow-outline transition-all duration-300 ${
        isVisible ? "block" : "hidden"
      }`}
    >
      &#8679;
    </button>
  );
};

export default ScrollToTop;

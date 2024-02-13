import React, { useState, useEffect } from "react";

function Adheader() {
  const [showDot, setShowDot] = useState(false);

  // Function to toggle the visibility of the red dot
  const toggleDotVisibility = () => {
    setShowDot(!showDot);
  };

  useEffect(() => {
    // Automatically toggle dot visibility after a delay
    const dotTimer = setTimeout(() => {
      toggleDotVisibility();
    }, 1000); // 2000 milliseconds = 2 seconds

    // Clear the timer when the component unmounts or when dot visibility changes
    return () => clearTimeout(dotTimer);
  }, [showDot]);

  return (
    <header className="bg-slate-900 py-4 sticky top-0 z-50">
      <div className="flex items-center justify-center">
        {/* Red Dot */}
        <div
          className={`w-3 h-3 rounded-full bg-green-500 mr-2 transition-opacity ${
            showDot ? "opacity-100" : "opacity-20"
          }`}
        ></div>
        {/* Admin Name */}
        <h1 className="text-xl font-bold text-white">Admin</h1>
      </div>
    </header>
  );
}

export default Adheader;

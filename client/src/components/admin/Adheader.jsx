import React from "react";

function Adheader({ name }) {
  return (
    <header className="text-gray-800 bg-white py-4 sticky top-0 z-50">
      <h1 className="text-4xl font-bold text-center">Admin : {name}</h1>
    </header>
  );
}

export default Adheader;

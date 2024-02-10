import React from "react";

import { Send } from "@mui/icons-material";

const Newsletter = () => {
  return (
    <section className="bg-slate-400 py-32 px-8 flex flex-col items-center">
      <h2 className="font-bold  mb-10">Newsletter</h2>
      <p className=" mb-3 text-center">
        Get timely updates from your favorite products
      </p>
      <form
        action=""
        className="border rounded-lg overflow-hidden flex flex-nowrap"
      >
        <input
          type="text"
          placeholder="Your email"
          className="px-6 py-2 focus:outline-none"
        />
        <button className="bg-teal-600 px-6 py-2 text-white">
          <Send />
        </button>
      </form>
    </section>
  );
};

export default Newsletter;

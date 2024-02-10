import React from "react";
import Users from "./Users";
import Orders from "../../pages/Orders";
import Footer from "../../layout/Footer";
import { Link } from "react-router-dom";
import Navbar from "../../layout/Navbar";

import Products from "./Products";
const Dashboard = () => {
  return (
    <>
      <div className="mb-10">
        <Navbar />
        <div className="flex justify-center">
          <button className="bg-gray-800 hover:bg-gray-700 m-4 text-white font-bold py-3 px-6 rounded-lg shadow-lg focus:outline-none focus:shadow-outline text-xl">
            <Link to="uploadProduct"> Upload Product</Link>
          </button>
          <button className="bg-gray-800 hover:bg-gray-700 m-4 text-white font-bold py-3 px-6 rounded-lg shadow-lg focus:outline-none focus:shadow-outline text-xl">
            <Link to="createUser"> Create User</Link>
          </button>
        </div>
        <hr />
        <Products />
        <Users noNav={true} />

        <Orders noNav={true} />
        <hr />
      </div>
      <Footer></Footer>
    </>
  );
};

export default Dashboard;

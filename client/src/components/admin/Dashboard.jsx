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
        <button className="bg-gray-800 hover:bg-gray-700 m-4 text-white font-bold py-3 px-6 rounded-lg shadow-lg focus:outline-none focus:shadow-outline text-xl">
          <Link to="uploadProduct"> Upload Product</Link>
        </button>
        <button className="bg-gray-800 hover:bg-gray-700 m-4 text-white font-bold py-3 px-6 rounded-lg shadow-lg focus:outline-none focus:shadow-outline text-xl">
          <Link to="createUser"> Create User</Link>
        </button>
        <Users noNav={true} />

        <Orders noNav={true} />
        <hr />
        <Products />
      </div>
      <Footer></Footer>
    </>
  );
  //Admin nav: Products,Users,Orders,Stats
  //Total Sell :....
  //Pendindg due to Pay on delivery
  //Product list:...
  //
  //
  //
  //
  //
};

export default Dashboard;

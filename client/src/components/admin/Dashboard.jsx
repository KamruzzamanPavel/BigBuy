import React from "react";
import Users from "../../pages/Users";
import Orders from "../../pages/Orders";
import Footer from "../../layout/Footer";
import { Link } from "react-router-dom";
import Navbar from "../../layout/Navbar";
const Dashboard = () => {
  return (
    <>
      <div className="mb-10">
        <Navbar />
        <Link to="uploadProduct"> Upload Product</Link>
        <Users noNav={true} />

        <Orders noNav={true} />
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

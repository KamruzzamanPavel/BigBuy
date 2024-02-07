import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../layout/Navbar";
// import Announcement from '../layout/Announcement';
import Carousel from "../components/Carousel";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../layout/Footer";
import Adheader from "../components/admin/Adheader";
import Automatic_caro from "../components/Automatic_caro";
const Home = () => {
  const user = useSelector((store) => store.auth.currentUser);
  var isAdmin = false;
  if (user) {
    isAdmin = user.isAdmin;
  }
  return (
    <>
      {isAdmin ? <Adheader name={user.userName} /> : ""}
      <Navbar />
      <Automatic_caro />
      {/* <Carousel /> */}
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;

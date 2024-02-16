import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../layout/Navbar";
// import Announcement from '../layout/Announcement';
import Carousel from "../components/Carousel";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../layout/Footer";
// import Adheader from "../components/admin/Adheader";
import Automatic_caro from "../components/Automatic_caro";
import ScrollToTop from "../components/ScrollToTop";
import Slider from "../layout/Slider/Slider";
const Home = () => {
  const user = useSelector((store) => store.auth.currentUser);
  var isAdmin = false;
  if (user) {
    isAdmin = user.isAdmin;
  }
  return (
    <div className="bg-black">
      <Navbar />
      {/* <Automatic_caro /> */}
      <Slider />
      <Categories />
      <Products />
      <ScrollToTop />

      <Footer />
    </div>
  );
};

export default Home;

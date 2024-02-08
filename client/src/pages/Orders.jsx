import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userRequest } from "../request-methods";
import { resetcart } from "../store/cart-action";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
const Orders = () => {
  const cart = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const user = useSelector((store) => store.auth.currentUser);
  var isAdmin = false;
  if (user) {
    console.log(user);
    isAdmin = user.isAdmin;
  }

  return (
    <>
      <Navbar />
      Orders
    </>
  );
};

export default Orders;

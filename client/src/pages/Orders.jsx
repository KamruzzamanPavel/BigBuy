import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useUserRequest } from "../req_m"; // Update the import path with the correct file path

import Navbar from "../layout/Navbar";
import OrderComponent from "../components/OrderComponent";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const user = useSelector((store) => store.auth.currentUser);
  const isAdmin = user ? user.isAdmin : false;

  // Use the custom hook to get an axios instance with the current user's token
  const userRequest = useUserRequest();

  const fetchOrders = async () => {
    try {
      let url;
      if (isAdmin) {
        url = "/orders/"; // Fetch all orders (admin only)
      } else {
        url = `/orders/${user.userId}`; // Fetch orders for the logged-in user or specific user if userId is provided
      }

      const response = user ? await userRequest.get(url) : [];
      console.log(response);
      setOrders(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, [user]); // Fetch orders whenever userId or userRequest changes

  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <div className="text-center mt-8 mb-6">
          <h1 className="text-4xl font-bold text-gray-800">
            Orders: <span className="text-green-500">{orders.length}</span>
          </h1>
          <div className="w-full h-1 bg-gray-600 mx-auto mt-2 mb-4"></div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Map each order to OrderComponent */}
          {orders.map((order) => (
            <OrderComponent key={order._id} orderData={order} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Orders;

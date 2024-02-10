import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useUserRequest } from "../req_m"; // Update the import path with the correct file path

import Navbar from "../layout/Navbar";
import UserCard from "../components/UserCard";
import SingleUser from "../components/SingleUser";

const Users = ({ noNav }) => {
  const [orders, setOrders] = useState(null); // Initialize orders state with null
  const user = useSelector((store) => store.auth.currentUser);
  const isAdmin = user ? user.isAdmin : false;

  // Use the custom hook to get an axios instance with the current user's token
  const userRequest = useUserRequest();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        let url;
        if (isAdmin) {
          url = "/users/"; // Fetch all orders (admin only)
        } else {
          url = `/users/${user.userId}`; // Fetch orders for the logged-in user or specific user if userId is provided
        }

        const response = user ? await userRequest.get(url) : [];
        console.log(response.data);
        setOrders(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchOrders();
  }, [user]); // Fetch orders whenever userId, userRequest, or isAdmin changes

  return (
    <>
      {!noNav && <Navbar />}
      <div className="container m-8 over  ">
        <div className="text-center mt-8 mb-6">
          <h1 className="text-4xl font-bold text-gray-800">
            {isAdmin && orders !== null && (
              <span>
                Users:
                <span className="text-green-500">{orders.length}</span>
              </span>
            )}
          </h1>
          <div className="w-full h-1 bg-gray-600 mx-auto mt-2 mb-4"></div>
        </div>
        <div className=" h-screen w-auto bg-gray-200 flex m-8 p-4  overflow-scroll">
          {orders !== null ? (
            isAdmin ? (
              <div className="flex flex-wrap ">
                {orders.map((order) => (
                  <UserCard key={order._id} user={order} />
                ))}
              </div>
            ) : (
              <div className="w-screen h-70  bg-slate-900 text-white shadow-md rounded-lg overflow-hidden p-6 flex flex-col text-center ">
                <hr />
                <h2 className="text-2xl font-bold mb-4">
                  name : {orders.username}
                </h2>
                <hr />
                <p className="text-lg font-bold mb-4 ">
                  Address:{orders.address}
                </p>
                <hr />
                <p className="text-lg font-bold mb-4">Email : {orders.email}</p>
                <hr className="" />
              </div>
            )
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Users;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Users from "./Users";
import Orders from "../../pages/Orders";
import Footer from "../../layout/Footer";
import Navbar from "../../layout/Navbar";
import Products from "./Products";
import Adheader from "./Adheader";

const Dashboard = () => {
  const [showProducts, setShowProducts] = useState(true);
  const [showUsers, setShowUsers] = useState(false);
  const [showOrders, setShowOrders] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleProducts = () => {
    setShowProducts(true);
    setShowUsers(false);
    setShowOrders(false);
  };

  const toggleUsers = () => {
    setShowProducts(false);
    setShowUsers(true);
    setShowOrders(false);
  };

  const toggleOrders = () => {
    setShowProducts(false);
    setShowUsers(false);
    setShowOrders(true);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Adheader />
      <div className="flex h-screen  overflow-hidden bg-gray-100 text-gray-800">
        {/* Sidebar */}
        {isSidebarOpen && (
          <aside
            className={`bg-gray-800 w-64 min-h-screen flex-shrink-0 transition-all duration-300 ease-in-out ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex items-center justify-between p-4">
              <h1 className="text-2xl font-bold text-white">
                <Link to="/">BigBuy</Link>
              </h1>
            </div>

            <nav className="p-2">
              <ul>
                <li>
                  <Link
                    to="/dashboard"
                    className="block text-white font-semibold py-2 px-4 hover:bg-gray-700"
                    onClick={toggleProducts}
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard"
                    className="block py-2 px-4 hover:bg-gray-700  text-white font-semibold "
                    onClick={toggleUsers}
                  >
                    Users
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard"
                    className="block py-2 px-4 hover:bg-gray-700  text-white font-semibold "
                    onClick={toggleOrders}
                  >
                    Orders
                  </Link>
                </li>
                <hr className="my-2 border-gray-700" />
                <li>
                  <Link
                    to="/uploadProduct"
                    className="block py-2 px-4 hover:bg-gray-700  text-white font-semibold "
                  >
                    Upload Product
                  </Link>
                </li>
                <li>
                  <Link
                    to="/createUser"
                    className="block py-2 px-4 hover:bg-gray-700  text-white font-semibold "
                  >
                    Create User
                  </Link>
                </li>
              </ul>
            </nav>
          </aside>
        )}

        {/* Main Content */}
        <div className={`flex w-screen flex-col  `}>
          {/* Header */}

          {/* Main Content */}
          <main className="p-4 overflow-scroll">
            <div className="flex justify-between mb-4">
              {/* Button to toggle sidebar with chevron icon */}
              <button
                className=" bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg focus:outline-none focus:shadow-outline"
                onClick={toggleSidebar}
              >
                {/* Toggle icon */}
                {isSidebarOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>

            {/* Content Sections */}
            {showProducts && <Products />}
            {showUsers && <Users noNav={true} />}
            {showOrders && <Orders noNav={true} />}
          </main>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

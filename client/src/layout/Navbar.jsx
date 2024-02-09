import React from "react";
import { Badge } from "@mui/material";
import { Search, ShoppingCart } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logout from "../components/Logout";
import Dashboard from "../components/admin/Dashboard";

const Navbar = () => {
  const user = useSelector((store) => store.auth.currentUser);
  var isAdmin = false;
  if (user) {
    isAdmin = user.isAdmin;
  }
  var totalQantity = useSelector((store) => store.cart.totalQantity);

  return (
    <nav className="grid grid-cols-2 p-4 border-b font-bold h-18 bg-slate-800 text-white">
      <h1 className="font-bold text-3xl flex items-center justify-start px-4 tracking-wider text-blue">
        <Link to="/" className="px-4 py-2">
          BigBuy
        </Link>
      </h1>

      <div className="flex justify-end items-center px-4 text-md md:text-lg">
        {!user ? (
          <Link to="/signup" className="uppercase px-4 py-2">
            Register
          </Link>
        ) : user.isAdmin ? (
          <Link to="/dashboard">Dashboard</Link>
        ) : (
          // user.userName
          <Link to="/users" className="uppercase px-4 py-2">
            {user.userName}
          </Link>
        )}
        {/* orders */}
        {user ? (
          <Link to={"/orders"} className="uppercase px-4 py-2">
            Orders
          </Link>
        ) : (
          ""
        )}

        {user ? (
          <Logout />
        ) : (
          <Link to="/login" className="uppercase px-4 py-2">
            Sign in
          </Link>
        )}
        {user ? (
          <Link to="/cart">
            <Badge
              badgeContent={totalQantity}
              color="primary"
              className="cursor-pointer"
            >
              <ShoppingCart />
            </Badge>
          </Link>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
};

export default Navbar;

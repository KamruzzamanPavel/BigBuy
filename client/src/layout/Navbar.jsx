import React, { useState } from "react";
import { Badge, IconButton } from "@mui/material";
import { ArrowUpward, ShoppingCart, Menu } from "@mui/icons-material";
import Avatar from "@mui/material/Avatar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logout from "../components/Logout";
import Search from "../components/Search";

const linkStyle = {
  borderRadius: "20px", // You can adjust the border radius as needed
  border: "2px solid white", // Adjust the border width and color as needed
  padding: "8px 12px", // Adjust the padding as needed
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector((store) => store.auth.currentUser);
  const isAdmin = user && user.isAdmin;
  var totalQantity = useSelector((store) => store.cart.totalQantity);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="grid grid-cols-2 p-4 border-b font-bold h-18 bg-slate-800 text-white">
      <h1 className="font-bold text-3xl flex items-center justify-start px-4 tracking-wider text-blue">
        <Link to="/" className="px-4 py-2">
          BigBuy
        </Link>
      </h1>

      <div className="hidden md:flex justify-end items-center px-4 text-md md:text-lg">
        {renderMenu(totalQantity)}
      </div>

      <div className="flex justify-end items-center md:hidden px-4">
        <Search></Search>
        <IconButton onClick={toggleMenu}>
          <Menu style={{ color: "white" }} />
        </IconButton>
      </div>

      {isOpen && (
        <div className="absolute top-16 w-full bg-slate-700 text-white z-10">
          <div className="flex items-center justify-center">
            {" "}
            <IconButton onClick={toggleMenu}>
              <ArrowUpward style={{ color: "white" }} />
            </IconButton>
          </div>
          <div className="px-4 py-2">{renderMenu(totalQantity)}</div>
        </div>
      )}
    </nav>
  );

  function renderMenu(totalQantity) {
    var tota;
    return (
      <>
        {!user ? (
          <Link to="/signup" className="block py-2 px-4 hover:bg-slate-600">
            Create a New Account
          </Link>
        ) : isAdmin ? (
          <h1 className="font-bold text-3xl flex items-center justify-start px-4 tracking-wider">
            <Link to="/dashboard" className="text-red-500">
              <span className="text-stroke">Admin-Dashboard</span>
            </Link>
          </h1>
        ) : (
          <Link
            to="/users"
            className="block py-2 px-4 hover:bg-slate-600"
            style={linkStyle}
          >
            <div className="flex items-center">
              <Avatar alt={user.userName} className="mr-2" />
              <span>{user.userName}</span>
            </div>
          </Link>
        )}
        {user && !isAdmin && (
          <Link to={"/orders"} className="block py-2 px-4 hover:bg-slate-600">
            Orders
          </Link>
        )}
        {user ? (
          <Logout />
        ) : (
          <Link to="/login" className=" block py-2 px-4 hover:bg-slate-600">
            Login
          </Link>
        )}
        {user ? (
          <Link to="/cart" className="block py-2 px-4 hover:bg-slate-600">
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
      </>
    );
  }
};

export default Navbar;

import React from "react";
import { Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Dashboard from "./components/admin/Dashboard";
import Home from "./pages/Home";
import ShoppingCategorie from "./pages/ShoppingCategorie";
import SingleProduct from "./pages/SingleProduct";
import ShoppingCart from "./pages/ShoppingCart";
import Orders from "./pages/Orders";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import Users from "./pages/Users";

const App = () => {
  const user = useSelector((store) => store.auth.currentUser);
  var isAdmin = false;
  if (user) {
    console.log(user);
    isAdmin = user.isAdmin;
  }

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/categories/:category">
          <ShoppingCategorie />
        </Route>
        <Route path="/products/:id">
          <SingleProduct />
        </Route>
        <Route path="/cart">
          <ShoppingCart />
        </Route>
        <Route path="/orders">
          <Orders />
        </Route>
        <Route path="/Users">
          <Users />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/signup">
          <Signup />
        </Route>
      </Switch>
    </>
  );
};

export default App;

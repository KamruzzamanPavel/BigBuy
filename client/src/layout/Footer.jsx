import React from "react";
import { useSelector } from "react-redux";
import { Place, MailOutline, LocalPhone } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Footer = () => {
  const user = useSelector((store) => store.auth.currentUser);
  var isAdmin = false;
  if (user) {
    isAdmin = user.isAdmin;
  }
  return (
    <footer className="p-8 grid gap-x-16 gap-y-4 md:grid-cols-3 text-white bg-black">
      <div>
        <h1 className="font-bold text-3xl uppercase mb-4 tracking-wider">
          <a href="">BigBuy</a>
        </h1>
        <p className="text-justify">
          BigBuy is a leading dropshipping supplier and wholesale distributor
          based in Kushta-Sadar,Bangladesh, offering a wide range of products
          across various categories such as electronics, fashion, beauty, home
          goods, and more.
        </p>
      </div>
      <div>
        <h2 className="font-bold text-2xl mb-4 tracking-wider">Contact</h2>
        <ul>
          <li>
            {" "}
            <Link to="/aboutme">About me</Link>
          </li>
          <li>
            <Place className="mr-4" />
            <span>Kushtia, Bangladesh</span>
          </li>
          <li>
            <LocalPhone className="mr-4" />
            <span>+88018XXXXXXXXX</span>
          </li>
          <li>
            <MailOutline className="mr-4" />
            <span>contact@bigbuy.com</span>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

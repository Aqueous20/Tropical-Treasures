import React, { useState } from "react";
import "./NavBar.css";
import TT from "../assets/TT.png";
import cart_icon from "../assets/cart_icon.png";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const [menu, setmenu] = useState("Shop");
  return (
    <div className="navbar">
      <div className="nav_logo">
        <img className="nav_img" src={TT} alt="Binge sake" />
      </div>
      <ul className="nav_menu">
        <li
          onClick={() => {
            setmenu("shop");
          }}
        >
          <Link to="/" className="menu_link">
            Shop
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setmenu("mens");
          }}
        >
          <Link to="/mens" className="menu_link">
            Men
          </Link>
          {menu === "mens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setmenu("womens");
          }}
        >
          <Link to="/womens" className="menu_link">
            Women
          </Link>
          {menu === "womens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setmenu("kids");
          }}
        >
          <Link to="/kids" className="menu_link">
            Kids
          </Link>
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <ul className="nav_login-cart">
        <Link to="/Login" className="menu_link">
          <button>Login</button>
        </Link>
        <Link to="/cart" className="menu_link">
          <img src={cart_icon} alt="binge sake" />
        </Link>
        <div className="nav_cart-count">0</div>
      </ul>
    </div>
  );
};

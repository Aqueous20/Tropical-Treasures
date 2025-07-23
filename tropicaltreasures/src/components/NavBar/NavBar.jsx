import React, { useState } from "react";
import "./NavBar.css";
import TT from "../assets/TT.png";
import cart_icon from "../assets/cart_icon.png";
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
          Shop{menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setmenu("mens");
          }}
        >
          Men{menu === "mens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setmenu("womens");
          }}
        >
          Women{menu === "womens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setmenu("kids");
          }}
        >
          Kids{menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <ul className="nav_login-cart">
        <button>Login</button>
        <img src={cart_icon} alt="" />
        <div className="nav_cart-count">0</div>
      </ul>
    </div>
  );
};

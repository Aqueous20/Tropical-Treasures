import React, { useContext, useRef, useState } from "react";
import "./NavBar.css";
import TT from "../assets/TT.png";
import cart_icon from "../assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
import nav_dropdown from '../assets/nav_dropdown.png'

export const NavBar = () => {
  const [menu, setmenu] = useState("Shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef()

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav_menu-visible');
    e.target.classList.toggle('open');
  }

  return (
    <div className="navbar">
      <div className="nav_logo">
        <img className="nav_img" src={TT} alt="Binge sake" />
      </div>
      <img onClick={dropdown_toggle} src={nav_dropdown} alt="binge sake" className="nav_dropdown" />
      <ul ref={menuRef} className="nav_menu">
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
        <div className="nav_cart-count">{getTotalCartItems()}</div>
      </ul>
    </div>
  );
};

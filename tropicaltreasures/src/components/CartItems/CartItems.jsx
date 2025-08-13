import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../context/ShopContext";
import remove_icon from "../assets/cart_cross_icon.png";

export const CartItems = () => {
  const { allproducts, cartItems, removeFromCart } = useContext(ShopContext);

  return (
    <div className="cart_items">
      <div className="cart_items-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      <div>
        <hr />
        {allproducts.map((e) => {
          if (cartItems[e.id] > 0) {
            return (
              <div className="cart_items-format-main cart_items-format">
                <img
                  src={e.image}
                  alt="binge"
                  className="cart_icon-product-icon"
                />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cart_items-quantity">
                  {cartItems[e.id]}
                </button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img
                  className="cart_items-remove-icon"
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  alt="binge sake"
                />
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className="cart_items-down">
        <div className="cart_items-total">
            <h1>Cart Totals</h1>
            <div>
                <div className="cart_items-total-items">
                    <p>SubTotal</p>
                    <p>${0}</p>
                </div>
                <hr />
                <div className="cart_items-total-items">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

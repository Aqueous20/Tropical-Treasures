import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../context/ShopContext";
import remove_icon from "../assets/cart_cross_icon.png";

export const CartItems = () => {
  const { allproducts, cartItems, removeFromCart, getTotalCartValue } =
    useContext(ShopContext);

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
              <p>${getTotalCartValue()}</p>
            </div>
            <hr />
            <div className="cart_items-total-items">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cart_items-total-items">
              <h3>Total</h3>
              <h3>${getTotalCartValue()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart_items-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cart_items-promobox">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

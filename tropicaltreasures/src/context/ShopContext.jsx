import React, { createContext, useState } from "react";
import allproducts from "../components/assets/all_product.js";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < allproducts.length; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    console.log(cartItems);
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const getTotalCartValue = () => {
    let totalValue = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = allproducts.find(
          (product) => product.id === Number(item)
        );
        totalValue += itemInfo.new_price * cartItems[item];
      }
    }
    return totalValue;
  };
  const getTotalCartItems = () => {
    let totalItems = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItems += cartItems[item];
      }
    }
    return totalItems;
  };

  const contextValue = {
    allproducts,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartValue,
    getTotalCartItems,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;

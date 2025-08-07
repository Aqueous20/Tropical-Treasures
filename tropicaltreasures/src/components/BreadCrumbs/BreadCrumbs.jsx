import React from "react";
import "./BreadCrumbs.css";
import bread_arrow from "../assets/breadcrum_arrow.png";

export const BreadCrumbs = (props) => {
  const { product } = props;
  return (
    <div className="breadcrum">
      HOME <img src={bread_arrow} alt="binge sake" /> SHOP
      <img src={bread_arrow} alt="binge sake" /> {product.category}
      <img src={bread_arrow} alt="binge sake" /> {product.name}
    </div>
  );
};

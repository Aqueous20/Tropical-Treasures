import React, { useContext } from "react";
import "./stylesheets/Products.css";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import { BreadCrumbs } from "../components/BreadCrumbs/BreadCrumbs";

export const Product = () => {
  const { allproducts } = useContext(ShopContext);
  const { productId } = useParams();
  const product = allproducts.find((e) => e.id === Number(productId));
  return (
    <div>
      <BreadCrumbs product={product} />
    </div>
  );
};

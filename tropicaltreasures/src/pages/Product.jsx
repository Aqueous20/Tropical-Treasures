import React, { useContext } from "react";
import "./stylesheets/Products.css";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import { BreadCrumbs } from "../components/BreadCrumbs/BreadCrumbs";
import { ProductDisplay } from "../components/ProductDisplay/ProductDisplay.jsx";
import { DescriptionBox } from "../components/DescriptionBox/DescriptionBox.jsx";
import { RelatedProducts } from "../components/RelatedProducts/RelatedProducts.jsx";

export const Product = () => {
  const { allproducts } = useContext(ShopContext);
  const { productId } = useParams();
  const product = allproducts.find((e) => e.id === Number(productId));
  return (
    <div>
      <BreadCrumbs product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  );
};

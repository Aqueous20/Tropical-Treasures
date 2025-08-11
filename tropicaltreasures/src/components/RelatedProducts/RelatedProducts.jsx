import React from "react";
import "./RelatedProducts.css";
import data_product from "../assets/data";
import { Items } from "../Items/Items";

export const RelatedProducts = () => {
  return (
    <div className="related_products">
      <h1>Related Products</h1>
      <hr />
      <div className="related_products-items">
        {data_product.map((item, i) => {
          return (
            <Items
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

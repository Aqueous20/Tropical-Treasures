import React, { useContext } from "react";
import "./stylesheets/ShopCategory.css";
import { ShopContext } from "../context/ShopContext";
import dropdown from "../components/assets/dropdown_icon.png";
import { Items } from "../components/Items/Items";

export const ShopCategory = (props) => {
  const { allproducts } = useContext(ShopContext);
  return (
    <div className="shop_category">
      <img
        src={props.banner}
        alt="binge sake"
        className="shop_categroy-banner"
      />
      <div className="shop_category-indexsort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shop_category-sort">
          sort by <img src={dropdown} alt="binge sake" />
        </div>
      </div>
      <div className="shop_category-products">
        {allproducts.map((item, i) => {
          if (props.category === item.category) {
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
          } else {
            return null;
          }
        })}
      </div>
      <div className="shop_category-load-more">
        Explore More
      </div>
    </div>
  );
};

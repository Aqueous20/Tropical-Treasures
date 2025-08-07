import React from "react";
import "./Items.css";
import { Link } from "react-router-dom";

export const Items = (props) => {
  return (
    <div className="item">
      <Link to={`/product/${props.id}`}>
        <img src={props.image} alt="binge sake" />
      </Link>
      <p>{props.name}</p>
      <div className="item_prices">
        <div className="item_prices-new">${props.new_price}</div>
        <div className="item_prices-old">${props.old_price}</div>
      </div>
    </div>
  );
};

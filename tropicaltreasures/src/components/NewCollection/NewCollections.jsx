import React from "react";
import "./NewCollections.css";
import new_collection from "../assets/new_collections.js";
import { Items } from "../Items/Items";

export const NewCollections = () => {
  return (
    <div className="newcollections">
      <h1>New Collections</h1>
      <hr />
      <div className="collections_item">
        {new_collection.map((item, i) => {
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

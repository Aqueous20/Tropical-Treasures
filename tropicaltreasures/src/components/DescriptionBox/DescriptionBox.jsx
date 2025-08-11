import React from "react";
import "./DescriptionBox.css";

export const DescriptionBox = () => {
  return (
    <div className="description_box">
      <div className="description_box-nav">
        <div className="description_box-nav-box">Description</div>
        <div className="description_box-nav-box fade">Reviews (122)</div>
      </div>
      <div className="description_box-description">
        <p>
          An e-commerce website is an online platform that facilitate the buying
          and selling of Products and services over the internet. It serves as a
          virtual market place where both businesses and individuals showcase
          their products, interact with customers and conduct transactions
          without the need for a physical presence. E-commerce websites have
          gained imense popularity due to their convenient accessibility, and
          the global reach they offer.
        </p>
        <p>
          E-commerce websites typically display products or services with a
          detailed description, images, prices and any available variable eg
          (sizes, colors). Each product usually has its own dedicated
          description with relevant information.
        </p>
      </div>
    </div>
  );
};

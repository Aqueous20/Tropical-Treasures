import React from "react";
import "./Hero.css";
import hand_icon from "../assets/hand_icon.png";
import arrow_icon from "../assets/arrow.png";
import hero_image from "../assets/hero_image.png";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>New Arrivals Only</h2>
        <div className="hero_hand-icon">
          <p>new</p>
          <img className="hand-img" src={hand_icon} alt="binge sake" />
        </div>
        <p>collection</p>
        <p>for everyone</p>
        <div className="hero_latest-btn">
          <div className="latest-collection">Latest Collection</div>
          <img className="arrow-img" src={arrow_icon} alt="binge sake" />
        </div>
      </div>
      <div className="hero-right">
        <img className="hero-img" src={hero_image} alt="binge sake" />
      </div>
    </div>
  );
};

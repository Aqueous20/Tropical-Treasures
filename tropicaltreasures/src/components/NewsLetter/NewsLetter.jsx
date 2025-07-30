import React from "react";
import "./NewsLetter.css";

export const NewsLetter = () => {
  return (
    <div className="Newsletter">
      <h1>Get Exclusive Offers In Your Email</h1>
      <p>Subscribe And Stay Updated</p>
      <div className="Newsletter_email">
        <input type="email" placeholder="Your Email id" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

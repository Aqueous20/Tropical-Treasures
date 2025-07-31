import React from "react";
import "./Footer.css";
import TT from "../assets/TT.png";
import insta from "../assets/instagram_icon.png";
import pinterest from "../assets/pinterest_icon.png";
import whatsapp from "../assets/whatsapp_icon.png";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_logo">
        <img className="footer_img" src={TT} alt="binge sake" />
      </div>
      <ul className="footer_links">
        <li className="footer_link">Company</li>
        <li className="footer_link">Products</li>
        <li className="footer_link">Offices</li>
        <li className="footer_link">About</li>
        <li className="footer_link">Contact</li>
      </ul>
      <div className="footer_icons">
        <div className="footer_icons-container">
          <img src={insta} alt="binge sake" />
        </div>
        <div className="footer_icons-container">
          <img src={pinterest} alt="binge sake" />
        </div>
        <div className="footer_icons-container">
          <img src={whatsapp} alt="binge sake" />
        </div>
      </div>
      <div className="footer_copyright">
        <hr />
        <p>Copyright @ 2025 - All rights reserved.</p>
      </div>
    </div>
  );
};

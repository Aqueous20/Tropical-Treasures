import React from "react";
import "./stylesheets/LoginSignup.css";

export const LoginSignup = () => {
  return (
    <div className="login_signup">
      <div className="login_signup-container">
        <h1>Sign Up</h1>
        <div className="login_signup-fields">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p className="login_signup-login">
          Already have an account? <span>Login Here</span>
        </p>
        <div className="login_signup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  );
};

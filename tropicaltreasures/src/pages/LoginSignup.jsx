import React from "react";

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
      </div>
    </div>
  );
};

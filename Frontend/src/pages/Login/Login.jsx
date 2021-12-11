import React from "react";
import { brand_title } from "../../data";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-section">
      <div className="login-container">
        <h2 className="login-title"> MY {brand_title} ACCOUNT </h2>
        <form className="login-form">
          <input placeholder="username"></input>
          <input placeholder="password"></input>
        </form>
        <button className="login-button">SIGN IN</button>

        <a href="/#">Forgotten password?</a>
        <a href="/#">Create a new account</a>
      </div>
    </div>
  );
};

export default Login;

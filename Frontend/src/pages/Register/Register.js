import React from "react";
import { brand_title } from "../../data";
import "./Register.css";

const Register = () => {
  return (
    <div className="register-section">
      <div className="register-container">
        <h2 className="register-title"> CREATE AN ACCOUNT </h2>
        <form className="register-form">
          <input placeholder="name"></input>
          <input placeholder="last name"></input>
          <input placeholder="username"></input>
          <input placeholder="email"></input>
          <input placeholder="password"></input>
          <input placeholder="confirm pasword"></input>
        </form>
        <span className="consent-agreement">
          By choosing "Creating an account", you confirm that you have read and
          understood our <b> PRIVACY POLICY</b>, and that you want to create
          your {brand_title} profile.
        </span>
        <button className="register-button">CREATE ACCOUNT</button>
      </div>
    </div>
  );
};

export default Register;

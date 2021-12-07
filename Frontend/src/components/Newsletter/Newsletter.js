import { Send } from "@material-ui/icons";
import React from "react";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <div className="newsletter-container">
      <h2 className="newsletter-title"> Newsletter </h2>
      <h3 className="newsletter-subtitle">
        Get weekly updates from your favorite products
      </h3>
      <h4 className="newsletter-desc">
        By entering your email address below, you consent to receiving our
        newsletter with access to our latest collections, events and initiatives
      </h4>
      <div className="newsletter-input-container">
        <input type="email" placeholder="Enter your email address" />
        <button className="newsletter-button">
          <Send className="send-icon" />
        </button>
      </div>
    </div>
  );
};

export default Newsletter;

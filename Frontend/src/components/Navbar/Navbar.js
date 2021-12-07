import { Badge } from "@material-ui/core";
import { Menu, Search, ShoppingCartOutlined } from "@material-ui/icons";
import React, { useEffect } from "react";
import { brand_title } from "../../data";
import "./Navbar.css";

const Navbar = () => {
  /* Handles the onclick event of the menu icon.*/
  useEffect(() => {
    const navBarContainer = document.querySelector(".right");
    const navToggle = document.querySelector(".mobile-nav-toggle");

    navToggle.addEventListener("click", () => {
      const visibility = navBarContainer.getAttribute("data-visible");

      if (visibility === "false") {
        navBarContainer.setAttribute("data-visible", true);
      } else if (visibility === "true") {
        navBarContainer.setAttribute("data-visible", false);
      }
    });
  }, []);

  return (
    <div className="navbar-container">
      <div className="left">
        <div className="language">EN</div>
        <div className="search-container">
          <input className="input-container" placeholder="Search..." />
          <Search className="search-icon" />
        </div>
      </div>
      <h1 className="center">{brand_title}</h1>
      <div className="right" data-visible="false">
        <div className="menu-item">REGISTER</div>
        <div className="menu-item">SIGN IN</div>
        <div className="menu-item">
          <Badge badgeContent={3} color="primary">
            <ShoppingCartOutlined />
          </Badge>
        </div>
      </div>
      <button className="mobile-nav-toggle">
        <Menu />
      </button>
    </div>
  );
};

export default Navbar;

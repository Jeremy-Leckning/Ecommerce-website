import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Room,
  Twitter,
  YouTube,
} from "@material-ui/icons";
import React from "react";
import { brand_title } from "../../data";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-left">
        <h2 className="footer-subtitles"> {brand_title} </h2>
        <p className="footer-description">
          Nisi esse officia adipisicing laboris sit ex. Incididunt sint sit
          consequat ut id. Non adipisicing reprehenderit pariatur quis proident
          dolore excepteur amet elit pariatur. Ullamco occaecat exercitation
          nulla aliqua elit cillum in labore. Qui minim laborum ad deserunt
          reprehenderit quis irure culpa consectetur. Excepteur ea culpa culpa
          culpa cillum incididunt id voluptate.
        </p>
        <div className="socials-container">
          <div className="social-icon facebook-colour">
            <Facebook />
          </div>
          <div className="social-icon instagram-colour">
            <Instagram />
          </div>
          <div className="social-icon twitter-colour">
            <Twitter />
          </div>
          <div className="social-icon youtube-colour">
            <YouTube />
          </div>
        </div>
      </div>
      <div className="footer-middle">
        <h2 className="footer-subtitles"> USEFUL LINKS </h2>
        <ul>
          <li>Home</li>
          <li>Cart</li>
          <li>Men Fashion</li>
          <li>Women Fashion</li>
          <li>Accessories</li>
          <li>My Account</li>
          <li>Order Tracking</li>
          <li>Wishlist</li>
          <li>Wishlist</li>
          <li>Terms</li>
        </ul>
      </div>
      <div className="footer-right">
        <h2 className="footer-subtitles"> CONTACT </h2>
        <div className="contact-item">
          <Room className="contact-icon" />
          111 Spring Creek Road, CITY, STATE
        </div>
        <div className="contact-item">
          <Phone className="contact-icon" />
          +1 234 5678 9
        </div>
        <div className="contact-item">
          <MailOutline className="contact-icon" />
          contact@emailadress.com
        </div>
      </div>
    </div>
  );
};

export default Footer;

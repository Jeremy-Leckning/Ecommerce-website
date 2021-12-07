import React from "react";
import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Newsletter from "../../components/Newsletter/Newsletter";
import product3 from "../../Assets/product3.jpg";
import "./SingleProduct.css";
import { Add, Remove } from "@material-ui/icons";

const SingleProduct = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <div className="single-product-section">
        <div className="single-product-image">
          <img src={product3} alt={product3} />
        </div>

        <div className="single-product-info">
          <h2 className="single-product-title">Leather Jacket</h2>
          <p className="single-product-desc">
            Labore cillum deserunt sint et reprehenderit elit exercitation
            veniam ea non veniam laboris ex qui. Enim sunt labore laboris
            voluptate. Deserunt excepteur incididunt aliqua exercitation. Enim
            esse elit Lorem et non aute consectetur.
          </p>
          <span className="single-product-price">$ 50</span>

          <div className="single-product-filter-container">
            <div className="filter-type-container">
              <span className="single-product-filter-title">Color</span>
              <div className="single-product-filter-colour black"></div>
              <div className="single-product-filter-colour darkblue"></div>
              <div className="single-product-filter-colour gray"></div>
            </div>

            <div className="filter-type-container">
              <span className="single-product-filter-title">Size</span>
              <select className="single-product-filter-size">
                <option className="option">XS</option>
                <option className="">S</option>
                <option className="">M</option>
                <option className="">L</option>
                <option className="">XL</option>{" "}
              </select>
            </div>
          </div>

          <div className="single-product-amount-container">
            <div className="add-container">
              <Remove />
              <span className="amount-container"> 1 </span>
              <Add />
            </div>

            <button className="add-product-cart-button">ADD TO CART</button>
          </div>
        </div>
      </div>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default SingleProduct;

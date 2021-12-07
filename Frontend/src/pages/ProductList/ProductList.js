import React from "react";
import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Newsletter from "../../components/Newsletter/Newsletter";
import Products from "../../components/Products/Products";
import "./ProductList.css";

const ProductList = () => {
  return (
    <div className="product-list-container">
      <Announcement />
      <Navbar />
      <h2 className="product-list-title">Shirts</h2>
      <div className="filter-container">
        <div className="filter-items">
          <h3 className="filter-text">Filter products:</h3>
          <select className="filter-select">
            <option disabled defaultValue>
              Color
            </option>
            <option>White</option>
            <option>Blue</option>
            <option>Yellow</option>
            <option>Green</option>
            <option>Black</option>
            <option>Red</option>
          </select>
          <select className="filter-select">
            <option disabled defaultValue>
              Size
            </option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
        </div>
        <div className="filter-items">
          <h3 className="filter-text">Sort products:</h3>
          <select className="filter-select">
            <option defaultValue>Newest</option>
            <option>Price (asc)</option>
            <option>Price (desc)</option>
          </select>
        </div>
      </div>
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductList;

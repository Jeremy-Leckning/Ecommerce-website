import React from "react";
import { productList } from "../../data";
import ProductItem from "./ProductItem/ProductItem";
import "./Products.css";

const Products = () => {
  return (
    <div className="products-section">
      <h2> OUR PRODUCTS </h2>
      <div className="products-container">
        {productList.map((item) => (
          <ProductItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Products;

import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import React from "react";
import "./ProductItem.css";

const ProductItem = ({ item }) => {
  return (
    <div className="productitem-container">
      <img src={item.img} alt={item.img} />
      <div className="circle"></div>
      <div className="product-info-container">
        <div className="product-icon-container">
          <ShoppingCartOutlined />
        </div>
        <div className="product-icon-container">
          <SearchOutlined />
        </div>
        <div className="product-icon-container">
          <FavoriteBorderOutlined />
        </div>
      </div>
    </div>
  );
};

export default ProductItem;

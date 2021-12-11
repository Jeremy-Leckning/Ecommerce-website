import React from "react";
import "./CategoryItem.css";

const CategoryItem = ({ item }) => {
  return (
    <div className="categoryitem-container">
      <img src={item.img} alt={item.img}></img>
      <div className="category-details-container">
        <h3 className="category-title">{item.title}</h3>
        <button className="category_button">SHOP NOW</button>
      </div>
    </div>
  );
};

export default CategoryItem;

import React from "react";
import "./Categories.css";
import { categories } from "../../data";
import CategoryItem from "./CategoryItem/CategoryItem";

const Categories = () => {
  return (
    <div className="categories-section">
      <h2> CATEGORIES </h2>
      <div className="categories-container">
        {categories.map((item) => (
          <CategoryItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Categories;

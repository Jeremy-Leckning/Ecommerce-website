import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import "./HomeSlider.css";
import { slides } from "../../data";

const HomeSlider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClickArrow = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2); // If slide index is on starter slide, then go to slide index 2 when pressing left arrow
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  /* setState of useState hook was taking longer to update than the document.getElementById transform update. Hence, useEffect here to only do the transform
  when the setState has finished updating the value */
  useEffect(() => {
    const moveSliderX = (index) => {
      let amount = index * -100;
      let element = document.getElementById("homeslider-wrapper");

      element.style.transition = "all 1s ease-in-out";
      element.style.transform = "translateX(" + amount + "vw)";
    };
    moveSliderX(slideIndex); // This is be executed when `loading` state changes
  }, [slideIndex]);

  return (
    <div className="homeslider-container">
      <ArrowLeftOutlined
        className="arrow-container left-arrow"
        onClick={() => handleClickArrow("left")}
      />
      <div id="homeslider-wrapper">
        {slides.map((item) => (
          <div key={item.id} className={`slide ${item.colour}`}>
            <div className="img-container">
              <img src={item.img} alt={item.img}></img>
            </div>
            <div className="info-container">
              <h2 className="homeslider-title">{item.title}</h2>
              <h3 className="homeslider-description">{item.desc}</h3>
              <button className="homeslider-button">SHOP NOW</button>
            </div>
          </div>
        ))}
      </div>
      <ArrowRightOutlined
        className="arrow-container right-arrow"
        onClick={() => handleClickArrow("right")}
      />
    </div>
  );
};

export default HomeSlider;

import React from "react";
import Announcement from "../../components/Announcement/Announcement";
import Categories from "../../components/Categories/Categories";
import Footer from "../../components/Footer/Footer";
import HomeSlider from "../../components/HomeSlider/HomeSlider";
import Navbar from "../../components/Navbar/Navbar";
import Newsletter from "../../components/Newsletter/Newsletter";
import Products from "../../components/Products/Products";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <HomeSlider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;

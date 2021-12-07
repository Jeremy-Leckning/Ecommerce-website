import { Add, Remove } from "@material-ui/icons";
import React from "react";
import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./ShoppingCart.css";

const ShoppingCart = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <div className="cart-section">
        <h2 className="cart-title">YOUR SELECTIONS</h2>
        <div className="cart-top-container">
          <button className="cart-top-button button-empty">
            CONTINUE SHOPPING
          </button>
          <div className="cart-top-text-container">
            <span className="cart-top-text"> Shopping Bag (2) </span>
            <span className="cart-top-text"> Your Wishlist (0)</span>
          </div>
          <button className="cart-top-button button-filled">
            CHECKOUT NOW
          </button>
        </div>

        <div className="cart-bottom-container">
          <div className="cart-bottom-product-list-container">
            <div className="cart-bottom-product-container">
              <div className="cart-bottom-product-details-wrapper">
                <img
                  className="cart-bottom-product-image"
                  alt="p1"
                  src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"
                />
                <div className="product-details-container">
                  <span>
                    <b>Product:</b> Jessie Thunder Shoes
                  </span>
                  <span>
                    <b>ID:</b> 31927140109
                  </span>
                  <span className="cart-bottom-color-container">
                    <b>Colour:</b>
                    <div className="cart-bottom-color black"></div>
                  </span>
                  <span>
                    <b>Size:</b> 40
                  </span>
                </div>
              </div>

              <div className="cart-bottom-price-details-container">
                <div className="cart-bottom-product-amount-container">
                  <Remove />
                  <span className="cart-bottom-product-amount"> 2 </span>
                  <Add />
                </div>
                <span className="cart-bottom-product-price"> $ 50 </span>
              </div>
            </div>

            <hr />

            <div className="cart-bottom-product-container">
              <div className="cart-bottom-product-details-wrapper">
                <img
                  className="cart-bottom-product-image"
                  alt="p2"
                  src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png"
                />
                <div className="product-details-container">
                  <span>
                    <b>Product:</b> HAKURA T-SHIRT
                  </span>
                  <span>
                    <b>ID:</b> 319221302813
                  </span>
                  <span className="cart-bottom-color-container">
                    <b>Colour:</b>
                    <div className="cart-bottom-color grey"></div>
                  </span>
                  <span>
                    <b>Size:</b> S
                  </span>
                </div>
              </div>

              <div className="cart-bottom-price-details-container">
                <div className="cart-bottom-product-amount-container">
                  <Remove />
                  <span className="cart-bottom-product-amount"> 1 </span>
                  <Add />
                </div>
                <span className="cart-bottom-product-price"> $ 20 </span>
              </div>
            </div>
          </div>

          <div className="cart-bottom-summary-container">
            <h2 className="cart-bottom-summary-title">ORDER SUMMARY</h2>
            <div className="cart-bottom-summary-item">
              <span>Subtotal</span>

              <span>$ 120</span>
            </div>

            <div className="cart-bottom-summary-item">
              <span>Shipping Cost</span>

              <span>$ 8.99</span>
            </div>

            <div className="cart-bottom-summary-item">
              <span>Discount</span>

              <span>$ 8.99</span>
            </div>
            <div className="cart-bottom-summary-item cart-bottom-summary-total-price">
              <span>Total</span>

              <span>$ 120</span>
            </div>
            <div className="cart-bottom-summary-button-container">
              <button className="cart-bottom-summary-button">
                CHECKOUT NOW
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ShoppingCart;

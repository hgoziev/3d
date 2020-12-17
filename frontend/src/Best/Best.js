import React from "react";
import "./Best.css";
import chair from "../assets/2.png";
import Cart from "@material-ui/icons/ShoppingCartOutlined";
import Image from "../assets/1.jpg";

function Best() {
  return (
    <div className="best">
      <h3>Best Selling</h3>

      <div className="best_pros">
        <div className="best_pro">
          <img alt="" src={Image} className="imgs" />
          <div className="item_container">
            <div className="title_container">
              <span className="item_title">best chair</span>
              <p className="item_price">$10</p>
            </div>
            <div className="cart__icon">
              <Cart className="cart" />
            </div>
          </div>
        </div>

        <div className="best_pro">
          <img alt="" src={chair} className="imgs" />
          <div className="item_container">
            <div className="title_container">
              <span className="item_title">best chair</span>
              <p className="item_price">$10</p>
            </div>
            <div className="cart__icon">
              <Cart className="cart" />
            </div>
          </div>
        </div>

        <div className="best_pro">
          <img alt="" src={chair} className="imgs" />
          <div className="item_container">
            <div className="title_container">
              <span className="item_title">best chair</span>
              <p className="item_price">$10</p>
            </div>
            <div className="cart__icon">
              <Cart className="cart" />
            </div>
          </div>
        </div>

        <div className="best_pro">
          <img alt="" src={chair} className="imgs" />
          <div className="item_container">
            <div className="title_container">
              <span className="item_title">best chair</span>
              <p className="item_price">$10</p>
            </div>
            <div className="cart__icon">
              <Cart className="cart" />
            </div>
          </div>
        </div>
      </div>

      <h3>3D models</h3>
      <div className="best_pros">
        <div className="best_pro">
          <img alt="" src={chair} className="imgs" />
          <div className="item_container">
            <div className="title_container">
              <span className="item_title">best chair</span>
              <p className="item_price">$10</p>
            </div>
            <div className="cart__icon">
              <Cart className="cart" />
            </div>
          </div>
        </div>
        <div className="best_pro">
          <img alt="" src={chair} className="imgs" />
          <div className="item_container">
            <div className="title_container">
              <span className="item_title">best chair</span>
              <p className="item_price">$10</p>
            </div>
            <div className="cart__icon">
              <Cart className="cart" />
            </div>
          </div>
        </div>

        <div className="best_pro">
          <img alt="" src={chair} className="imgs" />
          <div className="item_container">
            <div className="title_container">
              <span className="item_title">best chair</span>
              <p className="item_price">$10</p>
            </div>
            <div className="cart__icon">
              <Cart className="cart" />
            </div>
          </div>
        </div>

        <div className="best_pro">
          <img alt="" src={chair} className="imgs" />
          <div className="item_container">
            <div className="title_container">
              <span className="item_title">best chair</span>
              <p className="item_price">$10</p>
            </div>
            <div className="cart__icon">
              <Cart className="cart" />
            </div>
          </div>
        </div>

        <div className="best_pro">
          <img alt="" src={chair} className="imgs" />
          <div className="item_container">
            <div className="title_container">
              <span className="item_title">best chair</span>
              <p className="item_price">$10</p>
            </div>
            <div>
              <button className="btns">Cart</button>
            </div>
          </div>
        </div>
      </div>

      <h3>Interior Design</h3>
      <div className="best_pros">
        <div className="best_pro">
          <img alt="" src={chair} className="imgs" />
          <div className="item_container">
            <div className="title_container">
              <span className="item_title">best chair</span>
              <p className="item_price">$10</p>
            </div>
            <div className="cart__icon">
              <Cart className="cart" />
            </div>
          </div>
        </div>

        <div className="best_pro">
          <img alt="" src={chair} className="imgs" />
          <div className="item_container">
            <div className="title_container">
              <span className="item_title">best chair</span>
              <p className="item_price">$10</p>
            </div>
            <div>
              <button className="btns">Cart</button>
            </div>
          </div>
        </div>

        <div className="best_pro">
          <img alt="" src={chair} className="imgs" />
          <div className="item_container">
            <div className="title_container">
              <span className="item_title">best chair</span>
              <p className="item_price">$10</p>
            </div>
            <div>
              <button className="btns">Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Best;

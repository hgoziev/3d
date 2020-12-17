import React from "react";
import Header from "../../Header/Header";
import "./OrderHistory.css";
import { Link } from "react-router-dom";
import fo from "../../assets/mult.jpg";

function Basket() {
  return (
    <div className="order">
      <div className="order__header">
        <Header />
      </div>

      <div className="order__title">Purchased Orders</div>

      <div className="order__body">
        <div className="order__left__container">
          <div className="order__left">
            <img src={fo} alt="" />
            <div className="order__item__details">
              <p>Animal Tiger</p>
              <span>3DMAX</span>
            </div>
            <p>$5</p>
          </div>

          <div className="order__left">
            <img src={fo} alt="" />
            <div className="order__item__details">
              <p>Animal Tiger</p>
              <span>3DMAX</span>
            </div>
            <p>$5</p>
          </div>

          <div className="order__left">
            <img src={fo} alt="" />
            <div className="order__item__details">
              <p>Animal Tiger</p>
              <span>3DMAX</span>
            </div>
            <p>$5</p>
          </div>

          <div className="order__left">
            <img src={fo} alt="" />
            <div className="order__item__details">
              <p>Animal Tiger</p>
              <span>3DMAX</span>
            </div>
            <p>$5</p>
          </div>

          <div className="order__left">
            <img src={fo} alt="" />
            <div className="order__item__details">
              <p>Animal Tiger</p>
              <span>3DMAX</span>
            </div>
            <p>$5</p>
          </div>
        </div>

        <div className="order__right">
          <p>Order Summary</p>
          <div className="order__break" />

          <div className="order__total">
            <p>Subtotal</p>
            <p>$400</p>
          </div>

          <div className="order__discount">
            <p>Discount</p>
            <p>$0</p>
          </div>

          <div className="order__discount">
            <p>Tax</p>
            <p>$0</p>
          </div>
          <div className="order__break" />
          <div className="order__total">
            <p>Final price</p>
            <p>$400</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Basket;

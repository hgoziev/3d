import React from "react";
import Header from "../../Header/Header";
import "./Basket.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getBasketTotal } from "../../Redux/Reducers/Reducers";
import nodata from "../../assets/nodata.jpg";
import BasketItems from "../../Components/BasketItems/BasketItems";

function Basket() {
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket);

  return (
    <div className="basket">
      <div className="basket__header">
        <Header />
      </div>

      <div className="basket__title">Your Basket</div>
      {basket.length == 0 ? (
        <>
          <img src={nodata} alt="" className="basket__nodata" />
          <p className="basket__empty">Nothing found.</p>
        </>
      ) : (
        <div className="basket__body">
          <div className="basket__left__container">
            {basket.map((item) => (
              <BasketItems
                id={item.id}
                title={item.title}
                price={item.price}
                format={item.format}
              />
            ))}
          </div>

          <div className="basket__right">
            <p>Order Summary</p>
            <div className="basket__break" />

            <div className="basket__total">
              <p>Subtotal</p>
              <p>${getBasketTotal(basket)}</p>
            </div>

            <div className="basket__discount">
              <p>Discount</p>
              <p>$0</p>
            </div>

            <div className="basket__discount">
              <p>Tax</p>
              <p>$0</p>
            </div>
            <div className="basket__break" />
            <div className="basket__total">
              <p>Final price</p>
              <p>${getBasketTotal(basket)}</p>
            </div>
            <div className="basket__checkout__btn">
              <Link to="/checkout" className="link">
                <button className="basket__btn">Continue to Checkout</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Basket;

import React from "react";
import "./Banner5.css";
import Img from "../assets/3d.png";
import Img2 from "../assets/3d1.png";

function Banner5() {
  return (
    <div className="banner5">
      <div className="banner5__title">
        <p>Industrial 3D models</p>
        <span>
          High quality industry specific graphic designs and 3D models for your
          business.
        </span>
        <button className="banner5__btn">EXPLORE NOW</button>
      </div>
      <div className="banner5__right">
        <div className="banner5__img__container" id="banner5Left">
          <img src={Img} alt="" className="banner5__img" />
          <span className="banner5__right__text">Industrial products</span>
        </div>
        <div className="banner5__img__container">
          <img src={Img2} alt="" className="banner5__img" />
          <span className="banner5__right__text">
            Home and Office furnishings
          </span>
        </div>
      </div>
    </div>
  );
}

export default Banner5;

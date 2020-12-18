import React from "react";
import "./Banner3.css";
import Inter from "../assets/h2.png";
import inter2 from "../assets/h.png";
import Out from "../assets/inn2.png";
import Out2 from "../assets/out2.png";

function Banner() {
  return (
    <div className="banner3">
      <div className="banner3__left">
        <div className="banner3__img__container" id="g">
          <img src={Inter} alt="" className="banner3__img" id="in" />
          <img src={inter2} alt="" className="banner3__img" />
        </div>
        <div className="banner3__img__container">
          <img src={Out2} alt="" className="banner3__img" />
          <img src={Out} alt="" className="banner3__img" />
        </div>
      </div>

      <div className="banner3__right">
        <div className="banner3__right__container">
          <p>Interior and Exterior Design</p>
          <span>
            Stunning 3D and architectural models and design for your home and
            office.
          </span>
          <button className="banner3__btn">EXPLORE NOW</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;

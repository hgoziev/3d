import React from "react";
import "./Banner2.css";
import dog from "../assets/dog.png";
import rab from "../assets/rab.png";
import hand from "../assets/hand.png";
import clash from "../assets/clash.png";
import clash2 from "../assets/clash2.png";
import mn2 from "../assets/baby.png";
import pubg from "../assets/pubg.png";
import zoo from "../assets/zoo.png";

import moana from "../assets/moana.png";

function Banner() {
  return (
    <div className="banner2">
      <div className="banner2__left">
        <div className="banner2__left__container">
          <p>Exculisive art</p>
          <span>
            Special 3d models designed for your video game , production and
            animated films.
          </span>

          <button className="banner2__btn">EXPLORE NOW</button>
        </div>
      </div>

      <div className="banner2_right">
        <div className="banner2__moving1">
          <img src={clash2} className="banner2__moving1__img" alt="" />
          <img src={pubg} className="banner2__moving1__img" alt="" />
          <img src={clash} className="banner2__moving1__img" alt="" />
          <img
            src={hand}
            className="banner2__moving3__img"
            id="banner2__extraimg"
          />
        </div>
        <div className="banner2__moving2">
          <img src={moana} className="banner2__moving2__img" alt="" />
          <img src={zoo} className="banner2__moving2__img" alt="" />
          <img src={mn2} className="banner2__moving2__img" alt="" />
          <img
            src={dog}
            className="banner2__moving3__img"
            id="banner2__extraimg"
          />
        </div>
        <div className="banner2__moving3" id="banner2__dontshow">
          <img src={hand} className="banner2__moving3__img" alt="" />
          <img src={dog} className="banner2__moving3__img" alt="" />
          <img src={rab} className="banner2__moving3__img" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Banner;

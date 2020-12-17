import React from "react";
import "./Banner5.css";
import Industry from "../assets/industry.jpg";
import Cup from "../assets/cup.jpg";
import Blt from "../assets/blt.jpg";

function Banner5() {
  return (
    <div className="banner5">
      <div className="banner5_title">
        <h4>Interior and Exterior </h4>
        <button className="btn">SEE ALL ITEMS</button>
      </div>

      <div className="interior5__des">
        <img src={Industry} alt="" />
        <img src={Cup} alt="" />
      </div>
      <div className="interior5__des">
        <img src={Blt} alt="" />
        <img src={Cup} alt="" />
      </div>
    </div>
  );
}

export default Banner5;

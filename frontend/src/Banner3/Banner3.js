import React from "react";
import "./Banner3.css";
import chair from "../assets/d.png";
import air from "@material-ui/icons/AirplanemodeInactive";
import Interior from "../assets/intr.jpg";
import Exteriro from "../assets/extr.jpg";

function Banner() {
  return (
    <div className="banner3">
      <div className="interior__des">
        <img src={Interior} alt="" />
      </div>
      <div className="interior__des">
        <img src={Exteriro} alt="" />
      </div>
      <div className="banner3_title">
        <h4>Interior and Exterior </h4>
        <button className="btn">SEE ALL ITEMS</button>
      </div>
    </div>
  );
}

export default Banner;

import React from "react";
import "./Banner2.css";
import chair from "../assets/d.png";
import air from "@material-ui/icons/AirplanemodeInactive";

function Banner() {
  return (
    <div className="banner2">
      <div className="banner_right">
        <div className="right">
          <h1>Furniture for better life</h1>
          <span>TExrt</span>
          <p>little desct here</p>
          <button className="btn">SEE ALL ITEMS</button>
        </div>
      </div>

      <div className="banner_left">
        <img src={chair} className="big_img" />
      </div>
    </div>
  );
}

export default Banner;

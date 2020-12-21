import React from "react";
import "./Icons.css";
import Air from "@material-ui/icons/AirplanemodeInactive";
import AirCraft from "../assets/airplane.png";
import Home from "../assets/home.png";
import Chan from "../assets/chan.png";
import Lion from "../assets/lion.png";
import History from "../assets/history.png";
import factory from "../assets/factory.png";
import Car from "../assets/jeep.png";

function Icons() {
  return (
    <div className="icons__container">
      <div className="icons_img_container" id="airplane">
        <img src={AirCraft} alt="" className="icons_img" />
        <p>airplane</p>
      </div>
      <div className="icons_img_container">
        <img src={Home} alt="" className="icons_img" />
        <p>exterior</p>
      </div>
      <div className="icons_img_container">
        <img src={Chan} alt="" className="icons_img" />
        <p>interior</p>
      </div>
      <div className="icons_img_container">
        <img src={History} alt="" className="icons_img" />
        <p>building</p>
      </div>
      <div className="icons_img_container">
        <img src={Lion} alt="" className="icons_img" />
        <p>animal</p>
      </div>
      <div className="icons_img_container">
        <img src={factory} alt="" className="icons_img" />
        <p>industrial</p>
      </div>
      <div className="icons_img_container">
        <img src={Car} alt="" className="icons_img" />
        <p>car</p>
      </div>
    </div>
  );
}

export default Icons;

import React from "react";
import "./Services.css";
import S from "../assets/cartoon.jpg";
import Cartoon from "../assets/mult.jpg";
import In from "../assets/cup.jpg";
import House from "../assets/house.jpg";

function Services() {
  return (
    <div className="services">
      <h3 className="services__title">Our Services</h3>
      <div className="services__img__container">
        <div className="services__img__block">
          <h4>3D Modles</h4>
          <img src={S} alt="" className="services__images" />
          <span>3D models for your game </span>
        </div>
        <div className="services__img__block">
          <h4>3D Modles</h4>
          <img src={In} alt="" className="services__images" />
          <span>3D models for your game </span>
        </div>
        <div className="services__img__block">
          <h4>3D Modles</h4>
          <img src={Cartoon} alt="" className="services__images" />
          <span>3D models for your game </span>
        </div>
        <div className="services__img__block">
          <h4>3D Modles</h4>
          <img src={House} alt="" className="services__images" />
          <span>3D models for your game </span>
        </div>
      </div>
    </div>
  );
}

export default Services;

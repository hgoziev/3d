import React from "react";
import "./Services.css";
import S from "../assets/cl.png";
import Zoo from "../assets/zoo.png";
import House from "../assets/house.jpg";
import Ind from "../assets/banner5.jpg";

function Services() {
  return (
    <div className="services">
      <p className="services__title">Our Services</p>
      <div className="services__img__container">
        <div className="services__img__block">
          <p>Video Game</p>
          <img src={S} alt="" className="services__images" />
          <span>
            Anything you need for your video game like characters, places and
            other details.
          </span>
        </div>
        <div className="services__img__block">
          <p>Animated Movies</p>

          <img src={Zoo} alt="" className="services__images" />
          <span>
            Short animated movies and advertisements for your business and
            production.
          </span>
        </div>
        <div className="services__img__block">
          <p>Home Decoration</p>

          <img src={House} alt="" className="services__images" />
          <span>
            Interior and Exterior 3D designs and home furnishings for
            decoration.
          </span>
        </div>
        <div className="services__img__block" id="servicesLast">
          <p>Industrial Products</p>

          <img src={Ind} alt="" className="services__images" />
          <span>
            Special custom made pixel perfect models for your products.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Services;

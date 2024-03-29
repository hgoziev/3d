import React from "react";
import "./Banner.css";
import Land from "../assets/hh.png";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div className="banner">
      <div className="banner_left">
        <img src={Land} className="img" />
      </div>

      <div className="banner_right">
        <div className="right">
          <p>Professional 3D models</p>
          <span>
            Find the exact right 3D models for your needs, gaming, advertising,
            entertainment and 3D printing.
          </span>

          <form className="banner__form">
            <input type="text" className="banner__input" placeholder="Search" />
            <Link
              to={{
                pathname: "/all",
                showItem: "all",
              }}
            >
              <button className="banner__submit">Search</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Banner;

import React from "react";
import "./Banner.css";
import Land from "../assets/land.jpg";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div className="banner">
      <div className="banner_left">
        <img src={Land} className="img" />
      </div>

      <div className="banner_right">
        <div className="right">
          <h1>Professional 3D models</h1>
          <p>
            Find the exact right 3D models for your needs, gaming, advertising,
            entertainment and 3D printing.
          </p>

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

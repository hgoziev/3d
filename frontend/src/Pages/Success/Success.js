import React from "react";
import "./Success.css";
import Confetti from "react-confetti";
import success from "../../assets/success.jpg";
import { Link } from "react-router-dom";

function Success() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  return (
    <div style={{ width: width, height: height }}>
      <Confetti numberOfPieces={400} width={width} height={height} />
      <p className="success__title">Payment successfull!</p>
      <div className="success__img__container">
        <img src={success} alt="" className="success__img" />
        <Link to="/" className="link">
          <button className="success__btn">Done</button>
        </Link>
      </div>
    </div>
  );
}

export default Success;

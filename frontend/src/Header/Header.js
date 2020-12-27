import React, { useState } from "react";
import "./Header.css";
import CancelIcon from "@material-ui/icons/Cancel";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { HashLink } from "react-router-hash-link";
import auth from "../Firebase";
import BasketIcon from "../Components/BasketIcon/BasketIcon";
import DIMENT from "../assets/DIMENT.png";

function ChangeColor() {
  let lh = document.getElementById("l");
  if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
    lh.style.backgroundColor = "white";
  } else {
    lh.style.backgroundColor = "transparent";
  }
}

window.onscroll = function () {
  ChangeColor();
};

function Header() {
  const [toggle, setToggle] = useState(false);
  const notifier = useSelector((state) => state.notifier);

  return (
    <div className="header" id="l">
      <div className="cat">
        <div className="menu">
          {!toggle && (
            <Link to="/" className="link">
              <img src={DIMENT} alt="" className="header__brand__img" />
            </Link>
          )}

          <div
            className="header__toggle__menu"
            onClick={() => setToggle(!toggle)}
          >
            <span className="menu__bar"></span>
            <span className="menu__bar"></span>
            <span className="menu__bar"></span>
          </div>
        </div>

        <div className={toggle ? "header__toggle__show" : "header__navlinks"}>
          <CancelIcon
            className={
              toggle ? "header__closeIcon__show" : "header__closeIcon__none"
            }
            onClick={() => setToggle(false)}
          />
          <HashLink className="link" to="/#services" smooth>
            <span className={!toggle ? "underline" : "show__underline"}>
              Our Services
            </span>
          </HashLink>
          <Link className="link" to="/all">
            <span className={!toggle ? "underline" : "show__underline"}>
              3D models
            </span>
          </Link>
          <Link className="link" to="/all">
            <span className={!toggle ? "underline" : "show__underline"}>
              Interior & Exterior
            </span>
          </Link>
          <Link className="link" to="/all">
            <span className={!toggle ? "underline" : "show__underline"}>
              Animations
            </span>
          </Link>

          <HashLink className="link" to="/#contact" smooth>
            <span
              className={!toggle ? "underline" : "show__underline"}
              id="showContact"
            >
              Contact
            </span>
          </HashLink>
          <BasketIcon toggle={toggle} />
          <div
            className={
              !toggle ? "basket__login__container" : "header__login__show"
            }
          >
            {auth.currentUser ? (
              <button
                className="basket__signup__btn"
                onClick={() => auth.signOut()}
              >
                Logout
              </button>
            ) : (
              <>
                <Link to="/login" className="link">
                  <span className="basket__login__btn">Log In</span>
                </Link>
                <Link to="/signup" className="link">
                  <button className="basket__signup__btn">Signup</button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

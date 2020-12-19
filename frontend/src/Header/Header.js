import React, { useState } from "react";
import "./Header.css";
import basket from "../assets/basket.png";
import { Link } from "react-router-dom";
import ShoppingBag from "@material-ui/icons/LocalMallOutlined";
import { useDispatch, useSelector } from "react-redux";
import { HashLink } from "react-router-hash-link";
import auth from "../Firebase";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const notifier = useSelector((state) => state.notifier);

  const logout = () => {
    auth.signOut();
  };
  return (
    <div className="header">
      <div className="cat">
        <div className="menu">
          <Link to="/" className="link">
            <h3>Brand</h3>
          </Link>

          <div
            className="header__toggle__menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="menu__bar"></span>
            <span className="menu__bar"></span>
            <span className="menu__bar"></span>
          </div>
        </div>

        <div className="header__navlinks">
          <HashLink className="link" to="/#services" smooth>
            <span className="underline">Our Services</span>
          </HashLink>
          <Link className="link" to="/all">
            <span className="underline">3D models</span>
          </Link>
          <Link className="link" to="/all">
            <span className="underline">Interior design</span>
          </Link>
          <Link className="link" to="/all">
            <span className="underline">Animations</span>
          </Link>

          <Link className="link" to="/basket">
            <div className="header__basker__container">
              <ShoppingBag className="underline" />
              <div className="header__circle__basket">
                <span>{notifier == 0 ? "0" : notifier}</span>
              </div>
            </div>
          </Link>
          <HashLink className="link" to="/#contact" smooth>
            <span className="underline">Contact</span>
          </HashLink>
          <div className="basket__login__container">
            {auth.currentUser ? (
              <button className="basket__signup__btn" onClick={logout()}>
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

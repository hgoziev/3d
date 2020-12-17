import React from "react";
import "./Forgot.css";
import { useHistory } from "react-router-dom";
import forgot from "../../assets/forgot.jpg";
import Back from "@material-ui/icons/ArrowBack";

function Forgot() {
  const history = useHistory();
  return (
    <div className="forgot">
      <div className="forgot__left">
        <Back className="forgot__back__icon" onClick={() => history.goBack()} />
        <div className="forgot__img__container">
          <img src={forgot} alt="" className="forgot__img" />
          <p className="forgot__join__text">
            Choose hard to guess but easy to remember password.
          </p>
        </div>
      </div>

      <div className="forgot__right">
        <p className="forgot__title">Reset Password</p>
        <span>Please enter your email to create a new password.</span>
        <span>Email</span>
        <input />

        <div className="forgot__btn__container">
          <button>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Forgot;

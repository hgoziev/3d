import React from "react";
import "./SignUp.css";
import { useHistory } from "react-router-dom";
import login from "../../assets/2.jpg";
import Back from "@material-ui/icons/ArrowBack";

function SignUp() {
  const history = useHistory();
  return (
    <div className="login">
      <div className="login__left">
        <Back className="login__back__icon" onClick={() => history.goBack()} />
        <div className="login__img__container">
          <img src={login} alt="" className="login__img" />
          <p className="sign__join__text">Join now and grow with us.</p>
        </div>
      </div>

      <div className="login__right">
        <p className="login__title">Sign Up</p>
        <span>Email</span>
        <input />
        <span>Password</span>
        <input />
        <div className="sign__btn__container">
          <button>Sign Up</button>
        </div>

        <div className="sign__create__container">
          <p>Already have account ? </p>
          <h3>Login</h3>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

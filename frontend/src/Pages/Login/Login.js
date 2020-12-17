import React from "react";
import "./Login.css";
import { useHistory } from "react-router-dom";
import login from "../../assets/login.jpg";
import Back from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";

function Login() {
  const history = useHistory();
  return (
    <div className="login">
      <div className="login__left">
        <Back className="login__back__icon" onClick={() => history.goBack()} />
        <div className="login__img__container">
          <img src={login} alt="" className="login__img" />
          <p className="login__join__text">
            Designers are meant to be loved, not to be understood.
          </p>
        </div>
      </div>
      <div className="login__right">
        <p className="login__title">Login</p>
        <span>Email</span>
        <input />
        <span>Password</span>
        <input />
        <div className="login__btn__container">
          <Link className="link" to="/forgot">
            <p>Forgot Password ? </p>
          </Link>
          <button>Login</button>
        </div>

        <div className="login__create__container">
          <p>New Member ? </p>

          <button className="login__create__btn">Create Account</button>
        </div>
      </div>
    </div>
  );
}

export default Login;

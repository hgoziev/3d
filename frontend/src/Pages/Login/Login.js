import React, { useState } from "react";
import "./Login.css";
import { useHistory, Link } from "react-router-dom";
import login from "../../assets/login.jpg";
import Back from "@material-ui/icons/ArrowBack";
import auth from "../../Firebase";

function ChangeColor() {
  let lh = document.getElementById("l");
  if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
    lh.style.backgroundColor = "white";
    lh.style.borderBottomColor = "rgb(211, 211, 211)";
    lh.style.borderBottomStyle = "solid";
    lh.style.borderBottomWidth = "1px";
  } else {
    lh.style.backgroundColor = "transparent";
    lh.style.borderBottomWidth = "0px";
  }
}
window.onscroll = function () {
  ChangeColor();
};
function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const handleEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  return (
    <div className="login" id="l">
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
        <Back
          className="login__back__icon"
          onClick={() => history.goBack()}
          id="backIcon"
        />
        <p className="login__title">Login</p>
        <span id="error">{error}</span>
        <span>Email</span>
        <input value={email} onChange={(e) => handleEmail(e)} />
        <span>Password</span>
        <input
          value={password}
          onChange={(e) => handlePassword(e)}
          type="password"
        />
        <div className="login__btn__container">
          <button onClick={signIn}>Login</button>
          <div className="login__create__container">
            <button
              className="login__create__btn"
              onClick={() => history.push("/signup")}
            >
              Create Account
            </button>
          </div>
        </div>
        <Link className="link" to="/forgot">
          <p className="login_Forgot">Forgot Password ? </p>
        </Link>
      </div>
    </div>
  );
}

export default Login;

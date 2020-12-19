import React, { useState } from "react";
import "./Login.css";
import { useHistory } from "react-router-dom";
import login from "../../assets/login.jpg";
import Back from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";
import auth from "../../Firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((err) => alert(err.message));
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
        <input value={email} onChange={(e) => handleEmail(e)} />
        <span>Password</span>
        <input
          value={password}
          onChange={(e) => handlePassword(e)}
          type="password"
        />
        <div className="login__btn__container">
          <Link className="link" to="/forgot">
            <p>Forgot Password ? </p>
          </Link>
          <button onClick={signIn}>Login</button>
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

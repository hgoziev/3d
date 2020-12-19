import React, { useState } from "react";
import "./SignUp.css";
import { useHistory } from "react-router-dom";
import login from "../../assets/2.jpg";
import Back from "@material-ui/icons/ArrowBack";
import auth from "../../Firebase";

function SignUp() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((err) => alert(err.message));
  };
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
        <input type="text" value={email} onChange={(e) => handleEmail(e)} />
        <span>Password</span>
        <input
          value={password}
          onChange={(e) => handlePassword(e)}
          type="password"
        />
        <div className="sign__btn__container">
          <button onClick={register}>Sign Up</button>
        </div>

        <div className="sign__create__container">
          <p>Already have account ? </p>
          <h3 onClick={() => history.push("/login")}>Login</h3>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

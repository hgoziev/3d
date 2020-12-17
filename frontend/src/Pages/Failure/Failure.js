import React from "react";
import "./Failure.css";
import failure from "../../assets/failure.jpg";
import { useHistory } from "react-router-dom";

function Failure() {
  const history = useHistory();
  return (
    <div className="failure">
      <div className="failure__container">
        <img src={failure} alt="" className="failure__img" />
        <p>Error occured</p>
        <div className="failure__btn__container">
          <button onClick={() => history.push("./basket")}>Try Again</button>
        </div>
      </div>
    </div>
  );
}

export default Failure;

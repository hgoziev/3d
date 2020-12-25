import React from "react";
import pointer from "../../assets/pointer.png";
import "./topButton.css";

function topButton() {
  function TopEvent() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document.getElementById("topButton").style.visibility = "visible";
    } else {
      document.getElementById("topButton").style.visibility = "hidden";
    }
  }
  window.onscroll = function () {
    scrollFunction();
  };

  return (
    <img
      src={pointer}
      alt=""
      className="pointer"
      id="topButton"
      onClick={TopEvent}
    />
  );
}

export default topButton;

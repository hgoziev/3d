import "./Landing.css";
import Header from "../../Header/Header";
import Banner from "../../Banner/Banner";
import Icons from "../../Icons/Icons";
import Banner2 from "../../Banner2/Banner2";
import Banner3 from "../../Banner3/Banner3";
import Services from "../../Services/Services";
import Banner4 from "../../Banner5/Banner5";
import Footer from "../../Footer/Footer";
import pointer from "../../assets/pointer.png";

function Landing() {
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
  window.onload = function () {
    scrollFunction();
  };
  return (
    <div className="main__app">
      <div className="landing__header">
        <Header />
      </div>
      <div className="banner">
        <Banner />
      </div>
      <div className="cat__icons">
        <Icons />
      </div>
      <div className="banner2">
        <Banner2 />
      </div>
      <div className="banner3">
        <Banner3 />
      </div>
      <div className="banner5">
        <Banner4 />
      </div>
      <div className="landing__services" id="services">
        <Services />
      </div>

      <div className="landing__footer">
        <Footer />
        <span>All right are reserved 2020</span>
      </div>
    </div>
  );
}

export default Landing;

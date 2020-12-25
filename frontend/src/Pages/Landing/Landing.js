import "./Landing.css";
import Header from "../../Header/Header";
import Banner from "../../Banner/Banner";
import Icons from "../../Icons/Icons";
import Banner2 from "../../Banner2/Banner2";
import Banner3 from "../../Banner3/Banner3";
import Services from "../../Services/Services";
import Banner4 from "../../Banner5/Banner5";
import Footer from "../../Footer/Footer";
import Contact from "../../Components/Contact/Contact";

function Landing() {
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

  function ChangeColor() {
    let lh = document.getElementById("l");
    if (
      document.body.scrollTop > 70 ||
      document.documentElement.scrollTop > 70
    ) {
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
    scrollFunction();
    ChangeColor();
  };
  return (
    <div className="main__app">
      <div className="landing__header" id="l">
        <Header />
      </div>
      <div className="banner" id="wave">
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
      <div className="landing__contact__form" id="contact">
        <Contact />
      </div>
      <div className="landing__footer" id="lf">
        <Footer />
      </div>
    </div>
  );
}

export default Landing;

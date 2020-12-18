import React from "react";
import "./Contact.css";
import contact from "../../assets/contact.jpg";

function Contact() {
  return (
    <div className="contact">
      <div className="contact__left">
        <p className="contact__title">Contact</p>

        <form>
          <label>Name</label>
          <input type="text" />
          <label>Email</label>
          <input type="text" />
          <textarea />
          <input type="submit" />
        </form>
      </div>
      <div className="contact__right">
        <img src={contact} alt="" className="contact__img" />
      </div>
    </div>
  );
}

export default Contact;

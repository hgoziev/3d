import React, { useState } from "react";
import "./Contact.css";
import contact from "../../assets/contact.jpg";
import axios from "axios";
import Modal from "react-modal";
import checked from "../../assets/checked.png";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const customStyles = {
    content: {
      top: "40%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      // marginRight: "-50%",
      width: "200px",
      height: "200px",
      borderRadius: "20px",
      backgroundColor: "rgb(17, 27, 65)",
      color: "rgb(0, 205, 255)",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "20px",
      textAlign: "center",
      fontWeight: "900",
      // fontFamily: "monospace",
      transform: "translate(-50%, -50%)",
    },
  };
  const handleName = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    e.preventDefault();
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setDisabled(true);
    if (name && email && message === "") {
      alert("please fill all fields .");
    } else {
      try {
        await axios
          .post("/contact", {
            name: name,
            email: email,
            message: message,
          })
          .then(() => {
            setIsOpen(!isOpen);
            setLoading(false);
            setDisabled(false);
          });
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <div className="contact">
      <div className="contact__left">
        <div className="contact__title__container">
          <p className="contact__title">Contact</p>
        </div>

        <Modal isOpen={isOpen} contentLabel="My dialog" style={customStyles}>
          <div className="contact__modal">Message sent!</div>
          <div className="contact__modal__container">
            <img src={checked} alt="" />
            <button
              onClick={() => {
                setIsOpen(!isOpen);
                setName("");
                setEmail("");
                setMessage("");
              }}
              className="contact__modal__btn"
            >
              OK
            </button>
          </div>
        </Modal>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            className="contact__input"
            value={name}
            onChange={(e) => handleName(e)}
            maxLength={40}
          />
          <label>Email</label>
          <input
            type="text"
            className="contact__input"
            value={email}
            onChange={(e) => handleEmail(e)}
            maxLength={50}
          />
          <label>Message</label>
          <textarea
            className="contact__input"
            value={message}
            onChange={(e) => handleMessage(e)}
            maxLength={150}
          />
          <input
            type="submit"
            id={disabled ? "submitLoading" : null}
            className="contact__btn"
            disabled={disabled}
            value={loading ? "Loading ..." : "SEND"}
          />
        </form>
      </div>
      <div className="contact__right">
        <img src={contact} alt="" className="contact__img" />
      </div>
    </div>
  );
}

export default Contact;

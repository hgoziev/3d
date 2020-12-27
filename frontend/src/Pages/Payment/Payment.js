import React, { useState } from "react";
import axios from "axios";
import "./Payment.css";
import { getBasketTotal } from "../../Redux/Reducers/Reducers";
import { useSelector, useDispatch } from "react-redux";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useHistory } from "react-router-dom";
import styled from "@emotion/styled";
import { EMPTY_BASKET } from "../../Redux/Actions/Types";
import Img from "../../assets/payment.jpg";
import Icon from "@material-ui/icons/ArrowBack";
const CardElementContainer = styled.div`
  height: 40px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;

  & .StripeElement {
    width: 450px;
    padding: 15px;
  }
`;
function Payment() {
  const [isProcessing, setProcessingTo] = useState(false);
  const [disable, setDisable] = useState(false);
  const basket = useSelector((state) => state.basket);
  const dispatch = useDispatch();
  const history = useHistory();
  const price = getBasketTotal(basket);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const elements = useElements();
  const stripe = useStripe();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const billingDetails = {
        name: name,
        email: email,
      };
      setDisable(true);
      setProcessingTo(true);

      const { data: clientSecret } = await axios.post(
        "https://khago.herokuapp.com/payment",
        {
          amount: price * 100,
        }
      );
      const cardElement = elements.getElement(CardElement);
      const paymentMethodReq = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
        billing_details: billingDetails,
      });
      const confirmCardPayment = await stripe
        .confirmCardPayment(clientSecret, {
          payment_method: paymentMethodReq.paymentMethod.id,
        })
        .then(() => setProcessingTo(false))
        .then(() =>
          dispatch({
            type: EMPTY_BASKET,
          })
        )
        .then(() => history.push("/success"));
    } catch (err) {
      history.push("/failure");
    }
  };
  const cardElementOptions = {
    style: {
      base: {
        fontSize: "16px",
        color: "rgb(17, 27, 65)",
        fontFamily: "monospace",
        fontWeight: "700",
        "::placeholder": {
          color: "rgb(170,170,170)",
        },
      },
      invalid: {
        color: "#FFC7EE",
        iconColor: "#FFC7EE",
      },
    },
    hidePostalCode: true,
  };

  const handleName = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  return (
    <div>
      <div className="payment">
        <div className="payment__left">
          <Icon className="payment__icon" onClick={() => history.goBack()} />
          <img src={Img} alt="" className="payment__img" />
        </div>
        <div className="payment__right">
          <Icon
            className="login__back__icon"
            onClick={() => history.goBack()}
            id="backIcon"
          />
          <p className="payment__title">Payment</p>
          <form onSubmit={handleSubmit} className="payment__form">
            <span>Full Name</span>
            <input type="text" value={name} onChange={(e) => handleName(e)} />
            <span>Email</span>
            <input type="text" value={email} onChange={(e) => handleEmail(e)} />
            <CardElementContainer>
              <CardElement options={cardElementOptions} />
            </CardElementContainer>
            <button disabled={disable} id={disable ? "disabled" : null}>
              {isProcessing ? "Processing..." : `Pay  $${price}`}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Payment;

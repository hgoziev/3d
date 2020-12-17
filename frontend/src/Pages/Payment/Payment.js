import React, { useState } from "react";
import axios from "axios";
import { getBasketTotal } from "../../Redux/Reducers/Reducers";
import { useSelector, useDispatch } from "react-redux";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useHistory } from "react-router-dom";
import styled from "@emotion/styled";
import { EMPTY_BASKET } from "../../Redux/Actions/Types";

const CardElementContainer = styled.div`
  height: 40px;
  display: flex;
  align-items: center;

  & .StripeElement {
    width: 100%;
    padding: 15px;
  }
`;
function Payment() {
  const [isProcessing, setProcessingTo] = useState(false);
  const [checkoutError, setCheckoutError] = useState();
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
        // price: price,
      };
      setProcessingTo(true);

      const { data: clientSecret } = await axios.post(
        "http://localhost:5000/payment",
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
        color: "#000",
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
      <div
        style={{
          width: 400,
          height: 400,
          alignItems: "center",
          justifyContent: "center",
          marginLeft: 400,
          marginTop: 100,
        }}
      >
        <h2>Payment</h2>
        <form onSubmit={handleSubmit}>
          <p>Full Name</p>
          <input type="text" value={name} onChange={(e) => handleName(e)} />
          <p>Email</p>
          <input type="text" value={email} onChange={(e) => handleEmail(e)} />
          <CardElementContainer>
            <CardElement options={cardElementOptions} />
          </CardElementContainer>
          <button>{isProcessing ? "Processing..." : `Pay $${price}`}</button>
        </form>
      </div>
    </div>
  );
}

export default Payment;

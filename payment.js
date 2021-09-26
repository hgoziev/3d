const express = require("express");
const router = express.Router();

const stripe = require("stripe")(
  //your stripe key here
);

router.post("/", async (req, res) => {
  try {
    const { amount } = req.body;
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
    });
    res.status(200).send(paymentIntent.client_secret);
  } catch (err) {
    res.status(500).send("post qilomadi");
  }
});
module.exports = router;

const express = require("express");
const router = express.Router();

const stripe = require("stripe")(
  "sk_test_51HyYccLfcQoOgS4tukckyuwujJV69GGJfurwpe55LBuNNnsSWRbTZ0t6CvrLiayvcOKFWVyif5Ds8D0h2sL7xZAH001Yk0yoRG"
);

router.post("/", async (req, res) => {
  try {
    const { amount, name, email } = req.body;
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

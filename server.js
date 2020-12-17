const express = require("express");
const cors = require("cors");
const payment = require("./payment");

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());

app.use("/payment", payment);

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});

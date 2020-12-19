const express = require("express");
const cors = require("cors");
const payment = require("./payment");
const contact = require("./contact");
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());

app.use("/payment", payment);
app.use("/contact", contact);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});

let nodemailer = require("nodemailer");
const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");
dotenv.config();
let transport = {
  service: "gmail",
  host: "smtp.gmail.com",
  auth: {
    user: `${process.env.EMAIL}`,
    pass: `${process.env.PASS}`,
  },
};

let transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take messages");
  }
});

router.post("/", (req, res, next) => {
  let name = req.body.name;
  let email = req.body.email;
  let message = req.body.message;

  let mail = {
    from: "3dmarketinc@gmail.com",
    to: "3dmarketinc@gmail.com", //Change to email address that you want to receive messages on
    subject: "New Message from Contact Form",
    text: `
     Name : ${name} 
     Email : ${email}
     Message : ${message}
    `,
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: "fail",
      });
    } else {
      res.json({
        msg: "success",
      });
    }
  });
});

module.exports = router;

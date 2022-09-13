const router = require("express").Router();
const nodemailer = require('nodemailer')
require('dotenv').config()


const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  },
  logger: true
});

transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

router.route("/")
  .post((req, res) => {
    const name = req.body.name
    const email = req.body.email
    const subject = req.body.textarea

    const mail = {
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: name + " - Contact Form",
      text: `Hello Festus!
      
      ${name} filled out the contact form on your portfolio and wrote

      "${subject}"
      
      Respond back at ${email}
      
      Festus's Portfolio Contact Form!`
    }

    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          status: 'fail'
        })
      } else {
        res.json({
          status: 'success'
        })
      }
    })
  })

module.exports = router
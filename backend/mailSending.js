const nodemailer = require("nodemailer");

const mailTransporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  secure: false,
  auth: {
    user: "hassanzafar619@gmail.com",
    pass: process.env.MAIL_PASSWORD,
  },
});

module.exports = mailTransporter;

// Note: Importing required libraries...!
const express = require("express");
const mailTransporter = require("../../../mailSending");
const router = express.Router();
// Note: Importin required schemas...!
const QueryModel = require("../../models/contact-schema/contact-schema");

// Note: API function to add Querys...!
router.post("/api/user/addquery", async (req, res) => {
  let { name, email, message } = req.body;

  let messages = {
    message_200: "Query Added Successfully!",
    message_400: "Fields Are Required",
    message_500: "Something went wrong while saving Querys in DB!",
  };

  try {
    if (!name) {
      return res.status(400).send({
        status: false,
        message: messages.message_400,
      });
    } else {
      const newQuery = new QueryModel({
        name: name,
        email: email,
        message: message,
      });

      let saveQuery = await newQuery.save();

      if (saveQuery) {
        mailTransporter.sendMail({
          to: 'info@fanuun.com',
          subject: "User Data",
          html: `<h2>Email: ${email}</h2> <h2>Name :${name}</h2> <h2>Message :${message}</h2>`,
        });
        res.status(200).send({
          status: true,
          message: messages.message_200,
          data: newQuery,
        });
      }
    }
  } catch (error) {
    console.log(`Something went wrong while signing up user: ${error}`);
    res.status(500).send({
      status: false,
      message: messages.message_500,
    });
  }
});

// Note: API function to fetch all Query...!
router.get("/api/fetch/query-list", (req, res) => {
  QueryModel.find({}, (err, data) => {
    if (!err) {
      return res.status(200).send({
        status: true,
        message: "Query List!",
        data: data,
      });
    }

    return res.status(500).send({
      status: false,
      message: "Something went wrong while fetching Query list from Db!",
    });
  });
});
module.exports = router;

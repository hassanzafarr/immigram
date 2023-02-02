// Note: Importing required libraries...!
const express = require("express");
const router = express.Router();
// Note: Importin required schemas...!
const QuesModel = require("../../models/question-schema/ques-schema");

// Note: API function to add Questions...!
router.post("/api/user/addquestion", async (req, res) => {
    let { question } = req.body;

    let messages = {
        message_200: "Questions Added Successfully!",
        message_400: "Fields Are Required",
        message_500: "Something went wrong while saving Questions in DB!",
    };

    try {
        if (
            !question
        ) {
            return res.status(400).send({
                status: false,
                message: messages.message_400,
            });
        } else {
            const newQuestion = new QuesModel({
                question: question,
            });

            let saveQuestion = await newQuestion.save();
            if (saveQuestion) {
                res.status(200).send({
                    status: true,
                    message: messages.message_200,
                    data: newQuestion,
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

// Note: API function to fetch all Question...!
router.get("/api/fetch/question-list", (req, res) => {
    QuesModel.find({}, (err, data) => {
        if (!err) {
            return res.status(200).send({
                status: true,
                message: "Question List!",
                data: data,
            });
        }

        return res.status(500).send({
            status: false,
            message: "Something went wrong while fetching question list from Db!",
        });
    });
});
module.exports = router;

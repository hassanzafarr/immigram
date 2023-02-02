/***** Note: Users Schema *****/
const mongoose = require("mongoose");
const quesSchema = new mongoose.Schema(
    {
        question: {
            type: String,
            required: true
        },

    },
    {
        collection: "question_list"
    }
);

const QuesModel = mongoose.model('question_list', quesSchema)
module.exports = QuesModel;
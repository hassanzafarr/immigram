/***** Note: Users Schema *****/
const mongoose = require("mongoose");
const querySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  {
    collection: "query_list",
  }
);

const QueryModel = mongoose.model("query_list", querySchema);
module.exports = QueryModel;

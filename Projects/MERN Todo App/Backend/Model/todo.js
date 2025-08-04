const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  userName: {
    type: String,
  },
  mobile: {
    type: String,
  },
});

module.exports = mongoose.model("Todo", todoSchema);
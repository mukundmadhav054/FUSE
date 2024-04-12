const mongoose = require("mongoose");

const frontendQuizSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  options: {
    type: Array,
    required: true,
  },
  correctOption: {
    type: String,
    required: true,
  },
  topic: {
    type: String,
    required: true,
  },
});

const frontendQuizModel = new mongoose.model(
  "frontendquizzes",
  frontendQuizSchema
);

module.exports = frontendQuizModel;

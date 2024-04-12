const mongoose = require("mongoose");
const dsaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  videoEmbed: {
    type: String,
    required: true,
  },
  questionLink: {
    type:String,
    required: true,
  },
  level: {
    type: String,
    required: true,
  },
});

const dsaModel = new mongoose.model("dsacourses", dsaSchema);

module.exports = dsaModel;

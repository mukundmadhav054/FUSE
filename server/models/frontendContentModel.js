const mongoose = require("mongoose");

const frontendContentSchema = new mongoose.Schema({
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
  contentType: {
    type: String,
    required: true,
  },
});


const frontendContentModel = new mongoose.model("frontendcontents", frontendContentSchema);

module.exports = frontendContentModel;
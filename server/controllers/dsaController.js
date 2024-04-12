const dsaModel = require("../models/dsaModel");

const getDsaTopics = async (req, res) => {
  try {
    const topics = await dsaModel.find({});
    if (topics) {
      return res.status(200).json(topics);
    } else {
      return res.status(404).json({ error: "No topics found" });
    }
  } catch (error) {
    console.log("Error occurred while fetching topics:", error);
    return res
      .status(500)
      .json({ error: "Internal Server Error", message: error.message });
  }
};

module.exports = getDsaTopics;

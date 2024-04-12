const frontendContentModel = require("../models/frontendContentModel");
const frontendQuizModel = require("../models/frontendQuizModel");

const getFrontendTopics = async (req, res) => {
  try {
    const frontendTopics = await frontendContentModel.find({});
    if (frontendTopics) {
      return res.status(200).json(frontendTopics);
    } else {
      return res.status(404).json({ message: "No topics found" });
    }
  } catch (error) {
    console.log("Error occurred while fetching topics:", error);
    return res
      .status(500)
      .json({ error: "Internal Server Error", message: error.message });
  }
};

const getFrontendQuizzes = async (req, res) => {
  try {
    const frontendQuizzes = await frontendQuizModel.find({});
    if (frontendQuizzes) {
      return res.status(200).json(frontendQuizzes);
    } else {
      return res.status(404).json({ message: "No quizzes found" });
    }
  } catch (error) {
    console.log("Error occurred while fetching topics:", error);
    return res
      .status(500)
      .json({ error: "Internal Server Error", message: error.message });
  }
};

module.exports = { getFrontendTopics, getFrontendQuizzes };

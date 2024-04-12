const express = require("express");
const router = express.Router();

const getDsaTopics = require("../controllers/dsaController");
const {getFrontendTopics, getFrontendQuizzes} = require("../controllers/frontendController");

router.get("/dsa-topics", getDsaTopics);
router.get("/frontend-topics", getFrontendTopics);
router.get("/frontend-quizzes", getFrontendQuizzes);

module.exports = router;

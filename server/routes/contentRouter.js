const express = require("express");
const router = express.Router();

const getDsaTopics = require("../controllers/dsaController");

router.get("/dsa-topics", getDsaTopics);

module.exports = router;

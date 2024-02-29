const express = require("express");
const router = express.Router();
const quizController = require("../controllers/quiz");

// Quiz Routes
router.get("/", quizController.getQuiz);
router.post("/api", quizController.aiPrompt);

module.exports = router;

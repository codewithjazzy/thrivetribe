const express = require("express");
const router = express.Router();
const quizController = require("../controllers/quiz");

// Quiz Routes
router.get("/", quizController.getQuiz);
router.post("/handleQuizStep", quizController.handleQuizStep); 
router.post("/AIresults", quizController.quizAiPrompt);

module.exports = router;

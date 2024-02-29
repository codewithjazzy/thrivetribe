const express = require("express");
const router = express.Router();
const quizController = require("../controllers/quiz");

// Quiz Routes
router.get("/", quizController.getQuiz);
router.post("/", quizController.handleQuizStep); 

module.exports = router;

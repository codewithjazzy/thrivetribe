const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home");
const quizController = require("../controllers/quiz");

//Main Routes - simplified for now
router.get("/", homeController.getIndex);
//routes to all static pages will go here

module.exports = router;

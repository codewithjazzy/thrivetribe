const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home");
const quizController = require("../controllers/quiz");
const profileController = require("../controllers/profile");

router.get("/therapistportal", profileController.getTherapistPortal);

module.exports = router;
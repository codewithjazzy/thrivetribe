const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home");
const quizController = require("../controllers/quiz");
const profileController = require("../controllers/profile");

//Main Routes - simplified for now
router.get("/", homeController.getIndex);
//routes to all static pages will go here
router.get("/about", homeController.getAbout);
router.get("/therapistFinder", homeController.getTherapistFinder);
router.get("/profile/:id", homeController.getTherapistProfile);
router.get("/typesOfTherapy", homeController.getTypesOfTherapy);
router.get("/therapy101", homeController.getTherapy101);
router.get("/blog", homeController.getBlog);

module.exports = router;

const express = require("express");
const app = express(); //assigns express to this variable (DRY)
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const methodOverride = require("method-override");
const flash = require("express-flash");
const logger = require("morgan");
const connectDB = require("./config/database");
const openai = require('./config/openaiclient'); // Import the OpenAI client
const mainRoutes = require("./routes/main");
const quizRoutes = require("./routes/quiz");


require("dotenv").config({ path: "./config/.env" }); //
require("./config/passport")(passport); 
connectDB();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })); 
app.use(express.json());
app.use(logger("dev"));
app.use(methodOverride("_method"));
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.DB_STRING }),
  })
);
// Passport middleware
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
//Setup Routes For Which The Server Is Listening
app.use("/", mainRoutes);
app.use("/quiz", quizRoutes);
//Server Running
app.listen(process.env.PORT, () => {
  console.log("Server is running, you better catch it!");
});

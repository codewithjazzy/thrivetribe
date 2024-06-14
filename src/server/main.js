import express from "express";
const app = express();
import ViteExpress from "vite-express";
import "dotenv/config"
import mongoose from "mongoose";
import openai from "./config/openaiclient"
import connectDB from "./config/database";
import session from "express-session"
import MongoStore from "connect-mongo";
import morgan from "morgan";
import mainRoutes from "./routes/main";
import quizRoutes from "./routes/quiz";
import profileRoutes from "./routes/profile";


connectDB();
app.use(express.urlencoded({ extended: true })); 
app.use(express.json());
app.use(morgan("dev"));
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.DB_STRING }),
  })
);

//Setup Routes For Which The Server Is Listening
app.use("/", mainRoutes);
app.use("/quiz", quizRoutes);
app.use("/profile", profileRoutes);


app.get("/hello", (req, res) => {
  res.send("Hello Vite + React!");
});

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);

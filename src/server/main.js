import express from "express";
const app = express();
import ViteExpress from "vite-express";
import "dotenv/config";
import connectDB from "./config/database.js";
import session from "express-session";
import passport from "passport";
import MongoStore from "connect-mongo";
import morgan from "morgan";
import mainRoutes from "./routes/main.js";
import quizRoutes from "./routes/quiz.js";
import memberRoutes from "./routes/member.js";


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

app.use(passport.initialize());
app.use(passport.session());
require('./config/passport.js')(passport);

//Setup Routes For Which The Server Is Listening
app.use("/api", mainRoutes);
app.use("/api/quiz", quizRoutes);
app.use("/api/member", memberRoutes);



ViteExpress.listen(app, process.env.PORT, () =>
  console.log("Server is listening on port 3000..."),
);

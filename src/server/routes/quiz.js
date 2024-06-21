import { Router } from "express";
import {
    getQuiz,
    handleQuizStep,
    quizAiPrompt,
} from "../controllers/quiz.js";

const router = Router();

router.get("/", getQuiz);
router.post("/progress", handleQuizStep); 
router.post("/results", quizAiPrompt);


export default router;

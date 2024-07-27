import { Router } from "express";
import {
    login,
    signup,
    logout,
    googleAuth,
    googleAuthCallback,
} from "../controllers/auth.js"


const router = Router();


//Local Auth Routes
router.post("/login", login);
router.post("/signup", signup);
router.get("/logout", logout);

//Google Auth Routes
router.get("/auth/google", googleAuth)
router.get("/auth/google/callback", googleAuthCallback)

export default router;
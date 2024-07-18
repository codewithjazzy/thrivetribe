import { Router } from "express";
import { ensureAuth } from "../middleware/auth.js"
import { therapistRegistration } from "../controllers/registration.js";
import { memberProfile } from "../controllers/user.js";
import {
    login,
    signup,
    logout,
    googleAuth,
    googleAuthCallback,
} from "../controllers/auth.js"

const router = Router();

router.post("/login", login);
router.post("/signup", signup);
router.get("/logout", logout);
router.post("/register", therapistRegistration);
router.get("/profile", ensureAuth, memberProfile);


//Google Authentication Routes
router.get("/auth/google", googleAuth)
router.get("/auth/google/callback", googleAuthCallback)

export default router;
import { Router } from "express";
import { ensureAuth } from "../middleware/auth.js"
import upload from "../middleware/multer.js";
import { getRegistration, postRegistration } from "../controllers/registration.js";
import { memberProfile, editProfile } from "../controllers/user.js";
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

//Member Profile Routes
router.get("/register", getRegistration);
router.post("/register", upload.single("file"), postRegistration);
router.get("/profile", ensureAuth, memberProfile);
router.put("/editProfile", ensureAuth, editProfile)


export default router;
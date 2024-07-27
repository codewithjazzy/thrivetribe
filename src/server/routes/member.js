import { Router } from "express";
import { ensureAuth } from "../middleware/auth.js"
import upload from "../middleware/multer.js";
import { getRegistration, postRegistration } from "../controllers/registration.js";
import { memberProfile, editProfile } from "../controllers/user.js";


const router = Router();


//Member Profile Routes
router.get("/register", getRegistration);
router.post("/register", upload.single("file"), postRegistration);
router.get("/profile", ensureAuth, memberProfile);
router.put("/editProfile", ensureAuth, editProfile)


export default router;
import { Router } from "express";
import { ensureAuth } from "../middleware/auth.js"
import upload from "../middleware/multer.js";
import { getRegistration, postRegistration } from "../controllers/registration.js";
import { getAccount, editAccount } from "../controllers/user.js";


const router = Router();


//Member Profile Routes
router.get("/createAccount", getRegistration);
router.post("/createAccount", upload.single("file"), postRegistration);
router.get("/account", ensureAuth, getAccount);
router.put("/editAccount", upload.single("file"), editAccount)


export default router;
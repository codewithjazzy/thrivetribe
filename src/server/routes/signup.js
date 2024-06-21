import { Router } from "express";
import { getTherapistSignup } from "../controllers/signup.js";

const router = Router();

router.get("/", getTherapistSignup);

export default router;
import { Router } from "express";
import { getTherapistPortal } from "../controllers/profile.js";

const router = Router();

router.get("/therapistportal", getTherapistPortal);

export default router;
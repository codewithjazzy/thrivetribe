import { Router } from "express";
import { getTherapistPortal } from "../controllers/profile";

const router = Router();

router.get("/therapistportal", getTherapistPortal);

export default router;
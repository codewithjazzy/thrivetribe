import { Router } from "express";
import {
    getTherapistFinder,
    getTherapistProfile
} from "../controllers/profile.js";

const router = Router();


router.get("/providers", getTherapistFinder);
router.get("/profile/:id", getTherapistProfile);


export default router;

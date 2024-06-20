import { Router } from "express";
import {
    getIndex,
    getAbout,
    getTypesOfTherapy,
    getTherapy101,
    getBlog,
    getTherapistPortal,
    getTherapistFinder,
    getTherapistProfile
} from "../controllers/home.js";

const router = Router();

router.get("/", getIndex);
//routes to all static pages will go here
router.get("/about", getAbout);
router.get("/therapistFinder", getTherapistFinder);
router.get("/profile/:id", getTherapistProfile);
router.get("/typesOfTherapy", getTypesOfTherapy);
router.get("/therapy101", getTherapy101);
router.get("/blog", getBlog);


export default router;

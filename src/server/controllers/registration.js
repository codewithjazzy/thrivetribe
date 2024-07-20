import Profile from "../models/Profile.js";
import cloudinary from "../middleware/cloudinary.js" ;
import Location from "../models/Location.js";
import Expertise from "../models/Expertise.js";
import Treatment from "../models/Treatment.js";
import Language from "../models/Language.js";
import Dialect from "../models/Dialect.js";
import { profile } from "console";


export const getRegistration = async (req, res) => {
    try {
        const expertise = await Expertise.find();
        const treatments = await Treatment.find();
        const languages = await Language.find();
        const dialects = await Dialect.find();
        const locations = await Location.find();
        const response = {
            expertise,
            treatments,
            languages,
            dialects,
            locations
        };
        res.json({ message: "Therapist signup", response })
    } catch (error) {
        console.error('Error loading therapist signup page:', error);
        res.status(500).json({ message: 'An error occurred while loading the signup page.' });
    }
};

export const postRegistration = async (req, res) => {
    try {
        const result = await cloudinary.uploader.upload(req.file.path);

        const newProfile = await Profile.create({
            image: result.secure_url,
            cloudinaryId: result.public_id,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            title: req.body.title,
            bio: req.body.bio,
            journey: req.body.journey,
            heritage: req.body.heritage,
            email: req.body.email,
            phone: req.body.phone,
            website: req.body.website,
            expertise: req.body.expertise,
            treatments: req.body.treatments,
            languages: req.body.languages,
            dialects: req.body.dialects,
            location: req.body.location,
            user: req.user.id,
        });

        res.status(201).json({ message: "Profile created successfully", profile: newProfile })
    } catch (error) {
        console.error("Error creating profile", error);
        res.status(500).json({ message: "An error occured while creating profile" })
    }
}

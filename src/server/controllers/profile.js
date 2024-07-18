import Profile from "../models/Profile.js";

export const getTherapistFinder = async (req, res) => {
    try {
        const profiles = await Profile.find() // Fetch all profiles
        .populate(['location', 'expertise', 'treatments', 'languages', 'dialects']);
        res.json({ message: "Finding Therapists", profiles });
    } catch (error) {
        console.error("Error fetching therapist profiles:", error);
        res.status(500).json({ message: 'An error occurred while fetching therapist profiles.' });
    }
};

export const getTherapistProfile = async (req, res) => {
    try {
        const therapistId = req.params.id;
        const therapist = await Profile.findById(therapistId)
            .populate(['location', 'expertise', 'treatments', 'languages', 'dialects']);
        res.json({ message: "Loading provider profile", therapist });
    } catch (error) {
        console.error('Error fetching therapist details:', error);
        res.status(500).json({ message: 'An error occurred while fetching provider profile.' });
    }
};


import User from "../models/User";
import Profile from "../models/Profile";

export const memberProfile = async (req, res) => {
    try {
        const memberId = req.params.id;
        const member = await Profile.find({ user: memberId})
            .populate(['location', 'expertise', 'treatments', 'languages', 'dialects']);
        res.json({ message: "Loading member profile", member });
    } catch (error) {
        console.error('Error fetching therapist details:', error);
        res.status(500).json({ message: 'An error occurred while fetching member profile.' });
    }
};
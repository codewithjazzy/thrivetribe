import User from "../models/User.js";
import Profile from "../models/Profile.js";

export const getAccount = async (req, res) => {
    try {
        const memberId = req.user.id;
        const member = await Profile.findOne({ user: memberId})
            .populate(['location', 'expertise', 'treatments', 'languages', 'dialects']);
        res.json({ message: "Loading member profile", member });
    } catch (error) {
        console.error('Error fetching therapist details:', error);
        res.status(500).json({ message: 'An error occurred while fetching member profile.' });
    }
};

export const editAccount = async (req, res) => {
    try {
        const memberId = req.params.id;
        const updateData = {};

        if (req.file) {
            await cloudinary.uploader.destroy(Profile.cloudinaryId);

            const result = await cloudinary.uploader.upload(req.file.path);

            updateData.image = result.secure_url;
            updateData.cloudinaryId = result.public_id;
        }

        //only update fields that exist in the request
        if (req.body.firstName) {
            updateData.firstName = req.body.firstName
        };
        if (req.body.lastName) {
            updateData.lastName = req.body.lastName
        };
        if (req.body.title) {
            updateData.title = req.body.title
        };
        if (req.body.bio) {
            updateData.bio = req.body.bio
        };
        if (req.body.journey) {
            updateData.journey = req.body.journey
        };
        if (req.body.heritage) {
            updateData.heritage = req.body.heritage
        };
        if (req.body.email) {
            updateData.email = req.body.email
        };
        if (req.body.phone) {
            updateData.phone = req.body.phone
        };
        if (req.body.website) {
            updateData.website = req.body.website
        };
        if (req.body.expertise) {
            updateData.expertise = req.body.expertise
        };
        if (req.body.treatments) {
            updateData.treatments = req.body.treatments
        };
        if (req.body.languages) {
            updateData.languages = req.body.languages
        };
        if (req.body.dialects) {
            updateData.dialects = req.body.dialects
        };
        if (req.body.location) {
            updateData.location = req.body.location
        };


        //Update profile in DB
        const updatedProfile = await Profile.findOneAndUpdate(
            { user: memberId },
            { $set: updateData },
            { new: true }
        );

        res.status(200).json({ message: "Profile successfully updated" , profile: updatedProfile })
    } catch (error) {
        console.error("Error updating profile", error);
        res.status(500).json({ message: "An error occured while updating profile" });
    }
};
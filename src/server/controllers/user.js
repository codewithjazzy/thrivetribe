import Profile from "../models/Profile.js";
import cloudinary from "../middleware/cloudinary.js" ;

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
        const memberId = req.user.id;
        const updateData = {};

        console.log('Received Data:', req.body);


        if (req.file) {
            const memberProfile = await Profile.findOne({ user: memberId });
            await cloudinary.uploader.destroy(memberProfile.cloudinaryId);

            const result = await cloudinary.uploader.upload(req.file.path);

            updateData.image = result.secure_url;
            updateData.cloudinaryId = result.public_id;
        }


        //only update fields that exist in the request
        if (req.body.firstName) updateData.firstName = req.body.firstName;
        if (req.body.lastName) updateData.lastName = req.body.lastName;
        if (req.body.title) updateData.title = req.body.title;
        if (req.body.bio) updateData.bio = req.body.bio;
        if (req.body.journey) updateData.journey = req.body.journey;
        if (req.body.heritage) updateData.heritage = req.body.heritage;
        if (req.body.email) updateData.email = req.body.email;
        if (req.body.phone) updateData.phone = req.body.phone;
        if (req.body.website) updateData.website = req.body.website;
        if (req.body.location) updateData.location = req.body.location;

        console.log('Update Data:', updateData);


        //update Profile in DB
        const updatedProfile = await Profile.findOneAndUpdate(
            { user: memberId },
            { $set: updateData },
            { new: true }
        );

            // Log updated profile to confirm changes
            const confirmUpdate = await Profile.findOne({ user: memberId });
            console.log('Confirmed Update:', confirmUpdate);
        
            
        //add new array items from checkboxes, unique only
        await Profile.updateOne(
            { user: memberId },
            {
                $addToSet: {
                    expertise: { $each: req.body.expertise || [] },
                    treatments: { $each: req.body.treatments || [] },
                    languages: { $each: req.body.languages || [] },
                    dialects: { $each: req.body.dialects || [] },
                }
            }
        );
        
        //removed unchecked items from checkboxes $nin=NOT IN
        await Profile.updateOne(
            { user: memberId },
            {
                $pull: {
                    expertise: { $nin: req.body.expertise || [] },
                    treatments: { $nin: req.body.treatments || [] },
                    languages: { $nin: req.body.languages || [] },
                    dialects: { $nin: req.body.dialects || [] },
                }
            }
        ); 

        res.status(200).json({ message: "Profile successfully updated" , profile: updatedProfile })
    } catch (error) {
        console.error("Error updating profile", error);
        res.status(500).json({ message: "An error occurred while updating profile" });
    }
};
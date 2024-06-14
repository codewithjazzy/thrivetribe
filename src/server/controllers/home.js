import Profile from "../models/Profile";

// Define each function as a named export
export const getIndex = (req, res) => {
    res.render('index.ejs');
 };

export const getAbout = (req, res) => {
    res.render('about.ejs');
};

export const getTypesOfTherapy = (req, res) => {
    res.render('typesoftherapy.ejs');
};

export const getTherapy101 = (req, res) => {
    res.render('therapystarter.ejs');
};

export const getBlog = (req, res) => {
    res.render('blog.ejs');
};

export const getTherapistPortal = (req, res) => {
    res.render('therapistportal.ejs');
};

export const getTherapistFinder = async (req, res) => {
    try {
        const profiles = await Profile.find() // Fetch all profiles
        .populate(['location', 'expertise', 'treatments', 'languages', 'dialects']);
        res.render('therapistfinder.ejs', { profiles: profiles });
    } catch (error) {
        console.error("Error fetching therapist profiles:", error);
        res.sendStatus(500); // or render an error page
    }
};

export const getTherapistProfile = async (req, res) => {
    try {
        const therapistId = req.params.id;
        const therapist = await Profile.findById(therapistId)
            .populate('expertise treatments languages dialects location');
        res.render('provider.ejs', { therapist });
    } catch (error) {
        console.error('Error fetching therapist details:', error);
        res.status(500).send('An error occurred while fetching therapist details.');
    }
};

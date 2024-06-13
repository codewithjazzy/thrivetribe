const Profile = require('../models/Profile');
const Location = require('../models/Location');
const Expertise = require('../models/Expertise');
const Treatment = require('../models/Treatment');
const Language = require('../models/Language');
const Dialect = require('../models/Dialect');

module.exports = {
    getIndex: (req, res) => {
        res.render('index.ejs');
    },
    getAbout: (req, res) => {
        res.render('about.ejs');
    },
    getTypesOfTherapy: (req, res) => {
        res.render('typesoftherapy.ejs');
    },
    getTherapy101: (req, res) => {
        res.render('therapystarter.ejs');
    },
    getBlog: (req, res) => {
        res.render('blog.ejs');
    },
    getTherapistPortal: (req, res) => {
        res.render('therapistportal.ejs');
    },
    getTherapistFinder: async (req, res) => {
        try {
            const profiles = await Profile.find() // Fetch all profiles
            .populate(['location', 'expertise', 'treatments', 'languages', 'dialects']);
            res.render('therapistfinder.ejs', { profiles: profiles });
        } catch (error) {
            console.error("Error fetching therapist profiles:", error);
            res.sendStatus(500); // or render an error page
        }
    },
    getTherapistProfile: async (req, res) => {
        try {
            const therapistId = req.params.id;
            const therapist = await Profile.findById(therapistId)
                .populate('expertise treatments languages dialects location');
            res.render('provider.ejs', { therapist });
        } catch (error) {
            console.error('Error fetching therapist details:', error);
            res.status(500).send('An error occurred while fetching therapist details.');
        }
    }
};

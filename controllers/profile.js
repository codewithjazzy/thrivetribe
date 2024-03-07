const Profile = require('../models/Profile');
const Location = require('../models/Location');
const Expertise = require('../models/Expertise');
const Treatment = require('../models/Treatment');
const Language = require('../models/Language');
const Dialect = require('../models/Dialect');

module.exports = {
    getTherapistPortal: async (req, res) => {
        try {
            const expertise = await Expertise.find();
            const treatments = await Treatment.find();
            const languages = await Language.find();
            const dialects = await Dialect.find();
            const locations = await Location.find();
            
            res.render("therapistportal.ejs", {
                expertise,
                treatments,
                languages,
                dialects,
                locations
            });
        } catch (error) {
            console.error('Error loading therapist signup page:', error);
            res.status(500).send('An error occurred while loading the signup page.');
        }
    }
};

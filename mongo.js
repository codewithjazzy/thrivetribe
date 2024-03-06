const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
require("dotenv").config({ path: "./config/.env" });
const Profile = require('./models/Profile'); // Path to your Profile model

// MongoDB connection
mongoose.connect(process.env.DB_STRING);

mongoose.connection.on('open', async () => {
    console.log('Connected to the database.');

    // Read the JSON file
    const data = fs.readFileSync(path.join(__dirname, 'therapists.json'), 'utf8');
    const therapists = JSON.parse(data);

    for (const therapist of therapists) {
        // Convert strings to ObjectIds
        therapist.expertise = therapist.expertise.map(id => new mongoose.Types.ObjectId(id));
        therapist.treatments = therapist.treatments.map(id => new mongoose.Types.ObjectId(id));
        therapist.languages = therapist.languages.map(id => new mongoose.Types.ObjectId(id));
        therapist.dialects = therapist.dialects.map(id => new mongoose.Types.ObjectId(id));
        therapist.location = new mongoose.Types.ObjectId(therapist.location);

        // Create a new Profile document and save it
        const newProfile = new Profile(therapist);
        await newProfile.save();
    }

    console.log('Therapist profiles imported successfully.');
    mongoose.connection.close();
}).on('error', err => {
    console.error('Database connection error:', err);
});

const mongoose = require("mongoose");

const treatmentSchema = new mongoose.Schema({
    treatment: { 
        type: String, 
        required: true 
    },
});

const Treatment = mongoose.model("Treatment", treatmentSchema);

module.exports = Treatment;

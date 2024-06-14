import mongoose from "mongoose";

const expertiseSchema = new mongoose.Schema({
    expertise: { 
        type: String, 
        required: true 
    },
});

const Expertise = mongoose.model("Expertise", expertiseSchema, "expertise");

export default Expertise;

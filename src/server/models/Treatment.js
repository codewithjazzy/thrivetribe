import mongoose from "mongoose";

const treatmentSchema = new mongoose.Schema({
    treatment: { 
        type: String, 
        required: true 
    },
});

const Treatment = mongoose.model("Treatment", treatmentSchema);

export default Treatment;

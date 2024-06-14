import mongoose from "mongoose";

const dialectSchema = new mongoose.Schema({
    dialect: {
        type: String,
        required: true
    },
});

const Dialect = mongoose.model("Dialect", dialectSchema);

export default Dialect
const mongoose = require("mongoose");

const dialectSchema = new mongoose.Schema({
    dialect: {
        type: String,
        required: true
    },
});

const Dialect = mongoose.model("Dialect", dialectSchema);

module.exports = Dialect;
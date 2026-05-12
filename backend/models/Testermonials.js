const mongoose = require("mongoose");

const testermonialsSchema = new mongoose.Schema(
    {
        name: String,
        role: String,
        feedback: String,
        rating: Number
    }
);

module.exports = mongoose.model("Testermonials", testermonialsSchema);
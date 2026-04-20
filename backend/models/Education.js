const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        school: {
            type: String,
            required: true,
            trim: true,
        },
        logo: {
            type: String,
            trim: true,
            default: "",
        },
        details: {
            type: String,
            trim: true,
            default: "",
        },
        startDate: {
            type: Date,
            default: null,
        },
        endDate: {
            type: Date,
            default: null,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Education", educationSchema);

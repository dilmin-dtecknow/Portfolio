const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        companyName: {
            type: String,
            required: true,
            trim: true,
        },
        logo: {
            type: String,
            trim: true,
            default: "",
        },
        startDate: {
            type: Date,
            required: true,
        },
        endDate: {
            type: Date,
            default: null,
        },
        isCurrent: {
            type: Boolean,
            default: false,
        },
        details: {
            type: String,
            trim: true,
            default: "",
        },
        achievements:{
            type:[String],
            default:""
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Experience", experienceSchema);

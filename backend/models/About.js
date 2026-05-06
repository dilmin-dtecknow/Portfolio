// models/About.js
const mongoose = require("mongoose");

const aboutSchema = new mongoose.Schema({
  name: String,
  bio: String,
  skills: [String],
  technologies: [
    {
      category: String,
      skills: [String],
    },
  ],
});

module.exports = mongoose.model("About", aboutSchema);
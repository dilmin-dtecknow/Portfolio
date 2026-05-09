const About = require("../models/About");
const mongoose = require("mongoose");

// GET About Data
exports.getAbout = async (req, res) => {
  try {
    const data = await About.findOne();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch about data", error: error.message });
  }
};

//get about data by id
exports.getAboutById = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Fetching About data for ID:", id);
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid About record id" });
    }

    const aboutData = await About.findById(id);

    if (!aboutData) {
      return res.status(404).json({ message: "About record not found" });
    }

    res.json(aboutData);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch about data", error: error.message });
  }
};

// CREATE About Data
exports.createAbout = async (req, res) => {
  try {
    const newAbout = new About(req.body);
    await newAbout.save();
    res.status(201).json(newAbout);
  } catch (error) {
    res.status(400).json({ message: "Failed to create about data", error: error.message });
  }
};

// UPDATE About Data
exports.updateAbout = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedAbout = await About.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedAbout) {
      return res.status(404).json({ message: "About record not found" });
    }

    res.json(updatedAbout);
  } catch (error) {
    res.status(400).json({ message: "Failed to update about data", error: error.message });
  }
};

// ADD a new skill to About Data
exports.addSkill = async (req, res) => {
  try {
    const { id } = req.params;
    const { skill } = req.body;

    if (!skill || typeof skill !== "string" || !skill.trim()) {
      return res.status(400).json({ message: "A valid skill is required" });
    }

    const about = await About.findById(id);

    if (!about) {
      return res.status(404).json({ message: "About record not found" });
    }

    about.skills.push(skill.trim());
    await about.save();

    res.json(about);
  } catch (error) {
    res.status(400).json({ message: "Failed to add skill", error: error.message });
  }
};

// UPDATE one skill in About Data
exports.updateSkill = async (req, res) => {
  try {
    const { id, skillIndex } = req.params;
    const { skill } = req.body;
    const parsedIndex = Number(skillIndex);

    if (!Number.isInteger(parsedIndex) || parsedIndex < 0) {
      return res.status(400).json({ message: "A valid skill index is required" });
    }

    if (!skill || typeof skill !== "string" || !skill.trim()) {
      return res.status(400).json({ message: "A valid skill is required" });
    }

    const about = await About.findById(id);

    if (!about) {
      return res.status(404).json({ message: "About record not found" });
    }

    if (parsedIndex >= about.skills.length) {
      return res.status(404).json({ message: "Skill not found at the provided index" });
    }

    about.skills[parsedIndex] = skill.trim();
    await about.save();

    res.json(about);
  } catch (error) {
    res.status(400).json({ message: "Failed to update skill", error: error.message });
  }
};

// REMOVE one skill from About Data
exports.removeSkill = async (req, res) => {
  try {
    const { id, skillIndex } = req.params;
    const parsedIndex = Number(skillIndex);

    if (!Number.isInteger(parsedIndex) || parsedIndex < 0) {
      return res.status(400).json({ message: "A valid skill index is required" });
    }

    const about = await About.findById(id);

    if (!about) {
      return res.status(404).json({ message: "About record not found" });
    }

    if (parsedIndex >= about.skills.length) {
      return res.status(404).json({ message: "Skill not found at the provided index" });
    }

    about.skills.splice(parsedIndex, 1);
    await about.save();

    res.json(about);
  } catch (error) {
    res.status(400).json({ message: "Failed to remove skill", error: error.message });
  }
};

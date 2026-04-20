const mongoose = require("mongoose");
const Experience = require("../models/Experience");

exports.getExperiences = async (req, res) => {
  try {
    const experiences = await Experience.find().sort({
      isCurrent: -1,
      startDate: -1,
      createdAt: -1,
    });

    res.json(experiences);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch experiences", error: error.message });
  }
};

exports.getExperienceById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid experience id" });
    }

    const experience = await Experience.findById(id);

    if (!experience) {
      return res.status(404).json({ message: "Experience not found" });
    }

    res.json(experience);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch experience", error: error.message });
  }
};

exports.createExperience = async (req, res) => {
  try {
    const newExperience = new Experience(req.body);
    await newExperience.save();

    res.status(201).json(newExperience);
  } catch (error) {
    res.status(400).json({ message: "Failed to create experience", error: error.message });
  }
};

exports.updateExperience = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid experience id" });
    }

    const updatedExperience = await Experience.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedExperience) {
      return res.status(404).json({ message: "Experience not found" });
    }

    res.json(updatedExperience);
  } catch (error) {
    res.status(400).json({ message: "Failed to update experience", error: error.message });
  }
};

exports.deleteExperience = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid experience id" });
    }

    const deletedExperience = await Experience.findByIdAndDelete(id);

    if (!deletedExperience) {
      return res.status(404).json({ message: "Experience not found" });
    }

    res.json({ message: "Experience deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete experience", error: error.message });
  }
};

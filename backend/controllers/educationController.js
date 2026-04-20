const mongoose = require("mongoose");
const Education = require("../models/Education");

exports.getEducations = async (req, res) => {
  try {
    const educations = await Education.find().sort({
      endDate: -1,
      startDate: -1,
      createdAt: -1,
    });

    res.json(educations);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch education records", error: error.message });
  }
};

exports.getEducationById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid education id" });
    }

    const education = await Education.findById(id);

    if (!education) {
      return res.status(404).json({ message: "Education record not found" });
    }

    res.json(education);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch education record", error: error.message });
  }
};

exports.createEducation = async (req, res) => {
  try {
    const newEducation = new Education(req.body);
    await newEducation.save();

    res.status(201).json(newEducation);
  } catch (error) {
    res.status(400).json({ message: "Failed to create education record", error: error.message });
  }
};

exports.updateEducation = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid education id" });
    }

    const updatedEducation = await Education.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedEducation) {
      return res.status(404).json({ message: "Education record not found" });
    }

    res.json(updatedEducation);
  } catch (error) {
    res.status(400).json({ message: "Failed to update education record", error: error.message });
  }
};

exports.deleteEducation = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid education id" });
    }

    const deletedEducation = await Education.findByIdAndDelete(id);

    if (!deletedEducation) {
      return res.status(404).json({ message: "Education record not found" });
    }

    res.json({ message: "Education record deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete education record", error: error.message });
  }
};

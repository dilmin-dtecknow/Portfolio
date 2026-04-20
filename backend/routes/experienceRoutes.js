const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const {
  getExperiences,
  getExperienceById,
  createExperience,
  updateExperience,
  deleteExperience,
} = require("../controllers/experienceController");

router.get("/", getExperiences);
router.get("/:id", getExperienceById);
router.post("/", auth, createExperience);
router.put("/:id", auth, updateExperience);
router.delete("/:id", auth, deleteExperience);

module.exports = router;

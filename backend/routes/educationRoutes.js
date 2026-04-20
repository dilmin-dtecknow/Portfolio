const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const {
  getEducations,
  getEducationById,
  createEducation,
  updateEducation,
  deleteEducation,
} = require("../controllers/educationController");

router.get("/", getEducations);
router.get("/:id", getEducationById);
router.post("/", auth, createEducation);
router.put("/:id", auth, updateEducation);
router.delete("/:id", auth, deleteEducation);

module.exports = router;

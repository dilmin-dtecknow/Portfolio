const express = require("express");
const router = express.Router();
const {
  getAbout,
  createAbout,
  updateAbout,
  addSkill,
  updateSkill,
  getAboutById,
} = require("../controllers/aboutController");

router.get("/", getAbout);
router.get("/:id", getAboutById);
router.post("/", createAbout);
router.put("/:id", updateAbout);
router.post("/:id/skills", addSkill);
router.put("/:id/skills/:skillIndex", updateSkill);

module.exports = router;

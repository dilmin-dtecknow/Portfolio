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

const auth = require("../middleware/auth");

router.get("/", getAbout);
router.get("/:id", getAboutById);
router.post("/",auth, createAbout);
router.put("/:id",auth, updateAbout);
router.post("/:id/skills",auth, addSkill);
router.put("/:id/skills/:skillIndex",auth, updateSkill);

module.exports = router;

const express = require("express");
const router = express.Router();

const upload = require("../middleware/upload");
const auth = require("../middleware/auth");

const {
  createProject,
  getProjects,
  getProjectById,
} = require("../controllers/projectController");

router.post("/", auth, upload.array("images", 3), createProject);
router.get("/", getProjects);
router.get("/:id", getProjectById);

module.exports = router;

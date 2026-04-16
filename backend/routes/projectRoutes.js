const express = require("express");
const router = express.Router();

const upload = require("../middleware/upload");

const {
  createProject,
  getProjects,
} = require("../controllers/projectController");

router.post("/", upload.array("images", 3), createProject);
router.get("/", getProjects);

module.exports = router;
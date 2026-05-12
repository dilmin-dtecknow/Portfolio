const express = require('express');
const router = express.Router();

const {
    getTestermonials,
    createTestermonials
} = require("../controllers/testermonialsController");

router.get("/", getTestermonials);
router.post("/", createTestermonials);

module.exports = router;
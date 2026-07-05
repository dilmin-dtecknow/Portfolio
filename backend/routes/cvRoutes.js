const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const uploadCV = require("../middleware/cvUpload");

const {
    uploadCV: uploadCVContoller,
    downloadCV,
    getCVInfo
} = require("../controllers/cvController");


//upload
router.post(
    "/upload",
    auth,
    uploadCV.single("cv"),
    uploadCVContoller
);

//download
router.get("/download", downloadCV);

//info
router.get("/", getCVInfo);

module.exports = router;
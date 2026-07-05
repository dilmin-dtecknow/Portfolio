const path = require("path");
const fs = require("fs");

const cvPath = path.join(__dirname, "../public/cv/dilmin_fernando_cv.pdf");

exports.uploadCV = (req, res) => {
    try {

        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "Please upload a PDF file."
            });
        }

        return res.status(200).json({
            success: true,
            message: "CV upload successfuly ✅"
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: "Server error while uploading CV!"
        });

    }
};

exports.downloadCV = (req, res) => {
    try {

        if (!fs.existsSync(cvPath)) {
            return res.status(404).json({
                success: false,
                message: "Cv not found !"
            });
        }

        return res.download(
            cvPath,
            "Dilmin_Fernando_CV"
        );

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: "Error downloading cv!"
        });

    }
};

exports.getCVInfo = (req, res) => {
    try {

        if (!fs.existsSync(cvPath)) {
            return res.status(404).json({
                success: false,
                message: "Cv not found!"
            });
        }

        const stats = fs.statSync(cvPath); // Get file meta data

        res.status(200).json({
            success: true,
            fileName: "dilmin_fernando_cv.pdf",
            size: stats.size,
            lastUpdated: stats.mtime
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error fetching cv info!"
        });
    }
}
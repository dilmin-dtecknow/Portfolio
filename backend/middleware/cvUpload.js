const multer = require("multer"); // Handle uplodes
const path = require("path"); // Create folders safly
const fs = require("fs"); // Check if the folder exists

const cvFolder = path.join(__dirname, "../public/cv");

if (!fs.existsSync(cvFolder)) {
    fs.mkdirSync(cvFolder, { recursive: true });
}

const storage = multer.diskStorage({

    destination(req, file, cb) { //where save uploaded file
        cb(null, cvFolder);
    },
    filename(req, file, cb) {
        cb(null, "dilmin_fernando_cv.pdf"); // Always save with this filename (overwrites existing file)
    },

});

const fileFilter = (req, file, cb) => {
    if (file.mimetype !== "application/pdf") {
        return cb(new Error("Only PDF files are allowed!"))
    }

    cb(null, true);
};

module.exports = multer({
    storage,
    fileFilter,
    limits: {
        fileSize: 5 * 1024 * 1024
    }
});
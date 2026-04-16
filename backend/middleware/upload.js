const multer = require("multer");

const storage = multer.memoryStorage();

const upload = multer({
  storage,
  limits: { files: 3 }, // max 3 images
});

module.exports = upload;
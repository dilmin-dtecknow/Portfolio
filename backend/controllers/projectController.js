const Project = require("../models/Project");
const cloudinary = require("../config/cloudinary");

// CREATE project with images
exports.createProject = async (req, res) => {
    try {
        const files = req.files;

        let imageUrls = [];

        for (let file of files) {
            const result = await cloudinary.uploader.upload_stream(
                { folder: "portfolio" },
                async (error, result) => {
                    if (result) {
                        imageUrls.push(result.secure_url);
                    }
                }
            );

            result.end(file.buffer);
        }

        const project = new Project({
            ...req.body,
            images: imageUrls,
        });

        await project.save();

        res.json(project);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Error uploading images" });
    }
};

// GET all projects
exports.getProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Error fetching projects" });
    }
};
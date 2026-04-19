const Project = require("../models/Project");
const mongoose = require("mongoose");
const cloudinary = require("../config/cloudinary");

const slugifyProjectTitle = (title = "") =>
    title
        .toString()
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "") || `project-${Date.now()}`;

const parseTechStack = (techStack) => {
    if (Array.isArray(techStack)) {
        return techStack.map((item) => item.trim()).filter(Boolean);
    }

    if (typeof techStack === "string") {
        try {
            const parsed = JSON.parse(techStack);
            if (Array.isArray(parsed)) {
                return parsed.map((item) => String(item).trim()).filter(Boolean);
            }
        } catch (error) {
            return techStack
                .split(",")
                .map((item) => item.trim())
                .filter(Boolean);
        }
    }

    return [];
};

const uploadToCloudinary = (fileBuffer, folder, filename) =>
    new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
            {
                folder,
                resource_type: "image",
                public_id: filename,
                overwrite: true,
            },
            (error, result) => {
                if (error) {
                    reject(error);
                    return;
                }

                resolve(result);
            }
        );

        stream.end(fileBuffer);
    });

// CREATE project with images
exports.createProject = async (req, res) => {
    try {
        const files = req.files || [];
        const { title, description, githubLink, liveLink } = req.body;

        if (!title || !description) {
            return res.status(400).json({ msg: "Title and description are required" });
        }

        if (files.length !== 3) {
            return res.status(400).json({ msg: "Each project must include exactly 3 images" });
        }

        const projectFolder = `portfolio/${slugifyProjectTitle(title)}`;
        const uploadedImages = await Promise.all(
            files.map((file, index) =>
                uploadToCloudinary(file.buffer, projectFolder, `image-${index + 1}`)
            )
        );

        const imageUrls = uploadedImages.map((image) => image.secure_url);

        const project = new Project({
            title: title.trim(),
            description: description.trim(),
            techStack: parseTechStack(req.body.techStack),
            githubLink: githubLink?.trim() || "",
            liveLink: liveLink?.trim() || "",
            images: imageUrls,
        });

        await project.save();

        res.status(201).json(project);
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

// GET single project by id
exports.getProjectById = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ msg: "Invalid project id" });
        }

        const project = await Project.findById(id);

        if (!project) {
            return res.status(404).json({ msg: "Project not found" });
        }

        res.json(project);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Error fetching project" });
    }
};

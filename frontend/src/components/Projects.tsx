import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Code } from "lucide-react";
import "./Projects.css";
import { useEffect, useState } from "react";
import type { Projects } from "../types";
import { getProjects } from "../lib/api";

export default function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const [projects, setProject] = useState<Projects[]>([]);

  useEffect(() => {
    getProjects().then((data) => {
      setProject(data);
    });
  }, []);

  // const projects = [
  //   {
  //     title: "3D Portfolio Website",
  //     description:
  //       "An immersive 3D animated portfolio with interactive elements, scroll animations, and Three.js graphics.",
  //     tags: ["React", "Three.js", "Framer Motion", "Tailwind CSS"],
  //     link: "#",
  //     github: "#",
  //     image: "gradient",
  //   },
  //   {
  //     title: "E-commerce Platform",
  //     description:
  //       "Full-stack e-commerce solution with product management, shopping cart, and payment integration.",
  //     tags: ["React", "Node.js", "MongoDB", "Stripe"],
  //     link: "#",
  //     github: "#",
  //     image: "gradient2",
  //   },
  //   {
  //     title: "Real-time Chat Application",
  //     description:
  //       "WebSocket-based chat application with real-time messaging, user authentication, and room management.",
  //     tags: ["React", "Socket.io", "Node.js", "Firebase"],
  //     link: "#",
  //     github: "#",
  //     image: "gradient3",
  //   },
  //   {
  //     title: "Task Management System",
  //     description:
  //       "Collaborative task management tool with drag-and-drop, real-time updates, and team features.",
  //     tags: ["React", "GraphQL", "MongoDB", "Docker"],
  //     link: "#",
  //     github: "#",
  //     image: "gradient4",
  //   },
  // ];

  return (
    <section className="projects" id="projects" ref={ref}>
      <motion.div
        className="projects-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div className="projects-header" variants={itemVariants}>
          <h2 className="section-title">
            <span className="section-number">04</span>
            Featured Projects
          </h2>
          <p className="section-subtitle">
            Some of my best work and recent projects
          </p>
        </motion.div>

        <motion.div className="projects-grid" variants={containerVariants}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`project-card card ${project.images[0]}`}
              // className="project-card card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                {project.images?.length > 0 ? (
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    loading="lazy"
                  />
                ) : (
                  <div className="no-image">No Image</div>
                )}
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.techStack?.map((tag, idx) => (
                    <span key={idx} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.liveLink} className="project-link">
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                  <a href={project.githubLink} className="project-link">
                    <Code size={18} />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

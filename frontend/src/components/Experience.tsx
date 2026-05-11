import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase } from "lucide-react";
import "./Experience.css";
import { useEffect, useState } from "react";
import type { Experience } from "../types";
import { getExperience } from "../lib/api";
import CommingSoon from "./animation/CommingSoon";

export default function Experience() {
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  const [experiences, setExperiences] = useState<Experience[]>([]);

  useEffect(() => {
    getExperience().then((data) => {
      setExperiences(data);
    });
  }, []);

  // const experiences = [
  //   {
  //     role: 'Senior Frontend Developer',
  //     company: 'Tech Innovations Inc.',
  //     duration: '2023 - Present',
  //     description:
  //       'Leading frontend development team, architecting scalable solutions, and mentoring junior developers. Implemented 3D visualizations and interactive dashboards.',
  //     achievements: [
  //       'Improved application performance by 40%',
  //       'Led migration to React 18 and TypeScript',
  //       'Implemented real-time data visualization',
  //     ],
  //   },
  //   {
  //     role: 'Full Stack Developer',
  //     company: 'Digital Solutions Ltd.',
  //     duration: '2022 - 2023',
  //     description:
  //       'Developed and maintained full-stack applications using React and Node.js. Collaborated with cross-functional teams to deliver features on schedule.',
  //     achievements: [
  //       'Built 10+ production-ready applications',
  //       'Reduced API response time by 50%',
  //       'Implemented comprehensive testing suite',
  //     ],
  //   },
  //   {
  //     role: 'Junior Web Developer',
  //     company: 'StartUp Studio',
  //     duration: '2021 - 2022',
  //     description:
  //       'Started my career building responsive web applications. Learned best practices in code quality and team collaboration.',
  //     achievements: [
  //       'Developed 5 client projects from scratch',
  //       'Implemented UI components library',
  //       'Participated in agile development process',
  //     ],
  //   },
  // ];

  return (
    <section className="experience" id="experience" ref={ref}>
      <motion.div
        className="experience-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div className="experience-header" variants={itemVariants}>
          <h2 className="section-title">
            <span className="section-number">05</span>
            Experience
          </h2>
          <p className="section-subtitle">
            My professional journey and career highlights
          </p>
        </motion.div>

        <motion.div className="experience-list" variants={containerVariants}>
          {experiences.length === 0 ? (
            <div className="no-experience">
              {/* <p>No experience yet</p> */}
              <CommingSoon/>
            </div>
          ) : (
            experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="experience-item card"
                variants={itemVariants}
                whileHover={{ scale: 1.02, translateY: -5 }}
              >
                <div className="experience-header-content">
                  <div className="experience-icon">
                    <Briefcase size={24} />
                  </div>
                  <div className="experience-title">
                    <h3>{exp.title}</h3>
                    <p className="company">{exp.companyName}</p>
                  </div>
                  <span className="duration">
                    {exp.startDate} - {exp.endDate}
                  </span>
                </div>
                <p className="experience-description">{exp.details}</p>
                <div className="achievements">
                  <h4>Key Achievements:</h4>
                  <ul>
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx}>
                        <span className="checkmark">✓</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}

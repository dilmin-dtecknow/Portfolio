import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as Icons from "lucide-react";
import type { LucideIcon } from 'lucide-react';
import './Education.css';
import { getEducation } from '../lib/api';
import { useEffect, useState } from 'react';
import type { Education } from '../types';

export default function Education() {

  const [education,setEducation] = useState<Education[]>([]);

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

  useEffect(() => {
    getEducation()
      .then((data) => {
        setEducation(data);
      });
  }, []);

  // const education = [
  //   {
  //     icon: BookOpen,
  //     title: 'Bachelor of Science in Computer Science',
  //     institution: 'University of Technology',
  //     year: '2020 - 2024',
  //     description: 'Specialized in Web Development and Software Engineering',
  //   },
  //   {
  //     icon: Award,
  //     title: 'Advanced React Development',
  //     institution: 'Online Learning Platform',
  //     year: '2023',
  //     description: 'Mastered advanced React patterns and performance optimization',
  //   },
  //   {
  //     icon: GraduationCap,
  //     title: 'Full Stack Web Development Bootcamp',
  //     institution: 'Code Academy',
  //     year: '2022',
  //     description: 'Intensive bootcamp covering MERN stack and modern web technologies',
  //   },
  // ];

  return (
    <section className="education" id="education" ref={ref}>
      <motion.div
        className="education-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.div className="education-header" variants={itemVariants}>
          <h2 className="section-title">
            <span className="section-number">02</span>
            Education & Certifications
          </h2>
          <p className="section-subtitle">
            My learning journey and achievements
          </p>
        </motion.div>

        <div className="timeline">
          {education.map((item, index) => {
            const IconComponent = Icons[item.logo as keyof typeof Icons] as LucideIcon | undefined;
            const ResolvedIcon = IconComponent ?? Icons.BookOpen;
            return (
              <motion.div
                key={index}
                className="timeline-item"
                variants={itemVariants}
              >
                <div className="timeline-marker">
                  <div className="timeline-icon">
                    <ResolvedIcon size={24} />
                  </div>
                  {index < education.length - 1 && <div className="timeline-line" />}
                </div>
                <motion.div
                  className="timeline-content card"
                  whileHover={{ scale: 1.02, translateX: 10 }}
                >
                  <div className="timeline-year">{item.startDate ? new Date(item.startDate).getFullYear() : "Completed"} - {item.endDate ? new Date(item.endDate).getFullYear():"Present"}</div>
                  <h3>{item.name}</h3>
                  <p className="timeline-institution">{item.school}</p>
                  <p className="timeline-description">{item.details}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

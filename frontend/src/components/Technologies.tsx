import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Technologies.css';

export default function Technologies() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  const technologies = {
    'Frontend': ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Next.js', 'Vue.js'],
    'Backend': ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Firebase', 'GraphQL'],
    '3D & Animation': ['Three.js', 'Babylon.js', 'GSAP', 'Canvas API', 'WebGL'],
    'Tools & Others': ['Git', 'Docker', 'AWS', 'Vercel', 'CI/CD', 'REST APIs'],
  };

  return (
    <section className="technologies" id="technologies" ref={ref}>
      <motion.div
        className="technologies-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.div className="tech-header" variants={itemVariants}>
          <h2 className="section-title">
            <span className="section-number">03</span>
            Technologies & Tools
          </h2>
          <p className="section-subtitle">
            Tools and technologies I work with
          </p>
        </motion.div>

        <motion.div
          className="tech-categories"
          variants={containerVariants}
        >
          {Object.entries(technologies).map(([category, techs]) => (
            <motion.div
              key={category}
              className="tech-category"
              variants={itemVariants}
            >
              <h3>{category}</h3>
              <motion.div
                className="tech-badges"
                variants={containerVariants}
              >
                {techs.map((tech) => (
                  <motion.div
                    key={tech}
                    className="tech-badge"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, translateY: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>{tech}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

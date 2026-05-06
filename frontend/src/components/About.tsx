import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Zap, Users } from 'lucide-react';
import './About.css';

export default function About() {
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

  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description:
        'Writing maintainable, well-structured code following best practices and design patterns',
    },
    {
      icon: Zap,
      title: 'Performance',
      description:
        'Building fast, optimized applications that deliver excellent user experience',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description:
        'Working effectively in teams to deliver projects on time and exceed expectations',
    },
  ];

  return (
    <section className="about" id="about" ref={ref}>
      <motion.div
        className="about-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.div className="about-header" variants={itemVariants}>
          <h2 className="section-title">
            <span className="section-number">01</span>
            About Me
          </h2>
          <p className="section-subtitle">
            Passionate developer focused on creating amazing web experiences
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div className="about-text" variants={itemVariants}>
            <p>
              I'm a full-stack developer with 3+ years of experience building web applications.
              I love turning complex problems into simple, beautiful, and intuitive designs. My
              passion lies in creating performant and user-friendly applications using modern
              technologies.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to
              open-source projects, or sharing knowledge with the community. I believe in continuous
              learning and pushing the boundaries of what's possible on the web.
            </p>
          </motion.div>

          <motion.div className="about-features" variants={containerVariants}>
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div key={index} className="feature-card card" variants={itemVariants}>
                  <div className="feature-icon">
                    <IconComponent size={32} />
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

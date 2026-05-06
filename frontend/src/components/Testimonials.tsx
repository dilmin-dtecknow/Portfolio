import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star } from 'lucide-react';
import './Testimonials.css';

export default function Testimonials() {
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8 },
    },
  };

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechCorp',
      feedback:
        'Working with this developer was an absolute pleasure. Delivered exceptional results on time and exceeded our expectations.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Product Manager, StartUp Inc',
      feedback:
        'Outstanding technical skills combined with great communication. Made the entire development process smooth and efficient.',
      rating: 5,
    },
    {
      name: 'Emma Williams',
      role: 'Design Lead, Creative Studio',
      feedback:
        'A fantastic developer who understands design principles and can translate them into functional, beautiful code.',
      rating: 5,
    },
    {
      name: 'David Martinez',
      role: 'Founder, Digital Agency',
      feedback:
        'Highly professional and dedicated. Would definitely recommend for any serious web development projects.',
      rating: 5,
    },
  ];

  return (
    <section className="testimonials" id="testimonials" ref={ref}>
      <motion.div
        className="testimonials-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.div className="testimonials-header" variants={itemVariants}>
          <h2 className="section-title">
            <span className="section-number">06</span>
            Testimonials
          </h2>
          <p className="section-subtitle">
            What clients and colleagues say about my work
          </p>
        </motion.div>

        <motion.div
          className="testimonials-grid"
          variants={containerVariants}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial-card card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="star-filled" />
                ))}
              </div>
              <p className="testimonial-feedback">"{testimonial.feedback}"</p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  {testimonial.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <div>
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

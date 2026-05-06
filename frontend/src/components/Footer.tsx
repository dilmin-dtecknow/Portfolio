import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <motion.div
        className="footer-content"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p>
          Made with <Heart size={16} className="heart-icon" /> by Your Name
        </p>
        <p>© {currentYear} All rights reserved.</p>
      </motion.div>
    </footer>
  );
}

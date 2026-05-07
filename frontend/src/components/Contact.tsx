import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Phone, MapPin} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Contact.css";
import HelloRoboanim from "./animation/HelloRoboanim";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    console.log("Form submitted:", formData);
    // Add your form submission logic here
    setFormData({ name: "", email: "", mobile: "", message: "" });

    emailjs
      .send(
        "service_bvaisf5", //service ID
        "template_bn62tab", //template ID
        {
          from_name: formData.name,
          to_name: "Dilmin",
          from_email: formData.email,
          from_phone: formData.mobile,
          to_email: "fpasifernando@gmail.com",
          message: formData.message,
          time: new Date().toLocaleString(),
        },
        "3Gc2EPyCLKk1iKXvs", //public key
      )
      .then(
        () => {
          setLoading(false);
          // showToast('Thank you. I will get back to you as soon as possible.', 'success');

          setFormData({
            name: "",
            email: "",
            mobile: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          // showToast('Something went wrong. Please try again later.', 'error');
        }
      );
  }

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@example.com",
      link: "mailto:hello@example.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "San Francisco, CA",
      link: "#",
    },
  ];

  const socials = [
    { icon: Mail, link: "#", label: "Email" },
    { icon: Phone, link: "#", label: "Phone" },
    { icon: MapPin, link: "#", label: "Location" },
    { icon: FaGithub, link: "#", label: "Github" },
    {icon: FaLinkedin, link: "#", label: "LinkedIn"},
  ];

  return (
    <section className="contact" id="contact" ref={ref}>
      <motion.div
        className="contact-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div className="contact-header" variants={itemVariants}>
          <h2 className="section-title">
            <span className="section-number">07</span>
            Get In Touch
          </h2>
          <p className="section-subtitle">
            Let's connect and create something amazing together
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div className="contact-info" variants={containerVariants}>
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <motion.a
                  key={index}
                  href={method.link}
                  className="contact-method card"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, translateY: -5 }}
                >
                  <div className="contact-icon">
                    <IconComponent size={28} />
                  </div>
                  <div>
                    <h4>{method.title}</h4>
                    <p>{method.value}</p>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

          <motion.form
            className="contact-form card"
            variants={itemVariants}
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="mobile">Your Mobile</label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="+1 (555) 123-4567"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message here..."
                rows={5}
                required
              />
            </div>

            <motion.button
              type="submit"
              className="btn btn-primary form-submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={loading}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>

        <motion.div className="social-links" variants={itemVariants}>
          <p>Follow me on social media</p>
          <HelloRoboanim />
          <div className="socials">
            {socials.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.link}
                  className="social-link"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  title={social.label}
                >
                  <IconComponent size={24} />
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

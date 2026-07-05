import { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";
import * as THREE from "three";
import Roboanime from "./animation/Roboanime";
import "./Hero.css";

function RotatingCode() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.008;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshPhongMaterial
        color="#00d4ff"
        emissive="#00d4ff"
        emissiveIntensity={0.3}
        wireframe={false}
      />
    </mesh>
  );
}

function CodingScene() {
  useEffect(() => {
    // Lighting setup can be done via the Canvas props or inside a component
    // For now, we'll rely on default lighting
  }, []);

  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <RotatingCode />
    </Canvas>
  );
}

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="hero" id="home">
      <motion.div
        className="hero-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* <div className="ninja-code">
          <NinjaKnife />
        </div> */}

        <div className="hero-content">
          <motion.h1 className="hero-title" variants={itemVariants}>
            <span className="gradient-text">Full Stack Developer</span>
            <span className="title-highlight"> & Creative Coder</span>
          </motion.h1>

          <motion.p className="hero-subtitle" variants={itemVariants}>
            Building beautiful, interactive, and scalable web experiences with
            modern technologies
          </motion.p>

          <motion.div className="hero-buttons" variants={itemVariants}>
            <motion.button
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View My Work
            </motion.button>
            <motion.button
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Get In Touch
            </motion.button>
            <motion.a
              className="btn btn-cv"
              href="/cv/dilmin_fernando_cv.pdf"
              download
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              target="_blank"
              rel="noreferrer"
            >
              Download CV
            </motion.a>
          </motion.div>

          <motion.div className="hero-stats" variants={itemVariants}>
            <div className="stat">
              <h3>10+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat">
              <h3>3+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat">
              <h3>20+</h3>
              <p>Happy Clients</p>
            </div>
          </motion.div>
        </div>

        <div className="hero-3d">
          <div className="hero-3d-box">
            <CodingScene />
          </div>
          <div className="hero-lottie">
            <Roboanime />
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="mouse">
          <div className="wheel" />
        </div>
        <p>Scroll to explore</p>
      </motion.div>
    </section>
  );
}

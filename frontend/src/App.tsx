import { Suspense } from 'react';
import CustomCursor from './components/CustomCursor';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CustomCursor />
      <Navigation />
      <Hero />
      <About />
      <Education />
      <Technologies />
      <Projects />
      <Experience />
      <Testimonials />
      <Contact />
      <Footer />
    </Suspense>
  );
}

export default App;

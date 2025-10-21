import React, { useEffect } from "react";
import AOS from "aos";
import { HashRouter as Router, Routes, Route } from "react-router-dom"; // Use HashRouter
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import SectionBackground from "./components/SectionBackground";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Router>
        <SectionBackground />
        <section className="min-h-screen bg-transparent">
          <div className="font-sans relative z-10">
            <Navbar />
            <main className="mt-16">
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Hero />
                      <div id="about">
                        <About />
                      </div>
                      <div id="skills">
                        <Skills />
                      </div>
                      <div id="contact">
                        <Contact />
                      </div>
                    </>
                  }
                />
                <Route path="/projects" element={<Projects />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </section>
      </Router>
  );
};

export default App;

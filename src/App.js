import React, { useEffect } from "react";
import AOS from "aos";
import { HashRouter as Router, Routes, Route } from "react-router-dom"; 
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import SectionBackground from "./components/SectionBackground";
import AiChatbot from "./components/AiChatbot"; 
import { ThemeLanguageProvider } from "./context/ThemeLanguageContext";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <ThemeLanguageProvider>
      <Router>
        <SectionBackground />
        
        {/* FIX: Kharjna Navbar hna lfou9, bach tkon horra fo9 kolchi */}
        <Navbar />

        <section className="min-h-screen bg-transparent transition-colors duration-500">
          <div className="font-sans relative z-10">
            {/* Navbar kanet hna, w hna kan l-ghalat. Daba rja3naha fo9 */}
            
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
            <AiChatbot /> 
          </div>
        </section>
      </Router>
    </ThemeLanguageProvider>
  );
};

export default App;
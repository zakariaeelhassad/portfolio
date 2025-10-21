import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import myImage from "../images/mon_image.png";
import ParticleNetwork from './SectionBackground';

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const phrases = [
    "Full-Stack Developer",
    "Problem Solver",
    "Creative Thinker",
    "Software architect",
  ];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const typeText = async () => {
      const phrase = phrases[currentPhraseIndex];
      for (let i = 0; i <= phrase.length; i++) {
        setDisplayText(phrase.slice(0, i));
        await new Promise((resolve) => setTimeout(resolve, 100));
      }
      await new Promise((resolve) => setTimeout(resolve, 1000));

      for (let i = phrase.length; i >= 0; i--) {
        setDisplayText(phrase.slice(0, i));
        await new Promise((resolve) => setTimeout(resolve, 50));
      }

      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
    };

    typeText();
  }, [currentPhraseIndex]);

  return (
    <section className="min-h-screen bg-gray-900 text-white relative overflow-hidden flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-cyan-900 opacity-50" />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse" />
        <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-700" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 md:pr-12">
            <h1 className="text-4xl md:text-6xl font-mono mb-4">
              Salut, je suis <span className="text-cyan-400">Zakariae El Hassad</span>
            </h1>

            <div className="h-20">
              <span className="text-2xl md:text-3xl font-mono">
                Je suis un{" "}
                <span className="text-cyan-400 inline-block min-w-[20ch]">
                  {displayText}
                  <span className="animate-blink">|</span>
                </span>
              </span>
            </div>

            <div className="flex-1">
              <p className="text-lg text-gray-300 leading-relaxed font-mono">
                Donner forme aux idées, comme sculpter des rêves avec du code.
                J’exploite la puissance des technologies web modernes pour créer des expériences numériques fluides, inspirantes et porteuses de sens.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 items-center">
              {[
                {
                  icon: FaGithub,
                  href: "https://github.com/zakariaeelhassad",
                  label: "GitHub",
                },
                {
                  icon: FaLinkedin,
                  href: "https://www.linkedin.com/in/zakariae-el-hassad-898181337/",
                  label: "LinkedIn",
                },
                {
                  icon: FaEnvelope,
                  href: "mailto:zakariaelhassad031@gmail.com",
                  label: "Email",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  aria-label={social.label}
                >
                  <div className="absolute inset-0 bg-cyan-400 rounded-lg blur transition-all opacity-20 group-hover:opacity-100" />
                  <social.icon
                    size={28}
                    className="relative text-cyan-400 transition-transform duration-300 transform group-hover:scale-110 group-hover:text-white"
                  />
                </a>
              ))}
              <div className="rounded-lg text-center">
                <button
                  onClick={() => {
                    document.getElementById("contact").scrollIntoView({
                      behavior: "smooth", 
                      block: "start", 
                    });
                  }}
                  className="group relative px-8 py-3 bg-gray-800 text-cyan-400 overflow-hidden rounded-lg transform transition-transform duration-300 hover:scale-105"
                >
                  <div className="absolute inset-0 w-3 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-[250ms] ease-out group-hover:w-full" />
                  <span className="rounded-lg relative group-hover:text-gray-900 font-mono">
                    Contact me
                  </span>
                  <div className="absolute top-0 left-0 w-2 h-2 bg-cyan-400/30 rounded-full group-hover:animate-ping" />
                  <div className="absolute bottom-0 right-0 w-2 h-2 bg-cyan-400/30 rounded-full group-hover:animate-ping delay-100" />
                </button>
              </div>
            </div>
          </div>

          <div className="relative w-[380px] h-[380px] md:w-[450px] md:h-[450px] mx-auto rounded-full overflow-hidden shadow-2xl border-2 border-cyan-400/30">
            <div className="relative z-10 rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-gray-800 via-gray-800 to-gray-900 rounded-full" />
              <ParticleNetwork />

              <img
                src={myImage}
                alt="Zakariae El Hassad"
                className={`w-full h-full object-cover transition-opacity duration-700 scale-110 ${
                  isImageLoaded ? "opacity-100" : "opacity-0"
                } rounded-full`}
                onLoad={() => setIsImageLoaded(true)}
              />
            </div>

            <div className="absolute -inset-4 bg-cyan-400/15 rounded-full blur-xl -z-10 animate-pulse" />
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-transparent rounded-full -z-20 animate-gradient" />
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default Hero;

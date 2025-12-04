import React, { useState, useEffect, useMemo } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import myImage from "../images/mon_image.png";
import ParticleNetwork from './SectionBackground';
import { useThemeLanguage } from "../context/ThemeLanguageContext";

const Hero = () => {
  const { t, language } = useThemeLanguage();
  const [displayText, setDisplayText] = useState("");
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const phrases = useMemo(() => {
    return t('roles') || ["Developer", "Designer"];
  }, [language, t]);

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes blink {
        0%, 49% { opacity: 1; }
        50%, 100% { opacity: 0; }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  useEffect(() => {
    setDisplayText("");
    setCurrentPhraseIndex(0);
    setIsDeleting(false);
  }, [language]);

  useEffect(() => {
    const phrase = phrases[currentPhraseIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < phrase.length) {
          setDisplayText(phrase.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(phrase.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, isDeleting ? 50 : 100); 

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentPhraseIndex, phrases]);

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white relative overflow-hidden flex items-center transition-colors duration-500">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-white to-cyan-100 dark:from-gray-900 dark:via-gray-800 dark:to-cyan-900 opacity-50 transition-colors duration-500" />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse" />
        <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-700" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 md:pr-12">
            <h1 className="text-4xl md:text-6xl font-mono mb-4 text-gray-800 dark:text-white">
              {t('greeting')} <span className="text-cyan-600 dark:text-cyan-400">Zakariae El Hassad</span>
            </h1>

            <div className="h-20 flex items-center">
              <span className="text-2xl md:text-3xl font-mono text-gray-700 dark:text-white flex flex-wrap gap-2">
                <span className="whitespace-nowrap">{t('iam')}</span>
                
                <span className="text-cyan-600 dark:text-cyan-400 inline-block min-w-[200px]">
                  {displayText}
                  <span 
                    className="ml-1"
                    style={{
                      animation: 'blink 1s infinite',
                      display: 'inline-block'
                    }}
                  >|</span>
                </span>
              </span>
            </div>

            <div className="flex-1">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-mono">
                {t('heroDesc')}
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
                  <div className="absolute inset-0 bg-cyan-400 rounded-lg blur transition-all opacity-0 dark:opacity-20 group-hover:opacity-100" />
                  <social.icon
                    size={28}
                    className="relative text-cyan-600 dark:text-cyan-400 transition-transform duration-300 transform group-hover:scale-110 dark:group-hover:text-white"
                  />
                </a>
              ))}
              <div className="rounded-lg text-center">
                <button
                  onClick={() => {
                    document.getElementById("contact")?.scrollIntoView({
                      behavior: "smooth", 
                      block: "start", 
                    });
                  }}
                  className="group relative px-8 py-3 bg-gray-200 dark:bg-gray-800 text-cyan-700 dark:text-cyan-400 overflow-hidden rounded-lg transform transition-transform duration-300 hover:scale-105"
                >
                  <div className="absolute inset-0 w-3 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-[250ms] ease-out group-hover:w-full" />
                  <span className="rounded-lg relative group-hover:text-white dark:group-hover:text-gray-900 font-mono">
                    {t('contactMe')}
                  </span>
                  <div className="absolute top-0 left-0 w-2 h-2 bg-cyan-400/30 rounded-full group-hover:animate-ping" />
                  <div className="absolute bottom-0 right-0 w-2 h-2 bg-cyan-400/30 rounded-full group-hover:animate-ping delay-100" />
                </button>
              </div>
            </div>
          </div>

          <div className="relative mx-auto flex justify-center items-center">
            <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] rounded-full overflow-hidden shadow-2xl border-2 border-cyan-400/30">
              <div className="relative z-10 rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-200 via-gray-300 to-gray-400 dark:from-gray-800 dark:via-gray-800 dark:to-gray-900 rounded-full" />
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
      </div>
    </section>
  );
};

export default Hero;
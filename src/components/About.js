import React, { useState } from 'react';
import {
  FaGraduationCap,
  FaLaptopCode,
  FaFootballBall,
  FaSlidersH,
} from "react-icons/fa";
import Profile from "../images/Firefly_20241227125616.png";
import ParticleNetwork from './SectionBackground';
import DownloadCv from './Download'; 
import { useThemeLanguage } from "../context/ThemeLanguageContext";

const About = () => {
  const [activeSection, setActiveSection] = useState(null);
  const { t } = useThemeLanguage();

  const sections = [
    {
      title: t('educationTitle'),
      icon: <FaGraduationCap className="w-6 h-6" />,
      description: t('educationDesc'),
      skills: ["HTML/CSS", "JavaScript", "PHP", "Laravel", "React", "Java"],
    },
    {
      title: t('expTitle'),
      icon: <FaLaptopCode className="w-6 h-6" />,
      description: t('expDesc'),
      skills: [
        "Full Stack",
        "Laravel 10",
        "React.js",
        "Team Collaboration",
        "Agile",
      ],
    },
    {
      title: t('agileTitle'),
      icon: <FaSlidersH className="w-6 h-6" />,
      description: t('agileDesc'),
      principles: [
        "Développement itératif",
        "Intégration continue",
        "Planification des sprints",
      ],
    },
    {
      title: t('interestsTitle'),
      icon: <FaFootballBall className="w-6 h-6" />,
      description: t('interestsDesc'),
      highlights: ["Footballeur", "Passionné de technologie", "Résolveur de problèmes"],
    },
  ];

  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen relative overflow-hidden transition-colors duration-500">
      <ParticleNetwork />

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative">
        <h3 className="text-5xl font-mono text-center mb-16">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-500">
            {t('aboutTitle')}
          </span>
        </h3>

        <div className="relative group mb-24 transform transition-all duration-500 hover:-translate-y-2">
          <div className="absolute inset-1 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-lg blur-lg group-hover:opacity-75 transition-all duration-1000" />

          <div className="relative bg-gray-50/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg p-8 shadow-xl dark:shadow-none transition-colors">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur opacity-25 group-hover:opacity-100 animate-pulse" />
                <img
                  src={Profile}
                  alt="Zakariae El Hassad"
                  className="rounded-full w-32 h-32 object-cover relative border-2 border-cyan-400 transform transition-transform duration-500"
                />
                <div className="absolute top-0 right-0 w-2 h-2 bg-cyan-400 rounded-full animate-ping" />
                <div className="absolute bottom-0 left-0 w-2 h-2 bg-blue-400 rounded-full animate-ping delay-300" />
              </div>
              <div className="flex-1">
                <h4 className="text-2xl font-mono text-cyan-600 dark:text-cyan-400 mb-4 relative inline-block">
                  Zakariae El Hassad
                  <div className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500" />
                </h4>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-mono">
                  {t('aboutDesc')}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setActiveSection(index)}
              onMouseLeave={() => setActiveSection(null)}
            >
              <div className="relative bg-white dark:bg-gray-800/80 rounded-xl overflow-hidden transition-all duration-500 group-hover:-translate-y-2 shadow-lg dark:shadow-none">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 animate-border-slide" />
                
                <div className="relative m-[2px] bg-white dark:bg-gray-800 rounded-xl p-6 h-full transition-colors">
                  <div className="absolute -top-2 right-6 p-4 bg-white dark:bg-gray-800 rounded-xl border-2 border-cyan-400 transform -rotate-12 transition-transform duration-300 group-hover:rotate-0">
                    <div className="text-cyan-600 dark:text-cyan-400">
                      {section.icon}
                    </div>
                  </div>

                  <h4 className="text-2xl font-mono text-cyan-600 dark:text-cyan-400 mb-8 relative inline-block">
                    {section.title}
                    <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-cyan-400 to-transparent" />
                  </h4>

                  <div className="relative overflow-hidden rounded-lg mb-6">
                    <div className="relative z-10 p-4 bg-gray-50 dark:bg-gray-800/90 backdrop-blur-sm transition-transform duration-300 group-hover:translate-x-2">
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-mono">
                        {section.description}
                      </p>
                    </div>
                  </div>

                  {(section.skills || section.highlights || section.principles) && (
                    <div className="flex flex-wrap gap-2">
                      {(section.skills || section.highlights || section.principles)?.map((item, i) => (
                        <span
                          key={i}
                          className="relative px-4 py-1 bg-gray-100 dark:bg-gray-700 text-cyan-700 dark:text-cyan-400 rounded-lg text-sm group/tag transition-colors"
                        >
                          <span className="relative font-mono z-10 transition-colors duration-300 group-hover/tag:text-gray-900">
                            {item}
                          </span>
                          <div className="absolute inset-0 bg-cyan-400 rounded-lg opacity-0 group-hover/tag:opacity-100 transition-opacity duration-300" />
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="absolute top-1/2 right-4 w-1 h-1 bg-cyan-400 rounded-full animate-ping" />
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-blue-400 rounded-full animate-ping delay-700" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <DownloadCv />
        </div>
      </div>
    </section>
  );
};

export default About;
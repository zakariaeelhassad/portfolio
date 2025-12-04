import React, { useState, useEffect } from "react";
import {
  Code,
  Layers,
  Database,
  Wrench,
  FileCode,
  CloudCog,
} from "lucide-react";
import { useThemeLanguage } from "../context/ThemeLanguageContext";

const SkillTag = ({ name }) => {
  return (
    <div className="group relative flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-cyan-950/30 rounded-lg border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300">
      <span className="font-mono text-gray-700 dark:text-gray-300 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
        {name}
      </span>
    </div>
  );
};

const SkillCard = ({ category, isFlipped, onFlip }) => {
  const { t } = useThemeLanguage();
  return (
    <div
      className="relative w-full h-96 cursor-pointer perspective-1000"
      onClick={onFlip}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        <div className="absolute w-full h-full backface-hidden">
          <div className="h-full p-6 bg-white dark:bg-gradient-to-br dark:from-cyan-900 dark:to-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-cyan-400/10 transition-colors">
            <div className="flex flex-col items-center h-full">
              <div className="mb-4 transform transition-transform group-hover:scale-110">
                {category.icon}
              </div>
              <h4 className="text-2xl font-mono font-bold text-cyan-600 dark:text-cyan-400 mb-4 text-center">
                {category.title}
              </h4>
              <p className="font-mono text-gray-600 dark:text-gray-300 text-center mb-6">
                {category.description}
              </p>
              <div className="mt-auto">
                <span className="font-mono text-sm text-cyan-600 dark:text-cyan-400 border border-cyan-600/30 dark:border-cyan-400/30 px-4 py-2 rounded-lg hover:bg-cyan-400/10 transition-colors">
                  {t('viewSkills')} →
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          <div className="h-full p-6 bg-gray-50 dark:bg-gradient-to-br dark:from-gray-900 dark:to-cyan-900 rounded-xl shadow-lg border border-gray-200 dark:border-cyan-400/10 transition-colors">
            <div className="flex flex-col h-full">
              <h5 className="text-xl font-mono font-bold text-cyan-600 dark:text-cyan-400 mb-4 text-center">
                {category.title}
              </h5>
              <div className="space-y-2 flex-grow overflow-y-auto pr-2">
                {category.items.map((item, idx) => (
                  <SkillTag key={idx} name={item.name} />
                ))}
              </div>
              <div className="mt-4 text-center">
                <span className="group font-mono text-sm text-cyan-600 dark:text-cyan-400 border border-cyan-600/30 dark:border-cyan-400/30 px-4 py-2 rounded-lg hover:bg-cyan-400/10 transition-colors dark:group-hover:text-white">
                  ← {t('back')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  const [flippedCards, setFlippedCards] = useState({});
  const [inView, setInView] = useState(false);
  const { t } = useThemeLanguage();

  const skillCategories = [
    {
      title: t('langProg'),
      description: t('langDesc'),
      icon: <Code className="text-5xl text-cyan-600 dark:text-cyan-400" />,
      items: [
        { name: "Java" },
        { name: "PHP" },
        { name: "JavaScript" },
        { name: "TypeScript" },
        { name: "C" },
        { name: "Python" },
      ],
    },
    {
      title: t('techFront'),
      description: t('techFrontDesc'),
      icon: <Layers className="text-5xl text-cyan-600 dark:text-cyan-400" />,
      items: [
        { name: "React.js" },
        { name: "Angular" },
        { name: "Tailwind CSS" },
      ],
    },
    {
      title: t('frameBack'),
      description: t('frameBackDesc'),
      icon: <FileCode className="text-5xl text-cyan-600 dark:text-cyan-400" />,
      items: [
        { name: "Spring Boot" },
        { name: "Spring Security" },
        { name: "Spring MVC" },
        { name: "Spring Data JPA" },
        { name: "Spring MongoDB" },
        { name: "JPA" },
        { name: "Hibernate" },
        { name: "CDI" },
        { name: "Laravel" },
        { name: "Jakarta EE (JEE)" },
      ],
    },
    {
      title: t('dbTitle'),
      description: t('dbDesc'),
      icon: <Database className="text-5xl text-cyan-600 dark:text-cyan-400" />,
      items: [{ name: "PostgreSQL" }, { name: "MySQL" }, { name: "MongoDB" }],
    },
    {
      title: t('devopsTitle'),
      description: t('devopsDesc'),
      icon: <CloudCog className="text-5xl text-cyan-600 dark:text-cyan-400" />,
      items: [
        { name: "Maven" },
        { name: "Docker" },
        { name: "Jenkins" },
        { name: "CI/CD" },
        { name: "SonarQube" },
        { name: "Selenium/JUnit" },
      ],
    },
    {
      title: t('toolsTitle'),
      description: t('toolsDesc'),
      icon: <Wrench className="text-5xl text-cyan-600 dark:text-cyan-400" />,
      items: [
        { name: "Git/GitHub" },
        { name: "VS Code" },
        { name: "IntelliJ IDEA" },
        { name: "Postman" },
        { name: "Linux" },
      ],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.getElementById("skills");
      const rect = skillsSection?.getBoundingClientRect();
      if (rect && rect.top <= window.innerHeight && rect.bottom >= 0) {
        setInView(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCardFlip = (index) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section
      id="skills"
      className={`py-20 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-1000 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h3 className="text-5xl font-mono text-center mb-16">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-500">
            {t('skillsTitle')}
          </span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              category={category}
              isFlipped={flippedCards[index]}
              onFlip={() => handleCardFlip(index)}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }

        /* Scrollbar styling */
        .overflow-y-auto::-webkit-scrollbar {
          width: 4px;
        }

        .overflow-y-auto::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 4px;
        }

        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: rgba(34, 211, 238, 0.3);
          border-radius: 4px;
        }

        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: rgba(34, 211, 238, 0.5);
        }
      `}</style>
    </section>
  );
};

export default Skills;
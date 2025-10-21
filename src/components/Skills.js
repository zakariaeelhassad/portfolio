import React, { useState, useEffect } from "react";
import {
  Code,
  Layers,
  Database,
  Wrench,
  FileCode,
  CloudCog,
} from "lucide-react";

const SkillTag = ({ name }) => {
  return (
    <div className="group relative flex items-center gap-2 px-3 py-2 bg-cyan-950/30 rounded-lg border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300">
      <span className="font-mono text-gray-300 group-hover:text-cyan-400 transition-colors">
        {name}
      </span>
    </div>
  );
};

const SkillCard = ({ category, isFlipped, onFlip }) => {
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
          <div className="h-full p-6 bg-gradient-to-br from-cyan-900 to-gray-900 rounded-xl shadow-lg border border-cyan-400/10">
            <div className="flex flex-col items-center h-full">
              <div className="mb-4 transform transition-transform group-hover:scale-110">
                {category.icon}
              </div>
              <h4 className="text-2xl font-mono font-bold text-cyan-400 mb-4">
                {category.title}
              </h4>
              <p className="font-mono text-gray-300 text-center mb-6">
                {category.description}
              </p>
              <div className="mt-auto">
                <span className="font-mono text-sm text-cyan-400 border border-cyan-400/30 px-4 py-2 rounded-lg hover:bg-cyan-400/10 transition-colors">
                  Voir les compétences →
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          <div className="h-full p-6 bg-gradient-to-br from-gray-900 to-cyan-900 rounded-xl shadow-lg border border-cyan-400/10">
            <div className="flex flex-col h-full">
              <h5 className="text-xl font-mono font-bold text-cyan-400 mb-4 text-center">
                {category.title}
              </h5>
              <div className="space-y-2 flex-grow overflow-y-auto pr-2">
                {category.items.map((item, idx) => (
                  <SkillTag key={idx} name={item.name} />
                ))}
              </div>
              <div className="mt-4 text-center">
                <span className="group font-mono text-sm text-cyan-400 border border-cyan-400/30 px-4 py-2 rounded-lg hover:bg-cyan-400/10 transition-colors group-hover:text-white">
                  ← Retour
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

  const skillCategories = [
    {
      title: "Langages de Programmation",
      description:
        "Langages principaux pour le développement de logiciels et d’applications",
      icon: <Code className="text-5xl text-cyan-400" />,
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
      title: "Technologies Frontend",
      description:
        "Bibliothèques, frameworks et outils pour créer des interfaces utilisateur",
      icon: <Layers className="text-5xl text-cyan-400" />,
      items: [
        { name: "React.js" },
        { name: "Angular" },
        { name: "Tailwind CSS" },
      ],
    },
    {
      title: "Frameworks et Plateformes Backend",
      description:
        "Outils et frameworks pour développer des applications côté serveur",
      icon: <FileCode className="text-5xl text-cyan-400" />,
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
      title: "Bases de Données et Langages de Requête",
      description:
        "Systèmes de bases de données relationnelles et NoSQL et leurs outils de requête",
      icon: <Database className="text-5xl text-cyan-400" />,
      items: [{ name: "PostgreSQL" }, { name: "MySQL" }, { name: "MongoDB" }],
    },
    {
      title: "Outils DevOps et Cloud",
      description:
        "Technologies pour CI/CD, la containerisation et l’infrastructure",
      icon: <CloudCog className="text-5xl text-cyan-400" />,
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
      title: "Outils de Développement",
      description:
        "Outils essentiels pour coder, déboguer et collaborer",
      icon: <Wrench className="text-5xl text-cyan-400" />,
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
      className={`py-20 bg-gray-900 text-white transition-all duration-1000 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h3 className="text-5xl font-mono text-center mb-16">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Compétences Techniques
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

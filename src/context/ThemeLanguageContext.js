import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeLanguageContext = createContext();

export const useThemeLanguage = () => useContext(ThemeLanguageContext);

export const ThemeLanguageProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [language, setLanguage] = useState('fr');

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const toggleLanguage = () => setLanguage(prev => prev === 'fr' ? 'en' : 'fr');

  // Translation Dictionary
  const t = (key) => {
    const translations = {
      // Navbar
      about: { fr: "À propos", en: "About" },
      projects: { fr: "Projets", en: "Projects" },
      skills: { fr: "Compétences", en: "Skills" },
      contact: { fr: "Contact", en: "Contact" },
      
      // Hero
      iam: { fr: "Je suis un", en: "I am a" },
      greeting: { fr: "Salut, je suis", en: "Hi, I am" },
      roles: { 
        fr: ["Développeur Full-Stack", "Résolveur de problèmes", "Esprit créatif", "Architecte logiciel"],
        en: ["Full-Stack Developer", "Problem Solver", "Creative Mind", "Software Architect"]
      },
      heroDesc: {
        fr: "Donner forme aux idées, comme sculpter des rêves avec du code. J’exploite la puissance des technologies web modernes pour créer des expériences numériques fluides, inspirantes et porteuses de sens.",
        en: "Shaping ideas, like sculpting dreams with code. I harness the power of modern web technologies to create fluid, inspiring, and meaningful digital experiences."
      },
      contactMe: { fr: "Me contacter", en: "Contact me" },

      // About
      aboutTitle: { fr: "À propos de moi", en: "About Me" },
      aboutDesc: {
        fr: "Je suis un développeur Full-Stack passionné par la création d’applications web évolutives et d’expériences utilisateurs innovantes. Je me spécialise dans les frameworks modernes, l’écriture d’un code efficace et les projets collaboratifs qui repoussent les limites du développement.",
        en: "I am a Full-Stack developer passionate about creating scalable web applications and innovative user experiences. I specialize in modern frameworks, writing efficient code, and collaborative projects that push the boundaries of development."
      },
      educationTitle: { fr: "Education", en: "Education" },
      educationDesc: {
        fr: "Après l’obtention de mon baccalauréat en 2023, j’ai rejoint l’école Youcode pour concrétiser ma passion pour le développement web. J’y ai appris les bases de HTML, CSS, JavaScript, PHP, la POO, l’architecture MVC, ainsi que les frameworks Laravel, React, Bootstrap et Tailwind. En deuxième année, je me suis orienté vers le développement Java afin d’approfondir mes compétences et de relever des défis backend plus avancés.",
        en: "After obtaining my baccalaureate in 2023, I joined Youcode school to materialize my passion for web development. I learned the basics of HTML, CSS, JavaScript, PHP, OOP, MVC architecture, as well as Laravel, React, Bootstrap, and Tailwind frameworks. In my second year, I focused on Java development to deepen my skills and tackle more advanced backend challenges."
      },
      expTitle: { fr: "Expérience", en: "Experience" },
      expDesc: {
        fr: "En 2024, j’ai acquis une expérience pratique en tant que développeur Full-Stack au sein de ECOWATT MAROC, une startup. Pendant 2 mois, j’ai travaillé avec PHP/Laravel 10 pour le backend et React.js pour le frontend. Ce poste m’a non seulement permis d’améliorer mes compétences techniques, mais aussi de comprendre l’importance du travail d’équipe, du respect des délais et de l’adaptation dans un environnement dynamique.",
        en: "In 2024, I gained practical experience as a Full-Stack developer at ECOWATT MOROCCO, a startup. For 2 months, I worked with PHP/Laravel 10 for the backend and React.js for the frontend. This position not only allowed me to improve my technical skills but also to understand the importance of teamwork, meeting deadlines, and adapting in a dynamic environment."
      },
      agileTitle: { fr: "Méthodologie Agile", en: "Agile Methodology" },
      agileDesc: {
        fr: "Je crois fermement en la méthodologie Agile, que j’applique dans mes projets. Qu’ils soient personnels ou professionnels, les principes Agile m’aident à rester organisé, à respecter les délais et à améliorer continuellement la qualité de mon travail.",
        en: "I firmly believe in the Agile methodology, which I apply in my projects. Whether personal or professional, Agile principles help me stay organized, meet deadlines, and continuously improve the quality of my work."
      },
      interestsTitle: { fr: "Intérêts", en: "Interests" },
      interestsDesc: {
        fr: "En dehors du développement, je suis passionné par le football. J’ai joué pour Tarrast, une équipe locale de ma ville à Agadir. De plus, j’aime explorer de nouvelles technologies et les intégrer dans des projets concrets. La résolution de problèmes est l’une de mes plus grandes forces, et je cherche toujours à améliorer mes compétences.",
        en: "Outside of development, I am passionate about football. I played for Tarrast, a local team in my city of Agadir. Additionally, I love exploring new technologies and integrating them into concrete projects. Problem-solving is one of my greatest strengths, and I am always looking to improve my skills."
      },

      // Skills
      skillsTitle: { fr: "Compétences Techniques", en: "Technical Skills" },
      viewSkills: { fr: "Voir les compétences", en: "View skills" },
      back: { fr: "Retour", en: "Back" },
      langProg: { fr: "Langages de Programmation", en: "Programming Languages" },
      langDesc: { fr: "Langages principaux pour le développement de logiciels et d’applications", en: "Main languages for software and application development" },
      techFront: { fr: "Technologies Frontend", en: "Frontend Technologies" },
      techFrontDesc: { fr: "Bibliothèques, frameworks et outils pour créer des interfaces utilisateur", en: "Libraries, frameworks, and tools for building user interfaces" },
      frameBack: { fr: "Frameworks et Plateformes Backend", en: "Backend Frameworks & Platforms" },
      frameBackDesc: { fr: "Outils et frameworks pour développer des applications côté serveur", en: "Tools and frameworks for server-side application development" },
      dbTitle: { fr: "Bases de Données", en: "Databases" },
      dbDesc: { fr: "Systèmes de bases de données relationnelles et NoSQL", en: "Relational and NoSQL database systems" },
      devopsTitle: { fr: "Outils DevOps et Cloud", en: "DevOps & Cloud Tools" },
      devopsDesc: { fr: "Technologies pour CI/CD, la containerisation et l’infrastructure", en: "Technologies for CI/CD, containerization, and infrastructure" },
      toolsTitle: { fr: "Outils de Développement", en: "Development Tools" },
      toolsDesc: { fr: "Outils essentiels pour coder, déboguer et collaborer", en: "Essential tools for coding, debugging, and collaborating" },

      // Projects
      portfolioTitle: { fr: "Mon Portfolio de Projets", en: "My Project Portfolio" },
      portfolioSubtitle: { 
        fr: "Découvrez mon parcours à travers le code. Chaque projet représente un défi unique résolu avec passion et précision.", 
        en: "Discover my journey through code. Each project represents a unique challenge solved with passion and precision."
      },
      allProjects: { fr: "Tous les projets", en: "All Projects" },
      viewDetails: { fr: "Cliquez pour voir les détails", en: "Click to view details" },
      viewGithub: { fr: "Voir le profil GitHub", en: "View GitHub Profile" },
      moreProjects: { fr: "Découvrez plus de mes projets sur GitHub", en: "Discover more of my projects on GitHub" },
      projectOverview: { fr: "Aperçu du projet", en: "Project Overview" },
      keyFeatures: { fr: "Fonctionnalités clés", en: "Key Features" },
      techUsed: { fr: "Technologies utilisées", en: "Technologies Used" },
      viewCode: { fr: "Voir le code", en: "View Code" },
      liveDemo: { fr: "Démo en ligne", en: "Live Demo" },

      // Contact
      contactTitle: { fr: "Contactez-moi", en: "Contact Me" },
      contactSubtitle: { 
        fr: "Vous avez une question ou souhaitez collaborer ? Envoyez-moi un message et je vous répondrai dès que possible.", 
        en: "Have a question or want to collaborate? Send me a message and I'll get back to you as soon as possible." 
      },
      contactInfo: { fr: "Informations de contact", en: "Contact Information" },
      contactInfoDesc: { fr: "N'hésitez pas à me contacter via ce formulaire ou mes profils sur les réseaux sociaux.", en: "Feel free to reach out via this form or my social media profiles." },
      name: { fr: "Nom", en: "Name" },
      email: { fr: "Email", en: "Email" },
      subject: { fr: "Sujet", en: "Subject" },
      message: { fr: "Message", en: "Message" },
      sendMessage: { fr: "Envoyer le message", en: "Send Message" },
      successMsg: { fr: "✅ Le message a été envoyé avec succès !", en: "✅ Message sent successfully!" },
      errorMsg: { fr: "❌ Échec de l'envoi, veuillez réessayer.", en: "❌ Failed to send, please try again." },

      // AI Bot
      aiWelcome: { fr: "Bonjour ! Je suis l'assistant IA de Zakariae. Comment puis-je vous aider ?", en: "Hello! I am Zakariae's AI assistant. How can I help you?" },
      aiInput: { fr: "Posez une question...", en: "Ask a question..." },
    };

    return translations[key] ? translations[key][language] : key;
  };

  return (
    <ThemeLanguageContext.Provider value={{ isDarkMode, toggleTheme, language, toggleLanguage, t }}>
      {children}
    </ThemeLanguageContext.Provider>
  );
};
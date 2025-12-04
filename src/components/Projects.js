import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaDatabase, FaCode, FaDesktop, FaLaptopCode } from "react-icons/fa";

import { ExternalLink, Github, ChevronRight, X } from "lucide-react";
import maquette from "../images/maquette-670c4f1936d80809758425.webp";
import TodoList from "../images/téléchargement.png";
import PackManage from "../images/PackManage.webp";
import Card from "../images/bank.jpg";
import youdemy from "../images/youdemy.webp";
import Portfolio from "../images/Firefly_20241227125616.png";
import fut from "../images/fut.png";
import crypto from "../images/Crypto.jpg";
import sang from "../images/sang.webp";

import { useThemeLanguage } from "../context/ThemeLanguageContext";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t, language } = useThemeLanguage();

  const getProjectsData = () => [
    {
      title: "Gestion des comptes bancaires",
      description: language === 'fr' 
        ? "Une application console Java 8 permettant de gérer des comptes bancaires avec leurs opérations : versements, retraits et virements."
        : "A Java 8 console application for managing bank accounts with operations: deposits, withdrawals, and transfers.",
      longDescription: language === 'fr' 
        ? `Cette application Java 8 offre une solution complète pour la gestion des comptes bancaires. 
    Elle repose sur une architecture en couches (UI, métier, utilitaire) et permet de créer des comptes courants et épargne avec des règles spécifiques pour chaque type. 
    Les utilisateurs peuvent effectuer des versements, retraits et virements, consulter le solde et l'historique des opérations. 
    Le projet met l'accent sur le respect des bonnes pratiques de programmation, l'encapsulation, le principe SOLID et une séparation claire entre la logique métier et l'affichage. 
    Les données sont stockées en mémoire via ArrayList/HashMap et l'application intègre la Java Time API pour gérer les dates. 
    Des validations et exceptions sont mises en place pour assurer la fiabilité et la sécurité des opérations.`
        : `This Java 8 application offers a complete solution for bank account management.
    It relies on a layered architecture (UI, business, utility) and allows creating current and savings accounts with specific rules for each type.
    Users can perform deposits, withdrawals, and transfers, check balances, and view transaction history.
    The project emphasizes good programming practices, encapsulation, SOLID principles, and a clear separation between business logic and display.
    Data is stored in memory via ArrayList/HashMap, and the application integrates Java Time API for date management.
    Validations and exceptions are in place to ensure operation reliability and security.`,
      link: "https://github.com/zakariaeelhassad/Gestion-de-Comptes-Bancaires-.git",
      demo: "#",
      imageUrl: Card,
      technologies: "Java 8, Eclipse, ArrayList, HashMap, Java Time API, UUID, Git",
      category: "backend",
      highlights: language === 'fr' 
        ? ["Créer un compte courant ou épargne", "Effectuer des versements", "Effectuer des retraits", "Effectuer des virements", "Consulter le solde", "Consulter l'historique", "Menu interactif"]
        : ["Create current or savings account", "Make deposits", "Make withdrawals", "Make transfers", "Check balance", "View history", "Interactive menu"],
    },
    {
      title: "Crypto Wallet Simulator",
      description: language === 'fr' 
        ? "Application console Java 8 qui simule un portefeuille crypto, un mempool et aide à optimiser les frais de transaction."
        : "Java 8 console application simulating a crypto wallet, a mempool, and helping optimize transaction fees.",
      longDescription: language === 'fr' 
        ? `Cette application Java 8 permet de gérer des wallets Bitcoin et Ethereum, de créer des transactions avec différents niveaux de fees (ECONOMIQUE, STANDARD, RAPIDE) et de simuler un mempool où les transactions sont priorisées selon leurs frais. 
    Elle offre un menu interactif pour créer des wallets, générer des transactions, calculer la position dans le mempool et comparer les niveaux de frais. 
    L'application utilise ArrayList/HashMap pour le stockage en mémoire et Java Time API pour la gestion des dates. 
    Les principes SOLID sont respectés et l'application applique les design patterns Singleton et Repository. 
    Les erreurs et opérations critiques sont loggées via SLF4J/Logback, tandis que l'affichage console est réservé aux interactions utilisateur.`
        : `This Java 8 application manages Bitcoin and Ethereum wallets, creates transactions with different fee levels (ECONOMIC, STANDARD, FAST), and simulates a mempool where transactions are prioritized by fees.
    It offers an interactive menu to create wallets, generate transactions, calculate mempool position, and compare fee levels.
    The application uses ArrayList/HashMap for memory storage and Java Time API for date management.
    SOLID principles are respected, and the application applies Singleton and Repository design patterns.
    Errors and critical operations are logged via SLF4J/Logback, while console display is reserved for user interactions.`,
      link: "https://github.com/zakariaeelhassad/Crypto-Wallet-Simulator.git",
      demo: "#",
      imageUrl: crypto,
      technologies: "Java 8, Eclipse, ArrayList, HashMap, Java Time API, UUID, JDBC PostgreSQL, SLF4J/Logback, Stream API, Enums, JUnit 5",
      category: "backend",
      highlights: language === 'fr' 
        ? ["Créer un wallet crypto", "Créer une nouvelle transaction", "Sélectionner le niveau de frais", "Calculer la position dans le mempool", "Comparer les niveaux de frais", "Consulter le mempool", "Menu interactif"]
        : ["Create crypto wallet", "Create new transaction", "Select fee level", "Calculate mempool position", "Compare fee levels", "View mempool", "Interactive menu"],
    },
    {
      title: "Système de Gestion de Banque de Sang",
      description: language === 'fr'
        ? "Application web JEE permettant de gérer les donneurs, receveurs et l’automatisation du matching sanguin."
        : "JEE web application for managing donors, recipients, and automating blood matching.",
      longDescription: language === 'fr'
        ? `Cette application web monolithique JEE offre une solution complète pour la gestion des centres de transfusion sanguine. 
    Elle permet de créer et gérer des donneurs et receveurs, d'associer automatiquement les donneurs aux receveurs selon la compatibilité sanguine et les priorités médicales. 
    L'application utilise JSP/JSTL pour les pages dynamiques, Servlets pour la couche contrôleur, et JPA/Hibernate pour la persistance des données. 
    Les règles métier telles que l’éligibilité des donneurs, le suivi des poches de sang et l'état des receveurs sont entièrement automatisées.`
        : `This monolithic JEE web application offers a complete solution for blood transfusion center management.
    It allows creating and managing donors and recipients, automatically matching donors to recipients based on blood compatibility and medical priorities.
    The application uses JSP/JSTL for dynamic pages, Servlets for the controller layer, and JPA/Hibernate for data persistence.
    Business rules such as donor eligibility, blood bag tracking, and recipient status are fully automated.`,
      link: "https://github.com/zakariaeelhassad/Syst-me-Gestion-de-Banque-de-Sang.git",
      demo: "#",
      imageUrl: sang,
      technologies: "Java 8, JEE, JSP, JSTL, Servlets, JPA/Hibernate, MySQL/PostgreSQL, Maven, CSS/Bootstrap, Collections API, Stream API, Optional, JUnit",
      category: "backend",
      highlights: language === 'fr'
        ? ["Gestion donneurs et receveurs", "États donneurs : DISPONIBLE, NON_DISPONIBLE", "États receveurs : EN_ATTENTE, SATISFAIT", "Matching automatique", "Priorité médicale", "Validation stricte", "Architecture MVC"]
        : ["Manage donors and recipients", "Donor status tracking", "Recipient status tracking", "Automatic matching", "Medical priority sorting", "Strict validation", "MVC Architecture"],
    },
    {
      title: language === 'fr' ? "Mon Portfolio" : "My Portfolio",
      description: language === 'fr'
        ? "Ceci est mon portfolio personnel, présentant mes compétences, projets et réalisations en développement web."
        : "This is my personal portfolio, showcasing my skills, projects, and achievements in web development.",
      longDescription: language === 'fr'
        ? `**Mon Portfolio** met en avant mes compétences techniques et ma créativité avec un design responsive adapté à tous les écrans. Mise en page claire présentant compétences et projets de manière professionnelle. Les éléments interactifs améliorent l’expérience utilisateur avec navigation fluide et animations engageantes.`
        : `**My Portfolio** highlights my technical skills and creativity with a responsive design adapted to all screens. Clear layout presenting skills and projects professionally. Interactive elements enhance user experience with fluid navigation and engaging animations.`,
      link: "https://github.com/zakariaeelhassad/Portfolio",
      demo: "https://portfolio-t6ar.vercel.app/",
      imageUrl: Portfolio,
      technologies: "React.js, Tailwind CSS",
      category: "frontend",
      highlights: language === 'fr'
        ? ["Interface moderne et responsive", "Présentation des compétences", "Optimisé pour la performance", "Composants personnalisables"]
        : ["Modern responsive interface", "Skills showcase", "Performance optimized", "Customizable components"],
    },
    {
      title: "PhoneLaunch",
      description: language === 'fr'
        ? "Une landing page pour le lancement d'une marque de téléphone, présentant les sections principales du produit."
        : "A landing page for a phone brand launch, showcasing the product's main sections.",
      longDescription: language === 'fr'
        ? `**Landing Page Téléphone** met en avant le nouveau produit avec une mise en page claire et responsive. La page comporte un header, trois sections principales, et un footer, avec utilisation des grilles CSS et flexbox pour un design adaptable à tous les écrans. La navigation est fluide et l’expérience utilisateur optimisée grâce aux éléments interactifs et au respect fidèle de la maquette fournie.`
        : `**Phone Landing Page** highlights the new product with a clear and responsive layout. The page features a header, three main sections, and a footer, using CSS grids and flexbox for a design adaptable to all screens. Navigation is fluid, and user experience is optimized thanks to interactive elements and faithful adherence to the provided mockup.`,
      link: "https://github.com/zakariaeelhassad/PhoneLaunch/",
      demo: "https://zakariaeelhassad.github.io/PhoneLaunch/",
      imageUrl: maquette,
      technologies: "HTML, CSS, Figma",
      category: "frontend",
      highlights: language === 'fr'
        ? ["Design fidèle à la maquette", "Page responsive", "Grilles CSS et flexbox", "Navigation fluide"]
        : ["Faithful to mockup", "Responsive page", "CSS grids and flexbox", "Fluid navigation"],
    },
    {
      title: "TODO-LIST",
      description: language === 'fr'
        ? "Application web de gestion des tâches développée pour améliorer la productivité et l’organisation."
        : "Task management web application developed to improve productivity and organization.",
      longDescription: language === 'fr'
        ? `**TODO-LIST** est une application moderne et intuitive permettant aux utilisateurs de créer, suivre et organiser leurs tâches efficacement. 
    Elle offre une interface claire avec un design responsive grâce à **Tailwind CSS**, et propose des fonctionnalités avancées telles que l’ajout, la modification, la suppression et le tri des tâches par priorité ou date d’échéance. 
    L’intégration de **LocalStorage** garantit la persistance des données après actualisation, tandis que les animations et le **drag & drop** rendent l’expérience utilisateur fluide et agréable.`
        : `**TODO-LIST** is a modern and intuitive application allowing users to create, track, and organize tasks efficiently.
    It offers a clear interface with a responsive design thanks to **Tailwind CSS**, featuring advanced functionalities like adding, editing, deleting, and sorting tasks by priority or due date.
    **LocalStorage** integration ensures data persistence, while animations and **drag & drop** make the user experience fluid and enjoyable.`,
      link: "https://github.com/zakariaeelhassad/TODO-LIST",
      demo: "https://zakariaeelhassad.github.io/TODO-LIST/public/",
      imageUrl: TodoList,
      technologies: "HTML, CSS (Tailwind), JavaScript",
      category: "frontend",
      highlights: language === 'fr'
        ? ["Interface moderne", "CRUD tâches", "Tri et filtrage", "Sauvegarde LocalStorage", "Drag & Drop", "Accessibilité WCAG"]
        : ["Modern interface", "Task CRUD", "Sorting and filtering", "LocalStorage save", "Drag & Drop", "WCAG Accessibility"],
    },
    {
      title: "PackManage",
      description: language === 'fr'
        ? "Une application web centralisée pour la gestion des packages JavaScript et de leurs auteurs."
        : "A centralized web application for managing JavaScript packages and their authors.",
      longDescription: language === 'fr'
        ? `**JS Package Manager** est un système moderne permettant à une communauté de développeurs JavaScript de centraliser la gestion de leurs packages et des auteurs qui y contribuent. L'application facilite la recherche, l’ajout et la mise à jour des packages tout en assurant une meilleure organisation des informations grâce à une base de données bien structurée et une interface claire.`
        : `**JS Package Manager** is a modern system allowing a community of JavaScript developers to centralize the management of their packages and contributing authors. The application facilitates searching, adding, and updating packages while ensuring better information organization thanks to a well-structured database and clear interface.`,
      link: "https://github.com/zakariaeelhassad/PackManage/",
      demo: "https://github.com/zakariaeelhassad/PackManage/",
      imageUrl: PackManage,
      technologies: "PHP, MySQL, HTML, CSS, JavaScript",
      category: "fullstack",
      highlights: language === 'fr'
        ? ["Gestion packages et auteurs", "Recherche rapide", "Schéma relationnel", "Formulaires dynamiques", "Interface intuitive"]
        : ["Package and author management", "Fast search", "Relational schema", "Dynamic forms", "Intuitive interface"],
    },
    {
      title: "Youdemy",
      description: language === 'fr'
        ? "Une plateforme de cours en ligne interactive et personnalisée pour les étudiants et les enseignants."
        : "An interactive and personalized online course platform for students and teachers.",
      longDescription: language === 'fr'
        ? `**Youdemy** révolutionne l'apprentissage en ligne en offrant un système interactif et personnalisé. Les étudiants peuvent parcourir le catalogue, consulter les détails des cours et s'inscrire facilement, tandis que les enseignants peuvent gérer leurs cours, suivre les inscriptions et accéder aux statistiques. L’administrateur supervise les utilisateurs et le contenu pour garantir une expérience fluide et sécurisée.`
        : `**Youdemy** revolutionizes online learning by offering an interactive and personalized system. Students can browse the catalog, view course details, and enroll easily, while teachers can manage their courses, track enrollments, and access statistics. The administrator oversees users and content to ensure a smooth and secure experience.`,
      link: "https://github.com/zakariaeelhassad/Youdemy",
      demo: "https://github.com/zakariaeelhassad/Youdemy",
      imageUrl: youdemy,
      technologies: "PHP, Twig, MySQL, HTML, CSS, JavaScript",
      category: "fullstack",
      highlights: language === 'fr'
        ? ["Gestion des rôles (Étudiant, Prof, Admin)", "Catalogue de cours", "Gestion inscriptions", "Authentification sécurisée", "Statistiques détaillées", "Relations BDD complexes"]
        : ["Role management (Student, Teacher, Admin)", "Course catalog", "Enrollment management", "Secure authentication", "Detailed statistics", "Complex DB relationships"],
    },
    {
      title: "FUT",
      description: language === 'fr'
        ? "Une application interactive permettant de construire son équipe Ultimate Team (FUT)."
        : "An interactive application for building your Ultimate Team (FUT) squad.",
      longDescription: language === 'fr'
        ? `**FUT** est une application web dynamique qui permet aux utilisateurs de créer et gérer leur propre équipe de football virtuelle selon des formations tactiques comme **4-3-3**. L’utilisateur peut ajouter, positionner et modifier les joueurs tout en respectant les contraintes des formations. L’expérience repose sur une interface fluide et intuitive, avec une gestion des données via **localStorage** pour sauvegarder automatiquement la composition de l’équipe.`
        : `**FUT** is a dynamic web application allowing users to create and manage their own virtual football team according to tactical formations like **4-3-3**. The user can add, position, and modify players while respecting formation constraints. The experience relies on a fluid and intuitive interface, with data management via **localStorage** to automatically save the team composition.`,
      link: "https://github.com/zakariaeelhassad/Fut",
      demo: "https://zakariaeelhassad.github.io/Fut/public/",
      imageUrl: fut,
      technologies: "HTML, CSS, JavaScript",
      category: "frontend",
      highlights: language === 'fr'
        ? ["Création dynamique de joueurs", "Positionnement automatique", "Interface interactive", "Limitation 11 joueurs", "Sauvegarde localStorage", "Responsive"]
        : ["Dynamic player creation", "Automatic positioning", "Interactive interface", "11 player limit", "localStorage save", "Responsive"],
    },
  ];

  const projects = getProjectsData();

  const filters = [
    { label: t('allProjects'), value: "all", icon: <FaDatabase /> },
    { label: "Backend", value: "backend", icon: <FaCode /> },
    { label: "Frontend", value: "frontend", icon: <FaDesktop /> },
    { label: "Full Stack", value: "fullstack", icon: <FaLaptopCode /> },
  ];

  const filteredProjects = projects.filter(
    (project) => activeFilter === "all" || project.category === activeFilter
  );

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) setIsModalOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const ProjectModal = ({ project, onClose }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 font-mono bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white dark:bg-gray-800 rounded-xl font-mono max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-6">
          <h3 className="text-2xl font-mono text-cyan-600 dark:text-cyan-400">{project.title}</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-gray-500 dark:text-gray-400" />
          </button>
        </div>

        <div className="aspect-video mb-6 rounded-lg overflow-hidden">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-mono text-cyan-600 dark:text-cyan-400 mb-2">
              {t('projectOverview')}
            </h4>
            <p className="text-gray-700 dark:text-gray-300 font-mono whitespace-pre-line">
              {project.longDescription}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-mono text-cyan-600 dark:text-cyan-400 mb-2">
              {t('keyFeatures')}
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.highlights?.map((highlight, idx) => (
                <li key={idx} className="flex items-center text-gray-700 dark:text-gray-300">
                  <span className="w-2 h-2 bg-cyan-600 dark:bg-cyan-400 rounded-full mr-2" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-mono text-cyan-600 dark:text-cyan-400 mb-2">
              {t('techUsed')}
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.split(",").map((tech, idx) => (
                <span
                  key={idx}
                  className="text-sm px-3 py-1 bg-gray-200 dark:bg-gray-700 text-cyan-700 dark:text-cyan-400 rounded-full"
                >
                  {tech.trim()}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 pt-4">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-2 bg-cyan-400 text-gray-900 rounded-full hover:bg-cyan-300 transition-colors duration-300"
            >
              <Github className="w-5 h-5 mr-2" />
              {t('viewCode')}
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-2 border border-cyan-600 dark:border-cyan-400 text-cyan-600 dark:text-cyan-400 rounded-full hover:bg-cyan-400 hover:text-gray-900 transition-colors duration-300"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              {t('liveDemo')}
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-900 min-h-screen relative transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-500 mb-6">
            {t('portfolioTitle')}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-xl font-mono max-w-3xl mx-auto">
            {t('portfolioSubtitle')}
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter, index) => (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-6 py-2 rounded-full font-mono transition-all duration-300 flex items-center gap-2 ${
                activeFilter === filter.value
                  ? "bg-cyan-600 dark:bg-cyan-400 text-white dark:text-gray-900"
                  : "bg-gray-200 dark:bg-gray-800 text-cyan-700 dark:text-cyan-400 hover:bg-gray-300 dark:hover:bg-gray-700"
              }`}
            >
              {filter.icon}
              <span>{filter.label}</span>
            </motion.button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onClick={() => {
                  setSelectedProject(project);
                  setIsModalOpen(true);
                }}
                className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 cursor-pointer shadow-lg dark:shadow-none border border-gray-100 dark:border-transparent"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-mono text-cyan-600 dark:text-cyan-400 mb-3 relative inline-block">
                    {project.title}
                    <div className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500" />
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 font-mono text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex font-mono flex-wrap gap-2 mb-4">
                    {project.technologies
                      .split(",")
                      .slice(0, 3)
                      .map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 text-cyan-700 dark:text-cyan-400 rounded-full"
                        >
                          {tech.trim()}
                        </span>
                      ))}
                    {project.technologies.split(",").length > 3 && (
                      <span className="text-xs font-mono px-2 py-1 bg-gray-200 dark:bg-gray-700 text-cyan-700 dark:text-cyan-400 rounded-full">
                        +{project.technologies.split(",").length - 3} autres
                      </span>
                    )}
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm text-cyan-600 dark:text-cyan-400 font-mono">
                      {t('viewDetails')}
                    </span>
                    <ChevronRight className="w-5 h-5 text-cyan-600 dark:text-cyan-400 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/10 to-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 text-xl font-mono mb-6">
            {t('moreProjects')}
          </p>
          <a
            href="https://github.com/zakariaeelhassad"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-gray-200 dark:bg-gray-800 text-cyan-700 dark:text-cyan-400 rounded-full hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 group"
          >
            <Github className="w-5 h-5 mr-2" />
            <span className="font-mono">{t('viewGithub')}</span>
            <ChevronRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>

      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => {
              setIsModalOpen(false);
              setSelectedProject(null);
            }}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
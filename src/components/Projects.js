import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaDatabase, FaCode, FaDesktop, FaLaptopCode } from "react-icons/fa";

import { ExternalLink, Github, ChevronRight, X } from "lucide-react";
import ITLens from "../images/Lens2-mg.jpg";
import MajesticCup from "../images/MajesticCup-image.jpg";
import LibeUp from "../images/libeUp-image.jpg";
import Card from "../images/bank.jpg";
import Evento from "../images/Evento-image.jpg";
import Portfolio from "../images/Firefly_20241227125616.png";

import SmartBank from "../images/smartBank-image.jpg";
import crypto from "../images/Crypto.jpg";
import sang from "../images/sang.webp";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      title: "Gestion des comptes bancaires",
      description:
        "Une application console Java 8 permettant de gérer des comptes bancaires avec leurs opérations : versements, retraits et virements.",
      longDescription: `Cette application Java 8 offre une solution complète pour la gestion des comptes bancaires. 
    Elle repose sur une architecture en couches (UI, métier, utilitaire) et permet de créer des comptes courants et épargne avec des règles spécifiques pour chaque type. 
    Les utilisateurs peuvent effectuer des versements, retraits et virements, consulter le solde et l'historique des opérations. 
    Le projet met l'accent sur le respect des bonnes pratiques de programmation, l'encapsulation, le principe SOLID et une séparation claire entre la logique métier et l'affichage. 
    Les données sont stockées en mémoire via ArrayList/HashMap et l'application intègre la Java Time API pour gérer les dates. 
    Des validations et exceptions sont mises en place pour assurer la fiabilité et la sécurité des opérations.`,
      link: "https://github.com/zakariaeelhassad/Gestion-de-Comptes-Bancaires-.git",
      demo: "#",
      imageUrl: Card,
      technologies:
        "Java 8, Eclipse, ArrayList, HashMap, Java Time API, UUID, Git",
      category: "backend",
      highlights: [
        "Créer un compte courant ou épargne",
        "Effectuer des versements dans un compte",
        "Effectuer des retraits depuis un compte",
        "Effectuer des virements entre comptes",
        "Consulter le solde du compte",
        "Consulter l'historique des opérations",
        "Menu interactif console pour l’interface utilisateur"
      ],
    },
    {
      title: "Crypto Wallet Simulator",
      description:
        "Application console Java 8 qui simule un portefeuille crypto, un mempool et aide à optimiser les frais de transaction.",
      longDescription: `Cette application Java 8 permet de gérer des wallets Bitcoin et Ethereum, de créer des transactions avec différents niveaux de fees (ECONOMIQUE, STANDARD, RAPIDE) et de simuler un mempool où les transactions sont priorisées selon leurs frais. 
    Elle offre un menu interactif pour créer des wallets, générer des transactions, calculer la position dans le mempool et comparer les niveaux de frais. 
    L'application utilise ArrayList/HashMap pour le stockage en mémoire et Java Time API pour la gestion des dates. 
    Les principes SOLID sont respectés et l'application applique les design patterns Singleton et Repository. 
    Les erreurs et opérations critiques sont loggées via SLF4J/Logback, tandis que l'affichage console est réservé aux interactions utilisateur. 
    L'application est conçue pour être évolutive et modulable avec une architecture claire en couches (UI, métier, données, utilitaires).`,
      link: "https://github.com/zakariaeelhassad/Crypto-Wallet-Simulator.git",
      demo: "#",
      imageUrl: crypto,
      technologies:
        "Java 8, Eclipse, ArrayList, HashMap, Java Time API, UUID, JDBC PostgreSQL, SLF4J/Logback, Stream API, Enums, JUnit 5",
      category: "backend",
      highlights: [
        "Créer un wallet crypto (Bitcoin ou Ethereum)",
        "Créer une nouvelle transaction avec montant et adresse destination",
        "Sélectionner le niveau de frais (ECONOMIQUE, STANDARD, RAPIDE)",
        "Calculer la position dans le mempool et temps d'attente estimé",
        "Comparer les trois niveaux de frais avec position réelle dans le mempool",
        "Consulter l'état actuel du mempool",
        "Menu interactif console pour l’interface utilisateur"
      ],
    },
    {
      title: "Système de Gestion de Banque de Sang",
      description:
        "Application web JEE permettant de gérer les donneurs, receveurs et l’automatisation du matching sanguin selon compatibilités et urgences médicales.",
      longDescription: `Cette application web monolithique JEE offre une solution complète pour la gestion des centres de transfusion sanguine. 
    Elle permet de créer et gérer des donneurs et receveurs, d'associer automatiquement les donneurs aux receveurs selon la compatibilité sanguine et les priorités médicales. 
    L'application utilise JSP/JSTL pour les pages dynamiques, Servlets pour la couche contrôleur, et JPA/Hibernate pour la persistance des données. 
    Les règles métier telles que l’éligibilité des donneurs, le suivi des poches de sang et l'état des receveurs sont entièrement automatisées.`,
      link: "https://github.com/zakariaeelhassad/Syst-me-Gestion-de-Banque-de-Sang.git",
      demo: "#",
      imageUrl: sang,
      technologies:
        "Java 8, JEE, JSP, JSTL, Servlets, JPA/Hibernate, MySQL/PostgreSQL, Maven, CSS/Bootstrap, Collections API, Stream API, Optional, JUnit",
      category: "backend",
      highlights: [
        "Créer des donneurs et receveurs avec formulaires validés",
        "Gérer l'état des donneurs : DISPONIBLE, NON_DISPONIBLE, NON_ELIGIBLE",
        "Gérer l'état des receveurs : EN_ATTENTE, SATISFAIT selon les besoins en poches de sang",
        "Associer automatiquement les donneurs aux receveurs compatibles",
        "Afficher la liste des donneurs avec receveurs associés et actions (modifier/supprimer)",
        "Afficher la liste des receveurs avec donneurs associés et actions (modifier/supprimer)",
        "Trier les receveurs par priorité médicale (CRITIQUE → URGENT → NORMAL)",
        "Validation stricte selon la compatibilité sanguine et critères d’éligibilité",
        "Menu web interactif avec JSP/JSTL et navigation intuitive",
        "Architecture MVC multicouches respectant SOLID et utilisant Repository/Singleton Pattern"
      ],
    },



    {
      title: "SmartBank : Simulation de Crédit",
      description:
        "SmartBank offre une interface intuitive pour simuler des prêts personnels et hypothécaires, guidant l’utilisateur pas à pas.",
      longDescription: `SmartBank simplifie la simulation de crédit avec une interface intuitive et des mises à jour en temps réel. L’utilisateur navigue à travers trois onglets—informations financières, personnelles et contacts—et voit un résumé en direct des détails du prêt, y compris montant, taux d’intérêt, mensualités et coût total. Développée avec HTML, Sass et JavaScript (ES6), la plateforme offre une expérience fluide et responsive. Selenium est utilisé pour les tests automatisés afin d’assurer le bon fonctionnement de toutes les interactions.`,
      link: "https://github.com/hamzalamin/SmartBank",
      demo: "#",
      imageUrl: SmartBank,
      technologies:
        "Java EE, JPA, Hibernate, JSP, SASS, JavaScript, JUnit, Mockito, Tomcat",
      category: "fullstack",
      highlights: [
        "Processus de simulation de prêt étape par étape",
        "Résumé dynamique en temps réel avec JavaScript",
        "Interface moderne et épurée",
        "Responsive design pour mobiles",
        "Flux efficace de saisie et calcul",
      ],
    },

    {
      title: "Mon Portfolio",
      description:
        "Ceci est mon portfolio personnel, présentant mes compétences, projets et réalisations en développement web.",
      longDescription: `**Mon Portfolio** met en avant mes compétences techniques et ma créativité avec un design responsive adapté à tous les écrans. Mise en page claire présentant compétences et projets de manière professionnelle. Les éléments interactifs améliorent l’expérience utilisateur avec navigation fluide et animations engageantes.`,
      link: "https://github.com/hamzalamin/Portfolio-react",
      demo: "https://hamzalamin.github.io/Portfolio-react/",
      imageUrl: Portfolio,
      technologies: "React.js, Tailwind CSS",
      category: "frontend",
      highlights: [
        "Interface moderne et responsive",
        "Présentation des compétences en développement web",
        "Optimisé pour la performance",
        "Composants personnalisables",
      ],
    },
  ];

  const filters = [
    { label: "Tous les projets", value: "all", icon: <FaDatabase /> },
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
        className="bg-gray-800 rounded-xl font-mono max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-6">
          <h3 className="text-2xl font-mono text-cyan-400">{project.title}</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-700 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-gray-400" />
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
            <h4 className="text-lg font-mono text-cyan-400 mb-2">
              Aperçu du projet
            </h4>
            <p className="text-gray-300 font-mono whitespace-pre-line">
              {project.longDescription}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-mono text-cyan-400 mb-2">
              Fonctionnalités clés
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.highlights?.map((highlight, idx) => (
                <li key={idx} className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-mono text-cyan-400 mb-2">
              Technologies utilisées
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.split(",").map((tech, idx) => (
                <span
                  key={idx}
                  className="text-sm px-3 py-1 bg-gray-700 text-cyan-400 rounded-full"
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
              Voir le code
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-2 border border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400 hover:text-gray-900 transition-colors duration-300"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Démo en ligne
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <section id="projects" className="py-16 bg-gray-900 min-h-screen relative">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-6">
            Mon Portfolio de Projets
          </h2>
          <p className="text-gray-400 text-xl font-mono max-w-3xl mx-auto">
            Découvrez mon parcours à travers le code. Chaque projet représente
            un défi unique résolu avec passion et précision.
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
                  ? "bg-cyan-400 text-gray-900"
                  : "bg-gray-800 text-cyan-400 hover:bg-gray-700"
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
                className="group relative bg-gray-800 rounded-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 cursor-pointer"
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
                  <h3 className="text-xl font-mono text-cyan-400 mb-3 relative inline-block">
                    {project.title}
                    <div className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500" />
                  </h3>
                  <p className="text-gray-400 font-mono text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex font-mono flex-wrap gap-2 mb-4">
                    {project.technologies
                      .split(",")
                      .slice(0, 3)
                      .map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2 py-1 bg-gray-700 text-cyan-400 rounded-full"
                        >
                          {tech.trim()}
                        </span>
                      ))}
                    {project.technologies.split(",").length > 3 && (
                      <span className="text-xs font-mono px-2 py-1 bg-gray-700 text-cyan-400 rounded-full">
                        +{project.technologies.split(",").length - 3} autres
                      </span>
                    )}
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm text-cyan-400 font-mono">
                      Cliquez pour voir les détails
                    </span>
                    <ChevronRight className="w-5 h-5 text-cyan-400 transform group-hover:translate-x-1 transition-transform duration-300" />
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
          <p className="text-gray-400 text-xl font-mono mb-6">
            Découvrez plus de mes projets sur GitHub
          </p>
          <a
            href="https://github.com/zakariaeelhassad"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-gray-800 text-cyan-400 rounded-full hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 group"
          >
            <Github className="w-5 h-5 mr-2" />
            <span className="font-mono">Voir le profil GitHub</span>
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

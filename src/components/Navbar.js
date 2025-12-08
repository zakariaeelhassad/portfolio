import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import { Moon, Sun, Globe, X } from "lucide-react";
import { useThemeLanguage } from "../context/ThemeLanguageContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { isDarkMode, toggleTheme, language, toggleLanguage, t } = useThemeLanguage();

  const navItems = ["about", "projects", "skills", "contact"];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    const debounce = (fn, delay) => {
      let timer;
      return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
      };
    };
    const debouncedHandleScroll = debounce(handleScroll, 50);
    window.addEventListener("scroll", debouncedHandleScroll);

    return () => window.removeEventListener("scroll", debouncedHandleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const scrollToSection = (section) => {
    setIsOpen(false);
    
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scroller.scrollTo(section, {
          smooth: true,
          offset: -70,
          duration: 500,
        });
      }, 300);
    } else {
      scroller.scrollTo(section, {
        smooth: true,
        offset: -70,
        duration: 500,
      });
    }
  };

  const handleProjectsClick = () => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/projects");
  };

  return (
    <header
      className={`fixed w-full top-0 z-[9999] transition-all duration-300 ${
        scrolled 
          ? "bg-white/90 dark:bg-gray-900/95 backdrop-blur-md shadow-lg" 
          : "bg-white dark:bg-gray-900"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group relative overflow-hidden font-mono text-2xl font-bold"
            aria-label="Navigate to home"
          >
            <span className="relative z-10 text-gray-900 dark:text-white transition-colors duration-300">
              <span className="text-cyan-600 dark:text-cyan-400">El Hassad</span>.Z
            </span>
            <div className="absolute inset-0 h-1 w-full bg-cyan-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 bottom-0"></div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  if (item !== "projects") {
                    scrollToSection(item);
                  } else {
                    handleProjectsClick();
                  }
                }}
                className="group relative px-2 py-1 text-gray-700 dark:text-white font-mono hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              >
                <span className="relative z-10">
                  {t(item)}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-600 dark:bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
                </span>
              </button>
            ))}

            {/* Controls */}
            <div className="flex items-center space-x-3 pl-4 border-l border-gray-300 dark:border-gray-700">
              <button 
                onClick={toggleTheme} 
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-700 dark:text-cyan-400 transition-colors"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button 
                onClick={toggleLanguage}
                className="flex items-center space-x-1 px-3 py-1 rounded-full border border-gray-300 dark:border-cyan-500/30 text-sm font-mono text-gray-700 dark:text-cyan-400 hover:bg-gray-200 dark:hover:bg-cyan-500/10 transition-colors"
              >
                <Globe size={16} />
                <span>{language.toUpperCase()}</span>
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-10 text-gray-900 dark:text-white focus:outline-none z-[10000]"
          >
            <span
              className={`absolute left-1/2 top-1/2 block w-5 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
            >
              <span
                className={`absolute top-0 right-0 w-5 h-0.5 bg-current transform transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></span>
              <span
                className={`absolute top-1.5 right-0 w-5 h-0.5 bg-current transform transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`absolute top-3 right-0 w-5 h-0.5 bg-current transform transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></span>
            </span>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 h-[100dvh] z-[9998] bg-white dark:bg-gray-900 transform transition-transform duration-300 md:hidden ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 z-[10001] p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-cyan-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>

          <nav
            className="relative h-full flex flex-col items-center justify-center space-y-8 text-2xl"
          >
            {navItems.map((item) => (
              <button
                key={item}
                onClick={(e) => {
                  e.stopPropagation();
                  if (item !== "projects") {
                    scrollToSection(item);
                  } else {
                    handleProjectsClick();
                  }
                }}
                className="group relative text-gray-800 dark:text-white font-mono transition-colors duration-300"
              >
                <span className="relative">
                  {t(item)}
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-cyan-600 dark:bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
                </span>
              </button>
            ))}
            
            <div className="flex gap-6 mt-8">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  toggleTheme();
                }} 
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-800 dark:text-cyan-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
              </button>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  toggleLanguage();
                }} 
                className="flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-800 dark:text-cyan-400 font-mono hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <Globe size={20} />
                {language.toUpperCase()}
              </button>
            </div>
          </nav>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
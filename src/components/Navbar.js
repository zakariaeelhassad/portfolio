import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { scroller } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const navItems = ["About", "Projects", "Skills", "Contact"];

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

  const scrollToSection = (section) => {
    setIsOpen(false);

    // 🔹 إذا ماشي فـ الصفحة الرئيسية، رجّعها قبل ما تسكروّل
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scroller.scrollTo(section, {
          smooth: true,
          offset: -50,
          duration: 500,
        });
      }, 400);
    } else {
      scroller.scrollTo(section, {
        smooth: true,
        offset: -50,
        duration: 500,
      });
    }
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-900/95 backdrop-blur-md" : "bg-gray-900"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="group relative overflow-hidden font-mono text-2xl font-bold"
            aria-label="Navigate to home"
          >
            <span className="relative z-10 text-white transition-colors duration-300">
              <span className="text-cyan-400">El Hassad</span>.Z
            </span>
            <div className="absolute inset-0 h-1 w-full bg-cyan-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 bottom-0"></div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  if (item !== "Projects") {
                    scrollToSection(item.toLowerCase());
                  } else {
                    navigate("/projects");
                  }
                }}
                className="group relative px-2 py-1 text-white font-mono"
              >
                <span className="relative z-10">
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
                </span>
                <div className="absolute inset-0 h-0 bg-cyan-400/10 group-hover:h-full transition-all duration-300 rounded"></div>
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
            className="md:hidden relative w-10 h-10 text-white focus:outline-none"
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

        <div
          className={`fixed inset-0 z-40 transform transition-transform duration-300 md:hidden ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div
            className="absolute inset-0 bg-gray-900/95 backdrop-blur-md"
            onClick={() => setIsOpen(false)}
          ></div>
          <nav
            className="relative h-full flex flex-col items-center justify-center space-y-8 text-2xl"
            onClick={() => setIsOpen(false)}
          >
            {navItems.map((item) => (
              <button
                key={item}
                onClick={(e) => {
                  e.stopPropagation();
                  if (item !== "Projects") {
                    scrollToSection(item.toLowerCase());
                  } else {
                    navigate("/projects");
                  }
                }}
                className="group relative text-white font-mono transition-colors duration-300"
              >
                <span className="relative">
                  {item}
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
                </span>
              </button>
            ))}
          </nav>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

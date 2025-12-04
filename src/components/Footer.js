import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-white py-8 px-4 transition-colors duration-500">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <p className="text-sm md:text-base text-center font-mono md:text-left">
          © 2024 Zakariae El Hassad. All rights reserved.
        </p>

        <div className="flex space-x-6 justify-center md:justify-end">
          <a
            href="https://github.com/zakariaeelhassad"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-600 dark:text-cyan-400 font-mono hover:text-cyan-700 dark:hover:text-cyan-500 transition-all"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/zakariaeelhassad/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-600 dark:text-cyan-400 font-mono hover:text-cyan-700 dark:hover:text-cyan-500 transition-all"
          >
            LinkedIn
          </a>
          <a
            href="mailto:zakariaelhassad031@gmail.com"
            className="text-cyan-600 dark:text-cyan-400 font-mono hover:text-cyan-700 dark:hover:text-cyan-500 transition-all"
          >
            Email
          </a>
          <a
            href="https://x.com/Zakariae_22"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-600 dark:text-cyan-400 font-mono hover:text-cyan-700 dark:hover:text-cyan-500 transition-all"
          >
            X
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
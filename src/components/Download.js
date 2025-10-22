import React, { useState } from 'react';

const AboutMe = () => {
  const [error, setError] = useState(false);

  const handleDownload = () => {
    try {
      const cvPath = '/assets/ZAKARIAE EL HASSAD (FR).pdf';
      
      const link = document.createElement('a');
      link.href = cvPath;
      link.download = encodeURIComponent('ZAKARIAE EL HASSAD (FR).pdf');
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setError(false);
    } catch (err) {
      setError(true);
      console.error('Error downloading CV:', err);
    }
  };

  return (
  
      <div className="rounded-lg text-center">
        <button
          onClick={handleDownload}
          className="group relative px-8 py-3 bg-gray-800 text-cyan-400 overflow-hidden rounded-lg transform transition-transform duration-300 hover:scale-105"
        >
          <div className="absolute inset-0 w-3 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-[250ms] ease-out group-hover:w-full" />
          <span className="relative group-hover:text-gray-900 font-mono">
            Download CV
          </span>
          <div className="absolute top-0 left-0 w-2 h-2 bg-cyan-400/30 rounded-full group-hover:animate-ping" />
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-cyan-400/30 rounded-full group-hover:animate-ping delay-100" />
        </button>
      </div>

      
  );
};

export default AboutMe;
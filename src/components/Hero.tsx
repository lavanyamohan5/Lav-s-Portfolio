import React from 'react';
import { ChevronDown, Download, Eye, ExternalLink } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-200 to-purple-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 p-1 animate-pulse">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-pink-300 to-purple-300 flex items-center justify-center text-white font-bold text-2xl md:text-3xl">
                    LM
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-400 rounded-full border-4 border-white flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-fade-in">
            Hi, I'm Lavanya Mohan
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-4 animate-fade-in delay-200">
            Data Analyst & Problem Solver
          </p>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-400">
            I'm passionate about creating beautiful, functional digital experiences that make a difference. 
            Let's build something amazing together!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in delay-600">
            <button 
              onClick={() => scrollToSection('projects')}
              className="group bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <Eye size={20} />
              View My Work
              <div className="group-hover:translate-x-1 transition-transform duration-300">
                →
              </div>
            </button>
            
            <a 
              href="https://drive.google.com/file/d/1PML6qZbiDZSTzhZsLfzZCMc28YkYqPrD/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white text-gray-800 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2 border border-gray-200"
            >
              <ExternalLink size={20} />
              View My Resume
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-500 hover:text-gray-700 transition-colors duration-300"
            >
              <ChevronDown size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

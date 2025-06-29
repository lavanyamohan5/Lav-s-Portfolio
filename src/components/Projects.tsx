import React from 'react';
import { ExternalLink, Github, Calendar, Code, Database, Palette } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Zomato Data Analysis',
      description: 'Analyzed Zomato\'s dataset for insights into restaurant ratings, pricing, and location trends using data visualization.',
      tools: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'MetaBase'],
      category: 'Data Analysis',
      icon: Database,
      color: 'from-blue-400 to-blue-600',
      year: '2024'
    },
    {
      title: 'Personal Portfolio Website',
      description: 'Designed and built a personal website to showcase my skills, projects, and experiences. Focused on layout and interactions.',
      tools: ['HTML', 'CSS', 'JavaScript'],
      category: 'Web Development',
      icon: Code,
      color: 'from-pink-400 to-pink-600',
      year: '2024'
    },
    {
      title: 'Python Mini Projects – Codsoft',
      description: 'Built beginner-level automation and logic-building mini projects during an internship at Codsoft.',
      tools: ['Python'],
      category: 'Programming',
      icon: Code,
      color: 'from-purple-400 to-purple-600',
      year: '2024'
    },
    {
      title: 'Front-end Project – Edunet Foundation',
      description: 'Created a responsive and interactive web application for educational use-cases as part of a front-end project.',
      tools: ['HTML', 'CSS', 'JavaScript'],
      category: 'Web Development',
      icon: Palette,
      color: 'from-green-400 to-green-600',
      year: '2024'
    },
    {
      title: 'Deep Learning Project (Academic)',
      description: 'Academic project focused on deep learning techniques and machine learning algorithms.',
      tools: ['Python'],
      category: 'Machine Learning',
      icon: Database,
      color: 'from-orange-400 to-orange-600',
      year: '2023'
    }
  ];

  const categoryColors = {
    'Data Analysis': 'bg-blue-100 text-blue-700',
    'Web Development': 'bg-pink-100 text-pink-700',
    'Programming': 'bg-purple-100 text-purple-700',
    'Machine Learning': 'bg-orange-100 text-orange-700'
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              My Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A collection of projects showcasing my skills in data analysis, web development, and programming
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full mt-6"></div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
              >
                {/* Project Header */}
                <div className={`relative p-6 bg-gradient-to-r ${project.color}`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center text-white">
                      <project.icon size={24} />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${categoryColors[project.category as keyof typeof categoryColors]} bg-white bg-opacity-90`}>
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <div className="flex items-center gap-2 text-white text-opacity-80">
                    <Calendar size={16} />
                    <span className="text-sm">{project.year}</span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <p className="text-gray-600 leading-relaxed">{project.description}</p>

                  {/* Tools Used */}
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3 text-sm">Tools & Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool, toolIndex) => (
                        <span 
                          key={toolIndex}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium hover:bg-gray-200 transition-colors"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons - Ready for future links */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex gap-3">
                      <button 
                        className="text-gray-400 hover:text-gray-600 transition-colors cursor-not-allowed"
                        title="GitHub link coming soon"
                      >
                        <Github size={20} />
                      </button>
                      <button 
                        className="text-gray-400 hover:text-gray-600 transition-colors cursor-not-allowed"
                        title="Live demo coming soon"
                      >
                        <ExternalLink size={20} />
                      </button>
                    </div>
                    <span className="text-xs text-gray-400">Links coming soon</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">More Projects Coming Soon!</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                I'm constantly working on new projects and learning new technologies. 
                Check back soon for updates and new additions to my portfolio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                  View All Work
                </button>
                <button className="bg-white text-gray-700 border border-gray-300 px-8 py-3 rounded-full font-semibold hover:bg-gray-50 hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
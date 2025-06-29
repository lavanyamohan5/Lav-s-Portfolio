import React from 'react';
import { ExternalLink } from 'lucide-react';

const About = () => {
  const interests = [
    { emoji: '🎨', label: 'Logo Design', color: 'from-pink-400 to-pink-600' },
    { emoji: '📊', label: 'Data Analysis with Python', color: 'from-blue-400 to-blue-600' },
    { emoji: '💻', label: 'Frontend Development', color: 'from-purple-400 to-purple-600' },
    { emoji: '📝', label: 'Blogging', color: 'from-green-400 to-green-600' },
    { emoji: '🖌️', label: 'Painting', color: 'from-yellow-400 to-yellow-600' },
    { emoji: '📷', label: 'Photography', color: 'from-indigo-400 to-indigo-600' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-80 h-80 rounded-3xl bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 p-1">
                  <div className="w-full h-full rounded-3xl bg-white flex items-center justify-center">
                    <div className="w-72 h-72 rounded-2xl bg-gradient-to-br from-pink-300 via-purple-300 to-blue-300 flex items-center justify-center text-white">
                      <span className="text-6xl font-bold">LAV</span>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
                  ✨
                </div>
              </div>
            </div>

            {/* About Content */}
            <div className="space-y-6">
              <div className="prose prose-lg">
                <p className="text-gray-700 leading-relaxed">
                  Hi! I'm Lavanya Mohan, a CSE student at Anna University, Tindivanam. I'm passionate about software development, open-source contribution, and the creative arts.

I'm still learning, exploring, and building — one step at a time. Whether it's writing code, analyzing data, designing a logo, or crafting a front-end experience, I enjoy expressing ideas and solving problems in my own way.

I'm especially drawn to data analysis, frontend development, and logo designing, where I get to blend logic with creativity. I also work with Python, and love learning tools that bring my ideas to life.

Beyond the tech, I love writing blogs — little digital diaries where I share my thoughts, lessons, and moments from my journey. 📝

I believe in growing through curiosity, not perfection. And this portfolio? It's just a glimpse of where I've been — and where I'm heading. 😊
                </p>
              </div>

              {/* Resume Button */}
              <div className="pt-4">
                <a 
                  href="https://drive.google.com/file/d/1kLl9S1Dk_4L8gEONybKHRpxL6GRGtSde/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <ExternalLink size={20} />
                  View My Resume
                </a>
              </div>

              {/* Interests */}
              <div className="pt-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">What I Love</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {interests.map((interest, index) => (
                    <div 
                      key={index}
                      className="group flex items-center gap-3 p-4 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer"
                    >
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${interest.color} flex items-center justify-center text-white text-xl group-hover:rotate-12 transition-transform duration-300`}>
                        {interest.emoji}
                      </div>
                      <span className="font-medium text-gray-700 text-sm lg:text-base">{interest.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
import React from 'react';
import { Code, Database, Palette, Users, Lightbulb, PenTool } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming & Scripting',
      icon: Code,
      color: 'from-blue-400 to-blue-600',
      skills: [
        { name: 'Python', emoji: '🐍' },
        { name: 'HTML, CSS, JavaScript', emoji: '🌐' }
      ]
    },
    {
      title: 'Frontend Development',
      icon: Palette,
      color: 'from-pink-400 to-pink-600',
      skills: [
        { name: 'React (Learning)', emoji: '⚛️' },
        { name: 'Responsive Web Design', emoji: '📱' }
      ]
    },
    {
      title: 'Data Analysis Tools',
      icon: Database,
      color: 'from-purple-400 to-purple-600',
      skills: [
        { name: 'MS Excel', emoji: '📊' },
        { name: 'Power BI (Learning)', emoji: '📈' },
        { name: 'MetaBase', emoji: '📉' }
      ]
    },
    {
      title: 'Tools & Platforms',
      icon: PenTool,
      color: 'from-green-400 to-green-600',
      skills: [
        { name: 'Git & GitHub', emoji: '🔧' },
        { name: 'Canva', emoji: '🎨' },
        { name: 'Visual Studio Code', emoji: '💻' },
        { name: 'Docker (Basics)', emoji: '🐳' }
      ]
    },
    {
      title: 'Soft Skills',
      icon: Users,
      color: 'from-orange-400 to-orange-600',
      skills: [
        { name: 'Creative Thinking', emoji: '💡' },
        { name: 'Writing', emoji: '✍️' },
        { name: 'Teamwork', emoji: '🤝' },
        { name: 'Problem Solving', emoji: '🧩' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tools and technologies I work with to bring ideas to life
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full mt-6"></div>
          </div>

          {/* Skill Categories Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={categoryIndex}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center text-white`}>
                    <category.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex} 
                      className="group flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-200 cursor-pointer"
                    >
                      <div className="w-8 h-8 flex items-center justify-center text-lg group-hover:scale-110 transition-transform duration-200">
                        {skill.emoji}
                      </div>
                      <span className="font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Always Learning & Growing</h3>
              <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
                I'm constantly exploring new technologies and expanding my skill set. 
                Currently focusing on React development and advanced data analysis techniques.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                  View Projects
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                  Let's Connect
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
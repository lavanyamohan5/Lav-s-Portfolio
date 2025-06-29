import React from 'react';
import { Calendar, MapPin, Users, Heart, BookOpen, Code, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'NSS Student Volunteer',
      organization: 'National Service Scheme',
      location: 'Anna University, Tindivanam',
      duration: 'Ongoing',
      type: 'Community Service',
      description: 'Participated in social service and community outreach through the National Service Scheme. Developed teamwork, responsibility, and people skills while contributing to meaningful community initiatives.',
      achievements: [
        'Participated in community outreach programs',
        'Developed strong teamwork and leadership skills',
        'Contributed to social welfare initiatives',
        'Enhanced communication and people skills'
      ],
      skills: ['Teamwork', 'Leadership', 'Communication', 'Social Responsibility'],
      icon: Heart,
      color: 'from-pink-400 to-pink-600'
    },
    {
      title: 'VGLUG Student Volunteer',
      organization: 'Villupuram GNU/Linux Users Group',
      location: 'FOSS Community',
      duration: 'Ongoing',
      type: 'Tech Community',
      description: 'Involved in the Free and Open Source Software (FOSS) community through VGLUG. Took part in peer learning, events, and open-source culture while expanding technical knowledge.',
      achievements: [
        'Active participation in FOSS community events',
        'Engaged in peer learning and knowledge sharing',
        'Contributed to open-source culture and values',
        'Networked with like-minded tech enthusiasts'
      ],
      skills: ['Open Source', 'Community Building', 'Technical Learning', 'Collaboration'],
      icon: Code,
      color: 'from-blue-400 to-blue-600'
    }
  ];

  const typeColors = {
    'Community Service': 'bg-pink-100 text-pink-700',
    'Tech Community': 'bg-blue-100 text-blue-700'
  };

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              My Journey So Far
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              While I'm currently a fresher, I'm actively learning, building, and contributing to communities that shape my growth
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full mt-6"></div>
          </div>

          {/* Fresher Status Card */}
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl p-8 text-white mb-12 text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-3xl">
                🎓
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4">I'm Currently a Fresher</h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto leading-relaxed">
              While I haven't yet gained professional work experience, I'm actively learning, building, and contributing to communities that shape my growth. Every project, every line of code, and every community interaction is a step forward in my journey.
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-400 to-blue-400 hidden md:block"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-white border-4 border-purple-400 rounded-full shadow-lg hidden md:block"></div>

                  {/* Content Card */}
                  <div className="md:ml-20 bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${exp.color} flex items-center justify-center text-white`}>
                            <exp.icon size={24} />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-800">{exp.title}</h3>
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${typeColors[exp.type as keyof typeof typeColors]} ml-2`}>
                              {exp.type}
                            </span>
                          </div>
                        </div>
                        <h4 className="text-xl text-gray-600 font-semibold mb-2">{exp.organization}</h4>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-500">
                          <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            <span>{exp.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin size={16} />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-6">{exp.description}</p>

                    {/* Key Contributions */}
                    <div className="mb-6">
                      <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <Users size={18} />
                        Key Contributions & Learning
                      </h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills Developed */}
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-3">Skills Developed</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Future Goals Section */}
          <div className="text-center mt-16">
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl">
                  🚀
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready for New Opportunities</h3>
              <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
                I'm actively seeking internships and entry-level positions where I can contribute my skills, 
                learn from experienced professionals, and grow as a developer. My volunteer experiences have 
                taught me the value of collaboration, community, and continuous learning.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://drive.google.com/file/d/1kLl9S1Dk_4L8gEONybKHRpxL6GRGtSde/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  <ExternalLink size={18} />
                  View My Resume
                </a>
                <button className="bg-white text-gray-700 border border-gray-300 px-8 py-3 rounded-full font-semibold hover:bg-gray-50 hover:shadow-lg transform hover:scale-105 transition-all duration-300">
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

export default Experience;
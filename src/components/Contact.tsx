import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'lavanyamohan253@gmail.com',
      link: 'mailto:lavanyamohan253@gmail.com',
      color: 'from-pink-400 to-pink-600'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '78457 71925',
      link: 'tel:7845771925',
      color: 'from-purple-400 to-purple-600'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Gingee, India',
      link: '#',
      color: 'from-blue-400 to-blue-600'
    }
  ];

  const socialLinks = [
    { 
      icon: Github, 
      url: 'https://github.com/lavanyamohan5', 
      label: 'GitHub', 
      color: 'hover:text-gray-800 hover:bg-gray-100',
      bgColor: 'bg-gray-50'
    },
    { 
      icon: Linkedin, 
      url: 'https://www.linkedin.com/in/lavanyamohan007', 
      label: 'LinkedIn', 
      color: 'hover:text-blue-600 hover:bg-blue-50',
      bgColor: 'bg-blue-50'
    },
    { 
      icon: Twitter, 
      url: 'https://x.com/LavanyaMohan07?t=H-3YKDkkEvSYvzp0_369rw&s=08', 
      label: 'Twitter', 
      color: 'hover:text-blue-400 hover:bg-blue-50',
      bgColor: 'bg-blue-50'
    },
    { 
      icon: Instagram, 
      url: 'https://www.instagram.com/heyy_its_lav?igsh=MTY1cDU5YnRvdzg1ag==', 
      label: 'Instagram', 
      color: 'hover:text-pink-600 hover:bg-pink-50',
      bgColor: 'bg-pink-50'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Let's Connect 👋
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              I'm always open to opportunities, collaborations, or a quick tech chat!
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Say Hello 👋</h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  I'm always excited to connect with fellow developers, potential collaborators, or anyone 
                  interested in discussing technology and innovation. Whether you have a project in mind, 
                  want to explore opportunities, or just want to chat about tech, I'd love to hear from you!
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="grid sm:grid-cols-1 gap-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${info.color} flex items-center justify-center text-white group-hover:rotate-12 transition-transform duration-300`}>
                        <info.icon size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">{info.title}</h4>
                        <p className="text-gray-600 group-hover:text-gray-800 transition-colors">{info.value}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-semibold text-gray-800 mb-6 text-lg">Find me on social media</h4>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex items-center gap-3 p-4 ${social.bgColor} rounded-2xl shadow-sm ${social.color} transform hover:scale-105 transition-all duration-300`}
                      aria-label={social.label}
                    >
                      <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-gray-600 group-hover:shadow-md transition-all duration-300">
                        <social.icon size={20} />
                      </div>
                      <span className="font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                        {social.label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Fun Fact */}
              <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-6 border border-pink-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm">
                    💡
                  </div>
                  <h5 className="font-semibold text-gray-800">Quick Response Promise</h5>
                </div>
                <p className="text-gray-600 text-sm">
                  I typically respond to messages within 24 hours. Looking forward to connecting with you!
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send me a message</h3>
              
              <form 
                action="https://formspree.io/f/xnnjlzbo" 
                method="POST" 
                className="space-y-6"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent focus:bg-white transition-all duration-200"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent focus:bg-white transition-all duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent focus:bg-white transition-all duration-200"
                  >
                    <option value="">Select a subject</option>
                    <option value="collaboration">Collaboration Opportunity</option>
                    <option value="internship">Internship Opportunity</option>
                    <option value="project">Project Discussion</option>
                    <option value="general">General Inquiry</option>
                    <option value="tech-chat">Tech Chat</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent focus:bg-white transition-all duration-200 resize-none"
                    placeholder="Tell me about your project, opportunity, or just say hello!"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500">
                  I'll get back to you within 24 hours! 😊
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
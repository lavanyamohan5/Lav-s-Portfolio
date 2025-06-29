import React from 'react';
import { Calendar, Clock, ArrowRight, ExternalLink, Heart } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: 'Being a Girl in the Cage of Society Is Not Easy',
      excerpt: 'Being a woman is not just about growing up—It\'s about growing through everything…',
      date: '2025-06-03',
      readTime: '4 min read',
      category: 'Personal',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg', // Symbolic freedom/empowerment image
      url: 'https://lavanyamohan7.wordpress.com/2025/06/03/being-a-girl-in-the-cage-of-society-is-not-easy/',
      likes: 28,
      description: 'A symbolic drawing of a birdcage with an open door and a glowing girl walking out.'
    },
    {
      title: 'It Hit Me… and I Didn\'t See It Coming',
      excerpt: 'Tiny moments. Big feelings. All real…',
      date: '2025-05-14',
      readTime: '3 min read',
      category: 'Emotions',
      image: 'https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg', // Abstract emotional waves
      url: 'https://lavanyamohan7.wordpress.com/2025/05/14/it-hit-me-and-i-didnt-see-it-coming/',
      likes: 15,
      description: 'Abstract heart with waves around it, symbolizing sudden emotions.'
    },
    {
      title: 'In Their Little World… A Miracle We Forgot..🫶✨',
      excerpt: 'Have you ever just watched a child play? Where anything becomes everything…',
      date: '2025-04-21',
      readTime: '5 min read',
      category: 'Wonder',
      image: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg', // Child imagination/play
      url: 'https://lavanyamohan7.wordpress.com/2025/04/21/in-their-little-world-a-miracle-we-forgot/',
      likes: 32,
      description: 'A dreamy sketch of a child playing with imagination — cape, toy sword, stars.'
    },
    {
      title: 'It Was Just A Random Day… Until It Wasn\'t',
      excerpt: 'Something simple… yet so deep. A moment that changed everything.',
      date: '2025-04-14',
      readTime: '4 min read',
      category: 'Reflection',
      image: 'https://images.pexels.com/photos/1438761/pexels-photo-1438761.jpeg', // Cozy coffee/rain scene
      url: 'https://lavanyamohan7.wordpress.com/2025/04/14/it-was-just-a-random-day-until-it-wasnt/',
      likes: 19,
      description: 'A soft rain window or coffee mug scene with a deep, warm feeling.'
    }
  ];

  const categoryColors = {
    'Personal': 'bg-pink-100 text-pink-700 border-pink-200',
    'Emotions': 'bg-purple-100 text-purple-700 border-purple-200',
    'Wonder': 'bg-blue-100 text-blue-700 border-blue-200',
    'Reflection': 'bg-amber-100 text-amber-700 border-amber-200'
  };

  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Words I Carry
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Little digital diaries where I share my thoughts, lessons, and moments from my journey
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {blogPosts.map((post, index) => (
              <article 
                key={index}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.description}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-4 py-2 rounded-full text-sm font-medium border ${categoryColors[post.category as keyof typeof categoryColors]} backdrop-blur-sm bg-white/90`}>
                      {post.category}
                    </span>
                  </div>
                  
                  {/* Likes */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-2 flex items-center gap-2">
                    <Heart size={16} className="text-red-500 fill-current" />
                    <span className="text-sm font-medium text-gray-700">{post.likes}</span>
                  </div>
                </div>

                <div className="p-8 space-y-4">
                  {/* Meta Information */}
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'long', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={14} />
                      {post.readTime}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors leading-tight">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 leading-relaxed italic">
                    "{post.excerpt}"
                  </p>

                  {/* Read More Button */}
                  <div className="pt-4">
                    <a 
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-800 transition-colors"
                    >
                      Read Full Story
                      <ExternalLink size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-200" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl">
                  📝
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Explore More Stories</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                These are just a few glimpses into my thoughts and experiences. 
                Visit my blog to read more stories, reflections, and insights from my journey.
              </p>
              <a 
                href="https://lavanyamohan7.wordpress.com/author/lavanyamohan253/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <ExternalLink size={20} />
                Read All Blogs
              </a>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-pink-200 rounded-full opacity-20 animate-float hidden lg:block"></div>
          <div className="absolute bottom-20 right-10 w-16 h-16 bg-purple-200 rounded-full opacity-20 animate-float delay-1000 hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
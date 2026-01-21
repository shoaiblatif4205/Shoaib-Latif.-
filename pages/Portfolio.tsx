
import React, { useState } from 'react';
import { ExternalLink, Search } from 'lucide-react';
import { PROJECTS } from '../constants';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', ...Array.from(new Set(PROJECTS.map(p => p.category)))];
  
  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-[#161f30] mb-6">My Works</h1>
          <p className="text-gray-500 text-xl max-w-2xl mx-auto">
            Explore a gallery of successful digital marketing campaigns, creative content, and SEO victories.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-bold transition-all border-2 ${
                filter === cat 
                  ? 'bg-[#161f30] text-white border-[#161f30]' 
                  : 'bg-white text-[#161f30] border-gray-100 hover:border-blue-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300">
                    <button className="bg-white text-[#161f30] p-4 rounded-full hover:bg-blue-600 hover:text-white transition-all shadow-xl">
                      <Search size={24} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <span className="inline-block bg-blue-50 text-blue-600 text-xs font-black px-3 py-1 rounded-full uppercase tracking-widest mb-4">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-[#161f30] mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-500 mb-6 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
                <a 
                  href={project.link} 
                  className="flex items-center text-[#161f30] font-bold hover:text-blue-600 transition-colors"
                >
                  View Case Study <ExternalLink size={18} className="ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;


import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#161f30] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-gray-700 pb-12 mb-8">
        {/* Bio */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">Shoaib Latif</h3>
          <p className="text-gray-400 leading-relaxed">
            Full-stack Digital Marketer specialized in driving scalable growth through data-driven SEO, PPC, and paid social strategies.
          </p>
          <div className="flex flex-wrap gap-4">
            {SOCIAL_LINKS.map((social) => (
              <a 
                key={social.name} 
                href={social.url} 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold mb-6">Quick Links</h4>
          <ul className="space-y-3">
            <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Me</Link></li>
            <li><Link to="/portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</Link></li>
            <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
            <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-bold mb-6">Top Services</h4>
          <ul className="space-y-3">
            <li className="text-gray-400">Search Engine Optimization</li>
            <li className="text-gray-400">PPC & Google Ads</li>
            <li className="text-gray-400">Meta & TikTok Ads</li>
            <li className="text-gray-400">Content Marketing</li>
            <li className="text-gray-400">Data Analytics</li>
          </ul>
        </div>

        {/* Contact Info Box */}
        <div className="space-y-4">
          <h4 className="text-lg font-bold mb-6">Contact Info</h4>
          <div className="border-2 border-blue-500/30 p-6 rounded-2xl space-y-5 bg-blue-500/5">
            <div className="flex items-center space-x-4 group">
              <div className="text-blue-500">
                <Phone size={20} />
              </div>
              <span className="text-gray-300 group-hover:text-white transition-colors text-sm md:text-base">+92 322 6807500</span>
            </div>
            <div className="flex items-center space-x-4 group">
              <div className="text-blue-500">
                <Mail size={20} />
              </div>
              <a href="mailto:shoaiblatifofficial42@gmail.com" className="text-gray-300 group-hover:text-white transition-colors text-sm md:text-base truncate">
                shoaiblatifofficial42@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-4 group">
              <div className="text-blue-500">
                <MapPin size={20} />
              </div>
              <span className="text-gray-300 group-hover:text-white transition-colors text-sm md:text-base">Lahore, Pakistan</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Shoaib Latif. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

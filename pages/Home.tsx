
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Download, 
  Search, 
  Target, 
  BarChart3, 
  Megaphone, 
  PenTool, 
  Globe, 
  MapPin, 
  TrendingUp, 
  Mail,
  ExternalLink
} from 'lucide-react';
import { SERVICES, PROJECTS, BLOG_POSTS } from '../constants';
import TestimonialCarousel from '../components/TestimonialCarousel';

const iconMap: { [key: string]: any } = {
  Search, Target, BarChart3, Megaphone, PenTool, Globe, MapPin, TrendingUp, Mail
};

const Home: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center bg-gradient-to-br from-white to-blue-50">
        <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Full-stack Digital Marketer</h2>
              <h1 className="text-5xl md:text-7xl font-extrabold text-[#161f30] leading-tight">
                Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Shoaib Latif</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 max-w-lg leading-relaxed">
                I am a Full Stack Digital Marketing Specialist with expertise in SEO, social media, PPC, and content strategy. I help brands grow online and achieve measurable results.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="file:///C:/Users/user/Downloads/Shoaib%20Latif%20Digital%20Marketing%20Specialist%20(1).pdf" 
                download
                className="flex items-center justify-center bg-[#161f30] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg transform hover:-translate-y-1"
              >
                <Download size={20} className="mr-2" /> Download Resume
              </a>
              <Link 
                to="/about"
                className="flex items-center justify-center border-2 border-[#161f30] text-[#161f30] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#161f30] hover:text-white transition-all transform hover:-translate-y-1"
              >
                About Me
              </Link>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="absolute -z-10 w-[400px] h-[400px] bg-blue-100 rounded-full blur-3xl opacity-50 animate-pulse"></div>
            <img 
              src="https://image2url.com/r2/default/images/1770144517276-afc838c3-b263-4c61-9b2c-24cbf6cef3e0.jpg" 
              alt="Shoaib Latif" 
              className="rounded-3xl shadow-2xl w-full max-w-md object-cover transform hover:scale-105 transition-transform duration-500 border-8 border-white"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold text-[#161f30] mb-4">My Core Services</h2>
            <p className="text-gray-500 text-lg">Specialized solutions tailored to grow your digital footprint and maximize your ROI.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => {
              const Icon = iconMap[service.icon];
              return (
                <div key={service.id} className="group p-8 rounded-2xl border border-gray-100 hover:border-blue-200 bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Icon size={30} />
                  </div>
                  <h3 className="text-xl font-bold text-[#161f30] mb-3">{service.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
            <div className="max-w-xl">
              <h2 className="text-4xl font-extrabold text-[#161f30] mb-4">Featured Projects</h2>
              <p className="text-gray-500 text-lg">A selection of my most impactful marketing campaigns and digital growth projects.</p>
            </div>
            <Link to="/portfolio" className="flex items-center text-blue-600 font-bold hover:gap-3 transition-all">
              View All Projects <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROJECTS.slice(0, 6).map((project) => (
              <div key={project.id} className="group relative overflow-hidden rounded-2xl shadow-lg bg-white aspect-[4/3]">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-[#161f30] bg-opacity-0 group-hover:bg-opacity-90 transition-all duration-300 flex flex-col justify-end p-8 text-white">
                  <div className="opacity-0 group-hover:opacity-100 translate-y-8 group-hover:translate-y-0 transition-all duration-500">
                    <span className="text-blue-400 font-bold text-xs uppercase tracking-widest">{project.category}</span>
                    <h3 className="text-2xl font-bold mt-2 mb-4">{project.title}</h3>
                    <p className="text-gray-300 mb-6 line-clamp-2">{project.description}</p>
                    <Link to="/portfolio" className="inline-flex items-center bg-blue-600 px-6 py-2 rounded-lg font-bold hover:bg-blue-500">
                      View Details <ExternalLink size={16} className="ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-[#161f30] mb-4">What Clients Say</h2>
            <p className="text-gray-500 text-lg">Real results from business owners and founders around the globe.</p>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold text-[#161f30] mb-4">Marketing Insights</h2>
            <p className="text-gray-500 text-lg">Expert advice, tips, and trends from the world of digital marketing.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_POSTS.slice(0, 3).map((post) => (
              <div key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-md group hover:shadow-2xl transition-all duration-300">
                <div className="h-56 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-8">
                  <span className="text-blue-600 font-bold text-sm">{post.date}</span>
                  <h3 className="text-2xl font-bold text-[#161f30] mt-2 mb-4 group-hover:text-blue-600 transition-colors">{post.title}</h3>
                  <p className="text-gray-500 mb-6 leading-relaxed line-clamp-3">{post.excerpt}</p>
                  <Link to={`/blog`} className="font-bold flex items-center text-[#161f30] hover:text-blue-600 transition-colors">
                    Read Full Story <ArrowRight size={18} className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 md:px-8 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8">Ready to grow your business?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">Let's build a strategy that works for your unique goals. Contact me today for a free audit.</p>
          <Link 
            to="/contact" 
            className="inline-block bg-white text-blue-600 px-10 py-4 rounded-xl font-extrabold text-xl hover:bg-gray-100 transition-all shadow-xl"
          >
            Get In Touch Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

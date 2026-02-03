
import React from 'react';
import { Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Image */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-blue-100 rounded-[2rem] -rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
            <img 
              src="https://image2url.com/r2/default/images/1770144517276-afc838c3-b263-4c61-9b2c-24cbf6cef3e0.jpg" 
              alt="Shoaib Latif" 
              className="relative z-10 rounded-2xl shadow-2xl w-full object-cover"
            />
            <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-xl z-20 border border-gray-50 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="bg-blue-600 text-white p-3 rounded-xl">
                  <Award size={32} />
                </div>
                <div>
                  <h4 className="text-3xl font-extrabold text-[#161f30]">3+</h4>
                  <p className="text-gray-500 font-medium">Years Experience</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Bio */}
          <div className="space-y-10">
            <div>
              <h1 className="text-5xl font-extrabold text-[#161f30] mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#161f30] to-blue-600">
                Full Stack Digital Marketing Specialist
              </h1>
              <p className="text-gray-600 text-xl leading-relaxed">
                I am Shoaib Latif, a Full Stack Digital Marketing Specialist with over 3 years of hands-on experience helping brands and businesses grow online. My expertise spans SEO, social media marketing, PPC, content strategy, email marketing, and web analytics. I focus on creating data-driven campaigns that drive measurable results, improve brand visibility, and boost engagement. I thrive at the intersection of creativity and analytics, delivering strategies that not only look good but perform exceptionally. Lets work together to take your brand to the next level.
              </p>
            </div>
            
            <div className="pt-8 border-t border-gray-100">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-[#161f30] text-lg mb-2">Strategy First</h4>
                  <p className="text-gray-500">Every campaign starts with deep market research and competitor analysis to ensure a winning edge.</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#161f30] text-lg mb-2">Data Driven</h4>
                  <p className="text-gray-500">Decisions are made based on real-time analytics and user behavior patterns, not guesswork.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

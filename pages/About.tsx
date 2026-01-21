
import React, { useState } from 'react';
import { CheckCircle2, Award, BookOpen, Clock } from 'lucide-react';

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'skills' | 'education'>('skills');

  const skills = [
    { name: 'Search Engine Optimization', level: 95 },
    { name: 'Google Ads & PPC', level: 90 },
    { name: 'Meta Advertising', level: 92 },
    { name: 'Content Marketing', level: 88 },
    { name: 'Data Analytics (GA4)', level: 85 },
    { name: 'Email Automation', level: 82 },
  ];

  const education = [
    { year: '2020 - 2024', degree: 'Bachelor of Science in Marketing', school: 'Punjab University, Lahore', desc: 'Focus on digital consumer behavior and market research.' },
    { year: '2019', degree: 'Google Ads Certification', school: 'Google Skillshop', desc: 'Comprehensive mastery of Search, Display, and Video advertising.' },
    { year: '2018', degree: 'Meta Blueprint Professional', school: 'Facebook Ads Certification', desc: 'Advanced strategies for paid social growth and conversion.' },
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Image */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-blue-100 rounded-[2rem] -rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
            <img 
              src="https://picsum.photos/seed/shoaib2/800/1000" 
              alt="Shoaib Latif" 
              className="relative z-10 rounded-2xl shadow-2xl w-full object-cover"
            />
            <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-xl z-20 border border-gray-50 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="bg-blue-600 text-white p-3 rounded-xl">
                  <Award size={32} />
                </div>
                <div>
                  <h4 className="text-3xl font-extrabold text-[#161f30]">5+</h4>
                  <p className="text-gray-500 font-medium">Years Experience</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Bio and Tabs */}
          <div className="space-y-10">
            <div>
              <h1 className="text-5xl font-extrabold text-[#161f30] mb-6">Expert in Scalable Growth</h1>
              <p className="text-gray-600 text-xl leading-relaxed">
                I'm Shoaib Latif, a passionate digital marketing strategist dedicated to helping brands navigate the complex digital landscape. 
                With over 5 years of hands-on experience, I bridge the gap between creative storytelling and data-centric performance.
              </p>
              <p className="mt-6 text-gray-500 leading-relaxed">
                My philosophy is simple: **Marketing should be measurable.** I don't just aim for "visibility"—I aim for conversions, customer loyalty, and sustainable growth. From optimizing your tech stack to crafting high-performing ad copy, I handle the full spectrum of your digital presence.
              </p>
            </div>

            <div className="flex space-x-6 border-b border-gray-100 pb-2">
              <button 
                onClick={() => setActiveTab('skills')}
                className={`text-xl font-bold pb-4 transition-all relative ${activeTab === 'skills' ? 'text-blue-600' : 'text-gray-400'}`}
              >
                My Skills
                {activeTab === 'skills' && <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 rounded-full"></div>}
              </button>
              <button 
                onClick={() => setActiveTab('education')}
                className={`text-xl font-bold pb-4 transition-all relative ${activeTab === 'education' ? 'text-blue-600' : 'text-gray-400'}`}
              >
                Education
                {activeTab === 'education' && <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 rounded-full"></div>}
              </button>
            </div>

            <div className="min-h-[300px]">
              {activeTab === 'skills' ? (
                <div className="space-y-6 animate-fade-in">
                  {skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="font-bold text-[#161f30]">{skill.name}</span>
                        <span className="text-blue-600 font-bold">{skill.level}%</span>
                      </div>
                      <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-1000 ease-out" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="flex items-center gap-2 text-gray-600"><CheckCircle2 className="text-green-500" size={18} /> Keyword Research</div>
                    <div className="flex items-center gap-2 text-gray-600"><CheckCircle2 className="text-green-500" size={18} /> A/B Testing</div>
                    <div className="flex items-center gap-2 text-gray-600"><CheckCircle2 className="text-green-500" size={18} /> Landing Page Ops</div>
                    <div className="flex items-center gap-2 text-gray-600"><CheckCircle2 className="text-green-500" size={18} /> GTM Tracking</div>
                  </div>
                </div>
              ) : (
                <div className="space-y-8 animate-fade-in">
                  {education.map((edu, idx) => (
                    <div key={idx} className="flex gap-6">
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                          <BookOpen size={20} />
                        </div>
                        {idx !== education.length - 1 && <div className="w-0.5 flex-grow bg-blue-100 my-2"></div>}
                      </div>
                      <div className="pb-8">
                        <span className="text-blue-600 font-bold flex items-center gap-2"><Clock size={16} /> {edu.year}</span>
                        <h4 className="text-xl font-bold text-[#161f30] mt-1">{edu.degree}</h4>
                        <p className="text-gray-500 font-medium">{edu.school}</p>
                        <p className="text-gray-400 mt-2 text-sm">{edu.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

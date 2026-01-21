
import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="relative max-w-4xl mx-auto py-12 px-4 overflow-hidden">
      <div 
        className="flex transition-transform duration-700 ease-in-out" 
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {TESTIMONIALS.map((t) => (
          <div key={t.id} className="w-full flex-shrink-0 px-4">
            <div className="bg-white border border-gray-100 shadow-xl rounded-2xl p-8 md:p-12 relative">
              <Quote className="absolute top-6 right-8 text-blue-100" size={60} />
              <p className="text-xl md:text-2xl italic text-[#161f30] mb-8 leading-relaxed relative z-10">
                "{t.content}"
              </p>
              <div className="flex items-center">
                <img 
                  src={t.avatar} 
                  alt={t.name} 
                  className="w-16 h-16 rounded-full border-2 border-blue-500 mr-4 object-cover" 
                />
                <div>
                  <h4 className="font-bold text-lg text-[#161f30]">{t.name}</h4>
                  <p className="text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8 space-x-4">
        <button 
          onClick={prevSlide}
          className="p-3 rounded-full bg-[#161f30] text-white hover:bg-blue-600 transition-all shadow-md"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={nextSlide}
          className="p-3 rounded-full bg-[#161f30] text-white hover:bg-blue-600 transition-all shadow-md"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;


import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white p-10 md:p-12 rounded-3xl shadow-2xl border border-gray-50">
            <h2 className="text-4xl font-extrabold text-[#161f30] mb-4">Get in Touch</h2>
            <p className="text-gray-500 mb-10 text-lg">
              Have a project in mind or just want to say hi? Fill out the form below and I'll get back to you within 24 hours.
            </p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[#161f30] font-bold mb-2">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full px-6 py-4 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[#161f30] font-bold mb-2">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full px-6 py-4 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[#161f30] font-bold mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+92 322 6807500" 
                    className="w-full px-6 py-4 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[#161f30] font-bold mb-2">Subject</label>
                  <input 
                    type="text" 
                    placeholder="SEO Audit / Collaboration" 
                    className="w-full px-6 py-4 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[#161f30] font-bold mb-2">Your Message</label>
                <textarea 
                  rows={5} 
                  placeholder="Tell me about your business goals..." 
                  className="w-full px-6 py-4 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all resize-none"
                ></textarea>
              </div>
              <button className="w-full bg-[#161f30] text-white py-5 rounded-xl font-bold text-xl hover:bg-blue-600 transition-all flex items-center justify-center gap-3 shadow-xl transform hover:-translate-y-1">
                Send Message <Send size={20} />
              </button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="flex flex-col h-full">
            <div className="space-y-10 mb-12">
              <h2 className="text-4xl font-extrabold text-[#161f30]">Contact Information</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#161f30]">Call Me Directly</h4>
                    <p className="text-gray-500 mt-1">+92 322 6807500</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#161f30]">Email Me</h4>
                    <p className="text-gray-500 mt-1">shoaiblatifofficial42@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#161f30]">Visit Me</h4>
                    <p className="text-gray-500 mt-1">Lahore, Pakistan</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-grow rounded-3xl overflow-hidden shadow-2xl min-h-[300px] border-4 border-white">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108842.122822554!2d74.2274984183742!3d31.52036955744414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190196e382d305%3A0xc39116c496c14115!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1715694851234!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Google Map of Lahore"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

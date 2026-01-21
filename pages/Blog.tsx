
import React, { useState } from 'react';
import { Calendar, User, ArrowRight, ChevronLeft } from 'lucide-react';
import { BLOG_POSTS } from '../constants';
import { BlogPost } from '../types';

const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  if (selectedPost) {
    return (
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <button 
            onClick={() => setSelectedPost(null)}
            className="flex items-center text-blue-600 font-bold mb-10 hover:gap-2 transition-all"
          >
            <ChevronLeft size={20} className="mr-1" /> Back to Blog
          </button>
          
          <img 
            src={selectedPost.image} 
            alt={selectedPost.title} 
            className="w-full h-[450px] object-cover rounded-3xl mb-12 shadow-2xl" 
          />
          
          <div className="flex items-center gap-6 mb-8 text-gray-400 font-medium">
            <span className="flex items-center gap-2"><Calendar size={18} className="text-blue-500" /> {selectedPost.date}</span>
            <span className="flex items-center gap-2"><User size={18} className="text-blue-500" /> {selectedPost.author}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#161f30] mb-8 leading-tight">
            {selectedPost.title}
          </h1>
          
          <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-6">
            <p className="text-xl font-medium text-gray-700 italic border-l-4 border-blue-500 pl-6">
              {selectedPost.excerpt}
            </p>
            <p>{selectedPost.content}</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <h3 className="text-2xl font-bold text-[#161f30]">Key Takeaways</h3>
            <ul className="list-disc pl-6 space-y-3">
              <li>Always focus on user intent when building SEO strategies.</li>
              <li>Data-driven decisions outperform intuition every single time.</li>
              <li>Consistency is the secret sauce for social media growth.</li>
            </ul>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>

          <div className="mt-16 p-10 bg-gray-50 rounded-3xl border border-gray-100 flex flex-col md:flex-row items-center gap-8">
            <img src="https://picsum.photos/seed/shoaib/150/150" alt="Shoaib Latif" className="w-24 h-24 rounded-full border-4 border-white shadow-md" />
            <div>
              <h4 className="text-xl font-bold text-[#161f30] mb-2">About the Author: Shoaib Latif</h4>
              <p className="text-gray-500">Shoaib is a Full-stack Digital Marketer with a passion for helping businesses succeed online. Follow him for more insights on growth hacking and digital strategy.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-[#161f30] mb-6">Marketing Insights</h1>
          <p className="text-gray-500 text-xl max-w-2xl mx-auto">
            Stay updated with the latest trends, tips, and professional secrets in the world of digital marketing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {BLOG_POSTS.map((post) => (
            <div 
              key={post.id} 
              className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-50 group hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
            >
              <div className="h-60 overflow-hidden relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute top-4 left-4 bg-white px-4 py-1 rounded-full text-blue-600 font-bold text-xs shadow-md">
                  Marketing
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-gray-400 text-xs font-bold uppercase tracking-widest mb-4">
                  <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                </div>
                <h3 className="text-2xl font-bold text-[#161f30] mb-4 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-500 mb-8 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-auto">
                  <button 
                    onClick={() => setSelectedPost(post)}
                    className="flex items-center text-[#161f30] font-black hover:text-blue-600 transition-colors uppercase text-sm tracking-widest"
                  >
                    Read More <ArrowRight size={18} className="ml-2" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;

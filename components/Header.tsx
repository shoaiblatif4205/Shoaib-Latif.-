
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Download } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <Link to="/" className="text-2xl font-extrabold text-[#161f30] tracking-tight hover:text-blue-600 transition-colors">
          Shoaib Latif
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-medium transition-colors hover:text-blue-600 ${location.pathname === link.path ? 'text-blue-600' : 'text-[#161f30]'}`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://image2url.com/r2/default/documents/1770147568923-6636bf01-034f-4db5-8f33-bb685a37de89.pdf"
            download
            className="flex items-center bg-[#161f30] text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-700 transition-all transform hover:scale-105"
          >
            <Download size={18} className="mr-2" /> Resume
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-[#161f30]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t py-6 px-4 absolute top-full left-0 w-full shadow-lg flex flex-col space-y-4 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-lg font-semibold w-full text-center py-2 ${location.pathname === link.path ? 'text-blue-600' : 'text-[#161f30]'}`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="/resume.pdf"
            download
            className="flex items-center bg-[#161f30] text-white px-8 py-3 rounded-full font-bold w-full justify-center"
            onClick={() => setIsOpen(false)}
          >
            <Download size={18} className="mr-2" /> Download Resume
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;

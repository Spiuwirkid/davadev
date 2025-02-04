import React from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full z-50 backdrop-blur-lg bg-white/70 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">Dava Yuste</h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
            <a href="#skills" className="text-gray-700 hover:text-blue-600 transition-colors">Skills</a>
            <a href="#portfolio" className="text-gray-700 hover:text-blue-600 transition-colors">Portfolio</a>
            <a href="#experience" className="text-gray-700 hover:text-blue-600 transition-colors">Experience</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/Spiuwirkid" className="text-gray-700 hover:text-blue-600 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/dava-yuste-5b45972a6" className="text-gray-700 hover:text-blue-600 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:davayusteputra@proton.me" className="text-gray-700 hover:text-blue-600 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 backdrop-blur-lg bg-white/70">
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">About</a>
            <a href="#skills" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Skills</a>
            <a href="#portfolio" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Portfolio</a>
            <a href="#experience" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Experience</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
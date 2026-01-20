import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme } = useTheme();
  
  // Check if current route matches the link
  const isActive = (path) => router.pathname === path;
  
  // Handle scroll event to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  return (
    <nav className={`fixed top-0 w-full text-white py-4 px-6 md:px-12 flex justify-between items-center z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <Link href="/" className="text-xl font-bold flex items-center">
        <span className="text-blue-500 mr-1">Kunal</span>
        <span className="text-blue-500 ml-1">Bothra</span>
      </Link>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8 items-center">
        <Link href="/" className={`transition-colors duration-300 ${isActive('/') ? 'text-blue-400' : 'text-gray-300 hover:text-white'}`}>Home</Link>
        <Link href="/about" className={`transition-colors duration-300 ${isActive('/about') ? 'text-blue-400' : 'text-gray-300 hover:text-white'}`}>About</Link>
        <Link href="/projects" className={`transition-colors duration-300 ${isActive('/projects') ? 'text-blue-400' : 'text-gray-300 hover:text-white'}`}>Projects</Link>
        <Link href="/contact" className={`transition-colors duration-300 ${isActive('/contact') ? 'text-blue-400' : 'text-gray-300 hover:text-white'}`}>Contact</Link>
      </div>
      
      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-gray-300 focus:outline-none" 
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-sm shadow-lg py-4 px-6 flex flex-col space-y-4">
          <Link href="/" className={`transition-colors duration-300 ${isActive('/') ? 'text-blue-400' : 'text-gray-300 hover:text-white'}`}>Home</Link>
          <Link href="/about" className={`transition-colors duration-300 ${isActive('/about') ? 'text-blue-400' : 'text-gray-300 hover:text-white'}`}>About</Link>
          <Link href="/projects" className={`transition-colors duration-300 ${isActive('/projects') ? 'text-blue-400' : 'text-gray-300 hover:text-white'}`}>Projects</Link>
          <Link href="/contact" className={`transition-colors duration-300 ${isActive('/contact') ? 'text-blue-400' : 'text-gray-300 hover:text-white'}`}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

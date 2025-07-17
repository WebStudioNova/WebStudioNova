
import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../constants/content';
import { useTranslation } from '../hooks/useTranslation';
import LanguageSwitcher from './LanguageSwitcher';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
      setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const NavLinks = ({ className }: { className?: string }) => (
    <>
      {NAV_LINKS.map((link) => (
        <NavLink
          key={link.nameKey}
          to={link.path}
          className={({ isActive }) =>
            `${className} relative font-medium transition-colors duration-300 ${isActive ? 'text-brand-red' : 'text-brand-light hover:text-brand-red'}`
          }
        >
          {t(link.nameKey)}
        </NavLink>
      ))}
    </>
  );

  return (
    <>
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-brand-dark/90 backdrop-blur-lg border-b border-gray-800' : 'bg-transparent'}`}>
        <nav className="container mx-auto px-6 py-5 flex justify-between items-center">
          <Link to="/" className="text-2xl font-display font-bold text-brand-light hover:text-brand-red transition-colors">
            Studio Nova
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
            <LanguageSwitcher />
          </div>
          <div className="flex items-center">
            <Link
              to="/contact"
              className="hidden md:block bg-brand-red text-white font-bold py-2 px-6 rounded-full hover:bg-white hover:text-brand-dark transition-all duration-300 transform hover:scale-105"
            >
              {t('start_project')}
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-brand-light z-50 p-2"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-around">
                <span className={`block w-full h-0.5 bg-current transition-transform duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-[5px]' : ''}`}></span>
                <span className={`block w-full h-0.5 bg-current transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-full h-0.5 bg-current transition-transform duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-[5px]' : ''}`}></span>
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-brand-dark z-40 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-500 ease-in-out md:hidden`}>
        <div className="container mx-auto px-6 h-full flex flex-col justify-center items-center text-center space-y-8">
          <NavLinks className="text-4xl font-display" />
           <Link
              to="/contact"
              className="bg-brand-red text-white font-bold py-4 px-10 rounded-full hover:bg-white hover:text-brand-dark transition-all duration-300 transform hover:scale-105 text-lg"
            >
              {t('start_project')}
            </Link>
            <LanguageSwitcher className="mt-8" />
        </div>
      </div>
    </>
  );
};

export default Header;

import { useState, useEffect } from 'react';
import { Menu, X, Languages, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.experience'), href: '#experience' },
    { name: t('nav.testimonials'), href: '#testimonials' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    
    // Pequeño retraso para permitir que el menú comience a cerrarse antes de calcular el scroll
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        const offset = 80; // Altura aproximada del navbar
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  const languages = [
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? theme === 'dark'
            ? 'bg-gray-800/95 backdrop-blur-md shadow-lg'
            : 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl md:text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-500 text-transparent bg-clip-text cursor-pointer"
            onClick={() => scrollToSection('#home')}
          >
            Esteban Ordoñez
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${
                  theme === 'dark'
                    ? 'text-gray-200 hover:text-green-400'
                    : 'text-gray-700 hover:text-green-600'
                } transition-colors duration-200 font-medium`}
              >
                {link.name}
              </motion.button>
            ))}

            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className={`p-2 rounded-lg ${
                theme === 'dark'
                  ? 'bg-gray-700 hover:bg-gray-600 text-yellow-400'
                  : 'bg-green-50 hover:bg-green-100 text-green-700'
              } transition-colors`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>

            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg ${
                    theme === 'dark'
                      ? 'bg-gray-700 hover:bg-gray-600 text-green-400'
                      : 'bg-green-50 hover:bg-green-100 text-green-700'
                  } transition-colors`}
                >
                  <Languages size={18} />
                  <span className="text-sm font-medium">{language.toUpperCase()}</span>
                </motion.button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className={`${
                theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
              }`}>
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code as any)}
                    className={`cursor-pointer ${
                      language === lang.code
                        ? theme === 'dark'
                          ? 'bg-gray-700'
                          : 'bg-green-50'
                        : ''
                    } ${theme === 'dark' ? 'text-gray-200 hover:bg-gray-700' : 'hover:bg-green-50'}`}
                  >
                    <span className="mr-2">{lang.flag}</span>
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg ${
                theme === 'dark'
                  ? 'bg-gray-700 text-yellow-400'
                  : 'bg-green-50 text-green-700'
              }`}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className={`p-2 rounded-lg ${
                  theme === 'dark'
                    ? 'bg-gray-700 text-green-400'
                    : 'bg-green-50 text-green-700'
                }`}>
                  <Languages size={20} />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className={`${
                theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
              }`}>
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code as any)}
                    className={`cursor-pointer ${
                      language === lang.code
                        ? theme === 'dark'
                          ? 'bg-gray-700'
                          : 'bg-green-50'
                        : ''
                    } ${theme === 'dark' ? 'text-gray-200 hover:bg-gray-700' : 'hover:bg-green-50'}`}
                  >
                    <span className="mr-2">{lang.flag}</span>
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${
                theme === 'dark'
                  ? 'text-gray-200 hover:text-green-400'
                  : 'text-gray-700 hover:text-green-600'
              } transition-colors`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden ${
              theme === 'dark'
                ? 'bg-gray-800/98 border-t border-gray-700'
                : 'bg-white/98 border-t border-gray-200'
            } backdrop-blur-md`}
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <motion.button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  whileTap={{ scale: 0.95 }}
                  className={`block w-full text-left px-4 py-3 ${
                    theme === 'dark'
                      ? 'text-gray-200 hover:text-green-400 hover:bg-gray-700'
                      : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                  } rounded-lg transition-all duration-200 font-medium`}
                >
                  {link.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

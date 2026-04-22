import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();
  const { theme } = useTheme();

  const quickLinks = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className={`border-t-2 py-12 px-4 ${
      theme === 'dark'
        ? 'bg-gray-800 border-gray-700'
        : 'bg-white border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Columna 1 - Nombre y descripción */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-500 text-transparent bg-clip-text">
              David Esteban O.R.
            </h3>
            <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
              {t('footer.description')}
            </p>
          </motion.div>

          {/* Columna 2 - Links rápidos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className={`text-lg font-semibold mb-4 ${
              theme === 'dark' ? 'text-gray-100' : 'text-gray-800'
            }`}>{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.button
                    whileHover={{ x: 5 }}
                    onClick={() => scrollToSection(link.href)}
                    className={`transition-colors ${
                      theme === 'dark'
                        ? 'text-gray-300 hover:text-green-400'
                        : 'text-gray-600 hover:text-green-600'
                    }`}
                  >
                    {link.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Columna 3 - Redes sociales */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className={`text-lg font-semibold mb-4 ${
              theme === 'dark' ? 'text-gray-100' : 'text-gray-800'
            }`}>{t('footer.follow')}</h4>
            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/EstebanR26"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-lg border flex items-center justify-center transition-all ${
                  theme === 'dark'
                    ? 'bg-gray-700 hover:bg-gray-600 border-gray-600 hover:border-green-500 text-gray-200 hover:text-green-400'
                    : 'bg-gray-100 hover:bg-green-50 border-gray-300 hover:border-green-400 text-gray-700 hover:text-green-600'
                }`}
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/david-esteban-ordoñez-rendon-6656a1404"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-lg border flex items-center justify-center transition-all ${
                  theme === 'dark'
                    ? 'bg-gray-700 hover:bg-gray-600 border-gray-600 hover:border-green-500 text-gray-200 hover:text-green-400'
                    : 'bg-gray-100 hover:bg-green-50 border-gray-300 hover:border-green-400 text-gray-700 hover:text-green-600'
                }`}
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:david.ordonezren@campusucc.edu.co"
                className={`w-10 h-10 rounded-lg border flex items-center justify-center transition-all ${
                  theme === 'dark'
                    ? 'bg-gray-700 hover:bg-gray-600 border-gray-600 hover:border-green-500 text-gray-200 hover:text-green-400'
                    : 'bg-gray-100 hover:bg-green-50 border-gray-300 hover:border-green-400 text-gray-700 hover:text-green-600'
                }`}
              >
                <Mail size={20} />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Separador */}
        <div className={`border-t my-8 ${
          theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
        }`} />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className={`text-center flex flex-col items-center justify-center gap-1 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          <p>© {currentYear} David Esteban Ordoñez Rendon. {t('footer.rights')}</p>
          <p className="flex items-center gap-1">
            {t('footer.madeWith')} <Heart size={16} className="text-green-500 fill-green-500" /> {t('footer.location')}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

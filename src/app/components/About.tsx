import { motion } from 'motion/react';
import { Code2, Database, Music, Gamepad2, Users, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

const skills = [
  {
    name: 'HTML5',
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-500',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  },
  {
    name: 'CSS3',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-500',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  },
  {
    name: 'JavaScript',
    color: 'from-yellow-400 to-yellow-500',
    bgColor: 'bg-yellow-400',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    name: 'TypeScript',
    color: 'from-blue-600 to-blue-400',
    bgColor: 'bg-blue-600',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  },
  {
    name: 'React',
    color: 'from-cyan-400 to-cyan-500',
    bgColor: 'bg-cyan-400',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    name: 'Next.js',
    color: 'from-black to-gray-700',
    bgColor: 'bg-black',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  },
  {
    name: 'Java',
    color: 'from-red-600 to-orange-500',
    bgColor: 'bg-red-600',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  },
  {
    name: 'Python',
    color: 'from-yellow-500 to-blue-500',
    bgColor: 'bg-blue-500',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  },
  {
    name: 'Tailwind',
    color: 'from-cyan-400 to-sky-500',
    bgColor: 'bg-cyan-500',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
  },
  {
    name: 'PostgreSQL',
    color: 'from-blue-700 to-blue-500',
    bgColor: 'bg-blue-700',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  },
  {
    name: 'Git',
    color: 'from-orange-600 to-red-600',
    bgColor: 'bg-orange-600',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  },
];

const personalInterests = [
  { 
    name: 'Música',
    nameEn: 'Music',
    nameFr: 'Musique',
    nameDe: 'Musik',
    icon: Music, 
    colorClasses: 'bg-gradient-to-br from-purple-400 to-purple-600',
    description: 'Me encanta escuchar música en mis ratos libres',
    descriptionEn: 'I love listening to music in my free time',
    descriptionFr: 'J\'adore écouter de la musique dans mon temps libre',
    descriptionDe: 'Ich liebe es, in meiner Freizeit Musik zu hören',
  },
  { 
    name: 'Videojuegos',
    nameEn: 'Video Games',
    nameFr: 'Jeux vidéo',
    nameDe: 'Videospiele',
    icon: Gamepad2, 
    colorClasses: 'bg-gradient-to-br from-blue-400 to-blue-600',
    description: 'Disfruto juegos de mundo abierto con buena historia',
    descriptionEn: 'I enjoy open-world games with good stories',
    descriptionFr: 'J\'aime les jeux en monde ouvert avec de bonnes histoires',
    descriptionDe: 'Ich genieße Open-World-Spiele mit guten Geschichten',
  },
  { 
    name: 'Amigos',
    nameEn: 'Friends',
    nameFr: 'Amis',
    nameDe: 'Freunde',
    icon: Users, 
    colorClasses: 'bg-gradient-to-br from-green-400 to-green-600',
    description: 'Me gusta salir y pasar tiempo con mis amigos',
    descriptionEn: 'I like to go out and spend time with my friends',
    descriptionFr: 'J\'aime sortir et passer du temps avec mes amis',
    descriptionDe: 'Ich gehe gerne aus und verbringe Zeit mit meinen Freunden',
  },
  { 
    name: 'Color Verde',
    nameEn: 'Green Color',
    nameFr: 'Couleur Verte',
    nameDe: 'Grüne Farbe',
    icon: Heart, 
    colorClasses: 'bg-gradient-to-br from-emerald-400 to-emerald-600',
    description: 'Mi color favorito es el verde',
    descriptionEn: 'My favorite color is green',
    descriptionFr: 'Ma couleur préférée est le vert',
    descriptionDe: 'Meine Lieblingsfarbe ist Grün',
  },
];

export function About() {
  const { t, language } = useLanguage();
  const { theme } = useTheme();

  const getInterestName = (interest: any) => {
    switch (language) {
      case 'en': return interest.nameEn;
      case 'fr': return interest.nameFr;
      case 'de': return interest.nameDe;
      default: return interest.name;
    }
  };

  const getInterestDescription = (interest: any) => {
    switch (language) {
      case 'en': return interest.descriptionEn;
      case 'fr': return interest.descriptionFr;
      case 'de': return interest.descriptionDe;
      default: return interest.description;
    }
  };

  return (
    <section id="about" className={`py-20 px-4 ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-green-600 to-emerald-500 text-transparent bg-clip-text">
              {t('about.title')}
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-600 to-emerald-500 mx-auto mb-6 rounded-full" />
          <p className={`text-center max-w-2xl mx-auto mb-12 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {t('about.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Descripción personal */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className={`space-y-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>{t('about.description1')}</p>
              <p>{t('about.description2')}</p>
              <p>{t('about.description3')}</p>
            </div>

            {/* Intereses personales */}
            <div className="pt-6">
              <h3 className={`text-2xl font-semibold mb-6 ${
                theme === 'dark' ? 'text-green-400' : 'text-green-700'
              }`}>
                {language === 'es' ? 'Intereses Personales' : 
                 language === 'en' ? 'Personal Interests' :
                 language === 'fr' ? 'Intérêts Personnels' :
                 'Persönliche Interessen'}
              </h3>
              <div className="grid gap-4">
                {personalInterests.map((interest, index) => {
                  const Icon = interest.icon;
                  return (
                    <motion.div
                      key={interest.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className={`flex items-start gap-4 p-4 rounded-xl border transition-all shadow-sm hover:shadow-md ${
                        theme === 'dark'
                          ? 'bg-gradient-to-br from-gray-800 to-gray-700 border-gray-600 hover:border-green-500'
                          : 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-100 hover:border-green-300'
                      }`}
                    >
                      <div className={interest.colorClasses + ' p-3 rounded-lg text-white flex-shrink-0'}>
                        <Icon size={24} />
                      </div>
                      <div>
                        <h4 className={`font-semibold mb-1 ${
                          theme === 'dark' ? 'text-gray-100' : 'text-gray-800'
                        }`}>{getInterestName(interest)}</h4>
                        <p className={`text-sm ${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                        }`}>{getInterestDescription(interest)}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Habilidades técnicas */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className={`text-2xl font-semibold mb-6 ${
              theme === 'dark' ? 'text-green-400' : 'text-green-700'
            }`}>{t('about.technicalSkills')}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`flex items-center gap-2 px-3 py-3 rounded-2xl border-2 shadow-lg hover:shadow-2xl transition-all cursor-default ${
                    theme === 'dark'
                      ? 'bg-gray-800 border-gray-700 hover:border-green-400'
                      : 'bg-white border-gray-200 hover:border-green-500'
                  }`}
                >
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'} p-2 flex-shrink-0 overflow-hidden`}>
                    <img 
                      src={skill.icon} 
                      alt={skill.name} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className={`font-semibold text-xs sm:text-sm ${
                    theme === 'dark' ? 'text-gray-100' : 'text-gray-800'
                  }`}>
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Visualización de habilidades con iconos */}
            <div className="pt-8 space-y-4">
              <div className="grid grid-cols-2 gap-6">
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`p-6 rounded-xl border transition-all shadow-md hover:shadow-lg ${
                    theme === 'dark'
                      ? 'bg-gradient-to-br from-gray-800 to-gray-700 border-gray-600 hover:border-green-500'
                      : 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 hover:border-green-400'
                  }`}
                >
                  <Code2 className={`mb-3 ${
                    theme === 'dark' ? 'text-green-400' : 'text-green-600'
                  }`} size={32} />
                  <h4 className={`font-semibold mb-2 ${
                    theme === 'dark' ? 'text-gray-100' : 'text-gray-800'
                  }`}>{t('about.frontend')}</h4>
                  <p className={`text-sm ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>React, Next.js, TypeScript</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`p-6 rounded-xl border transition-all shadow-md hover:shadow-lg ${
                    theme === 'dark'
                      ? 'bg-gradient-to-br from-gray-800 to-gray-700 border-gray-600 hover:border-blue-400'
                      : 'bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200 hover:border-blue-400'
                  }`}
                >
                  <Database className={`mb-3 ${
                    theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                  }`} size={32} />
                  <h4 className={`font-semibold mb-2 ${
                    theme === 'dark' ? 'text-gray-100' : 'text-gray-800'
                  }`}>{t('about.backend')}</h4>
                  <p className={`text-sm ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>Java, Python, Tailwind</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
import { motion } from 'motion/react';
import { Github, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
  index: number;
}

export function ProjectCard({
  title,
  description,
  image,
  technologies,
  githubUrl,
  demoUrl,
  index,
}: ProjectCardProps) {
  const { t } = useLanguage();
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className={`group rounded-xl overflow-hidden border-2 transition-all shadow-lg hover:shadow-2xl ${
        theme === 'dark'
          ? 'bg-gray-800 border-gray-700 hover:border-green-500'
          : 'bg-white border-gray-200 hover:border-green-400'
      }`}
    >
      {/* Imagen del proyecto */}
      <div className="relative overflow-hidden h-48">
        <div className={`absolute inset-0 bg-gradient-to-t via-transparent to-transparent z-10 ${
          theme === 'dark' ? 'from-gray-800' : 'from-white'
        }`} />
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Contenido */}
      <div className="p-6 space-y-4">
        <h3 className={`text-2xl font-bold transition-colors ${
          theme === 'dark'
            ? 'text-gray-100 group-hover:text-green-400'
            : 'text-gray-800 group-hover:text-green-600'
        }`}>
          {title}
        </h3>
        <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>{description}</p>

        {/* Tecnologías */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className={`px-3 py-1 text-sm rounded-full font-medium ${
                theme === 'dark'
                  ? 'bg-green-900/30 text-green-400 border border-green-700'
                  : 'bg-green-50 text-green-700 border border-green-200'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Botones */}
        <div className="flex gap-3 pt-2">
          <Button
            variant="outline"
            size="sm"
            className={`flex-1 border-2 ${
              theme === 'dark'
                ? 'border-gray-600 hover:border-green-500 hover:bg-green-900/30 text-gray-300 hover:text-green-400'
                : 'border-gray-300 hover:border-green-500 hover:bg-green-50 text-gray-700 hover:text-green-700'
            }`}
            onClick={() => window.open(githubUrl, '_blank')}
          >
            <Github size={16} className="mr-2" />
            {t('projects.github')}
          </Button>
          <Button
            size="sm"
            className="flex-1 bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 text-white shadow-md hover:shadow-lg"
            onClick={() => window.open(demoUrl, '_blank')}
          >
            <ExternalLink size={16} className="mr-2" />
            {t('projects.demo')}
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

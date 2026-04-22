import { motion } from 'motion/react';
import { ProjectCard } from './ProjectCard';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

const projects = [
  {
    titleKey: 'project1.title',
    descriptionKey: 'project1.description',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRoJTIwY2FsY3VsYXRvciUyMGNhbGN1bHVzfGVufDF8fHx8MTc0NTM2ODAwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    technologies: ['JavaScript', 'CSS', 'HTML'],
    githubUrl: 'https://github.com/EstebanR26/Multicalc.git',
    demoUrl: 'https://multicalc-zeta.vercel.app',
  },
  {
    titleKey: 'project2.title',
    descriptionKey: 'project2.description',
    image: 'https://images.unsplash.com/photo-1762222687051-4c9926eba36d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHBsYXllciUyMGludGVyZmFjZSUyMGFwcHxlbnwxfHx8fDE3NzQ0MTEzMzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    technologies: ['Python', 'HTML'],
    githubUrl: 'https://github.com/EstebanR26/Reproductor-Musical.git',
    demoUrl: 'https://reproductor-musical-six.vercel.app',
  },
  {
    titleKey: 'project3.title',
    descriptionKey: 'project3.description',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5kaW5nJTIwcGFnZSUyMGRlc2lnbiUyMHdlYnNpdGV8ZW58MXx8fHwxNzQ1MzY4MDAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    technologies: ['TypeScript', 'JavaScript', 'CSS'],
    githubUrl: 'https://github.com/EstebanR26/Landing-page-Dise-o-de-interfaces-de-software.git',
    demoUrl: 'https://landing-page-dise-o-de-interfaces-d.vercel.app',
  },
  {
    titleKey: 'project4.title',
    descriptionKey: 'project4.description',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjB1aSUyMGRlc2lnbnxlbnwxfHx8fDE3NDUzNjgwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    technologies: ['TypeScript', 'JavaScript', 'CSS'],
    githubUrl: 'https://github.com/NicolMunoz012/mobile-ui-presentation.git',
    demoUrl: 'https://mobile-ui-presentation.vercel.app/',
  },
];

export function Projects() {
  const { t } = useLanguage();
  const { theme } = useTheme();

  return (
    <section id="projects" className={`py-20 px-4 ${
      theme === 'dark'
        ? 'bg-gradient-to-br from-gray-800 to-gray-900'
        : 'bg-gradient-to-br from-gray-50 to-green-50'
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
              {t('projects.title')}
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-600 to-emerald-500 mx-auto mb-6 rounded-full" />
          <p className={`text-center max-w-2xl mx-auto mb-12 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {t('projects.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.titleKey}
              title={t(project.titleKey)}
              description={t(project.descriptionKey)}
              image={project.image}
              technologies={project.technologies}
              githubUrl={project.githubUrl}
              demoUrl={project.demoUrl}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

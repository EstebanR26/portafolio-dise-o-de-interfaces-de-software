import { motion } from 'motion/react';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const experiencesData = {
  es: [
    {
      type: 'education',
      title: 'Ingeniería de Software',
      company: 'Universidad Cooperativa de Colombia',
      period: '2024 - Presente',
      description: 'Estudiante de Ingeniería de Software con enfoque en desarrollo web y aplicaciones modernas. Aprendizaje de arquitectura de software y mejores prácticas.',
      icon: GraduationCap,
    },
    {
      type: 'work',
      title: 'Desarrollador de Software',
      company: 'Proyecto Universitario',
      period: '2024 - Presente',
      description: 'Desarrollo de sistema de inscripción universitaria en Java. Implementación de funcionalidades de gestión de horarios y cupos.',
      icon: Briefcase,
    },
    {
      type: 'work',
      title: 'Desarrollador Frontend',
      company: 'Proyecto Personal',
      period: '2024 - Presente',
      description: 'Creación de aplicación de reloj mundial con React y TypeScript. Implementación de conversión de zonas horarias y alarmas.',
      icon: Briefcase,
    },
    {
      type: 'education',
      title: 'Curso de Python',
      company: 'Plataforma Online',
      period: '2024 - Presente',
      description: 'Curso intensivo de programación en Python. Desarrollo de proyectos prácticos incluyendo reproductor de música con interfaz gráfica.',
      icon: GraduationCap,
    },
  ],
  en: [
    {
      type: 'education',
      title: 'Software Engineering',
      company: 'Universidad Cooperativa de Colombia',
      period: '2024 - Present',
      description: 'Software Engineering student with focus on web development and modern applications. Learning software architecture and best practices.',
      icon: GraduationCap,
    },
    {
      type: 'work',
      title: 'Software Developer',
      company: 'University Project',
      period: '2024 - Present',
      description: 'Development of university enrollment system in Java. Implementation of schedule and capacity management functionalities.',
      icon: Briefcase,
    },
    {
      type: 'work',
      title: 'Frontend Developer',
      company: 'Personal Project',
      period: '2024 - Present',
      description: 'Creation of world clock application with React and TypeScript. Implementation of time zone conversion and alarms.',
      icon: Briefcase,
    },
    {
      type: 'education',
      title: 'Python Course',
      company: 'Online Platform',
      period: '2024 - Present',
      description: 'Intensive Python programming course. Development of practical projects including music player with graphical interface.',
      icon: GraduationCap,
    },
  ],
  fr: [
    {
      type: 'education',
      title: 'Génie Logiciel',
      company: 'Universidad Cooperativa de Colombia',
      period: '2024 - Présent',
      description: 'Étudiant en génie logiciel avec un focus sur le développement web et les applications modernes. Apprentissage de l\'architecture logicielle et des meilleures pratiques.',
      icon: GraduationCap,
    },
    {
      type: 'work',
      title: 'Développeur de Logiciels',
      company: 'Projet Universitaire',
      period: '2024 - Présent',
      description: 'Développement d\'un système d\'inscription universitaire en Java. Mise en œuvre des fonctionnalités de gestion des horaires et des places.',
      icon: Briefcase,
    },
    {
      type: 'work',
      title: 'Développeur Frontend',
      company: 'Projet Personnel',
      period: '2024 - Présent',
      description: 'Création d\'une application d\'horloge mondiale avec React et TypeScript. Mise en œuvre de la conversion des fuseaux horaires et des alarmes.',
      icon: Briefcase,
    },
    {
      type: 'education',
      title: 'Cours Python',
      company: 'Plateforme en Ligne',
      period: '2024 - Présent',
      description: 'Cours intensif de programmation Python. Développement de projets pratiques incluant un lecteur de musique avec interface graphique.',
      icon: GraduationCap,
    },
  ],
  de: [
    {
      type: 'education',
      title: 'Software Engineering',
      company: 'Universidad Cooperativa de Colombia',
      period: '2024 - Heute',
      description: 'Software Engineering Student mit Fokus auf Webentwicklung und moderne Anwendungen. Lernen von Softwarearchitektur und Best Practices.',
      icon: GraduationCap,
    },
    {
      type: 'work',
      title: 'Software-Entwickler',
      company: 'Universitätsprojekt',
      period: '2024 - Heute',
      description: 'Entwicklung eines Universitätseinschreibungssystems in Java. Implementierung von Stundenplan- und Kapazitätsverwaltungsfunktionen.',
      icon: Briefcase,
    },
    {
      type: 'work',
      title: 'Frontend-Entwickler',
      company: 'Persönliches Projekt',
      period: '2024 - Heute',
      description: 'Erstellung einer Weltuhr-Anwendung mit React und TypeScript. Implementierung von Zeitzonenkonvertierung und Alarmen.',
      icon: Briefcase,
    },
    {
      type: 'education',
      title: 'Python-Kurs',
      company: 'Online-Plattform',
      period: '2024 - Heute',
      description: 'Intensiver Python-Programmierkurs. Entwicklung praktischer Projekte einschließlich Musikplayer mit grafischer Oberfläche.',
      icon: GraduationCap,
    },
  ],
};

export function Experience() {
  const { t, language } = useLanguage();
  const experiences = experiencesData[language] || experiencesData.es;

  return (
    <section id="experience" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-green-600 to-emerald-500 text-transparent bg-clip-text">
              {t('experience.title')}
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-600 to-emerald-500 mx-auto mb-6 rounded-full" />
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            {t('experience.subtitle')}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Línea vertical */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400 via-emerald-400 to-green-500" />

            {/* Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => {
                const Icon = exp.icon;
                const isLeft = index % 2 === 0;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`relative flex items-center ${
                      isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                    } flex-row`}
                  >
                    {/* Contenido */}
                    <div
                      className={`flex-1 ${
                        isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'
                      } pl-20 md:pl-0`}
                    >
                      <motion.div
                        whileHover={{ scale: 1.02, y: -5 }}
                        className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-green-400 transition-all shadow-lg hover:shadow-xl"
                      >
                        <div className="flex items-center gap-2 text-green-600 mb-2">
                          <Calendar size={16} />
                          <span className="text-sm font-medium">{exp.period}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-1">{exp.title}</h3>
                        <h4 className="text-lg text-gray-600 mb-3">{exp.company}</h4>
                        <p className="text-gray-700">{exp.description}</p>
                      </motion.div>
                    </div>

                    {/* Icono central */}
                    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ type: 'spring', stiffness: 200 }}
                        className={`w-16 h-16 rounded-full flex items-center justify-center ${
                          exp.type === 'work'
                            ? 'bg-gradient-to-br from-green-500 to-emerald-500'
                            : 'bg-gradient-to-br from-blue-500 to-cyan-500'
                        } shadow-lg border-4 border-white`}
                      >
                        <Icon className="text-white" size={24} />
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
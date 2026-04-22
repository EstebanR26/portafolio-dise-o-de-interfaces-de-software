import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en' | 'fr' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

const translations: Record<Language, Record<string, string>> = {
  es: {
    // Navbar
    'nav.home': 'Inicio',
    'nav.about': 'Sobre mí',
    'nav.projects': 'Proyectos',
    'nav.experience': 'Experiencia',
    'nav.testimonials': 'Testimonios',
    'nav.contact': 'Contacto',
    
    // Hero
    'hero.greeting': 'Hola, soy',
    'hero.name': 'David Esteban Ordoñez Rendon',
    'hero.role': 'Estudiante de Ingeniería de Software',
    'hero.description': 'Apasionado por el desarrollo de software y la creación de soluciones tecnológicas innovadoras. Actualmente cursando Ingeniería de Software con enfoque en desarrollo web y aplicaciones modernas.',
    'hero.downloadCV': 'Descargar CV',
    'hero.contact': 'Contactar',
    
    // About
    'about.title': 'Sobre mí',
    'about.subtitle': 'Conoce un poco más sobre mi persona y mis intereses',
    'about.description1': 'Soy David Esteban, estudiante de Ingeniería de Software en la Universidad Cooperativa de Colombia. Me apasiona la tecnología y siempre estoy buscando aprender nuevas herramientas y metodologías.',
    'about.description2': 'En mis ratos libres me encanta escuchar música de diferentes géneros, disfruto mucho los videojuegos de mundo abierto con historias envolventes. Mi color favorito es el verde y valoro mucho el tiempo que paso con mis amigos.',
    'about.description3': 'Como desarrollador, me esfuerzo por crear código limpio y mantenible, siempre siguiendo las mejores prácticas de la industria.',
    'about.technicalSkills': 'Habilidades Técnicas',
    'about.softSkills': 'Habilidades Blandas',
    'about.teamwork': 'Trabajo en equipo',
    'about.problemSolving': 'Resolución de problemas',
    'about.creativity': 'Creatividad',
    'about.continuousLearning': 'Aprendizaje continuo',
    'about.frontend': 'Frontend',
    'about.backend': 'Backend',
    
    // Projects
    'projects.title': 'Mis Proyectos',
    'projects.subtitle': 'Una selección de proyectos en los que he trabajado, demostrando mis habilidades en desarrollo de software.',
    'projects.github': 'GitHub',
    'projects.demo': 'Demo',
    
    // Project 1
    'project1.title': 'Aplicativo Interactivo para Cálculo Multivariado',
    'project1.description': 'Aplicación web interactiva para realizar cálculos de cálculo multivariado con visualizaciones dinámicas y soluciones paso a paso.',

    // Project 2
    'project2.title': 'Reproductor de Música',
    'project2.description': 'Reproductor de música desarrollado en Python con interfaz web, gestión de playlists y control de reproducción avanzado.',

    // Project 3
    'project3.title': 'Landing Page',
    'project3.description': 'Página de destino moderna y responsiva desarrollada como parte del curso de diseño de interfaces de software con animaciones y diseño atractivo.',

    // Project 4
    'project4.title': 'Diseño de Interfaces para Apps Móviles',
    'project4.description': 'Presentación interactiva de diseños de interfaces para aplicaciones móviles con ejemplos de mejores prácticas y patrones de diseño UI/UX.',
    
    // Testimonials
    'testimonials.title': 'Testimonios',
    'testimonials.subtitle': 'Lo que dicen las personas con las que he trabajado sobre mi desempeño y habilidades.',
    
    'testimonial1.name': 'Emilio Eraso',
    'testimonial1.role': 'Compañero de Proyecto',
    'testimonial1.comment': 'David es un excelente compañero de equipo. Su dedicación y habilidad para resolver problemas complejos es impresionante. Siempre está dispuesto a ayudar.',
    
    'testimonial2.name': 'Camila Calvache',
    'testimonial2.role': 'Líder de Equipo',
    'testimonial2.comment': 'Trabajar con David ha sido una gran experiencia. Su capacidad de aprendizaje y su atención al detalle hacen que cada proyecto sea exitoso.',
    
    'testimonial3.name': 'Brayan Eraso',
    'testimonial3.role': 'Desarrollador',
    'testimonial3.comment': 'David demuestra un gran compromiso con la calidad del código. Su enfoque en las mejores prácticas y su actitud positiva son ejemplares.',
    
    // Experience
    'experience.title': 'Experiencia',
    'experience.subtitle': 'Mi trayectoria académica y profesional en el mundo del desarrollo de software.',
    
    // Certifications
    'certifications.title': 'Certificaciones',
    'certifications.subtitle': 'Certificaciones profesionales que validan mis conocimientos y habilidades técnicas.',
    
    // Contact
    'contact.title': 'Contacto',
    'contact.subtitle': '¿Tienes un proyecto en mente? ¡Hablemos! Estoy disponible para nuevas oportunidades y colaboraciones.',
    'contact.info': 'Información de Contacto',
    'contact.email': 'Correo electrónico',
    'contact.phone': 'Teléfono',
    'contact.location': 'Ubicación',
    'contact.followMe': 'Sígueme en:',
    'contact.name': 'Nombre completo',
    'contact.namePlaceholder': 'Tu nombre',
    'contact.emailLabel': 'Correo electrónico',
    'contact.emailPlaceholder': 'tu@email.com',
    'contact.message': 'Mensaje',
    'contact.messagePlaceholder': 'Cuéntame sobre tu proyecto...',
    'contact.send': 'Enviar Mensaje',
    'contact.success': '¡Mensaje enviado con éxito! Te responderé pronto.',
    
    // Footer
    'footer.description': 'Estudiante de Ingeniería de Software especializado en crear soluciones tecnológicas innovadoras.',
    'footer.quickLinks': 'Links Rápidos',
    'footer.follow': 'Sígueme',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.madeWith': 'Hecho con',
    'footer.location': 'San Juan de Pasto - Nariño - Colombia',
  },
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.about': 'About Me',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.testimonials': 'Testimonials',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.greeting': 'Hello, I am',
    'hero.name': 'David Esteban Ordoñez Rendon',
    'hero.role': 'Software Engineering Student',
    'hero.description': 'Passionate about software development and creating innovative technological solutions. Currently studying Software Engineering with a focus on web development and modern applications.',
    'hero.downloadCV': 'Download CV',
    'hero.contact': 'Contact',
    
    // About
    'about.title': 'About Me',
    'about.subtitle': 'Get to know a little more about me and my interests',
    'about.description1': 'I am David Esteban, a Software Engineering student at Universidad Cooperativa de Colombia. I am passionate about technology and always looking to learn new tools and methodologies.',
    'about.description2': 'In my free time, I love listening to music of different genres, I really enjoy open-world video games with immersive stories. My favorite color is green and I value the time I spend with my friends.',
    'about.description3': 'As a developer, I strive to create clean and maintainable code, always following industry best practices.',
    'about.technicalSkills': 'Technical Skills',
    'about.softSkills': 'Soft Skills',
    'about.teamwork': 'Teamwork',
    'about.problemSolving': 'Problem Solving',
    'about.creativity': 'Creativity',
    'about.continuousLearning': 'Continuous Learning',
    'about.frontend': 'Frontend',
    'about.backend': 'Backend',
    
    // Projects
    'projects.title': 'My Projects',
    'projects.subtitle': 'A selection of projects I have worked on, showcasing my software development skills.',
    'projects.github': 'GitHub',
    'projects.demo': 'Demo',
    
    // Project 1
    'project1.title': 'Interactive Multivariable Calculus App',
    'project1.description': 'Interactive web application for performing multivariable calculus calculations with dynamic visualizations and step-by-step solutions.',

    // Project 2
    'project2.title': 'Music Player',
    'project2.description': 'Music player developed in Python with web interface, playlist management, and advanced playback control.',

    // Project 3
    'project3.title': 'Landing Page',
    'project3.description': 'Modern and responsive landing page developed as part of the software interface design course with animations and attractive design.',

    // Project 4
    'project4.title': 'Mobile App UI Design',
    'project4.description': 'Interactive presentation of mobile application interface designs with examples of best practices and UI/UX design patterns.',
    
    // Testimonials
    'testimonials.title': 'Testimonials',
    'testimonials.subtitle': 'What people I have worked with say about my performance and skills.',
    
    'testimonial1.name': 'Emilio Eraso',
    'testimonial1.role': 'Project Colleague',
    'testimonial1.comment': 'David is an excellent team member. His dedication and ability to solve complex problems is impressive. He is always willing to help.',
    
    'testimonial2.name': 'Camila Calvache',
    'testimonial2.role': 'Team Leader',
    'testimonial2.comment': 'Working with David has been a great experience. His learning ability and attention to detail make every project successful.',
    
    'testimonial3.name': 'Brayan Eraso',
    'testimonial3.role': 'Developer',
    'testimonial3.comment': 'David demonstrates great commitment to code quality. His focus on best practices and positive attitude are exemplary.',
    
    // Experience
    'experience.title': 'Experience',
    'experience.subtitle': 'My academic and professional journey in the world of software development.',
    
    // Certifications
    'certifications.title': 'Certifications',
    'certifications.subtitle': 'Professional certifications that validate my knowledge and technical skills.',
    
    // Contact
    'contact.title': 'Contact',
    'contact.subtitle': 'Have a project in mind? Let\'s talk! I am available for new opportunities and collaborations.',
    'contact.info': 'Contact Information',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.location': 'Location',
    'contact.followMe': 'Follow me:',
    'contact.name': 'Full name',
    'contact.namePlaceholder': 'Your name',
    'contact.emailLabel': 'Email',
    'contact.emailPlaceholder': 'your@email.com',
    'contact.message': 'Message',
    'contact.messagePlaceholder': 'Tell me about your project...',
    'contact.send': 'Send Message',
    'contact.success': 'Message sent successfully! I will respond soon.',
    
    // Footer
    'footer.description': 'Software Engineering student specialized in creating innovative technological solutions.',
    'footer.quickLinks': 'Quick Links',
    'footer.follow': 'Follow',
    'footer.rights': 'All rights reserved.',
    'footer.madeWith': 'Made with',
    'footer.location': 'San Juan de Pasto - Nariño - Colombia',
  },
  fr: {
    // Navbar
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.projects': 'Projets',
    'nav.experience': 'Expérience',
    'nav.testimonials': 'Témoignages',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.greeting': 'Bonjour, je suis',
    'hero.name': 'David Esteban Ordoñez Rendon',
    'hero.role': 'Étudiant en Génie Logiciel',
    'hero.description': 'Passionné par le développement logiciel et la création de solutions technologiques innovantes. Actuellement étudiant en génie logiciel avec un focus sur le développement web et les applications modernes.',
    'hero.downloadCV': 'Télécharger CV',
    'hero.contact': 'Contacter',
    
    // About
    'about.title': 'À propos de moi',
    'about.subtitle': 'En savoir plus sur moi et mes intérêts',
    'about.description1': 'Je suis David Esteban, étudiant en génie logiciel à l\'Universidad Cooperativa de Colombia. Je suis passionné par la technologie et toujours à la recherche d\'apprendre de nouveaux outils et méthodologies.',
    'about.description2': 'Dans mon temps libre, j\'adore écouter de la musique de différents genres, j\'apprécie vraiment les jeux vidéo en monde ouvert avec des histoires immersives. Ma couleur préférée est le vert et je valorise le temps que je passe avec mes amis.',
    'about.description3': 'En tant que développeur, je m\'efforce de créer du code propre et maintenable, en suivant toujours les meilleures pratiques de l\'industrie.',
    'about.technicalSkills': 'Compétences Techniques',
    'about.softSkills': 'Compétences Douces',
    'about.teamwork': 'Travail d\'équipe',
    'about.problemSolving': 'Résolution de problèmes',
    'about.creativity': 'Créativité',
    'about.continuousLearning': 'Apprentissage continu',
    'about.frontend': 'Frontend',
    'about.backend': 'Backend',
    
    // Projects
    'projects.title': 'Mes Projets',
    'projects.subtitle': 'Une sélection de projets sur lesquels j\'ai travaillé, démontrant mes compétences en développement logiciel.',
    'projects.github': 'GitHub',
    'projects.demo': 'Démo',
    
    // Project 1
    'project1.title': 'Application Interactive de Calcul Multivariable',
    'project1.description': 'Application web interactive pour effectuer des calculs de calcul multivariable avec des visualisations dynamiques et des solutions étape par étape.',

    // Project 2
    'project2.title': 'Lecteur de Musique',
    'project2.description': 'Lecteur de musique développé en Python avec interface web, gestion de playlists et contrôle de lecture avancé.',

    // Project 3
    'project3.title': 'Page d\'Atterrissage',
    'project3.description': 'Page d\'atterrissage moderne et responsive développée dans le cadre du cours de conception d\'interfaces logicielles avec animations et design attrayant.',

    // Project 4
    'project4.title': 'Conception d\'Interfaces pour Applications Mobiles',
    'project4.description': 'Présentation interactive de conceptions d\'interfaces pour applications mobiles avec des exemples de meilleures pratiques et de modèles de conception UI/UX.',
    
    // Testimonials
    'testimonials.title': 'Témoignages',
    'testimonials.subtitle': 'Ce que les personnes avec qui j\'ai travaillé disent de ma performance et de mes compétences.',
    
    'testimonial1.name': 'Emilio Eraso',
    'testimonial1.role': 'Collègue de Projet',
    'testimonial1.comment': 'David est un excellent membre d\'équipe. Son dévouement et sa capacité à résoudre des problèmes complexes sont impressionnants. Il est toujours prêt à aider.',
    
    'testimonial2.name': 'Camila Calvache',
    'testimonial2.role': 'Chef d\'Équipe',
    'testimonial2.comment': 'Travailler avec David a été une excellente expérience. Sa capacité d\'apprentissage et son attention aux détails rendent chaque projet réussi.',
    
    'testimonial3.name': 'Brayan Eraso',
    'testimonial3.role': 'Développeur',
    'testimonial3.comment': 'David démontre un grand engagement envers la qualité du code. Son focus sur les meilleures pratiques et son attitude positive sont exemplaires.',
    
    // Experience
    'experience.title': 'Expérience',
    'experience.subtitle': 'Mon parcours académique et professionnel dans le monde du développement logiciel.',
    
    // Certifications
    'certifications.title': 'Certifications',
    'certifications.subtitle': 'Certifications professionnelles qui valident mes connaissances et compétences techniques.',
    
    // Contact
    'contact.title': 'Contact',
    'contact.subtitle': 'Vous avez un projet en tête? Parlons-en! Je suis disponible pour de nouvelles opportunités et collaborations.',
    'contact.info': 'Informations de Contact',
    'contact.email': 'Email',
    'contact.phone': 'Téléphone',
    'contact.location': 'Localisation',
    'contact.followMe': 'Suivez-moi:',
    'contact.name': 'Nom complet',
    'contact.namePlaceholder': 'Votre nom',
    'contact.emailLabel': 'Email',
    'contact.emailPlaceholder': 'votre@email.com',
    'contact.message': 'Message',
    'contact.messagePlaceholder': 'Parlez-moi de votre projet...',
    'contact.send': 'Envoyer le Message',
    'contact.success': 'Message envoyé avec succès! Je vous répondrai bientôt.',
    
    // Footer
    'footer.description': 'Étudiant en génie logiciel spécialisé dans la création de solutions technologiques innovantes.',
    'footer.quickLinks': 'Liens Rapides',
    'footer.follow': 'Suivre',
    'footer.rights': 'Tous droits réservés.',
    'footer.madeWith': 'Fait avec',
    'footer.location': 'San Juan de Pasto - Nariño - Colombia',
  },
  de: {
    // Navbar
    'nav.home': 'Startseite',
    'nav.about': 'Über mich',
    'nav.projects': 'Projekte',
    'nav.experience': 'Erfahrung',
    'nav.testimonials': 'Referenzen',
    'nav.contact': 'Kontakt',
    
    // Hero
    'hero.greeting': 'Hallo, ich bin',
    'hero.name': 'David Esteban Ordoñez Rendon',
    'hero.role': 'Software Engineering Student',
    'hero.description': 'Leidenschaftlich für Softwareentwicklung und die Schaffung innovativer technologischer Lösungen. Derzeit studiere ich Software Engineering mit Fokus auf Webentwicklung und moderne Anwendungen.',
    'hero.downloadCV': 'Lebenslauf herunterladen',
    'hero.contact': 'Kontakt',
    
    // About
    'about.title': 'Über mich',
    'about.subtitle': 'Erfahren Sie mehr über mich und meine Interessen',
    'about.description1': 'Ich bin David Esteban, Student der Software-Technik an der Universidad Cooperativa de Colombia. Ich bin leidenschaftlich an Technologie interessiert und suche immer nach neuen Tools und Methoden.',
    'about.description2': 'In meiner Freizeit höre ich gerne Musik verschiedener Genres, ich genieße wirklich Open-World-Videospiele mit fesselnden Geschichten. Meine Lieblingsfarbe ist Grün und ich schätze die Zeit, die ich mit meinen Freunden verbringe.',
    'about.description3': 'Als Entwickler bemühe ich mich, sauberen und wartbaren Code zu erstellen und dabei immer die Best Practices der Branche zu befolgen.',
    'about.technicalSkills': 'Technische Fähigkeiten',
    'about.softSkills': 'Soft Skills',
    'about.teamwork': 'Teamarbeit',
    'about.problemSolving': 'Problemlösung',
    'about.creativity': 'Kreativität',
    'about.continuousLearning': 'Kontinuierliches Lernen',
    'about.frontend': 'Frontend',
    'about.backend': 'Backend',
    
    // Projects
    'projects.title': 'Meine Projekte',
    'projects.subtitle': 'Eine Auswahl von Projekten, an denen ich gearbeitet habe und die meine Softwareentwicklungsfähigkeiten demonstrieren.',
    'projects.github': 'GitHub',
    'projects.demo': 'Demo',
    
    // Project 1
    'project1.title': 'Interaktive Multivariable Kalkulations-App',
    'project1.description': 'Interaktive Webanwendung zur Durchführung von multivariablen Kalkulationsberechnungen mit dynamischen Visualisierungen und Schritt-für-Schritt-Lösungen.',

    // Project 2
    'project2.title': 'Musik-Player',
    'project2.description': 'Musik-Player entwickelt in Python mit Web-Oberfläche, Playlist-Verwaltung und erweiterter Wiedergabesteuerung.',

    // Project 3
    'project3.title': 'Landing Page',
    'project3.description': 'Moderne und responsive Landing Page, entwickelt im Rahmen des Kurses für Software-Interface-Design mit Animationen und attraktivem Design.',

    // Project 4
    'project4.title': 'Mobile App UI-Design',
    'project4.description': 'Interaktive Präsentation von Mobile App Interface-Designs mit Beispielen für Best Practices und UI/UX-Designmuster.',
    
    // Testimonials
    'testimonials.title': 'Referenzen',
    'testimonials.subtitle': 'Was die Leute, mit denen ich gearbeitet habe, über meine Leistung und Fähigkeiten sagen.',
    
    'testimonial1.name': 'Emilio Eraso',
    'testimonial1.role': 'Projektkollege',
    'testimonial1.comment': 'David ist ein ausgezeichnetes Teammitglied. Sein Engagement und seine Fähigkeit, komplexe Probleme zu lösen, sind beeindruckend. Er ist immer bereit zu helfen.',
    
    'testimonial2.name': 'Camila Calvache',
    'testimonial2.role': 'Teamleiter',
    'testimonial2.comment': 'Die Arbeit mit David war eine großartige Erfahrung. Seine Lernfähigkeit und Liebe zum Detail machen jedes Projekt erfolgreich.',
    
    'testimonial3.name': 'Brayan Eraso',
    'testimonial3.role': 'Entwickler',
    'testimonial3.comment': 'David zeigt großes Engagement für Codequalität. Sein Fokus auf Best Practices und seine positive Einstellung sind beispielhaft.',
    
    // Experience
    'experience.title': 'Erfahrung',
    'experience.subtitle': 'Mein akademischer und beruflicher Werdegang in der Welt der Softwareentwicklung.',
    
    // Certifications
    'certifications.title': 'Zertifizierungen',
    'certifications.subtitle': 'Professionelle Zertifizierungen, die meine Kenntnisse und technischen Fähigkeiten validieren.',
    
    // Contact
    'contact.title': 'Kontakt',
    'contact.subtitle': 'Haben Sie ein Projekt im Kopf? Lass uns reden! Ich bin für neue Möglichkeiten und Zusammenarbeit verfügbar.',
    'contact.info': 'Kontaktinformationen',
    'contact.email': 'Email',
    'contact.phone': 'Telefon',
    'contact.location': 'Standort',
    'contact.followMe': 'Folgen Sie mir:',
    'contact.name': 'Vollständiger Name',
    'contact.namePlaceholder': 'Ihr Name',
    'contact.emailLabel': 'Email',
    'contact.emailPlaceholder': 'ihre@email.com',
    'contact.message': 'Nachricht',
    'contact.messagePlaceholder': 'Erzählen Sie mir von Ihrem Projekt...',
    'contact.send': 'Nachricht senden',
    'contact.success': 'Nachricht erfolgreich gesendet! Ich werde bald antworten.',
    
    // Footer
    'footer.description': 'Software Engineering Student, spezialisiert auf die Entwicklung innovativer technologischer Lösungen.',
    'footer.quickLinks': 'Schnelllinks',
    'footer.follow': 'Folgen',
    'footer.rights': 'Alle Rechte vorbehalten.',
    'footer.madeWith': 'Gemacht mit',
    'footer.location': 'San Juan de Pasto - Nariño - Colombia',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

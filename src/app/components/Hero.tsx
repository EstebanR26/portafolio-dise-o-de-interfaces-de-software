import { motion } from 'motion/react';
import { Download, Mail, Github, Linkedin } from 'lucide-react';
import { Button } from './ui/button';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import profileImage from '@/assets/d3bc9d411161feb4888182c90a1c28624b812e6e.png';
import { jsPDF } from 'jspdf';

export function Hero() {
  const { t } = useLanguage();
  const { theme } = useTheme();

  return (
    <section id="home" className={`min-h-screen flex items-center justify-center pt-20 px-4 ${
      theme === 'dark'
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
        : 'bg-gradient-to-br from-green-50 via-emerald-50 to-white'
    }`}>
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col items-center justify-center text-center gap-12">
          {/* Top content - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full blur-2xl opacity-20 animate-pulse" />
              <img
                src={profileImage}
                alt="David Esteban Ordoñez Rendon"
                className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-white shadow-2xl"
              />
            </motion.div>
          </motion.div>

          {/* Bottom content - Text */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 flex flex-col items-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-2"
            >
              <p className="text-green-600 font-medium">{t('hero.greeting')}</p>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-green-600 via-emerald-500 to-green-700 text-transparent bg-clip-text">
                {t('hero.name')}
              </h1>
              <h2 className={`text-xl md:text-2xl font-medium ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                {t('hero.role')}
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className={`text-lg max-w-2xl leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              {t('hero.description')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 text-white shadow-lg hover:shadow-xl transition-all"
                onClick={() => {
                  const doc = new jsPDF();

                  // Título
                  doc.setFontSize(24);
                  doc.setFont('helvetica', 'bold');
                  doc.text('CURRICULUM VITAE', 105, 20, { align: 'center' });

                  // Información personal
                  doc.setFontSize(18);
                  doc.text('David Esteban Ordoñez Rendon', 105, 35, { align: 'center' });

                  doc.setFontSize(12);
                  doc.setFont('helvetica', 'normal');
                  doc.text('Estudiante de Ingeniería de Software', 105, 45, { align: 'center' });
                  doc.text('Universidad Cooperativa de Colombia', 105, 52, { align: 'center' });

                  // Contacto
                  doc.setFontSize(14);
                  doc.setFont('helvetica', 'bold');
                  doc.text('CONTACTO', 20, 70);

                  doc.setFontSize(11);
                  doc.setFont('helvetica', 'normal');
                  doc.text('Email: david.ordonezren@campusucc.edu.co', 20, 78);
                  doc.text('LinkedIn: linkedin.com/in/david-esteban-ordonez-rendon-6656a1404', 20, 85);
                  doc.text('GitHub: github.com/EstebanR26', 20, 92);
                  doc.text('Ubicación: Pasto, Nariño, Colombia', 20, 99);

                  // Habilidades Técnicas
                  doc.setFontSize(14);
                  doc.setFont('helvetica', 'bold');
                  doc.text('HABILIDADES TÉCNICAS', 20, 115);

                  doc.setFontSize(11);
                  doc.setFont('helvetica', 'normal');
                  doc.text('Frontend: React, Next.js, TypeScript, HTML5, CSS3, JavaScript', 20, 123);
                  doc.text('Backend: Java, Python, Node.js', 20, 130);
                  doc.text('Base de Datos: PostgreSQL', 20, 137);
                  doc.text('Control de Versiones: Git', 20, 144);

                  // Experiencia
                  doc.setFontSize(14);
                  doc.setFont('helvetica', 'bold');
                  doc.text('EXPERIENCIA', 20, 160);

                  doc.setFontSize(11);
                  doc.setFont('helvetica', 'bold');
                  doc.text('Desarrollador de Software - 2024-Presente', 20, 168);
                  doc.setFont('helvetica', 'normal');
                  doc.text('Proyecto Universitario', 20, 175);
                  doc.text('Desarrollo de sistema de inscripción universitaria en Java.', 20, 182);

                  doc.setFont('helvetica', 'bold');
                  doc.text('Desarrollador Frontend - 2024-Presente', 20, 195);
                  doc.setFont('helvetica', 'normal');
                  doc.text('Proyecto Personal', 20, 202);
                  doc.text('Creación de aplicación de reloj mundial con React y TypeScript.', 20, 209);

                  // Educación
                  doc.setFontSize(14);
                  doc.setFont('helvetica', 'bold');
                  doc.text('EDUCACIÓN', 20, 225);

                  doc.setFontSize(11);
                  doc.setFont('helvetica', 'bold');
                  doc.text('Ingeniería de Software - 2024-Presente', 20, 233);
                  doc.setFont('helvetica', 'normal');
                  doc.text('Universidad Cooperativa de Colombia', 20, 240);

                  doc.setFont('helvetica', 'bold');
                  doc.text('Curso de Python - 2024-Presente', 20, 250);
                  doc.setFont('helvetica', 'normal');
                  doc.text('Plataforma Online', 20, 257);

                  // Guardar el PDF
                  doc.save('CV_David_Esteban_Ordonez_Rendon.pdf');
                }}
              >
                <Download className="mr-2" size={20} />
                {t('hero.downloadCV')}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-green-600 text-green-700 hover:bg-green-50 shadow-md hover:shadow-lg transition-all"
                onClick={() => {
                  const element = document.querySelector('#contact');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Mail className="mr-2" size={20} />
                {t('hero.contact')}
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex gap-4 pt-4 justify-center"
            >
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/EstebanR26"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full shadow-md hover:shadow-lg transition-all border ${
                  theme === 'dark'
                    ? 'bg-gray-800 border-gray-700 text-gray-200 hover:text-green-400'
                    : 'bg-white border-gray-200 text-gray-700 hover:text-green-600'
                }`}
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/david-esteban-ordoñez-rendon-6656a1404"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full shadow-md hover:shadow-lg transition-all border ${
                  theme === 'dark'
                    ? 'bg-gray-800 border-gray-700 text-gray-200 hover:text-green-400'
                    : 'bg-white border-gray-200 text-gray-700 hover:text-green-600'
                }`}
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:david.ordonezren@campusucc.edu.co"
                className={`p-3 rounded-full shadow-md hover:shadow-lg transition-all border ${
                  theme === 'dark'
                    ? 'bg-gray-800 border-gray-700 text-gray-200 hover:text-green-400'
                    : 'bg-white border-gray-200 text-gray-700 hover:text-green-600'
                }`}
              >
                <Mail size={24} />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import certImage from '@/assets/9adcec9a630c68fe755f8b9abad2e68b7481b38d.png';

export function Certifications() {
  const { t } = useLanguage();

  return (
    <section id="certifications" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-green-600 to-emerald-500 text-transparent bg-clip-text">
              {t('certifications.title')}
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-600 to-emerald-500 mx-auto mb-6 rounded-full" />
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            {t('certifications.subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-white rounded-xl p-4 shadow-2xl border-2 border-gray-200 hover:border-green-400 transition-all"
          >
            <img
              src={certImage}
              alt="Certificado - Tercer Seminario Nacional de Ingeniería de Software"
              className="w-full h-auto rounded-lg"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
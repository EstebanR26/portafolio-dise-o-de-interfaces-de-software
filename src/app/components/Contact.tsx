import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Github, Linkedin, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

export function Contact() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(t('contact.success'));
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className={`py-20 px-4 ${
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
              {t('contact.title')}
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-600 to-emerald-500 mx-auto mb-6 rounded-full" />
          <p className={`text-center max-w-2xl mx-auto mb-12 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Información de contacto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className={`text-2xl font-bold mb-6 ${
                theme === 'dark' ? 'text-gray-100' : 'text-gray-800'
              }`}>{t('contact.info')}</h3>
              <div className="space-y-4">
                <motion.div
                  whileHover={{ x: 10 }}
                  className={`flex items-center gap-4 transition-colors ${
                    theme === 'dark'
                      ? 'text-gray-200 hover:text-green-400'
                      : 'text-gray-700 hover:text-green-600'
                  }`}
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0 shadow-md">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>{t('contact.email')}</p>
                    <a href="mailto:david.ordonezren@campusucc.edu.co" className="font-semibold">
                      david.ordonezren@campusucc.edu.co
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className={`flex items-center gap-4 transition-colors ${
                    theme === 'dark'
                      ? 'text-gray-200 hover:text-green-400'
                      : 'text-gray-700 hover:text-green-600'
                  }`}
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0 shadow-md">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>{t('contact.phone')}</p>
                    <a href="tel:+573102475613" className="font-semibold">
                      +57 310 247 5613
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className={`flex items-center gap-4 ${
                    theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                  }`}
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0 shadow-md">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>{t('contact.location')}</p>
                    <p className="font-semibold">Pasto-Nariño, Colombia</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Redes sociales */}
            <div>
              <h3 className={`text-xl font-bold mb-4 ${
                theme === 'dark' ? 'text-gray-100' : 'text-gray-800'
              }`}>{t('contact.followMe')}</h3>
              <div className="flex gap-4">
                <motion.a
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/EstebanR26"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 rounded-lg border-2 flex items-center justify-center transition-all shadow-md ${
                    theme === 'dark'
                      ? 'bg-gray-700 hover:bg-gray-600 border-gray-600 hover:border-green-400 text-gray-200 hover:text-green-400'
                      : 'bg-white hover:bg-green-50 border-gray-200 hover:border-green-400 text-gray-700 hover:text-green-600'
                  }`}
                >
                  <Github size={24} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.linkedin.com/in/david-esteban-ordoñez-rendon-6656a1404"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 rounded-lg border-2 flex items-center justify-center transition-all shadow-md ${
                    theme === 'dark'
                      ? 'bg-gray-700 hover:bg-gray-600 border-gray-600 hover:border-green-400 text-gray-200 hover:text-green-400'
                      : 'bg-white hover:bg-green-50 border-gray-200 hover:border-green-400 text-gray-700 hover:text-green-600'
                  }`}
                >
                  <Linkedin size={24} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:david.ordonezren@campusucc.edu.co"
                  className={`w-12 h-12 rounded-lg border-2 flex items-center justify-center transition-all shadow-md ${
                    theme === 'dark'
                      ? 'bg-gray-700 hover:bg-gray-600 border-gray-600 hover:border-green-400 text-gray-200 hover:text-green-400'
                      : 'bg-white hover:bg-green-50 border-gray-200 hover:border-green-400 text-gray-700 hover:text-green-600'
                  }`}
                >
                  <Mail size={24} />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className={`space-y-6 p-8 rounded-xl shadow-lg border-2 ${
              theme === 'dark'
                ? 'bg-gray-800 border-gray-700'
                : 'bg-white border-gray-200'
            }`}>
              <div>
                <label htmlFor="name" className={`block text-sm font-medium mb-2 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {t('contact.name')}
                </label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={t('contact.namePlaceholder')}
                  required
                  className={`border-2 focus:border-green-500 focus:ring-green-500 ${
                    theme === 'dark'
                      ? 'bg-gray-700 border-gray-600 text-gray-100 placeholder:text-gray-400'
                      : 'bg-gray-50 border-gray-200 text-gray-800 placeholder:text-gray-400'
                  }`}
                />
              </div>

              <div>
                <label htmlFor="email" className={`block text-sm font-medium mb-2 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {t('contact.emailLabel')}
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder={t('contact.emailPlaceholder')}
                  required
                  className={`border-2 focus:border-green-500 focus:ring-green-500 ${
                    theme === 'dark'
                      ? 'bg-gray-700 border-gray-600 text-gray-100 placeholder:text-gray-400'
                      : 'bg-gray-50 border-gray-200 text-gray-800 placeholder:text-gray-400'
                  }`}
                />
              </div>

              <div>
                <label htmlFor="message" className={`block text-sm font-medium mb-2 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {t('contact.message')}
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t('contact.messagePlaceholder')}
                  rows={6}
                  required
                  className={`border-2 focus:border-green-500 focus:ring-green-500 resize-none ${
                    theme === 'dark'
                      ? 'bg-gray-700 border-gray-600 text-gray-100 placeholder:text-gray-400'
                      : 'bg-gray-50 border-gray-200 text-gray-800 placeholder:text-gray-400'
                  }`}
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 text-white shadow-lg hover:shadow-xl transition-all"
              >
                <Send className="mr-2" size={20} />
                {t('contact.send')}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

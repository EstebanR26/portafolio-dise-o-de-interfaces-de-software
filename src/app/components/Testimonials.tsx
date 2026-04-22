import { motion } from 'motion/react';
import { TestimonialCard } from './TestimonialCard';
import { useLanguage } from '../contexts/LanguageContext';

const testimonials = [
  {
    nameKey: 'testimonial1.name',
    roleKey: 'testimonial1.role',
    commentKey: 'testimonial1.comment',
    image: 'https://images.unsplash.com/photo-1579525109384-ddf54825044f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMG1hbnxlbnwxfHx8fDE3NzQzNDQ3MzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    nameKey: 'testimonial2.name',
    roleKey: 'testimonial2.role',
    commentKey: 'testimonial2.comment',
    image: 'https://images.unsplash.com/photo-1762341120638-b5b9358ef571?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHdvbWFufGVufDF8fHx8MTc3NDQwMDY2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    nameKey: 'testimonial3.name',
    roleKey: 'testimonial3.role',
    commentKey: 'testimonial3.comment',
    image: 'https://images.unsplash.com/photo-1737574821698-862e77f044c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzc21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NDMzNzk2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

export function Testimonials() {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-green-600 to-emerald-500 text-transparent bg-clip-text">
              {t('testimonials.title')}
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-600 to-emerald-500 mx-auto mb-6 rounded-full" />
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            {t('testimonials.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.nameKey}
              name={t(testimonial.nameKey)}
              role={t(testimonial.roleKey)}
              comment={t(testimonial.commentKey)}
              image={testimonial.image}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

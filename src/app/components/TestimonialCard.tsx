import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  comment: string;
  image: string;
  index: number;
}

export function TestimonialCard({ name, role, comment, image, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-green-300 transition-all shadow-lg hover:shadow-2xl"
    >
      <Quote className="text-green-500 mb-4" size={32} />
      <p className="text-gray-700 mb-6 italic leading-relaxed">"{comment}"</p>
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={name}
          className="w-14 h-14 rounded-full object-cover border-2 border-green-400 shadow-md"
        />
        <div>
          <h4 className="font-semibold text-gray-800">{name}</h4>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
    </motion.div>
  );
}

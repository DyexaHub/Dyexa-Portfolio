import { motion } from 'motion/react';
import { fadeInUp } from '../../utils/animations';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  gradient?: boolean;
}

export function SectionTitle({ title, subtitle, centered = true, gradient = false }: SectionTitleProps) {
  return (
    <motion.div
      className={`mb-12 ${centered ? 'text-center' : ''}`}
      initial={fadeInUp.initial}
      whileInView={fadeInUp.animate}
      transition={fadeInUp.transition}
      viewport={{ once: true }}
    >
      <h2 className={`text-4xl md:text-5xl mb-4 ${gradient ? 'gradient-text' : ''}`}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="w-24 h-1 bg-linear-to-r from-primary to-accent rounded-full mx-auto mt-6"></div>
    </motion.div>
  );
}

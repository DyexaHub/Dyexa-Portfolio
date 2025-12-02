import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface RotatingTextProps {
  texts: string[];
  interval?: number;
  className?: string;
}

export function RotatingText({ texts, interval = 3000, className = '' }: RotatingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, interval);

    return () => clearInterval(timer);
  }, [texts.length, interval]);

  return (
    <div className={`relative inline-block ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="inline-block"
        >
          {texts[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

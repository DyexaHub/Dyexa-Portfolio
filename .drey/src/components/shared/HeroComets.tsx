import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Comet {
  id: number;
  startX: number;
  startY: number;
  angle: number;
  duration: number;
}

export function HeroComets() {
  const [comets, setComets] = useState<Comet[]>([]);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check theme
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    checkTheme();
    
    // Watch for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const createComet = () => {
      const newComet: Comet = {
        id: Date.now(),
        startX: Math.random() > 0.5 ? Math.random() * 100 : 100 + Math.random() * 20,
        startY: Math.random() * 40,
        angle: 45 + Math.random() * 20, // 45-65 degrees
        duration: 3 + Math.random() * 2, // 3-5 seconds
      };

      setComets(prev => [...prev, newComet]);

      // Remove comet after animation
      setTimeout(() => {
        setComets(prev => prev.filter(c => c.id !== newComet.id));
      }, newComet.duration * 1000);
    };

    // Create comets at intervals
    const interval = setInterval(() => {
      if (Math.random() > 0.7) { // 30% chance every interval
        createComet();
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <AnimatePresence>
        {comets.map((comet) => (
          <motion.div
            key={comet.id}
            className="absolute"
            initial={{
              left: `${comet.startX}%`,
              top: `${comet.startY}%`,
              opacity: 1,
            }}
            animate={{
              left: `${comet.startX - 50}%`,
              top: `${comet.startY + 50}%`,
              opacity: [1, 0.8, 0],
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: comet.duration,
              ease: "easeOut"
            }}
          >
            {/* Comet head */}
            <div 
              className="relative"
              style={{
                filter: 'blur(1px)',
              }}
            >
              <div
                className="w-2 h-2 rounded-full"
                style={{
                  background: isDark 
                    ? 'radial-gradient(circle, rgba(186, 230, 253, 1) 0%, rgba(125, 211, 252, 0.8) 50%, transparent 100%)'
                    : 'radial-gradient(circle, rgba(125, 211, 252, 1) 0%, rgba(56, 189, 248, 0.8) 50%, transparent 100%)',
                  boxShadow: isDark
                    ? '0 0 10px rgba(186, 230, 253, 0.8), 0 0 20px rgba(125, 211, 252, 0.5)'
                    : '0 0 8px rgba(125, 211, 252, 0.8), 0 0 15px rgba(56, 189, 248, 0.5)',
                }}
              />
              
              {/* Comet tail */}
              <motion.div
                className="absolute top-0 left-0 origin-left"
                style={{
                  width: '60px',
                  height: '2px',
                  background: isDark
                    ? 'linear-gradient(90deg, rgba(125, 211, 252, 0.8), rgba(56, 189, 248, 0.4), transparent)'
                    : 'linear-gradient(90deg, rgba(56, 189, 248, 0.8), rgba(14, 165, 233, 0.4), transparent)',
                  transform: `rotate(${comet.angle}deg)`,
                  filter: 'blur(1px)',
                }}
              />
              
              {/* Additional glow trail */}
              <motion.div
                className="absolute top-0 left-0 origin-left"
                style={{
                  width: '40px',
                  height: '4px',
                  background: isDark
                    ? 'linear-gradient(90deg, rgba(186, 230, 253, 0.4), transparent)'
                    : 'linear-gradient(90deg, rgba(125, 211, 252, 0.4), transparent)',
                  transform: `rotate(${comet.angle}deg)`,
                  filter: 'blur(2px)',
                }}
              />
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

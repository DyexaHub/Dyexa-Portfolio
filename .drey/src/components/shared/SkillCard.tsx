import { motion } from 'motion/react';
import * as LucideIcons from 'lucide-react';
import { Card } from '../ui/card';
import { type Skill } from '../../data/skills';

interface SkillCardProps {
  skill: Skill;
  index: number;
}

export function SkillCard({ skill, index }: SkillCardProps) {
  const IconComponent = LucideIcons[skill.icon as keyof typeof LucideIcons] as any;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, scale: 1.02 }}
    >
      <Card className="p-6 h-full glass hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary/50 relative overflow-hidden group">
        {/* Animated background glow */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${skill.color}15, transparent 70%)`
          }}
        />
        
        <div className="flex items-center gap-4 mb-4 relative z-10">
          <motion.div 
            className="p-3 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: `${skill.color}20` }}
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            {IconComponent && (
              <IconComponent 
                className="w-6 h-6" 
                style={{ color: skill.color }}
              />
            )}
          </motion.div>
          <div className="flex-1">
            <h3 className="font-semibold">{skill.name}</h3>
            <p className="text-sm text-muted-foreground">{skill.category}</p>
          </div>
        </div>
        
        <div className="space-y-2 relative z-10">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Proficiency</span>
            <motion.span 
              className="font-medium"
              key={skill.level}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {skill.level}%
            </motion.span>
          </div>
          
          {/* Custom animated progress bar */}
          <div className="relative h-2 bg-secondary rounded-full overflow-hidden">
            {/* Background shimmer */}
            <motion.div
              className="absolute inset-0 opacity-30"
              style={{
                background: `linear-gradient(90deg, transparent, ${skill.color}40, transparent)`
              }}
              animate={{
                x: ['-100%', '200%']
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
                repeatDelay: 0.5
              }}
            />
            
            {/* Animated fill with gradient */}
            <motion.div
              className="h-full rounded-full relative overflow-hidden"
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{ 
                duration: 1.5, 
                delay: index * 0.05,
                ease: [0.34, 1.56, 0.64, 1]
              }}
              viewport={{ once: true }}
              style={{
                background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`
              }}
            >
              {/* Moving shine effect */}
              <motion.div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)'
                }}
                animate={{
                  x: ['-100%', '200%']
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                  repeatDelay: 1
                }}
              />
              
              {/* Glowing edge */}
              <motion.div
                className="absolute right-0 top-0 bottom-0 w-2"
                style={{
                  background: `radial-gradient(circle, ${skill.color}, transparent)`,
                  boxShadow: `0 0 8px ${skill.color}`
                }}
                animate={{
                  opacity: [0.5, 1, 0.5],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
            
            {/* Particles effect */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full"
                style={{
                  backgroundColor: skill.color,
                  left: `${(skill.level / 3) * (i + 1)}%`,
                  top: '25%'
                }}
                animate={{
                  y: [0, -8, 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3
                }}
              />
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

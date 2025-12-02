import { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { SectionTitle } from '../shared/SectionTitle';
import { SkillCard } from '../shared/SkillCard';
import { skills, skillCategories } from '../../data/skills';

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills = activeCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 bg-secondary/30 relative">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Skills & Technologies"
          subtitle="A comprehensive overview of my technical expertise and proficiency levels"
          gradient
        />

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {skillCategories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? 'default' : 'outline'}
              onClick={() => setActiveCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          layout
        >
          {filteredSkills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </motion.div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          <div className="glass p-6 rounded-xl text-center border">
            <div className="text-4xl mb-2">{skills.length}</div>
            <p className="text-muted-foreground">Total Skills</p>
          </div>
          <div className="glass p-6 rounded-xl text-center border">
            <div className="text-4xl mb-2">{skillCategories.length - 1}</div>
            <p className="text-muted-foreground">Categories</p>
          </div>
          <div className="glass p-6 rounded-xl text-center border">
            <div className="text-4xl mb-2">
              {Math.round(skills.reduce((acc, skill) => acc + skill.level, 0) / skills.length)}%
            </div>
            <p className="text-muted-foreground">Avg Proficiency</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { SectionTitle } from '../shared/SectionTitle';
import { ProjectCard } from '../shared/ProjectCard';
import { projects, projectCategories } from '../../data/projects';

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Featured Projects"
          subtitle="Explore my portfolio of web applications, mobile apps, and innovative solutions"
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
          {projectCategories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? 'default' : 'outline'}
              onClick={() => {
                setActiveCategory(category);
                setShowAll(false);
              }}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Load More Button */}
        {filteredProjects.length > 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button
              size="lg"
              variant="outline"
              onClick={() => setShowAll(!showAll)}
              className="rounded-full"
            >
              {showAll ? 'Show Less' : `View All ${filteredProjects.length} Projects`}
            </Button>
          </motion.div>
        )}

        {/* Project Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          <div className="glass p-6 rounded-xl text-center border">
            <div className="text-4xl mb-2">{projects.length}</div>
            <p className="text-sm text-muted-foreground">Total Projects</p>
          </div>
          <div className="glass p-6 rounded-xl text-center border">
            <div className="text-4xl mb-2">{projects.filter(p => p.featured).length}</div>
            <p className="text-sm text-muted-foreground">Featured</p>
          </div>
          <div className="glass p-6 rounded-xl text-center border">
            <div className="text-4xl mb-2">{projects.filter(p => p.status === 'completed').length}</div>
            <p className="text-sm text-muted-foreground">Completed</p>
          </div>
          <div className="glass p-6 rounded-xl text-center border">
            <div className="text-4xl mb-2">{projects.filter(p => p.status === 'in-progress').length}</div>
            <p className="text-sm text-muted-foreground">In Progress</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

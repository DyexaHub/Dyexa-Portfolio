import { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ExternalLink, Github, Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { type Project } from '../../data/projects';
import { ImageWithFallback } from '../figma/ImageWithFallback';
// import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  // Mouse tracking for 3D tilt effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Spring animation for smooth movement
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { stiffness: 300, damping: 30 });
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;
    const xPct = (mouseXPos / width) - 0.5;
    const yPct = (mouseYPos / height) - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="h-full"
      style={{
        perspective: "1000px",
      }}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ scale: 1.02 }}
        className="h-full"
      >
        <Card className="h-full flex flex-col overflow-hidden glass hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-primary/50 relative group">

          <div className="relative overflow-hidden h-48">
            <motion.div
              animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            {/* Overlay gradient */}
            <motion.div
              className="absolute inset-0 bg-linear-to-t from-card/90 to-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />
            
            {project.featured && (
              <motion.div 
                className="absolute top-4 right-4 bg-linear-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full flex items-center gap-1 text-sm"
                animate={{
                  scale: isHovered ? [1, 1.1, 1] : 1,
                }}
                transition={{ duration: 0.5, repeat: isHovered ? Infinity : 0 }}
              >
                <Star className="w-4 h-4 fill-current" />
                Featured
              </motion.div>
            )}
            <div className="absolute top-4 left-4">
              <motion.div
                animate={{
                  scale: isHovered ? 1.05 : 1,
                }}
              >
                <Badge 
                  variant={project.status === 'completed' ? 'default' : project.status === 'in-progress' ? 'secondary' : 'outline'}
                >
                  {project.status.replace('-', ' ').toUpperCase()}
                </Badge>
              </motion.div>
            </div>
          </div>
          
          <CardHeader>
            <CardTitle className="line-clamp-1 group-hover:text-primary transition-colors">{project.title}</CardTitle>
            <CardDescription className="line-clamp-2">{project.description}</CardDescription>
          </CardHeader>
          
          <CardContent className="flex-1">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.slice(0, 4).map((tech, i) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: isHovered ? i * 0.05 : 0 }}
                >
                  <Badge variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                </motion.div>
              ))}
              {project.technologies.length > 4 && (
                <Badge variant="outline" className="text-xs">
                  +{project.technologies.length - 4}
                </Badge>
              )}
            </div>
            <div className="text-sm text-muted-foreground">
              <p className="line-clamp-2">{project.longDescription}</p>
            </div>
          </CardContent>
          
          <CardFooter className="gap-2 pt-4 border-t">
            {project.demoUrl && (
              <motion.div 
                className="flex-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="sm" variant="default" className="w-full group/btn" asChild>
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:rotate-45 transition-transform" />
                    Demo
                  </a>
                </Button>
              </motion.div>
            )}
            {project.githubUrl && (
              <motion.div 
                className="flex-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="sm" variant="outline" className="w-full group/btn" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                    Code
                  </a>
                </Button>
              </motion.div>
            )}
          </CardFooter>
        </Card>
      </motion.div>
    </motion.div>
  );
}

import { motion, useScroll } from 'motion/react';
import * as LucideIcons from 'lucide-react';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { SectionTitle } from '../shared/SectionTitle';
import { roadmap, goals } from '../../data/roadmap';
import { useScrollProgress } from '../../hooks/useScrollProgress';
import { useRef } from 'react';

export function RoadmapSection() {
  const scrollProgress = useScrollProgress('roadmap');
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  // Generate color based on scroll progress
  const getProgressColor = (progress: number) => {
    const colors = [
      { pos: 0, color: '#0EA5E9' },
      { pos: 20, color: '#8B5CF6' },
      { pos: 40, color: '#EC4899' },
      { pos: 60, color: '#F59E0B' },
      { pos: 80, color: '#10B981' },
      { pos: 100, color: '#06B6D4' },
    ];
    
    let colorStart = colors[0];
    let colorEnd = colors[colors.length - 1];
    
    for (let i = 0; i < colors.length - 1; i++) {
      if (progress >= colors[i].pos && progress <= colors[i + 1].pos) {
        colorStart = colors[i];
        colorEnd = colors[i + 1];
        break;
      }
    }
    
    return {
      primary: colorStart.color,
      secondary: colorEnd.color,
      mixed: `linear-gradient(135deg, ${colorStart.color}, ${colorEnd.color})`
    };
  };
  
  const colors = getProgressColor(scrollProgress);
  
  return (
    <section id="roadmap" className="py-20 relative overflow-hidden" ref={sectionRef}
      style={{
        background: `linear-gradient(to bottom, transparent, ${colors.primary}10, transparent)`
      }}
    >
      {/* Floating gradient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 rounded-full blur-3xl opacity-20"
            style={{
              background: `radial-gradient(circle, ${colors.primary}, transparent)`,
              left: `${i * 20}%`,
              top: `${i % 2 === 0 ? '20%' : '60%'}`
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle
          title="Roadmap & Goals"
          subtitle="My journey from student to professional developer, with clear milestones and objectives"
          gradient
        />

        <Tabs defaultValue="roadmap" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="roadmap">Learning Roadmap</TabsTrigger>
            <TabsTrigger value="goals">Current Goals</TabsTrigger>
          </TabsList>

          {/* Roadmap Timeline */}
          <TabsContent value="roadmap">
            <div className="relative">
              {/* Vertical Timeline Line with Dynamic Color */}
              <motion.div 
                className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 hidden sm:block transform -translate-x-1/2"
                style={{
                  background: colors.mixed
                }}
                animate={{
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Animated line fill based on scroll */}
              <motion.div
                className="absolute left-4 md:left-1/2 top-0 w-1 hidden sm:block transform -translate-x-1/2"
                style={{
                  height: `${scrollProgress}%`,
                  background: `linear-gradient(180deg, ${colors.primary}, ${colors.secondary})`,
                  boxShadow: `0 0 10px ${colors.primary}`
                }}
              />

              <div className="space-y-12">
                {roadmap.map((item, index) => {
                  const IconComponent = LucideIcons[item.icon as keyof typeof LucideIcons] as any;
                  const isLeft = index % 2 === 0;
                  
                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`relative ${isLeft ? 'md:pr-[52%]' : 'md:pl-[52%]'}`}
                    >
                      {/* Timeline Node with Dynamic Color */}
                        <motion.div 
                        className="absolute left-4 md:left-1/2 top-6 w-16 h-16 rounded-full bg-card items-center justify-center transform -translate-x-1/2 z-20 hidden md:flex shadow-lg"
                        style={{
                          borderWidth: '3px',
                          borderStyle: 'solid',
                          borderColor: colors.primary,
                          boxShadow: `0 0 20px ${colors.primary}60, inset 0 0 10px ${colors.primary}20`
                        }}
                        whileHover={{ scale: 1.15, rotate: 10 }}
                        transition={{ duration: 0.3 }}
                        >
                        {IconComponent && (
                          <IconComponent 
                          className="w-8 h-8" 
                          style={{ color: colors.primary }}
                          />
                        )}
                        </motion.div>

                      {/* Connecting line to card */}
                      <motion.div
                        className="absolute top-10 hidden md:block h-0.5 z-10"
                        style={{
                          background: `linear-gradient(${isLeft ? '90deg' : '-90deg'}, ${colors.primary}, transparent)`,
                          width: '8%',
                          left: isLeft ? '50%' : 'auto',
                          right: isLeft ? 'auto' : '50%'
                        }}
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                      />

                      <Card className="p-6 glass hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-primary/50 ml-12 sm:ml-0 relative overflow-hidden group">
                        {/* Animated background gradient */}
                        <motion.div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
                          style={{
                            background: `linear-gradient(135deg, ${colors.primary}08, ${colors.secondary}08)`
                          }}
                          transition={{ duration: 0.3 }}
                        />
                        
                        <div className="flex items-center justify-between mb-3 relative z-10">
                          <div className="flex items-center gap-3">
                            <div className="sm:hidden p-2 rounded-lg bg-primary/20">
                              {IconComponent && (
                                <IconComponent 
                                  className="w-5 h-5" 
                                  style={{ color: item.color }}
                                />
                              )}
                            </div>
                            <div>
                              <h3 className="text-xl">{item.title}</h3>
                              <p className="text-sm text-muted-foreground">
                                {item.year} {item.quarter}
                              </p>
                            </div>
                          </div>
                          <Badge 
                            variant={
                              item.status === 'completed' 
                                ? 'default' 
                                : item.status === 'in-progress' 
                                ? 'secondary' 
                                : 'outline'
                            }
                          >
                            {item.status.replace('-', ' ').toUpperCase()}
                          </Badge>
                        </div>

                        <p className="text-muted-foreground mb-4 relative z-10">{item.description}</p>

                        <div className="relative z-10">
                          <h4 className="text-sm mb-2">Goals:</h4>
                          <ul className="space-y-2">
                            {item.goals.map((goal, i) => (
                              <motion.li 
                                key={i} 
                                className="flex items-start gap-2 text-sm"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                              >
                                <motion.span 
                                  className="text-primary mt-1 shrink-0"
                                  whileHover={{ scale: 1.3, rotate: 360 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  ✓
                                </motion.span>
                                <span className={item.status === 'completed' ? '' : 'text-muted-foreground'}>
                                  {goal}
                                </span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </TabsContent>

          {/* Current Goals */}
          <TabsContent value="goals">
            <div className="grid md:grid-cols-2 gap-6">
              {goals.map((goal, index) => {
                const IconComponent = LucideIcons[goal.icon as keyof typeof LucideIcons] as any;
                const categoryColors = {
                  'short-term': '#10B981',
                  'medium-term': '#F59E0B',
                  'long-term': '#8B5CF6'
                };
                
                return (
                  <motion.div
                    key={goal.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="p-6 h-full glass hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary/50">
                      <div className="flex items-start gap-4 mb-4">
                        <motion.div 
                          className="p-3 rounded-xl shrink-0"
                          style={{ backgroundColor: `${categoryColors[goal.category]}20` }}
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          {IconComponent && (
                            <IconComponent 
                              className="w-6 h-6" 
                              style={{ color: categoryColors[goal.category] }}
                            />
                          )}
                        </motion.div>
                        <div className="flex-1">
                          <h3 className="text-lg mb-1">{goal.title}</h3>
                          <Badge 
                            variant="outline" 
                            className="text-xs"
                            style={{ 
                              borderColor: categoryColors[goal.category],
                              color: categoryColors[goal.category]
                            }}
                          >
                            {goal.category.replace('-', ' ').toUpperCase()}
                          </Badge>
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground mb-4">{goal.description}</p>

                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Progress</span>
                          <span className="font-medium">{goal.progress}%</span>
                        </div>
                        <Progress value={goal.progress} className="h-2" />
                        <p className="text-xs text-muted-foreground text-right">
                          Target: {goal.deadline}
                        </p>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            {/* Goals Summary */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-8 grid grid-cols-3 gap-6"
            >
              <Card className="p-6 text-center glass border">
                <div className="text-3xl mb-2 text-green-500">{goals.filter(g => g.category === 'short-term').length}</div>
                <p className="text-sm text-muted-foreground">Short-term Goals</p>
              </Card>
              <Card className="p-6 text-center glass border">
                <div className="text-3xl mb-2 text-orange-500">{goals.filter(g => g.category === 'medium-term').length}</div>
                <p className="text-sm text-muted-foreground">Medium-term Goals</p>
              </Card>
              <Card className="p-6 text-center glass border">
                <div className="text-3xl mb-2 text-purple-500">{goals.filter(g => g.category === 'long-term').length}</div>
                <p className="text-sm text-muted-foreground">Long-term Goals</p>
              </Card>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

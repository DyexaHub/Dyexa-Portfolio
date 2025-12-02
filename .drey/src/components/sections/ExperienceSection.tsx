import { motion } from 'motion/react';
import * as LucideIcons from 'lucide-react';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { SectionTitle } from '../shared/SectionTitle';
import { experiences } from '../../data/experience';
import { education, certifications } from '../../data/education';

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-secondary/30 relative">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Experience & Education"
          subtitle="My professional journey, academic achievements, and certifications"
          gradient
        />

        <Tabs defaultValue="experience" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8 p-1">
            {[
              { value: 'experience', label: 'Work Experience' },
              { value: 'education', label: 'Education' },
              { value: 'certifications', label: 'Certifications' }
            ].map((tab) => (
              <TabsTrigger 
                key={tab.value} 
                value={tab.value} 
                className="relative overflow-hidden group data-[state=active]:text-white"
              >
                <span className="relative z-10 text-inherit">
                  {tab.label}
                </span>
                
                {/* Animated gradient background */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-data-[state=active]:opacity-100"
                  style={{
                    background: 'linear-gradient(90deg, #0EA5E9, #38BDF8, #06B6D4, #0EA5E9)',
                    backgroundSize: '200% 100%',
                  }}
                  animate={{
                    backgroundPosition: ['0% 50%', '200% 50%'],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                
                {/* Click ripple effect */}
                <motion.div
                  className="absolute inset-0 bg-primary/20 rounded-md"
                  initial={{ scale: 0, opacity: 0 }}
                  whileTap={{ scale: 2, opacity: [0.5, 0] }}
                  transition={{ duration: 0.5 }}
                />
                
                {/* Hover glow */}
                <motion.div
                  className="absolute inset-0 bg-linear-to-r from-primary/0 via-primary/20 to-primary/0 rounded-md opacity-0 group-hover:opacity-100"
                  animate={{
                    x: ['-100%', '100%']
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Work Experience */}
          <TabsContent value="experience" className="space-y-8">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30 hidden md:block" />

              {experiences.map((exp, index) => {
                const IconComponent = LucideIcons[exp.icon as keyof typeof LucideIcons] as any;
                
                return (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative mb-8 md:ml-20"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute -left-[4.5rem] top-6 w-12 h-12 rounded-full bg-primary flex items-center justify-center md:flex">
                      {IconComponent && <IconComponent className="w-6 h-6 text-white" />}
                    </div>

                    <Card className="p-6 glass hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary/50">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl mb-1">{exp.title}</h3>
                          <p className="text-primary mb-2">{exp.company}</p>
                          <div className="flex flex-wrap gap-2 mb-2">
                            <Badge variant="secondary">{exp.location}</Badge>
                            <Badge variant={exp.current ? 'default' : 'outline'}>
                              {exp.type.toUpperCase()}
                            </Badge>
                          </div>
                        </div>
                        <div className="text-muted-foreground text-sm mt-2 md:mt-0">
                          {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4">{exp.description}</p>

                      <div className="space-y-4">
                        {exp.responsibilities.length > 0 && (
                          <div>
                            <h4 className="text-sm mb-2">Key Responsibilities:</h4>
                            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                              {exp.responsibilities.map((resp, i) => (
                                <li key={i}>{resp}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {exp.achievements.length > 0 && (
                          <div>
                            <h4 className="text-sm mb-2">Achievements:</h4>
                            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                              {exp.achievements.map((achievement, i) => (
                                <li key={i}>{achievement}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        <div className="flex flex-wrap gap-2 pt-2">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </TabsContent>

          {/* Education */}
          <TabsContent value="education" className="space-y-8">
            {education.map((edu, index) => {
              const IconComponent = LucideIcons[edu.icon as keyof typeof LucideIcons] as any;
              
              return (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 glass hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary/50">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 rounded-xl bg-primary/20 shrink-0">
                        {IconComponent && <IconComponent className="w-8 h-8 text-primary" />}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                          <div>
                            <h3 className="text-xl mb-1">{edu.degree} - {edu.field}</h3>
                            <p className="text-primary mb-2">{edu.institution}</p>
                            <div className="flex flex-wrap gap-2">
                              <Badge variant="secondary">{edu.location}</Badge>
                              <Badge variant="default">GPA: {edu.gpa}</Badge>
                            </div>
                          </div>
                          <div className="text-muted-foreground text-sm mt-2 md:mt-0">
                            {edu.startDate} - {edu.current ? 'Present' : edu.endDate}
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4">{edu.description}</p>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm mb-2">Relevant Coursework:</h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.coursework.map((course) => (
                            <Badge key={course} variant="outline" className="text-xs">
                              {course}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm mb-2">Achievements & Activities:</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                          {[...edu.achievements, ...edu.activities].slice(0, 5).map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </TabsContent>

          {/* Certifications */}
          <TabsContent value="certifications">
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => {
                const IconComponent = LucideIcons[cert.icon as keyof typeof LucideIcons] as any;
                
                return (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="p-6 h-full glass hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary/50">
                      <div className="flex items-start gap-4 mb-4">
                        <div 
                          className="p-3 rounded-xl shrink-0"
                          style={{ backgroundColor: `${cert.color}20` }}
                        >
                          {IconComponent && (
                            <IconComponent 
                              className="w-6 h-6" 
                              style={{ color: cert.color }}
                            />
                          )}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg mb-1">{cert.name}</h3>
                          <p className="text-sm text-primary mb-2">{cert.issuer}</p>
                          <p className="text-xs text-muted-foreground">
                            {cert.date} • ID: {cert.credentialId}
                          </p>
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground mb-4">{cert.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

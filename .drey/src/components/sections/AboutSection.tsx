import { motion, AnimatePresence } from "motion/react";
import {
  Code,
  Database,
  Palette,
  Zap,
  Heart,
  Rocket,
  Users,
  Lightbulb,
  Trophy,
  ChevronDown,
} from "lucide-react";
import { Card } from "../ui/card";
import { SectionTitle } from "../shared/SectionTitle";
import { AnimatedCounter } from "../shared/AnimatedCounter";
import { personalInfo } from "../../data/personal";
import { fadeInUp } from "../../utils/animations";
import { useState } from "react";

export function AboutSection() {
  const [showAllInterests, setShowAllInterests] =
    useState(false);

  const stats = [
    {
      label: "Years of Study",
      value: personalInfo.stats.yearsOfStudy,
      suffix: "+",
      icon: Code,
    },
    {
      label: "Projects Completed",
      value: personalInfo.stats.projectsCompleted,
      suffix: "+",
      icon: Rocket,
    },
    {
      label: "Technologies",
      value: personalInfo.stats.technologiesLearned,
      suffix: "+",
      icon: Database,
    },
    {
      label: "Certifications",
      value: personalInfo.stats.certificationsEarned,
      suffix: "",
      icon: Zap,
    },
  ];

  const highlights = [
    {
      icon: Code,
      value: 25,
      suffix: "+",
      label: "Projects",
    },
    {
      icon: Trophy,
      value: 8,
      suffix: "",
      label: "Awards",
    },
    {
      icon: Users,
      value: 100,
      suffix: "+",
      label: "Collaborations",
    },
    {
      icon: Lightbulb,
      value: 40,
      suffix: "+",
      label: "Ideas",
    },
  ];

  const interests = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Building end-to-end web applications",
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Transforming data into insights",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating beautiful experiences",
    },
    {
      icon: Heart,
      title: "Problem Solving",
      description: "Finding elegant solutions",
    },
  ];

  // Show first 8 interests initially, rest on toggle
  const visibleInterests = showAllInterests
    ? personalInfo.interests
    : personalInfo.interests.slice(0, 8);

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="About Me"
          subtitle="Get to know more about my background, skills, and interests"
          gradient
        />

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12"
          initial={fadeInUp.initial}
          whileInView={fadeInUp.animate}
          transition={fadeInUp.transition}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Card className="p-4 md:p-6 text-center glass hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary/50">
                <stat.icon className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2 md:mb-3 text-primary" />
                <div className="text-3xl md:text-4xl mb-1 md:mb-2">
                  <AnimatedCounter
                    end={stat.value}
                    suffix={stat.suffix}
                  />
                </div>
                <p className="text-xs md:text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-start mb-12">
          {/* Left Column - Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="glass p-5 hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/50 relative overflow-hidden group">
                {/* Animated gradient border effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(14, 165, 233, 0.3), transparent)",
                  }}
                  animate={{
                    x: ["-100%", "200%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* Glowing corners */}
                <motion.div
                  className="absolute top-0 left-0 w-20 h-20 bg-primary/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 pointer-events-none"
                  animate={{
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute bottom-0 right-0 w-20 h-20 bg-accent/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 pointer-events-none"
                  animate={{
                    scale: [1.5, 1, 1.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />

                <p className="text-base leading-relaxed text-muted-foreground relative z-10">
                  I'm currently pursuing my Bachelor's degree in
                  Information Systems at{" "}
                  {personalInfo.university}, where I'm
                  developing a strong foundation in software
                  engineering, data analytics, and business
                  information systems. My journey in technology
                  began with a curiosity about how things work
                  behind the scenes, which has evolved into a
                  passion for creating digital solutions that
                  solve real-world problems.
                </p>
              </Card>
            </motion.div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-3">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass p-3.5 rounded-xl hover:shadow-xl transition-all duration-300 border hover:border-primary/50 group relative overflow-hidden"
                >
                  {/* Hover glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-linear-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 rounded-xl pointer-events-none"
                    transition={{ duration: 0.3 }}
                  />

                  <div className="flex items-center gap-2.5 mb-2 relative z-10">
                    <motion.div
                      className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <highlight.icon className="w-4 h-4" />
                    </motion.div>
                  </div>
                  <AnimatedCounter
                    end={highlight.value}
                    suffix={highlight.suffix}
                  />
                  <p className="text-xs text-muted-foreground relative z-10">
                    {highlight.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Interests */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <h3 className="text-2xl mb-4">What I Do</h3>
            <div className="space-y-3">
              {interests.map((interest, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="flex items-center gap-3 glass p-3.5 rounded-xl hover:shadow-xl transition-all duration-300 border hover:border-primary/50 group relative overflow-hidden"
                >
                  {/* Animated shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-linear-to-r from-transparent via-primary/10 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />

                  <motion.div
                    className="p-2.5 rounded-lg bg-linear-to-br from-primary/20 to-accent/20 group-hover:from-primary group-hover:to-accent relative z-10"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <interest.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                  </motion.div>
                  <div className="flex-1 relative z-10">
                    <h4 className="font-medium text-sm mb-0.5 group-hover:text-primary transition-colors">
                      {interest.title}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {interest.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Interests Tags - Expandable */}
        <motion.div
          initial={fadeInUp.initial}
          whileInView={fadeInUp.animate}
          transition={fadeInUp.transition}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4 md:mb-6">
            <h3 className="text-xl md:text-2xl">
              Areas of Interest
            </h3>
            <motion.button
              onClick={() =>
                setShowAllInterests(!showAllInterests)
              }
              className="glass p-2 rounded-full hover:bg-primary/20 transition-all border group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: showAllInterests ? 180 : 0 }}
                transition={{
                  duration: 0.4,
                  ease: [0.4, 0, 0.2, 1],
                }}
              >
                <ChevronDown className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
              </motion.div>
            </motion.button>
          </div>

          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            <AnimatePresence mode="popLayout">
              {visibleInterests.map((interest) => (
                <motion.div
                  key={interest}
                  layout
                  initial={{
                    opacity: 0,
                    scale: 0,
                    rotate: -10,
                  }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0, rotate: 10 }}
                  transition={{
                    layout: {
                      duration: 0.5,
                      ease: [0.34, 1.56, 0.64, 1],
                    },
                    opacity: { duration: 0.3 },
                    scale: {
                      duration: 0.4,
                      ease: [0.34, 1.56, 0.64, 1],
                    },
                    rotate: { duration: 0.4 },
                  }}
                  whileHover={{ scale: 1.08, y: -3 }}
                  className="relative glass px-4 md:px-6 py-2 md:py-3 rounded-full border-2 cursor-default group overflow-hidden"
                >
                  {/* Animated gradient background */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(14, 165, 233, 0.15), rgba(139, 92, 246, 0.15))",
                    }}
                  />

                  {/* Rainbow shimmer effect on hover - Theme aware */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, rgba(56, 189, 248, 0.4), rgba(139, 92, 246, 0.4), rgba(236, 72, 153, 0.4), transparent)",
                    }}
                    initial={{ x: "-200%" }}
                    animate={{ x: "200%" }}
                    transition={{
                      duration: 1.5,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatDelay: 0.5,
                    }}
                  />

                  {/* Glow border on hover - Dynamic theme color */}
                  <motion.div
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    animate={{
                      boxShadow: [
                        "0 0 10px rgba(14, 165, 233, 0.3)",
                        "0 0 25px rgba(14, 165, 233, 0.6)",
                        "0 0 10px rgba(14, 165, 233, 0.3)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />

                  {/* Floating particles on hover */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-primary rounded-full pointer-events-none opacity-0 group-hover:opacity-100"
                      style={{
                        left: `${30 + i * 20}%`,
                        top: "50%",
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}

                  {/* Shining color text animation on hover */}
                  <motion.span
                    className="relative z-10 text-sm md:text-base transition-all duration-300"
                    animate={{
                      backgroundImage: [
                        "linear-gradient(90deg, currentColor 0%, currentColor 100%)",
                        "linear-gradient(90deg, rgb(14, 165, 233) 0%, rgb(139, 92, 246) 50%, rgb(236, 72, 153) 100%)",
                        "linear-gradient(90deg, currentColor 0%, currentColor 100%)",
                      ],
                      backgroundClip: ["text", "text", "text"],
                      WebkitBackgroundClip: [
                        "text",
                        "text",
                        "text",
                      ],
                      WebkitTextFillColor: [
                        "currentColor",
                        "transparent",
                        "currentColor",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  >
                    {interest}
                  </motion.span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Show indicator */}
          {personalInfo.interests.length > 8 && (
            <motion.p
              className="text-xs md:text-sm text-muted-foreground mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {showAllInterests
                ? `Showing all ${personalInfo.interests.length} interests`
                : `Showing 8 of ${personalInfo.interests.length} interests • Click arrow to expand`}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
}

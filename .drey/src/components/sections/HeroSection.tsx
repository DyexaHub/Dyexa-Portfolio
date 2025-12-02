import { motion } from "motion/react";
import {
  ArrowDown,
  Download,
  Github,
  Linkedin,
  Mail,
  Twitter,
  Instagram,
  Code,
  Database,
  Palette,
  Zap,
  Cpu,
  Cloud,
  MapPin,
} from "lucide-react";
import { Button } from "../ui/button";
import { personalInfo } from "../../data/personal.ts";
import { scrollToSection } from "../../utils/helpers";
import {
  fadeInLeft,
  fadeInRight,
} from "../../utils/animations.ts";
import { TypingAnimation } from "../shared/TypingAnimation";
import { RotatingText } from "../shared/RotatingText";
import { HeroComets } from "../shared/HeroComets";
import profileImage from "../../assets/profile_1.jpeg";

export function HeroSection() {
  // Rotating titles
  const rotatingTitles = [
    "Information System Student",
    "Full-Stack Developer",
    "Tech Enthusiast",
    "Prompt Engineering",
    "Computer & Network Engineering",
  ];

  // Floating tech icons configuration
  const floatingIcons = [
    {
      Icon: Code,
      delay: 0,
      color: "#0EA5E9",
      position: "top-0 right-12",
    },
    {
      Icon: Database,
      delay: 0.2,
      color: "#8B5CF6",
      position: "top-12 right-0",
    },
    {
      Icon: Palette,
      delay: 0.4,
      color: "#EC4899",
      position: "bottom-12 right-0",
    },
    {
      Icon: Zap,
      delay: 0.6,
      color: "#F59E0B",
      position: "bottom-0 right-12",
    },
    {
      Icon: Cpu,
      delay: 0.8,
      color: "#10B981",
      position: "bottom-0 left-12",
    },
    {
      Icon: Cloud,
      delay: 1,
      color: "#06B6D4",
      position: "top-0 left-12",
    },
  ];

  // Discord SVG Icon Component
  const DiscordIcon = (props: any) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-0"
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-sky-50 via-blue-50 to-cyan-50 dark:from-sky-950 dark:via-blue-950 dark:to-cyan-950 animate-gradient" />

      {/* Hero Comets Effect */}
      <HeroComets />

      {/* Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              className="space-y-4 md:space-y-5"
              initial={fadeInLeft.initial}
              animate={fadeInLeft.animate}
              transition={fadeInLeft.transition}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-block"
              >
                <motion.div
                  className="glass px-3 py-1.5 rounded-full border inline-flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-xs md:text-sm">
                    Available for opportunities
                  </span>
                </motion.div>
              </motion.div>

              <div className="space-y-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-sm md:text-base text-muted-foreground mb-1">
                    <TypingAnimation
                      text="Hi, I'm"
                      speed={100}
                    />
                  </p>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
                    <TypingAnimation
                      text="Dyexa Rahardika"
                      className="gradient-text font-bold"
                      speed={80}
                    />
                  </h1>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-2"
                >
                  <h2 className="text-lg sm:text-xl md:text-2xl text-foreground/90 min-h-8 md:min-h-10">
                    <RotatingText
                      texts={rotatingTitles}
                      interval={2500}
                    />
                  </h2>
                  <div className="flex items-center gap-2 text-sm md:text-base text-muted-foreground">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>{personalInfo.university}</span>
                  </div>
                </motion.div>
              </div>

              <motion.p
                className="text-sm md:text-base text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {personalInfo.tagline}
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="group shadow-lg hover:shadow-xl transition-all"
                    onClick={() => scrollToSection("contact")}
                  >
                    <Mail className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                    Get In Touch
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="shadow-lg hover:shadow-xl transition-all"
                    asChild
                  >
                    <a href={personalInfo.resume} download>
                      <Download className="w-4 h-4 mr-2" />
                      Download CV
                    </a>
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div
                className="flex gap-3 pt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                {[
                  {
                    icon: Github,
                    href: personalInfo.social.github,
                    color: "#181717",
                    label: "GitHub",
                  },
                  {
                    icon: Linkedin,
                    href: personalInfo.social.linkedin,
                    color: "#0A66C2",
                    label: "LinkedIn",
                  },
                  {
                    icon: Twitter,
                    href: personalInfo.social.twitter,
                    color: "#1DA1F2",
                    label: "Twitter",
                  },
                  {
                    icon: Instagram,
                    href: personalInfo.social.instagram,
                    color: "#E4405F",
                    label: "Instagram",
                  },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="glass w-10 h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center hover:bg-primary/20 transition-all border shadow-md hover:shadow-lg group relative"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                  >
                    {/* Click ripple */}
                    <motion.div
                      className="absolute inset-0 bg-primary/30 rounded-full"
                      initial={{ scale: 0, opacity: 0 }}
                      whileTap={{ scale: 2, opacity: [0.5, 0] }}
                      transition={{ duration: 0.6 }}
                    />
                    <social.icon className="w-4 h-4 md:w-5 md:h-5 group-hover:text-primary transition-colors relative z-10" />
                  </motion.a>
                ))}

                {/* Discord Icon - Round Logo beside Instagram */}
                <motion.a
                  href={personalInfo.social.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="glass w-10 h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center hover:bg-primary/20 transition-all border shadow-md hover:shadow-lg group relative"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.1 }}
                >
                  {/* Click ripple */}
                  <motion.div
                    className="absolute inset-0 bg-primary/30 rounded-full"
                    initial={{ scale: 0, opacity: 0 }}
                    whileTap={{ scale: 2, opacity: [0.5, 0] }}
                    transition={{ duration: 0.6 }}
                  />
                  <DiscordIcon className="w-4 h-4 md:w-5 md:h-5 group-hover:text-primary transition-colors relative z-10" />
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right Content - Profile Image with Dynamic Border & Floating Icons */}
            <motion.div
              className="relative order-first md:order-last"
              initial={fadeInRight.initial}
              animate={fadeInRight.animate}
              transition={fadeInRight.transition}
            >
              <motion.div
                className="relative"
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="relative w-full aspect-square max-w-sm mx-auto">
                  {/* Animated background particles behind profile */}
                  <motion.div
                    className="absolute inset-0 rounded-full blur-3xl opacity-30"
                    animate={{
                      background: [
                        "radial-gradient(circle, rgba(14, 165, 233, 0.4) 0%, transparent 70%)",
                        "radial-gradient(circle, rgba(56, 189, 248, 0.4) 0%, transparent 70%)",
                        "radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, transparent 70%)",
                        "radial-gradient(circle, rgba(14, 165, 233, 0.4) 0%, transparent 70%)",
                      ],
                      scale: [1, 1.1, 0.9, 1],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Orbiting glow particles */}
                  {[0, 120, 240].map((angle, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-4 h-4 rounded-full bg-primary/50 blur-sm"
                      animate={{
                        x: [
                          Math.cos((angle * Math.PI) / 180) *
                            120,
                          Math.cos(
                            ((angle + 360) * Math.PI) / 180,
                          ) * 120,
                        ],
                        y: [
                          Math.sin((angle * Math.PI) / 180) *
                            120,
                          Math.sin(
                            ((angle + 360) * Math.PI) / 180,
                          ) * 120,
                        ],
                      }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear",
                        delay: i * 0.33,
                      }}
                      style={{
                        left: "50%",
                        top: "50%",
                      }}
                    />
                  ))}
                  {/* Animated Gradient Border Ring - Thinner with glow */}
                  <motion.div
                    className="absolute inset-0 rounded-full p-[3px]"
                    style={{
                      background:
                        "linear-gradient(45deg, #0EA5E9, #38BDF8, #06B6D4, #0EA5E9)",
                      backgroundSize: "400% 400%",
                    }}
                    animate={{
                      backgroundPosition: [
                        "0% 50%",
                        "100% 50%",
                        "0% 50%",
                      ],
                      rotate: 360,
                      boxShadow: [
                        "0 0 20px rgba(14, 165, 233, 0.5)",
                        "0 0 40px rgba(56, 189, 248, 0.6)",
                        "0 0 20px rgba(14, 165, 233, 0.5)",
                      ],
                    }}
                    transition={{
                      backgroundPosition: {
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                      },
                      rotate: {
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      },
                      boxShadow: {
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }}
                  >
                    <div className="w-full h-full rounded-full bg-background" />
                  </motion.div>

                  {/* Profile Image Container with shimmer effect */}
                  <div className="absolute inset-3 rounded-full overflow-hidden border-2 border-card shadow-2xl bg-card">
                    <img
                      src={profileImage}
                      alt={personalInfo.name}
                      className="w-full h-full object-cover"
                    />
                    {/* Animated shimmer overlay */}
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                      }}
                      animate={{
                        x: ["-100%", "200%"],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                        repeatDelay: 2,
                      }}
                    />
                  </div>

                  {/* Floating Tech Icons */}
                  {floatingIcons.map((item, index) => (
                    <motion.div
                      key={index}
                      className={`absolute ${item.position} glass p-2 md:p-2.5 rounded-full border-2 shadow-lg`}
                      style={{ borderColor: item.color }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        y: [0, -10, 0],
                      }}
                      transition={{
                        opacity: {
                          delay: item.delay,
                          duration: 0.5,
                        },
                        scale: {
                          delay: item.delay,
                          duration: 0.5,
                        },
                        y: {
                          duration: 2 + index * 0.2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: item.delay,
                        },
                      }}
                      whileHover={{ scale: 1.2, rotate: 10 }}
                    >
                      <item.Icon
                        className="w-4 h-4 md:w-5 md:h-5"
                        style={{ color: item.color }}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            onClick={() => scrollToSection("about")}
            whileHover={{ scale: 1.1 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="text-xs md:text-sm">
                Scroll Down
              </span>
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowDown className="w-4 h-4 md:w-5 md:h-5" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
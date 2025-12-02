import { motion } from 'motion/react';
import { Heart, ArrowUp, Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram, Code, Zap, Sparkles, TrendingUp, Star, ChevronDown } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { personalInfo } from '../../data/personal';
import { scrollToSection } from '../../utils/helpers';
import { useState } from 'react';
import { toast } from 'sonner';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [showSocial, setShowSocial] = useState(true);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success('Thanks for subscribing! 🎉');
      setEmail('');
    }
  };

  const footerSections = {
    navigation: [
      { label: 'Home', id: 'hero' },
      { label: 'About', id: 'about' },
      { label: 'Skills', id: 'skills' },
      { label: 'Projects', id: 'projects' },
    ],
    explore: [
      { label: 'Experience', id: 'experience' },
      { label: 'Roadmap', id: 'roadmap' },
      { label: 'Testimonials', id: 'testimonials' },
      { label: 'Contact', id: 'contact' },
    ],
  };

  const DiscordIcon = (props: any) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
    </svg>
  );

  const socialLinks = [
    { icon: Github, href: personalInfo.social.github, label: 'GitHub', color: '#181717', followers: '200+' },
    { icon: Linkedin, href: personalInfo.social.linkedin, label: 'LinkedIn', color: '#0A66C2', followers: '1000+' },
    { icon: Twitter, href: personalInfo.social.twitter, label: 'Twitter', color: '#1DA1F2', followers: '150+' },
    { icon: Instagram, href: personalInfo.social.instagram, label: 'Instagram', color: '#E4405F', followers: '900+' },
    { icon: DiscordIcon, href: personalInfo.social.discord, label: 'Discord', color: 'currentColor', followers: '250+' },
  ];

  const techStack = ['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Next.js', 'MongoDB', 'Motion'];

  return (
    <footer className="bg-linear-to-br from-secondary/50 to-accent/30 border-t relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute -top-20 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        animate={{
        scale: [1, 1.3, 1],
        x: [0, 30, 0],
        y: [0, 40, 0],
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/2 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        animate={{
        scale: [1.2, 1, 1.2],
        x: [0, -40, 0],
        y: [0, -30, 0],
        }}
        transition={{ duration: 15, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-20 left-1/3 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
        animate={{
        scale: [1, 1.4, 1],
        x: [0, -20, 0],
        y: [0, 20, 0],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      
      {/* Floating Tech Icons */}
      {[Code, Zap, Sparkles, TrendingUp, Star].map((Icon, index) => (
        <motion.div
        key={index}
        className="absolute"
        style={{
          left: `${20 + index * 15}%`,
          top: `${10 + index * 20}%`,
        }}
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 8 + index,
          repeat: Infinity,
          delay: index * 0.5,
        }}
        >
        <Icon className="w-8 h-8 text-primary/20" />
        </motion.div>
      ))}
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
      {/* Main Footer Content */}
      <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8 mb-12">
        {/* Brand & Description */}
        <motion.div 
        className="lg:col-span-4 space-y-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="inline-block"
        >
          <h3 className="text-2xl md:text-3xl gradient-text cursor-pointer">
          {personalInfo.name}
          </h3>
        </motion.div>
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
          {personalInfo.tagline}
        </p>
        <p className="text-xs md:text-sm text-muted-foreground">
          Building digital experiences one line of code at a time. Currently studying at {personalInfo.university}.
        </p>
        
        {/* Quick Contact */}
        <div className="space-y-2 pt-2">
          <motion.a 
          href={`mailto:${personalInfo.email}`}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
          whileHover={{ x: 5 }}
          >
          <Mail className="w-4 h-4 group-hover:rotate-12 transition-transform" />
          <span className="break-all">{personalInfo.email}</span>
          </motion.a>
          <motion.a 
          href={`tel:${personalInfo.phone}`}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
          whileHover={{ x: 5 }}
          >
          <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform" />
          {personalInfo.phone}
          </motion.a>
          <motion.div 
          className="flex items-center gap-2 text-sm text-muted-foreground"
          whileHover={{ x: 5 }}
          >
          <MapPin className="w-4 h-4" />
          {personalInfo.location}
          </motion.div>
        </div>
        </motion.div>

        {/* Navigation Links */}
        <motion.div 
        className="lg:col-span-2"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        >
        <h4 className="font-semibold mb-4 text-base">Navigate</h4>
        <ul className="space-y-2">
          {footerSections.navigation.map((link, index) => (
          <motion.li 
            key={link.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <motion.button
            onClick={() => scrollToSection(link.id)}
            className="text-sm text-muted-foreground hover:text-primary transition-colors group relative"
            whileHover={{ x: 5 }}
            >
            <span className="absolute -left-4 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            {link.label}
            </motion.button>
          </motion.li>
          ))}
        </ul>
        </motion.div>

        {/* Explore Links */}
        <motion.div 
        className="lg:col-span-2"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        >
        <h4 className="font-semibold mb-4 text-base">Explore</h4>
        <ul className="space-y-2">
          {footerSections.explore.map((link, index) => (
          <motion.li 
            key={link.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <motion.button
            onClick={() => scrollToSection(link.id)}
            className="text-sm text-muted-foreground hover:text-primary transition-colors group relative"
            whileHover={{ x: 5 }}
            >
            <span className="absolute -left-4 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            {link.label}
            </motion.button>
          </motion.li>
          ))}
        </ul>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div 
        className="lg:col-span-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        >
        <h4 className="font-semibold mb-4 text-base">Stay Updated</h4>
        <p className="text-sm text-muted-foreground mb-4">
          Subscribe to get updates on my latest projects and tech insights!
        </p>
        <form onSubmit={handleNewsletterSubmit} className="space-y-3">
          <div className="flex gap-2">
          <Input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="glass text-sm"
            required
          />
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button type="submit" size="sm" className="whitespace-nowrap">
            Subscribe
            </Button>
          </motion.div>
          </div>
        </form>

        {/* Tech Stack Pills */}
        <div className="mt-6">
          <p className="text-xs text-muted-foreground mb-3">Built with:</p>
          <div className="flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <motion.div
            key={tech}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            viewport={{ once: true }}
            className="glass px-2 py-1 rounded-full border text-xs cursor-default"
            >
            {tech}
            </motion.div>
          ))}
          </div>
        </div>
        </motion.div>
      </div>

      {/* Social Links Section with Sliding Animation */}
      <motion.div 
        className="py-8 border-t border-b"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center justify-center gap-3 mb-4">
        <motion.h4 
          className="font-semibold text-center text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Connect With Me
        </motion.h4>
        
        {/* Toggle Arrow */}
        <motion.button
          onClick={() => setShowSocial(!showSocial)}
          className="p-2 rounded-full hover:bg-primary/10 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle social links"
        >
          <motion.div
          animate={{ rotate: showSocial ? 180 : 0 }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
          <ChevronDown className="w-5 h-5 text-primary" />
          </motion.div>
        </motion.button>
        </div>
        
        {/* Collapsible Sliding container */}
        <motion.div
        initial={false}
        animate={{ 
          height: showSocial ? 'auto' : 0,
          opacity: showSocial ? 1 : 0
        }}
        transition={{ 
          duration: 0.5,
          ease: [0.4, 0, 0.2, 1]
        }}
        className="overflow-hidden"
        >
        <div className="relative overflow-hidden py-4">
          <motion.div 
          className="flex gap-4"
          animate={{ 
            x: ['0%', '-50%']
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity, 
            ease: "linear",
            repeatType: "loop"
          }}
          style={{ width: 'max-content' }}
          >
          {/* Render social links multiple times for seamless loop */}
          {[...socialLinks, ...socialLinks, ...socialLinks, ...socialLinks].map((social, index) => (
            <motion.a
            key={`${social.label}-${index}`}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="glass p-4 rounded-xl border hover:border-primary transition-all group shrink-0 w-[200px]"
            whileHover={{ y: -8, scale: 1.05 }}
            >
            <div className="flex flex-col items-center gap-2">
              <motion.div
              className="p-3 rounded-full"
              style={{ backgroundColor: social.color === 'currentColor' ? 'rgba(14, 165, 233, 0.15)' : `${social.color}15` }}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              >
              <social.icon 
              className="w-6 h-6" 
              style={{ color: social.color === 'currentColor' ? 'currentColor' : social.color }}
              />
              </motion.div>
              <span className="text-sm font-medium">{social.label}</span>
              <span className="text-xs text-muted-foreground">{social.followers}</span>
            </div>
            </motion.a>
          ))}
          </motion.div>
        </div>
        </motion.div>
      </motion.div>

      {/* Bottom Bar */}
      <motion.div 
        className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <span>Made with</span>
          <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 1, repeat: Infinity }}
          >
          <Heart className="w-4 h-4 fill-red-500 text-red-500" />
          </motion.div>
          <span>and</span>
          <motion.div
          animate={{ 
            rotate: [0, 360],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
          <Code className="w-4 h-4 text-primary" />
          </motion.div>
        </div>
        <span className="hidden md:inline">•</span>
        <span>© {currentYear} {personalInfo.name}</span>
        <span className="hidden md:inline">•</span>
        <span>All rights reserved</span>
        </div>

        <div className="flex items-center gap-3">
        <motion.div
          className="glass px-3 py-1.5 rounded-full border text-xs flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
        >
          <motion.div
          className="w-2 h-2 bg-green-400 rounded-full"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          />
          Available for hire
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Button
          size="icon"
          variant="outline"
          onClick={() => scrollToSection('hero')}
          className="rounded-full glass shadow-lg hover:shadow-xl transition-all"
          >
          <motion.div
            animate={{ y: [-2, 2, -2] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowUp className="w-5 h-5" />
          </motion.div>
          </Button>
        </motion.div>
        </div>
      </motion.div>
      </div>
    </footer>
  );
}

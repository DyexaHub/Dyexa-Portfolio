import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Home, User, Code, Briefcase, GraduationCap, Award, Mail, Sun, Moon, Menu, X } from 'lucide-react';
import { Button } from '../ui/button';
import { scrollToSection } from '../../utils/helpers';
import { useTheme } from '../../hooks/useTheme';

interface NavItem {
  id: string;
  label: string;
  icon: any;
  description: string;
}

const navItems: NavItem[] = [
  { id: 'hero', label: 'Home', icon: Home, description: 'Back to top' },
  { id: 'about', label: 'About', icon: User, description: 'Learn about me' },
  { id: 'skills', label: 'Skills', icon: Code, description: 'My expertise' },
  { id: 'projects', label: 'Projects', icon: Briefcase, description: 'View my work' },
  { id: 'experience', label: 'Experience', icon: GraduationCap, description: 'My journey' },
  { id: 'roadmap', label: 'Roadmap', icon: Award, description: 'Future goals' },
  { id: 'contact', label: 'Contact', icon: Mail, description: 'Get in touch' },
];

export function FloatingNav() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Check if we're in the "about" section or beyond
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const aboutTop = aboutSection.offsetTop;
        const scrollPosition = window.scrollY + 100; // Add offset for better trigger
        setIsExpanded(scrollPosition >= aboutTop);
      }
    };
    
    // Don't run initial check - let navbar start collapsed
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 hidden md:block transition-all duration-300 ${
          isScrolled ? 'top-2' : 'top-4'
        }`}
      >
        <motion.div 
          className={`glass rounded-full px-6 py-3 shadow-2xl border transition-all duration-500 ${
            isScrolled ? 'border-primary/30' : 'border-border'
          }`}
          animate={{
            boxShadow: isExpanded 
              ? ['0 0 20px rgba(14, 165, 233, 0.3)', '0 0 40px rgba(14, 165, 233, 0.5)', '0 0 20px rgba(14, 165, 233, 0.3)']
              : '0 10px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)'
          }}
          transition={{
            boxShadow: { duration: 2, repeat: isExpanded ? Infinity : 0 }
          }}
        >
          <div className="flex items-center gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <motion.button
                    onClick={() => handleNavClick(item.id)}
                    className="relative flex items-center gap-2 rounded-full overflow-hidden hover:bg-primary/10 transition-all duration-300"
                    initial={{ width: '40px' }}
                    animate={{ 
                      width: (hoveredItem === item.id || isExpanded) ? 'auto' : '40px',
                      paddingRight: (hoveredItem === item.id || isExpanded) ? '12px' : '0px',
                      scale: hoveredItem === item.id ? 1.05 : 1
                    }}
                    transition={{ 
                      duration: 0.5, 
                      ease: [0.34, 1.56, 0.64, 1], // Magical spring easing
                      scale: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Magical gradient background on hover */}
                    <motion.div
                      className="absolute inset-0 rounded-full opacity-0"
                      style={{
                        background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.2), rgba(56, 189, 248, 0.2))'
                      }}
                      animate={{
                        opacity: hoveredItem === item.id ? [0, 1, 0] : 0,
                        scale: hoveredItem === item.id ? [0.8, 1.2] : 1
                      }}
                      transition={{ duration: 0.6, repeat: hoveredItem === item.id ? Infinity : 0 }}
                    />
                    
                    {/* Click ripple effect */}
                    <motion.div
                      className="absolute inset-0 bg-primary/30 rounded-full"
                      initial={{ scale: 0, opacity: 0 }}
                      whileTap={{ scale: 2, opacity: [0.5, 0] }}
                      transition={{ duration: 0.6 }}
                    />
                    
                    <div className="relative rounded-full p-2 shrink-0">
                      <motion.div
                        animate={{
                          rotate: hoveredItem === item.id ? [0, -10, 10, 0] : 0,
                          scale: hoveredItem === item.id ? [1, 1.1, 1] : 1
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="w-5 h-5" />
                      </motion.div>
                    </div>
                    
                    <AnimatePresence>
                      {(hoveredItem === item.id || isExpanded) && (
                        <motion.span
                          initial={{ opacity: 0, x: -10, width: 0 }}
                          animate={{ opacity: 1, x: 0, width: 'auto' }}
                          exit={{ opacity: 0, x: -10, width: 0 }}
                          transition={{ 
                            duration: 0.4, 
                            ease: [0.34, 1.56, 0.64, 1],
                            opacity: { duration: 0.3 }
                          }}
                          className="text-sm font-medium whitespace-nowrap pr-1"
                        >
                          <motion.span
                            initial={{ y: 10 }}
                            animate={{ y: 0 }}
                            transition={{ 
                              duration: 0.5,
                              ease: [0.34, 1.56, 0.64, 1]
                            }}
                            className="inline-block"
                          >
                            {item.label}
                          </motion.span>
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.button>
                  
                  {/* Magical particles around hovered item */}
                  {hoveredItem === item.id && (
                    <>
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-primary rounded-full pointer-events-none"
                          style={{
                            left: '50%',
                            top: '50%',
                          }}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{
                            opacity: [0, 1, 0],
                            scale: [0, 1.5, 0],
                            x: [0, (Math.cos((i * 120) * Math.PI / 180) * 30)],
                            y: [0, (Math.sin((i * 120) * Math.PI / 180) * 30)],
                          }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            delay: i * 0.2
                          }}
                        />
                      ))}
                    </>
                  )}
                </div>
              );
            })}
            
            <div className="w-px h-6 bg-border mx-2" />
            
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full hover:bg-primary/20 transition-all duration-300"
            >
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: theme === 'dark' ? 180 : 0 }}
                transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
              >
                {theme === 'light' ? (
                  <Moon className="w-5 h-5" />
                ) : (
                  <Sun className="w-5 h-5" />
                )}
              </motion.div>
            </Button>
          </div>
        </motion.div>
        
        {/* Magical glow effect when expanded */}
        {isExpanded && (
          <motion.div
            className="absolute inset-0 rounded-full blur-xl pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(14, 165, 233, 0.3), transparent 70%)'
            }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [0.95, 1.05, 0.95]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        )}
      </motion.nav>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50">
        <div className={`glass border-b transition-all duration-300 ${
          isScrolled ? 'shadow-lg' : ''
        }`}>
          <div className="flex items-center justify-between px-4 py-3">
            <h1 className="text-lg gradient-text">Dyexa Rahardika</h1>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="rounded-full"
              >
                {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="rounded-full"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="glass border-b overflow-hidden"
            >
              <div className="px-4 py-4 space-y-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-primary/10 transition-colors text-left"
                    >
                      <Icon className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium">{item.label}</p>
                        <p className="text-xs text-muted-foreground">{item.description}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

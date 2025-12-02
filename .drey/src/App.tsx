import { Toaster } from './components/ui/sonner';
import { TwinkleBackground } from './components/shared/TwinkleBackground';
import { FloatingNav } from './components/sections/FloatingNav';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { SkillsSection } from './components/sections/SkillsSection.tsx';
import { ProjectsSection } from './components/sections/ProjectSection.tsx';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { RoadmapSection } from './components/sections/RoadmapSection.tsx';
import { TestimonialsSection } from './components/sections/TestimonialsSection.tsx';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/sections/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen">
      {/* Twinkling Stars Background */}
      <TwinkleBackground />
      
      {/* Floating Navigation */}
      <FloatingNav />

      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <RoadmapSection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Toast Notifications */}
      <Toaster position="top-right" richColors />
    </div>
  );
}

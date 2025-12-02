import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { SectionTitle } from '../shared/SectionTitle';
import { personalInfo } from '../../data/personal';
import { validateEmail } from '../../utils/helpers';
import { toast } from 'sonner';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    if (!validateEmail(formData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast.success('Message sent successfully! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: Phone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: MapPin, label: 'Location', value: personalInfo.location, href: null },
  ];

  const DiscordIcon = (props: any) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
    </svg>
  );

  const socialLinks = [
    { icon: Github, href: personalInfo.social.github, label: 'GitHub', color: '#181717' },
    { icon: Linkedin, href: personalInfo.social.linkedin, label: 'LinkedIn', color: '#0A66C2' },
    { icon: Twitter, href: personalInfo.social.twitter, label: 'Twitter', color: '#1DA1F2' },
    { icon: Instagram, href: personalInfo.social.instagram, label: 'Instagram', color: '#E4405F' },
    { icon: DiscordIcon, href: personalInfo.social.discord, label: 'Discord', color: 'currentColor' },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Get In Touch"
          subtitle="Have a project in mind or want to collaborate? Let's connect!"
          gradient
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl mb-4">Let's Talk</h3>
              <p className="text-muted-foreground mb-6">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out through any of the channels below.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10 }}
                >
                  <Card className="p-4 glass hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-primary/50">
                    {info.href ? (
                      <a href={info.href} className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-primary/20">
                          <info.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{info.label}</p>
                          <p className="font-medium">{info.value}</p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-primary/20">
                          <info.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{info.label}</p>
                          <p className="font-medium">{info.value}</p>
                        </div>
                      </div>
                    )}
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg mb-4">Connect on Social Media</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="glass w-14 h-14 rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300 border group"
                    style={{ '--hover-color': social.color } as any}
                  >
                    <social.icon className="w-6 h-6 group-hover:text-primary transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-xl border inline-block"
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse" />
                  <div className="absolute inset-0 w-4 h-4 bg-green-500 rounded-full animate-ping opacity-75" />
                </div>
                <div>
                  <p className="font-medium">Currently Available</p>
                  <p className="text-sm text-muted-foreground">Open for new opportunities</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 glass border-2">
              <h3 className="text-2xl mb-6">Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <label htmlFor="name" className="block text-sm mb-2">
                    Name *
                  </label>
                  <div className="relative">
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="glass relative z-10"
                    />
                    {/* Neon glow effect */}
                    {(focusedField === 'name' || formData.name) && (
                      <motion.div
                        className="absolute inset-0 rounded-md pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                          boxShadow: '0 0 20px rgba(14, 165, 233, 0.6), 0 0 40px rgba(14, 165, 233, 0.4), inset 0 0 10px rgba(14, 165, 233, 0.2)',
                          border: '2px solid rgba(14, 165, 233, 0.8)',
                        }}
                      />
                    )}
                  </div>
                </div>

                <div className="relative">
                  <label htmlFor="email" className="block text-sm mb-2">
                    Email *
                  </label>
                  <div className="relative">
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="glass relative z-10"
                    />
                    {/* Neon glow effect */}
                    {(focusedField === 'email' || formData.email) && (
                      <motion.div
                        className="absolute inset-0 rounded-md pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                          boxShadow: '0 0 20px rgba(14, 165, 233, 0.6), 0 0 40px rgba(14, 165, 233, 0.4), inset 0 0 10px rgba(14, 165, 233, 0.2)',
                          border: '2px solid rgba(14, 165, 233, 0.8)',
                        }}
                      />
                    )}
                  </div>
                </div>

                <div className="relative">
                  <label htmlFor="subject" className="block text-sm mb-2">
                    Subject
                  </label>
                  <div className="relative">
                    <Input
                      id="subject"
                      type="text"
                      placeholder="What is this about?"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField(null)}
                      className="glass relative z-10"
                    />
                    {/* Neon glow effect */}
                    {(focusedField === 'subject' || formData.subject) && (
                      <motion.div
                        className="absolute inset-0 rounded-md pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                          boxShadow: '0 0 20px rgba(14, 165, 233, 0.6), 0 0 40px rgba(14, 165, 233, 0.4), inset 0 0 10px rgba(14, 165, 233, 0.2)',
                          border: '2px solid rgba(14, 165, 233, 0.8)',
                        }}
                      />
                    )}
                  </div>
                </div>

                <div className="relative">
                  <label htmlFor="message" className="block text-sm mb-2">
                    Message *
                  </label>
                  <div className="relative">
                    <Textarea
                      id="message"
                      placeholder="Your message..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="glass resize-none relative z-10"
                    />
                    {/* Neon glow effect */}
                    {(focusedField === 'message' || formData.message) && (
                      <motion.div
                        className="absolute inset-0 rounded-md pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                          boxShadow: '0 0 20px rgba(14, 165, 233, 0.6), 0 0 40px rgba(14, 165, 233, 0.4), inset 0 0 10px rgba(14, 165, 233, 0.2)',
                          border: '2px solid rgba(14, 165, 233, 0.8)',
                        }}
                      />
                    )}
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

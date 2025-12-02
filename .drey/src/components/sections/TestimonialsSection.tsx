import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote, ChevronDown, ChevronUp, User, Send } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { SectionTitle } from '../shared/SectionTitle';
import { testimonials as initialTestimonials } from '../../data/testimonials';
import { toast } from 'sonner';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
  date: string;
}

export function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(initialTestimonials);
  const [showAll, setShowAll] = useState(false);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    comment: '',
    rating: 5,
    avatar: '' as string | null
  });
  const [previewUrl, setPreviewUrl] = useState<string>('');

  const displayedTestimonials = showAll ? testimonials : testimonials.slice(0, 6);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setPreviewUrl(result);
        setFormData({ ...formData, avatar: result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.comment) {
      toast.error('Please fill in all required fields');
      return;
    }

    const newTestimonial: Testimonial = {
      id: testimonials.length + 1,
      name: formData.name,
      role: 'Visitor',
      company: 'Community Member',
      content: formData.comment,
      rating: formData.rating,
      avatar: formData.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(formData.name)}&background=0EA5E9&color=fff`,
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    };

    setTestimonials([newTestimonial, ...testimonials]);
    setFormData({ name: '', comment: '', rating: 5, avatar: '' });
    setPreviewUrl('');
    setShowAddForm(false);
    toast.success('Thank you for your comment! 🎉');
  };

  return (
    <section id="testimonials" className="py-20 bg-secondary/30 relative">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Testimonials"
          subtitle="What colleagues, mentors, and visitors say about working with me"
          gradient
        />

        {/* Add Comment Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto mb-8"
        >
          <Button
            onClick={() => setShowAddForm(!showAddForm)}
            className="w-full md:w-auto"
            variant={showAddForm ? "outline" : "default"}
          >
            {showAddForm ? 'Cancel' : 'Add Your Comment'}
          </Button>
        </motion.div>

        {/* Add Comment Form */}
        <AnimatePresence>
          {showAddForm && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-2xl mx-auto mb-12"
            >
              <Card className="p-6 glass border-2 border-primary/30">
                <h3 className="text-xl mb-4">Share Your Thoughts</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Profile Picture Upload */}
                  <div>
                    <label className="block text-sm mb-2">Profile Picture (Optional)</label>
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="hidden"
                          id="avatar-upload"
                        />
                        <label
                          htmlFor="avatar-upload"
                          className="cursor-pointer glass p-4 rounded-lg border-2 border-dashed hover:border-primary transition-colors flex items-center justify-center w-24 h-24"
                        >
                          {previewUrl ? (
                            <img src={previewUrl} alt="Preview" className="w-full h-full object-cover rounded-lg" />
                          ) : (
                            <User className="w-8 h-8 text-muted-foreground" />
                          )}
                        </label>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Click to upload your photo or we'll generate an avatar based on your name
                      </p>
                    </div>
                  </div>

                  {/* Name Input */}
                  <div>
                    <label htmlFor="visitor-name" className="block text-sm mb-2">
                      Your Name *
                    </label>
                    <Input
                      id="visitor-name"
                      type="text"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="glass"
                    />
                  </div>

                  {/* Comment Textarea */}
                  <div>
                    <label htmlFor="visitor-comment" className="block text-sm mb-2">
                      Your Comment *
                    </label>
                    <Textarea
                      id="visitor-comment"
                      placeholder="Share your thoughts..."
                      rows={4}
                      value={formData.comment}
                      onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                      required
                      className="glass resize-none"
                    />
                  </div>

                  {/* Rating Selection */}
                  <div>
                    <label className="block text-sm mb-2">Rating</label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((rating) => (
                        <motion.button
                          key={rating}
                          type="button"
                          onClick={() => setFormData({ ...formData, rating })}
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Star
                            className={`w-8 h-8 ${
                              rating <= formData.rating
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'text-muted-foreground'
                            }`}
                          />
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button type="submit" className="w-full group">
                    <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    Submit Comment
                  </Button>
                </form>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-8">
          <AnimatePresence mode="popLayout">
            {displayedTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, delay: showAll ? 0 : index * 0.1 }}
                whileHover={{ 
                  y: -15,
                  scale: 1.03,
                  transition: { duration: 0.3 }
                }}
                layout
              >
                <Card className="p-6 h-full flex flex-col glass hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-primary/50 relative overflow-hidden group">
                  {/* Floating animation background */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    animate={{
                      background: [
                        'radial-gradient(circle at 0% 0%, rgba(14, 165, 233, 0.1), transparent 50%)',
                        'radial-gradient(circle at 100% 100%, rgba(56, 189, 248, 0.1), transparent 50%)',
                        'radial-gradient(circle at 0% 0%, rgba(14, 165, 233, 0.1), transparent 50%)',
                      ]
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Quote Icon */}
                  <motion.div 
                    className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity"
                    animate={{
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.05, 0.95, 1]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Quote className="w-16 h-16 text-primary" />
                  </motion.div>

                  {/* Rating with hover animation */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ 
                          scale: 1.3, 
                          rotate: 360,
                          transition: { duration: 0.5 }
                        }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                      >
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Content with Expand/Collapse */}
                  <div className="flex-1 relative z-10 mb-4">
                    <motion.div
                      initial={false}
                      animate={{
                        height: expandedId === testimonial.id ? 'auto' : '120px'
                      }}
                      className="overflow-hidden"
                    >
                      <p className="text-muted-foreground">
                        "{testimonial.content}"
                      </p>
                    </motion.div>
                    
                    {testimonial.content.length > 150 && (
                      <motion.button
                        onClick={() => setExpandedId(expandedId === testimonial.id ? null : testimonial.id)}
                        className="text-sm text-primary hover:underline mt-2 flex items-center gap-1"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {expandedId === testimonial.id ? (
                          <>
                            Show less <ChevronUp className="w-4 h-4" />
                          </>
                        ) : (
                          <>
                            Read more <ChevronDown className="w-4 h-4" />
                          </>
                        )}
                      </motion.button>
                    )}
                  </div>

                  {/* Author */}
                  <motion.div 
                    className="flex items-center gap-3 pt-4 border-t"
                    whileHover={{ x: 5 }}
                  >
                    <motion.img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
                      whileHover={{ scale: 1.15, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div>
                      <h4 className="font-medium leading-tight">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-xs text-primary">{testimonial.company}</p>
                    </div>
                  </motion.div>

                  {/* Date */}
                  <div className="text-xs text-muted-foreground mt-3">
                    {testimonial.date}
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Show More/Less Button */}
        {testimonials.length > 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <Button
              size="lg"
              variant="outline"
              onClick={() => setShowAll(!showAll)}
              className="rounded-full group"
            >
              {showAll ? (
                <>
                  Show Less <ChevronUp className="w-5 h-5 ml-2 group-hover:-translate-y-1 transition-transform" />
                </>
              ) : (
                <>
                  View All {testimonials.length} Testimonials <ChevronDown className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
                </>
              )}
            </Button>
          </motion.div>
        )}

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass inline-block px-8 py-4 rounded-full border">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span className="text-2xl">
                {(testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length).toFixed(1)}
              </span>
              <span className="text-muted-foreground">/ 5.0</span>
              <span className="mx-2 text-muted-foreground">•</span>
              <span className="text-muted-foreground">{testimonials.length} Reviews</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

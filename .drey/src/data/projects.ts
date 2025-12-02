export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  status: "completed" | "in-progress" | "planned";
  year: number;
  highlights: string[];
}

export const projectCategories = [
  "All",
  "Web App",
  "Mobile App",
  "Data Analytics",
  "UI/UX",
  "AI/ML"
];

export const projects: Project[] = [
  {
    id: 1,
    title: "EduConnect Platform",
    description: "A comprehensive e-learning platform connecting students and educators",
    longDescription: "EduConnect is a full-stack web application that revolutionizes online education by providing interactive courses, real-time collaboration, and advanced analytics for tracking student progress.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Tailwind CSS"],
    category: "Web App",
    demoUrl: "https://educonnect-demo.vercel.app",
    githubUrl: "https://github.com/dyexarahardika/educonnect",
    featured: true,
    status: "completed",
    year: 2024,
    highlights: [
      "Real-time video conferencing",
      "Interactive quizzes and assignments",
      "Progress tracking dashboard",
      "Community forum integration"
    ]
  },
  {
    id: 2,
    title: "SmartFinance Tracker",
    description: "Personal finance management app with AI-powered insights",
    longDescription: "An intelligent financial tracking application that helps users manage their expenses, set budgets, and receive personalized financial advice using machine learning algorithms.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Chart.js", "TensorFlow.js"],
    category: "Web App",
    demoUrl: "https://smartfinance-demo.vercel.app",
    githubUrl: "https://github.com/dyexarahardika/smartfinance",
    featured: true,
    status: "completed",
    year: 2024,
    highlights: [
      "AI-powered spending predictions",
      "Automated expense categorization",
      "Multi-currency support",
      "Beautiful data visualizations"
    ]
  },
  {
    id: 3,
    title: "TaskMaster Mobile",
    description: "Cross-platform productivity app with team collaboration features",
    longDescription: "A modern task management application built with React Native that enables teams to collaborate effectively with real-time updates, file sharing, and advanced project tracking.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800",
    technologies: ["React Native", "Firebase", "Redux", "Expo"],
    category: "Mobile App",
    githubUrl: "https://github.com/dyexarahardika/taskmaster",
    featured: true,
    status: "in-progress",
    year: 2024,
    highlights: [
      "Offline-first architecture",
      "Push notifications",
      "Kanban board view",
      "Time tracking integration"
    ]
  },
  {
    id: 4,
    title: "CampusHub Portal",
    description: "University management system for students and faculty",
    longDescription: "A comprehensive campus management portal that streamlines academic processes including course registration, grade management, and campus events.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800",
    technologies: ["Vue.js", "Laravel", "MySQL", "Bootstrap"],
    category: "Web App",
    demoUrl: "https://campushub-demo.vercel.app",
    githubUrl: "https://github.com/dyexarahardika/campushub",
    featured: false,
    status: "completed",
    year: 2023,
    highlights: [
      "Course registration system",
      "Digital library access",
      "Event management",
      "Student portal dashboard"
    ]
  },
  {
    id: 5,
    title: "DataViz Analytics",
    description: "Interactive data visualization dashboard for business insights",
    longDescription: "A powerful analytics platform that transforms complex datasets into beautiful, interactive visualizations helping businesses make data-driven decisions.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    technologies: ["React", "D3.js", "Python", "Flask", "PostgreSQL"],
    category: "Data Analytics",
    demoUrl: "https://dataviz-demo.vercel.app",
    githubUrl: "https://github.com/dyexarahardika/dataviz",
    featured: true,
    status: "completed",
    year: 2024,
    highlights: [
      "Custom chart builder",
      "Real-time data updates",
      "Export to multiple formats",
      "API integration support"
    ]
  },
  {
    id: 6,
    title: "FoodieDelight App",
    description: "Food delivery platform with restaurant management system",
    longDescription: "A comprehensive food ordering and delivery platform that connects customers with local restaurants, featuring real-time order tracking and integrated payment solutions.",
    image: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=800",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Google Maps API"],
    category: "Web App",
    githubUrl: "https://github.com/dyexarahardika/foodiedelight",
    featured: false,
    status: "in-progress",
    year: 2024,
    highlights: [
      "Real-time order tracking",
      "Multiple payment options",
      "Restaurant dashboard",
      "Rating and review system"
    ]
  },
  {
    id: 7,
    title: "HealthTrack Wearable",
    description: "IoT-based health monitoring system with mobile companion",
    longDescription: "An innovative health tracking solution that combines wearable sensors with a mobile app to monitor vital signs and provide health insights.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800",
    technologies: ["React Native", "IoT", "Firebase", "TensorFlow", "Arduino"],
    category: "Mobile App",
    featured: false,
    status: "planned",
    year: 2025,
    highlights: [
      "Heart rate monitoring",
      "Sleep pattern analysis",
      "Exercise tracking",
      "Health recommendations"
    ]
  },
  {
    id: 8,
    title: "DesignSystem Pro",
    description: "Comprehensive design system and component library",
    longDescription: "A professional design system with reusable components, design tokens, and documentation to ensure consistent UI/UX across all projects.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800",
    technologies: ["React", "TypeScript", "Storybook", "Figma", "Tailwind CSS"],
    category: "UI/UX",
    demoUrl: "https://designsystem-demo.vercel.app",
    githubUrl: "https://github.com/dyexarahardika/designsystem",
    featured: false,
    status: "completed",
    year: 2023,
    highlights: [
      "50+ reusable components",
      "Dark mode support",
      "Comprehensive documentation",
      "Figma integration"
    ]
  },
  {
    id: 9,
    title: "AI ChatBot Assistant",
    description: "Intelligent chatbot powered by natural language processing",
    longDescription: "An advanced AI chatbot that uses NLP and machine learning to understand user queries and provide intelligent responses across multiple domains.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800",
    technologies: ["Python", "TensorFlow", "React", "FastAPI", "NLTK"],
    category: "AI/ML",
    demoUrl: "https://aichatbot-demo.vercel.app",
    githubUrl: "https://github.com/dyexarahardika/aichatbot",
    featured: true,
    status: "in-progress",
    year: 2024,
    highlights: [
      "Multi-language support",
      "Context-aware responses",
      "Learning from interactions",
      "Integration APIs"
    ]
  },
  {
    id: 10,
    title: "EcoTracker",
    description: "Environmental impact tracking and sustainability platform",
    longDescription: "A platform dedicated to helping individuals and organizations track their carbon footprint and adopt sustainable practices.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800",
    technologies: ["Next.js", "TypeScript", "Supabase", "Recharts"],
    category: "Web App",
    demoUrl: "https://ecotracker-demo.vercel.app",
    githubUrl: "https://github.com/dyexarahardika/ecotracker",
    featured: false,
    status: "completed",
    year: 2024,
    highlights: [
      "Carbon footprint calculator",
      "Sustainability tips",
      "Community challenges",
      "Impact visualization"
    ]
  },
  {
    id: 11,
    title: "CodeCollab Studio",
    description: "Real-time collaborative code editor with video chat",
    longDescription: "A powerful collaborative coding platform that allows developers to code together in real-time, featuring integrated video chat, syntax highlighting, and live previews.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800",
    technologies: ["React", "WebRTC", "Socket.io", "Monaco Editor", "Node.js"],
    category: "Web App",
    demoUrl: "https://codecollab-demo.vercel.app",
    githubUrl: "https://github.com/dyexarahardika/codecollab",
    featured: true,
    status: "in-progress",
    year: 2024,
    highlights: [
      "Real-time code synchronization",
      "Video & voice chat",
      "Multi-language support",
      "Live preview & debugging"
    ]
  },
  {
    id: 12,
    title: "MediCare Assistant",
    description: "Healthcare appointment and telemedicine platform",
    longDescription: "A comprehensive healthcare platform connecting patients with doctors, featuring appointment scheduling, telemedicine consultations, and electronic health records.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800",
    technologies: ["Next.js", "PostgreSQL", "WebRTC", "Stripe", "AWS S3"],
    category: "Web App",
    demoUrl: "https://medicare-demo.vercel.app",
    githubUrl: "https://github.com/dyexarahardika/medicare",
    featured: true,
    status: "completed",
    year: 2024,
    highlights: [
      "Video consultations",
      "Appointment scheduling",
      "EHR management",
      "Prescription management"
    ]
  },
  {
    id: 13,
    title: "TravelBuddy Planner",
    description: "AI-powered travel planning and itinerary management",
    longDescription: "An intelligent travel planning application that uses AI to create personalized itineraries, book accommodations, and provide real-time travel recommendations.",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800",
    technologies: ["React Native", "OpenAI API", "Firebase", "Google Maps API"],
    category: "Mobile App",
    demoUrl: "https://travelbuddy-demo.vercel.app",
    githubUrl: "https://github.com/dyexarahardika/travelbuddy",
    featured: false,
    status: "in-progress",
    year: 2024,
    highlights: [
      "AI itinerary generation",
      "Budget optimization",
      "Offline maps",
      "Social sharing features"
    ]
  },
  {
    id: 14,
    title: "StockPulse Analytics",
    description: "Stock market analysis with predictive ML models",
    longDescription: "Advanced stock market analytics platform featuring machine learning models for price prediction, technical analysis tools, and portfolio management.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800",
    technologies: ["Python", "TensorFlow", "React", "FastAPI", "Redis"],
    category: "AI/ML",
    demoUrl: "https://stockpulse-demo.vercel.app",
    githubUrl: "https://github.com/dyexarahardika/stockpulse",
    featured: true,
    status: "completed",
    year: 2024,
    highlights: [
      "LSTM price prediction",
      "Technical indicators",
      "Portfolio tracking",
      "Real-time alerts"
    ]
  },
  {
    id: 15,
    title: "SocialFlow Dashboard",
    description: "Social media analytics and management platform",
    longDescription: "Comprehensive social media management tool that analyzes engagement, schedules posts, and provides insights across multiple platforms.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    technologies: ["Next.js", "Node.js", "MongoDB", "Chart.js", "OAuth2"],
    category: "Data Analytics",
    demoUrl: "https://socialflow-demo.vercel.app",
    githubUrl: "https://github.com/dyexarahardika/socialflow",
    featured: false,
    status: "completed",
    year: 2023,
    highlights: [
      "Multi-platform integration",
      "Post scheduling",
      "Analytics dashboard",
      "Competitor analysis"
    ]
  }
];

export interface Experience {
  id: number;
  title: string;
  company: string;
  type: "work" | "internship" | "volunteer";
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  icon: string;
}

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Full Stack Developer Intern",
    company: "TechInnovate Solutions",
    type: "internship",
    location: "Jakarta, Indonesia",
    startDate: "Jun 2024",
    endDate: "Present",
    current: true,
    description: "Developing and maintaining web applications using modern tech stack, collaborating with cross-functional teams to deliver high-quality software solutions.",
    responsibilities: [
      "Building responsive web applications using React and TypeScript",
      "Implementing RESTful APIs with Node.js and Express",
      "Collaborating with UX designers to implement pixel-perfect designs",
      "Writing clean, maintainable, and well-documented code",
      "Participating in code reviews and agile ceremonies"
    ],
    achievements: [
      "Reduced page load time by 40% through optimization",
      "Implemented authentication system serving 1000+ users",
      "Mentored 2 junior interns on React best practices"
    ],
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
    icon: "Briefcase"
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "Digital Kreasi Agency",
    type: "internship",
    location: "Remote",
    startDate: "Jan 2024",
    endDate: "May 2024",
    current: false,
    description: "Focused on creating responsive and accessible web interfaces for various client projects, ensuring cross-browser compatibility and optimal performance.",
    responsibilities: [
      "Developed responsive landing pages and web applications",
      "Converted Figma designs into functional React components",
      "Optimized website performance and SEO",
      "Implemented state management using Redux",
      "Conducted usability testing and gathered user feedback"
    ],
    achievements: [
      "Delivered 8 client projects on time and within budget",
      "Improved Core Web Vitals scores by 35%",
      "Increased mobile responsiveness across all projects"
    ],
    technologies: ["React", "JavaScript", "Tailwind CSS", "Redux", "Git"],
    icon: "Code"
  },
  {
    id: 3,
    title: "IT Support Volunteer",
    company: "Mulia University - IT Department",
    type: "volunteer",
    location: "Jakarta, Indonesia",
    startDate: "Aug 2023",
    endDate: "Dec 2023",
    current: false,
    description: "Provided technical support to students and faculty, maintained computer labs, and assisted in organizing tech workshops and events.",
    responsibilities: [
      "Troubleshooting hardware and software issues",
      "Setting up and maintaining computer lab equipment",
      "Assisting faculty with educational technology tools",
      "Creating user guides and documentation",
      "Supporting university IT infrastructure"
    ],
    achievements: [
      "Resolved 200+ technical support tickets",
      "Organized 3 tech workshops attended by 150+ students",
      "Improved lab equipment uptime to 98%"
    ],
    technologies: ["Windows", "Linux", "Networking", "Hardware Maintenance"],
    icon: "Laptop"
  },
  {
    id: 4,
    title: "Web Development Team Lead",
    company: "Student Tech Community",
    type: "volunteer",
    location: "Mulia University",
    startDate: "Mar 2023",
    endDate: "Present",
    current: true,
    description: "Leading a team of student developers to create web solutions for campus organizations and community projects while fostering a collaborative learning environment.",
    responsibilities: [
      "Managing a team of 8 student developers",
      "Planning and executing web development projects",
      "Conducting weekly code review sessions",
      "Organizing workshops on web technologies",
      "Coordinating with campus organizations for project requirements"
    ],
    achievements: [
      "Successfully delivered 5 campus web projects",
      "Trained 30+ students in web development",
      "Established coding standards and best practices",
      "Built a library of reusable components"
    ],
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "Vercel"],
    icon: "Users"
  },
  {
    id: 5,
    title: "Mobile App Development Intern",
    company: "StartUp Hub",
    type: "internship",
    location: "Jakarta, Indonesia",
    startDate: "Jun 2023",
    endDate: "Aug 2023",
    current: false,
    description: "Contributed to mobile application development using React Native, focusing on creating intuitive user interfaces and integrating backend services.",
    responsibilities: [
      "Developing cross-platform mobile applications",
      "Implementing native device features",
      "Integrating third-party APIs and services",
      "Testing and debugging mobile applications",
      "Collaborating with backend developers"
    ],
    achievements: [
      "Built 3 mobile app prototypes for client pitches",
      "Implemented push notification system",
      "Reduced app crash rate by 60%"
    ],
    technologies: ["React Native", "Firebase", "Redux", "Expo"],
    icon: "Smartphone"
  }
];

export interface RoadmapItem {
  id: number;
  year: number;
  quarter: string;
  title: string;
  description: string;
  goals: string[];
  status: "completed" | "in-progress" | "planned";
  icon: string;
  color: string;
}

export const roadmap: RoadmapItem[] = [
  {
    id: 1,
    year: 2022,
    quarter: "Q4",
    title: "Foundation Building",
    description: "Started university journey and learned programming fundamentals",
    goals: [
      "Completed HTML, CSS, JavaScript basics",
      "Built first portfolio website",
      "Learned Git and version control",
      "Joined campus tech community"
    ],
    status: "completed",
    icon: "Rocket",
    color: "#10B981"
  },
  {
    id: 2,
    year: 2023,
    quarter: "Q1-Q2",
    title: "Framework Mastery",
    description: "Deepened knowledge in modern frameworks and libraries",
    goals: [
      "Mastered React and component architecture",
      "Learned Node.js and Express",
      "Built 5+ personal projects",
      "Started freelancing on small projects"
    ],
    status: "completed",
    icon: "Code",
    color: "#10B981"
  },
  {
    id: 3,
    year: 2023,
    quarter: "Q3-Q4",
    title: "Professional Growth",
    description: "Gained real-world experience through internships",
    goals: [
      "Completed mobile app development internship",
      "Learned React Native and mobile best practices",
      "Earned 4 professional certifications",
      "Led student tech community projects"
    ],
    status: "completed",
    icon: "TrendingUp",
    color: "#10B981"
  },
  {
    id: 4,
    year: 2024,
    quarter: "Q1-Q2",
    title: "Full-Stack Excellence",
    description: "Expanded skills across the entire development stack",
    goals: [
      "Mastered TypeScript and type-safe development",
      "Learned database design and optimization",
      "Built complex full-stack applications",
      "Started current internship at TechInnovate"
    ],
    status: "completed",
    icon: "Layers",
    color: "#10B981"
  },
  {
    id: 5,
    year: 2024,
    quarter: "Q3-Q4",
    title: "Advanced Technologies",
    description: "Exploring cutting-edge technologies and methodologies",
    goals: [
      "Learn cloud computing (AWS/Azure)",
      "Implement CI/CD pipelines",
      "Study microservices architecture",
      "Contribute to open-source projects"
    ],
    status: "in-progress",
    icon: "Zap",
    color: "#0EA5E9"
  },
  {
    id: 6,
    year: 2025,
    quarter: "Q1-Q2",
    title: "Specialization Phase",
    description: "Deep dive into specialized areas of interest",
    goals: [
      "Advanced AI/ML implementations",
      "System design and architecture",
      "Lead major capstone project",
      "Publish technical articles"
    ],
    status: "planned",
    icon: "Brain",
    color: "#8B5CF6"
  },
  {
    id: 7,
    year: 2025,
    quarter: "Q3-Q4",
    title: "Industry Preparation",
    description: "Preparing for professional career transition",
    goals: [
      "Complete final year thesis",
      "Build comprehensive portfolio",
      "Network with industry professionals",
      "Prepare for job interviews"
    ],
    status: "planned",
    icon: "Target",
    color: "#8B5CF6"
  },
  {
    id: 8,
    year: 2026,
    quarter: "Q1-Q2",
    title: "Career Launch",
    description: "Graduation and beginning professional career",
    goals: [
      "Graduate with honors",
      "Secure full-time position",
      "Continue learning and growing",
      "Give back to tech community"
    ],
    status: "planned",
    icon: "Award",
    color: "#8B5CF6"
  }
];

export interface Goal {
  id: number;
  title: string;
  category: "short-term" | "medium-term" | "long-term";
  description: string;
  progress: number;
  deadline: string;
  icon: string;
}

export const goals: Goal[] = [
  {
    id: 1,
    title: "Complete AWS Solutions Architect Certification",
    category: "short-term",
    description: "Achieve AWS Solutions Architect Associate certification to strengthen cloud computing skills",
    progress: 65,
    deadline: "Dec 2024",
    icon: "Cloud"
  },
  {
    id: 2,
    title: "Launch Personal SaaS Product",
    category: "medium-term",
    description: "Build and launch a Software-as-a-Service product to solve a real-world problem",
    progress: 40,
    deadline: "Jun 2025",
    icon: "Rocket"
  },
  {
    id: 3,
    title: "Contribute to Major Open Source Project",
    category: "short-term",
    description: "Make meaningful contributions to popular open-source projects on GitHub",
    progress: 30,
    deadline: "Mar 2025",
    icon: "GitPullRequest"
  },
  {
    id: 4,
    title: "Master System Design",
    category: "medium-term",
    description: "Deep understanding of scalable system architecture and design patterns",
    progress: 50,
    deadline: "Dec 2025",
    icon: "Network"
  },
  {
    id: 5,
    title: "Secure Senior Developer Position",
    category: "long-term",
    description: "Join a leading tech company as a senior software engineer",
    progress: 20,
    deadline: "Jun 2026",
    icon: "Briefcase"
  },
  {
    id: 6,
    title: "Build Tech Community Platform",
    category: "long-term",
    description: "Create a platform to help students learn programming and connect with mentors",
    progress: 15,
    deadline: "Dec 2026",
    icon: "Users"
  }
];

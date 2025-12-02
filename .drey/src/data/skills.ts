export interface Skill {
  name: string;
  level: number;
  category: string;
  icon: string;
  color: string;
}

export const skillCategories = [
  "All",
  "Frontend",
  "Backend",
  "Database",
  "Tools",
  "Design",
  "Other"
];

export const skills: Skill[] = [
  // Frontend
  { name: "React", level: 90, category: "Frontend", icon: "Component", color: "#61DAFB" },
  { name: "Next.js", level: 85, category: "Frontend", icon: "Zap", color: "#000000" },
  { name: "TypeScript", level: 88, category: "Frontend", icon: "Code2", color: "#3178C6" },
  { name: "JavaScript", level: 92, category: "Frontend", icon: "FileCode", color: "#F7DF1E" },
  { name: "HTML5", level: 95, category: "Frontend", icon: "FileText", color: "#E34F26" },
  { name: "CSS3", level: 93, category: "Frontend", icon: "Palette", color: "#1572B6" },
  { name: "Tailwind CSS", level: 90, category: "Frontend", icon: "Wind", color: "#06B6D4" },
  { name: "Vue.js", level: 75, category: "Frontend", icon: "Triangle", color: "#4FC08D" },
  { name: "Angular", level: 70, category: "Frontend", icon: "Hexagon", color: "#DD0031" },
  { name: "Redux", level: 82, category: "Frontend", icon: "Database", color: "#764ABC" },
  
  // Backend
  { name: "Node.js", level: 87, category: "Backend", icon: "Server", color: "#339933" },
  { name: "Express.js", level: 85, category: "Backend", icon: "Webhook", color: "#000000" },
  { name: "Python", level: 80, category: "Backend", icon: "Code", color: "#3776AB" },
  { name: "Django", level: 75, category: "Backend", icon: "Package", color: "#092E20" },
  { name: "Flask", level: 78, category: "Backend", icon: "Flame", color: "#000000" },
  { name: "PHP", level: 82, category: "Backend", icon: "FileCode2", color: "#777BB4" },
  { name: "Laravel", level: 80, category: "Backend", icon: "Box", color: "#FF2D20" },
  { name: "Java", level: 76, category: "Backend", icon: "Coffee", color: "#007396" },
  { name: "Spring Boot", level: 72, category: "Backend", icon: "Leaf", color: "#6DB33F" },
  { name: "GraphQL", level: 78, category: "Backend", icon: "Network", color: "#E10098" },
  
  // Database
  { name: "MySQL", level: 88, category: "Database", icon: "Database", color: "#4479A1" },
  { name: "PostgreSQL", level: 85, category: "Database", icon: "Cylinder", color: "#336791" },
  { name: "MongoDB", level: 90, category: "Database", icon: "Leaf", color: "#47A248" },
  { name: "Redis", level: 75, category: "Database", icon: "Zap", color: "#DC382D" },
  { name: "Firebase", level: 83, category: "Database", icon: "Flame", color: "#FFCA28" },
  { name: "Supabase", level: 80, category: "Database", icon: "Database", color: "#3ECF8E" },
  { name: "SQL Server", level: 77, category: "Database", icon: "Server", color: "#CC2927" },
  
  // Tools
  { name: "Git", level: 92, category: "Tools", icon: "GitBranch", color: "#F05032" },
  { name: "GitHub", level: 90, category: "Tools", icon: "Github", color: "#181717" },
  { name: "Docker", level: 78, category: "Tools", icon: "Container", color: "#2496ED" },
  { name: "VS Code", level: 95, category: "Tools", icon: "Code2", color: "#007ACC" },
  { name: "Postman", level: 88, category: "Tools", icon: "Send", color: "#FF6C37" },
  { name: "Figma", level: 85, category: "Tools", icon: "Figma", color: "#F24E1E" },
  { name: "Jira", level: 75, category: "Tools", icon: "Trello", color: "#0052CC" },
  { name: "Slack", level: 90, category: "Tools", icon: "MessageSquare", color: "#4A154B" },
  { name: "Linux", level: 85, category: "Tools", icon: "Terminal", color: "#FCC624" },
  { name: "Ubuntu", level: 88, category: "Tools", icon: "Server", color: "#E95420" },
  { name: "Debian", level: 82, category: "Tools", icon: "HardDrive", color: "#A80030" },
  { name: "OpenSUSE", level: 75, category: "Tools", icon: "Package", color: "#73BA25" },
  { name: "Fedora", level: 78, category: "Tools", icon: "Box", color: "#294172" },
  { name: "Arch Linux", level: 70, category: "Tools", icon: "Layers", color: "#1793D1" },
  { name: "AWS", level: 70, category: "Tools", icon: "Cloud", color: "#FF9900" },
  { name: "Azure", level: 68, category: "Tools", icon: "CloudCog", color: "#0089D6" },
  { name: "Vercel", level: 88, category: "Tools", icon: "Triangle", color: "#000000" },
  
  // Design
  { name: "UI/UX Design", level: 85, category: "Design", icon: "Palette", color: "#FF7262" },
  { name: "Adobe XD", level: 80, category: "Design", icon: "Figma", color: "#FF61F6" },
  { name: "Photoshop", level: 75, category: "Design", icon: "Image", color: "#31A8FF" },
  { name: "Illustrator", level: 72, category: "Design", icon: "Pen", color: "#FF9A00" },
  { name: "Responsive Design", level: 90, category: "Design", icon: "Monitor", color: "#38BDF8" },
  
  // Other
  { name: "REST API", level: 90, category: "Other", icon: "Network", color: "#009688" },
  { name: "Agile/Scrum", level: 82, category: "Other", icon: "Users", color: "#0052CC" },
  { name: "Data Structures", level: 85, category: "Other", icon: "Boxes", color: "#764ABC" },
  { name: "Algorithms", level: 83, category: "Other", icon: "GitMerge", color: "#F05032" },
  { name: "Testing", level: 78, category: "Other", icon: "CheckCircle", color: "#4CAF50" },
  { name: "CI/CD", level: 75, category: "Other", icon: "RefreshCw", color: "#2088FF" },
  { name: "SEO", level: 80, category: "Other", icon: "Search", color: "#4285F4" },
  { name: "Analytics", level: 82, category: "Other", icon: "BarChart", color: "#FFA000" },
];

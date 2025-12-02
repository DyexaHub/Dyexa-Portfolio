export interface Education {
  id: number;
  degree: string;
  field: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  gpa: string;
  description: string;
  coursework: string[];
  achievements: string[];
  activities: string[];
  icon: string;
}

export const education: Education[] = [
  {
    id: 1,
    degree: "Bachelor of Science",
    field: "Information Systems",
    institution: "Mulia University",
    location: "Jakarta, Indonesia",
    startDate: "Sep 2022",
    endDate: "Expected Jun 2026",
    current: true,
    gpa: "3.85/4.00",
    description: "Specializing in software engineering, data analytics, and business information systems with a focus on modern web technologies and enterprise solutions.",
    coursework: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Web Application Development",
      "Software Engineering",
      "Business Process Management",
      "Information Systems Analysis & Design",
      "Mobile Application Development",
      "Cloud Computing",
      "Cybersecurity Fundamentals",
      "Artificial Intelligence",
      "Project Management",
      "Enterprise Resource Planning"
    ],
    achievements: [
      "Dean's List - All Semesters",
      "Academic Excellence Award 2023",
      "Best Final Project Award - Database Course",
      "Programming Competition 1st Place 2023",
      "Hackathon Winner - Campus Innovation 2024"
    ],
    activities: [
      "President - Information Systems Student Association",
      "Member - Google Developer Student Club",
      "Volunteer - Code for Community Initiative",
      "Workshop Facilitator - Web Development Bootcamp"
    ],
    icon: "GraduationCap"
  },
  {
    id: 2,
    degree: "High School Diploma",
    field: "Science Major",
    institution: "Jakarta International High School",
    location: "Jakarta, Indonesia",
    startDate: "Jul 2019",
    endDate: "Jun 2022",
    current: false,
    gpa: "3.92/4.00",
    description: "Completed rigorous science curriculum with emphasis on mathematics, physics, and computer science, laying strong foundation for higher education in technology.",
    coursework: [
      "Advanced Mathematics",
      "Physics",
      "Chemistry",
      "Computer Science",
      "English Literature",
      "Economics"
    ],
    achievements: [
      "Valedictorian - Class of 2022",
      "National Mathematics Olympiad - Bronze Medal",
      "Science Fair 1st Place - Computer Science Category",
      "Perfect Score - Computer Science Final Exam"
    ],
    activities: [
      "President - Computer Club",
      "Member - Robotics Team",
      "Editor - School Magazine",
      "Peer Tutor - Mathematics & Computer Science"
    ],
    icon: "School"
  }
];

export interface Certification {
  id: number;
  name: string;
  issuer: string;
  date: string;
  credentialId: string;
  description: string;
  skills: string[];
  icon: string;
  color: string;
}

export const certifications: Certification[] = [
  {
    id: 1,
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "Sep 2024",
    credentialId: "AWS-CCP-2024-001",
    description: "Foundational understanding of AWS Cloud, services, and terminology",
    skills: ["Cloud Computing", "AWS Services", "Cloud Architecture"],
    icon: "Cloud",
    color: "#FF9900"
  },
  {
    id: 2,
    name: "Professional Scrum Master I (PSM I)",
    issuer: "Scrum.org",
    date: "Jul 2024",
    credentialId: "PSM-I-2024-789",
    description: "Demonstrated understanding of Scrum framework and agile principles",
    skills: ["Agile", "Scrum", "Project Management"],
    icon: "Users",
    color: "#0052CC"
  },
  {
    id: 3,
    name: "Meta Front-End Developer",
    issuer: "Meta (Coursera)",
    date: "May 2024",
    credentialId: "META-FE-2024-456",
    description: "Comprehensive training in modern front-end development practices",
    skills: ["React", "JavaScript", "HTML/CSS", "UI/UX"],
    icon: "Code",
    color: "#1877F2"
  },
  {
    id: 4,
    name: "Google Data Analytics Professional",
    issuer: "Google (Coursera)",
    date: "Mar 2024",
    credentialId: "GOOG-DA-2024-123",
    description: "Data analysis, visualization, and storytelling with data",
    skills: ["Data Analysis", "SQL", "Tableau", "Data Visualization"],
    icon: "BarChart",
    color: "#4285F4"
  },
  {
    id: 5,
    name: "MongoDB Developer Certification",
    issuer: "MongoDB University",
    date: "Jan 2024",
    credentialId: "MONGO-DEV-2024-321",
    description: "Advanced MongoDB database design and development",
    skills: ["MongoDB", "NoSQL", "Database Design"],
    icon: "Database",
    color: "#47A248"
  },
  {
    id: 6,
    name: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "Nov 2023",
    credentialId: "FCC-RWD-2023-654",
    description: "Modern responsive web design principles and techniques",
    skills: ["HTML", "CSS", "Responsive Design", "Accessibility"],
    icon: "Monitor",
    color: "#0A0A23"
  },
  {
    id: 7,
    name: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "Oct 2023",
    credentialId: "FCC-JS-2023-987",
    description: "Fundamental programming concepts, algorithms, and data structures",
    skills: ["JavaScript", "Algorithms", "Data Structures"],
    icon: "Code2",
    color: "#F7DF1E"
  },
  {
    id: 8,
    name: "UI/UX Design Specialization",
    issuer: "California Institute of Arts (Coursera)",
    date: "Aug 2023",
    credentialId: "CAL-UX-2023-159",
    description: "User-centered design, prototyping, and usability testing",
    skills: ["UI Design", "UX Research", "Prototyping", "Figma"],
    icon: "Palette",
    color: "#FF7262"
  }
];

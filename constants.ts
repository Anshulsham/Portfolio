
import { Project } from './types';

export const PERSONAL_INFO = {
  name: "Anshul Shambharkar",
  title: "Building scalable digital experiences & solving complex problems",
  status: "Available for work",
  description: "Passionate about creating innovative web solutions with modern technologies. Specializing in MERN stack development with expertise in C++, DSA, and SQL.",
  tags: ["Pre-Final Year Undergrad", "NIT Bhopal | CSE'27", "Full Stack Developer"],
  education: [
    {
      institution: "NIT Bhopal",
      duration: "2023 – 2027",
      degree: "B.Tech in Computer Science and Engineering",
      score: "CGPA 7.55"
    },
    {
      institution: "St Xaviers High School Wardhaman Nagar, Nagpur",
      duration: "2021 – 2022",
      degree: "Class 12th (CBSE)",
      score: "82%"
    }
  ],
  dsa: {
    foundation: "Strong DSA foundation in C++ with extensive problem-solving.",
    ratings: [
      { platform: "LeetCode",   rating: "1519", profileUrl: "https://leetcode.com/u/Anshulyrics/" },
      { platform: "Codeforces", rating: "1200", profileUrl: "https://codeforces.com/profile/Anshulyrics" }
    ]
  },
  achievements: [
    "Solved 700+ DSA problems across LeetCode, Codeforces, GFG.",
    "National Finalist — CIIS 2025 CyberShield Hackathon, recognized among top teams for a technology-driven digital intelligence solution."
  ],
  stats: {
    projectsDone: "10+"
  }
};

export const SKILLS = [
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express", icon: "https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg" },
  { name: "Socket.io", icon: "https://www.vectorlogo.zone/logos/socketio/socketio-icon.svg" },
  { name: "WebRTC", icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='12' fill='%23222'/%3E%3Crect x='10' y='30' width='55' height='40' rx='6' fill='%2300BCD4'/%3E%3Cpolygon points='68,42 88,32 88,68 68,58' fill='%2300BCD4'/%3E%3Ccircle cx='37' cy='50' r='10' fill='%23fff' opacity='0.15'/%3E%3Ctext x='50' y='88' text-anchor='middle' font-family='Arial' font-size='10' font-weight='bold' fill='%2300BCD4'%3EWebRTC%3C/text%3E%3C/svg%3E" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "DaisyUI", icon: "https://raw.githubusercontent.com/saadeghi/daisyui-images/master/images/daisyui-logo/favicon-192.png" },
  { name: "Material UI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" },
  { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
  { name: "OOP", icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='10' fill='%233b3b8c'/%3E%3Crect width='100' height='22' rx='10' fill='%23b8c9d8'/%3E%3Crect y='12' width='100' height='10' fill='%23b8c9d8'/%3E%3Ccircle cx='16' cy='11' r='4' fill='%23ff6b6b'/%3E%3Ccircle cx='30' cy='11' r='4' fill='%23ffd93d'/%3E%3Ccircle cx='44' cy='11' r='4' fill='%236bcb77'/%3E%3Ctext x='18' y='72' font-family='monospace' font-size='22' font-weight='bold' fill='%234ecdc4'%3E{%3C/text%3E%3Ctext x='32' y='70' font-family='Arial' font-size='16' font-weight='bold' fill='white'%3EOOP%3C/text%3E%3Ctext x='74' y='72' font-family='monospace' font-size='22' font-weight='bold' fill='%234ecdc4'%3E}%3C/text%3E%3C/svg%3E" },
  { name: "OS", icon: "https://img.icons8.com/color/96/operating-system.png" },
  { name: "CN", icon: "https://img.icons8.com/color/96/network.png" },
  { name: "DBMS", icon: "https://img.icons8.com/color/96/database.png" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
];

export interface EnhancedProject extends Project {
  github: string;
  demo: string;
}

export const PROJECTS: EnhancedProject[] = [
  {
    id: 1,
    title: "AlgoArena",
    description: "A full-stack LeetCode-style coding platform with in-browser Monaco editor, Judge0 code execution, AI chat assistance, discussion threads, and progress tracking — deployed on AWS EC2.",
    tags: ["React", "Node.js", "MongoDB", "Redis", "Judge0", "AWS EC2", "Gemini AI", "Tailwind"],
    link: "https://algoarena.online/",
    image: "/algoarena.png",
    github: "https://github.com/Anshulsham/AlgoArena",
    demo: "https://algoarena.online/"
  },
  {
    id: 2,
    title: "NewsNexus",
    description: "A responsive news aggregation platform that fetches real-time news articles from the GNews API, offering category-based navigation and keyword search with Redux state management.",
    tags: ["React", "Redux", "Redux Thunk", "Axios", "Bootstrap", "Styled Components", "GNews API"],
    link: "https://newslv.netlify.app/",
    image: "/newsnexus.png",
    github: "https://github.com/Anshulsham/NewsNexus",
    demo: "https://newslv.netlify.app/"
  },
  {
    id: 3,
    title: "Algorithm Visualizer Platform",
    description: "An interactive educational web application for learning pathfinding and search algorithms through real-time step-by-step visualizations on a custom grid.",
    tags: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Express.js", "Node.js", "PostgreSQL", "Drizzle ORM"],
    link: "https://algovisualizer-72fd92.netlify.app/",
    image: "/algorithm-visualizer.png",
    github: "https://github.com/Anshulsham/AlgorithmVisualizer",
    demo: "https://algovisualizer-72fd92.netlify.app/"
  },
  {
    id: 4,
    title: "AirVeda",
    description: "A static web-based air quality tracking application that displays real-time pollution levels, interactive Leaflet map overlays, AQI health tips, and historical charts using OpenWeatherMap APIs.",
    tags: ["HTML5", "CSS3", "JavaScript", "Leaflet.js", "Chart.js", "OpenWeatherMap API", "Nominatim API", "LocalStorage"],
    link: "https://hawa-e-saaf.netlify.app/",
    image: "/airveda.png",
    github: "https://github.com/Anshulsham/Hawa-e-saaf",
    demo: "https://hawa-e-saaf.netlify.app/"
  }
];

export const SOCIAL_LINKS = {
  github: "https://github.com/Anshulsham",
  linkedin: "https://www.linkedin.com/in/anshul-shambharkar-976469290/",
  email: "anshul@example.com"
};

export const COMMAND_HELP = [
  { cmd: 'help', desc: 'Show all available commands' },
  { cmd: 'skills', desc: 'Navigate to skills section' },
  { cmd: 'projects', desc: 'Navigate to projects section' },
  { cmd: 'contact', desc: 'Navigate to contact section' },
  { cmd: 'about', desc: 'Learn more about me' },
  { cmd: 'clear', desc: 'Clear the terminal screen' },
  { cmd: 'whoami', desc: 'Show developer bio' }
];

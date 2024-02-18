import { Github, Linkedin, Mail, Facebook } from "lucide-react";

export const socials = [
  {
    url: "",
    icon: Github,
  },
  {
    url: "",
    icon: Linkedin,
  },
  {
    url: "",
    icon: Mail,
  },
  {
    url: "",
    icon: Facebook,
  },
] as const;

export const projects = [
  {
    id: 1,
    slug: "f4-education",
    title: "F4 Education System managing.",
    desc: "A web application build in React, Java(spring boot) and SQL Server for building a system manage a programming teaching center.",
    techStack:
      "React, SCSS, Bootstrap, Mantine, Java(Spring boot), RESTful APIs, Firebase, Figma.",
    image:
      "https://images.unsplash.com/photo-1549980384-d61217e50c4b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHNjaG9vbHxlbnwwfHwwfHx8MA%3D%3D",
    url: null,
    github: "https://github.com/alexnguyen03/f4education",
    listImage: [],
  },
  {
    id: 2,
    slug: "notion-clone",
    title: "Notion clone.",
    desc: "A web application build in React(Next.js). This project is a clone notion official website.",
    techStack: "Next.js, SCSS, tailwind, Convex, typescript, EdgeStore, clerk.",
    image:
      "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG5vdGVzfGVufDB8fDB8fHww",
    url: "https://modern-note-taking-app.vercel.app/",
    github: "https://github.com/hientt1803/notion-clone",
    listImage: [],
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "SCSS",
  "Tailwind",
  "Bootstrap",
  "Responsive",
  "Framer Motion",
  "JavaScript",
  "React(Next.js)",
  "Redux",
  "Java Core",
  "Java Spring boot",
  "Restfull APIs",
  "Prisma",
  "MongoDB",
  "SQL",
  "Git",
  "Trello",
] as const;

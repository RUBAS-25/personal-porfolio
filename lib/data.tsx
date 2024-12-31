import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

type Experience = {
  title: string;
  company: string;
  description: React.ReactNode;
  icon: React.ReactNode;
  date: string;
};

export const experiencesData: Experience[] = [
  {
    title: "Personal Project - Portfolio Website",
    company: "Self-Project, Pakistan",
    description: (
      <ul className="list-disc mt-1 font-normal text-gray-700 dark:text-white/75">
        <li className="mb-2">
          🚀 Built a personal portfolio website using HTML, CSS, and TypeScript.
        </li>
        <li className="mb-2">
          🔄 Integrated smooth scrolling, responsive design, and interactive UI.
        </li>
        <li className="mb-2">
          🧑‍💻 Used TypeScript for better type safety and code maintainability.
        </li>
      </ul>
    ),
    icon: <CgWorkAlt />,
    date: "2023 - 2024",
  },
  {
    title: "E-Commerce Website",
    company: "Self-Project, Pakistan",
    description: (
      <ul className="list-disc mt-1 font-normal text-gray-700 dark:text-white/75">
        <li className="mb-2">
          🛒 Developed a fully functional e-commerce website using HTML, CSS, and
          Node.js.
        </li>
        <li className="mb-2">
          🔥 Implemented product listings, shopping cart, and checkout system.
        </li>
        <li className="mb-2">
          🔗 Used TypeScript and Node.js for backend API integration and
          database management.
        </li>
      </ul>
    ),
    icon: <FaReact />,
    date: "2024 - Present",
  },
  {
    title: "Blog Platform",
    company: "Self-Project, Pakistan",
    description: (
      <ul className="list-disc mt-1 font-normal text-gray-700 dark:text-white/75">
        <li className="mb-2">
          📝 Created a blog platform where users can write, edit, and delete
          posts using HTML, CSS, and TypeScript.
        </li>
        <li className="mb-2">
          💻 Integrated Node.js for the backend and implemented user authentication.
        </li>
        <li className="mb-2">
          🔥 Utilized a NoSQL database for managing blog data and comments.
        </li>
      </ul>
    ),
    icon: <SiNextdotjs />,
    date: "2024 - Present",
  },
];

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "Tailwind"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting, and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count, and social media post limits.",
    tags: ["React", "Next.js", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Git",
  "Node.js",
  "Tailwind",
  "Bootstrap",
] as const;

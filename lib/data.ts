import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import bbtbImg from "@/public/bbtb.png";
import insiteImg from "@/public/insite.png";
import harmonizeImg from "@/public/harmonize.png";
import spaceInvadersImg from "@/public/space_invaders.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Projects",
    hash: "#projects",
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
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Casual Academic",
    location: "The University of Sydney",
    description:
      "Currently teaching INFO1110: Intro to Programming and COMP2017: Systems Programming.",
    icon: React.createElement(CgWorkAlt),
    date: "December 2024 - Present",
  },
  {
    title: "Software Engineer Internship",
    location: "Avec Global",
    description:
      "Automated and streamlined essential business processes for clients as part of the Enterprise Applications team.",
    icon: React.createElement(CgWorkAlt),
    date: "December 2024 - February 2025",
  },
  {
    title: "Machine Learning Developer",
    location: "Insite Project Solutions",
    description:
      "Led 6-person team to develop a computer vision model for PPE-detection on construction sites.",
    icon: React.createElement(CgWorkAlt),
    date: "July 2024 - November 2024",
  },
  {
    title: "Senior Paralegal",
    location: "BCP Lawyers & Consultants",
    description:
      "Provided legal support to the firm's partners and clients, including drafting and reviewing legal documents, conducting legal research, and preparing for court appearances. Assisted with client meetings and provided administrative support to the firm's partners.",
    icon: React.createElement(CgWorkAlt),
    date: "January 2022 - December 2024",
  },
] as const;

export const projectsData = [
  // {
  //   title: "Boys Behind The Bar",
  //   description:
  //     "[In Development] A full-stack web application for a mobile bartending company, featuring a modern, responsive design. The platform combines a customer-facing interface for service bookings, cocktail menu browsing, and review management with a robust admin CRM system for business operations. Built with industry best practices and deployed on AWS infrastructure.",
  //   tags: ["React", "Node.js", "Express.js", "AWS EC2", "AWS RDS", "Tailwind CSS", "PostgreSQL"],
  //   icons: [
  //     "logos:react",
  //     "logos:nodejs-icon",
  //     "logos:express",
  //     "logos:aws",
  //     "logos:postgresql",
  //     "logos:tailwindcss-icon"
  //   ],
  //   imageUrl: bbtbImg,
  //   githubLink: "https://github.com/sebskontos/BoysBehindTheBar"
  // },
  {
    title: "Bartender Booking App",
    description:
      "A custom iOS application built for a mobile bartending company. The app streamlines the event booking process, allowing customers to easily schedule and manage their bartending services. Features a dual-interface system with a customer-facing booking platform and a specialized admin portal for bartenders to confirm reservations and manage their events.",
    tags: ["Swift", "SwiftUI", "XCode", "Firebase"],
    icons: [
      "logos:swift",
      "logos:firebase",
      "logos:xcode"
    ],
    imageUrl: bbtbImg,
    githubLink: "https://github.com/sebskontos/BoysBehindTheBar"
  },
  {
    title: "InSite Monitoring",
    description:
      "Led a group of 6 software engineering students to develop a computer vision system capable of detecting the proper use of safety equipment on construction sites. The system uses advanced computer vision techniques to ensure workplace safety compliance.",
    tags: ["Python", "OpenCV", "TensorFlow", "PyTorch", "YOLOv8"],
    icons: [
      "logos:python",
      "logos:opencv",
      "logos:tensorflow",
      "logos:pytorch"
    ],
    imageUrl: insiteImg,
    githubLink: "https://github.com/sebskontos/InSite-Monitoring",
    demoLink: "https://www.linkedin.com/posts/consilium-solutions-aus_insitemonitoring-consiliumsolutions-projectmanagement-activity-7282961827896926208-9AEV"
  },
  {
    title: "Harmonize",
    description:
      "A full-stack music streaming web application. Developed and deployed on an AWS EC2 instance with Nginx, Django, and Google OAuth 2.0 for secure authentication. Features include user authentication, music streaming, playlist management, and a responsive user interface.",
    tags: ["Python", "Django", "CSS", "HTML", "AJAX", "AWS EC2"],
    icons: [
      "logos:python",
      "logos:django",
      "logos:html-5",
      "logos:css-3",
      "logos:aws"
    ],
    imageUrl: harmonizeImg,
    githubLink: "https://github.com/sebskontos/Harmonize"
  },
  {
    title: "Space Invaders Game",
    description:
      "A 2D game engine in Java which replicates Space Invaders, featuring enemy spawning, projectiles, collision detection, and game state transitions. Leveraged OOP principles and design patterns like Factory, Builder, and State to create a maintainable and extensible codebase.",
    tags: ["Java", "JavaFX", "Design Patterns"],
    icons: [
      "logos:java",
      "logos:javafx"
    ],
    imageUrl: spaceInvadersImg,
    githubLink: "https://github.com/sebskontos/Space-Invaders-v2.0.0"
  },
] as const;

// lib/data.ts
export const skillsData = [
  {
    category: "Languages",
    skills: [
      { name: "Python", icon: "logos:python" },
      { name: "Java", icon: "logos:java" },
      { name: "C", icon: "logos:c" },
      { name: "Swift", icon: "logos:swift" },
      { name: "HTML", icon: "logos:html-5" },
      { name: "CSS", icon: "logos:css-3" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React.js", icon: "logos:react" },
      { name: "Next.js", icon: "logos:nextjs-icon" },
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
      { name: "Framer Motion", icon: "logos:framer" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: "logos:nodejs-icon" },
      { name: "Django", icon: "logos:django" },
      { name: "Flask", icon: "logos:flask" },
      { name: "REST APIs", icon: "material-symbols:api-outline" },
    ],
  },
  {
    category: "DevOps",
    skills: [
      { name: "AWS", icon: "logos:aws" },
      { name: "Docker", icon: "logos:docker-icon" },
      { name: "Kubernetes", icon: "logos:kubernetes" },
      { name: "Jenkins", icon: "logos:jenkins" },
      { name: "GitHub Actions", icon: "logos:github-actions" },
      { name: "Linux", icon: "logos:linux-tux" },
      { name: "CI/CD" },
      { name: "Infrastructure as Code" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", icon: "logos:git-icon" },
      { name: "GitHub", icon: "logos:github-icon" },
      { name: "VS Code", icon: "logos:visual-studio-code" },
      { name: "npm", icon: "logos:npm-icon" },
    ],
  },
];


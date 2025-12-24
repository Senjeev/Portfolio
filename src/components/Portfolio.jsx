import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import p1 from "../assets/Portfolio/p1.jpg";
import logo from "../assets/Portfolio/logo.jpg";
import p4 from "../assets/Portfolio/p4.png";
import p5 from "../assets/Portfolio/p5.png";
import pingup from "../assets/Portfolio/pingup.jpg";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      name: "PingUp",
      src: pingup, 
      description:
        "A real-time chat application featuring seamless messaging, presence indicators, and secure JWT authentication. Includes image sharing and automated email notifications.",
      tech: ["React.js", "Node.js","Zustand","Arcjet", "Socket", "MongoDB", "Tailwind","Cloudinary","Resend"],
      code: "https://github.com/Senjeev/PingUp---MERN", 
      // demo: "https://pingup-live-demo-link.com", // Add your real link here
    },
    {
      id: 2,
      name: "Pair Programming Platform",
      src: logo, // Placeholder image
      description:
        "A collaborative coding environment enabling real-time code synchronization between users. Built for efficient peer programming sessions with low latency.",
      tech: ["Python", "FastAPI", "WebSockets", "React.js"],
      code: "https://github.com/Senjeev/pair-programmer",
      demo: "https://pair-programmer-lake.vercel.app/"
    },

    {
      id: 3,
      name: "PostRest (Social App)",
      src: p5,
      description:
        "A social media platform enabling users to create posts, manage connections, and interact via likes and comments. Features a robust backend API.",
      tech: ["React", "Material UI", "Redux", "Node.js","Express.js", "MongoDB"],
      code: "https://github.com/Senjeev/POST_REST",
    },
    {
      id: 4,
      name: "IMDB Clone",
      src: p4,
      description:
        "A movie database interface allowing users to browse movies, view ratings, and search for their favorite titles using the TMDB API.",
      tech: ["React.js", "TMDB API", "TailWindCSS"],
      code: "https://github.com/Senjeev/clone-IMDB",
    },
        {
      id: 5,
      name: "Expense Tracker",
      src: p1,
      description:
        "A full-stack financial management tool to track income and expenses. Visualizes spending habits with dynamic charts and transaction history.",
      tech: ["MERN Stack", "Chart.js", "Redux"],
      code: "https://github.com/Senjeev/Expense_Tracker",
    }
  ];

  return (
    <div
      name="projects"
      // Added pt-28 to clear the fixed navbar
      className="w-full h-auto min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white pt-28 pb-10"
    >
      <div className="max-w-screen-2xl p-4 md:px-16 mx-auto flex flex-col justify-center w-full h-full">
        
        {/* Header */}
        <div className="pb-12">
          <h2 className="text-4xl sm:text-5xl font-bold inline-block relative z-10">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white">
              Projects
            </span>
            <span className="absolute bottom-1 left-0 w-full h-3 bg-cyan-500/20 -z-10 -skew-x-12 rounded-sm"></span>
          </h2>
          <p className="text-gray-400 mt-6 text-lg sm:text-xl font-light max-w-2xl leading-relaxed">
            Check out some of my recent work, ranging from real-time apps to full-stack platforms.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map(({ id, name, src, description, tech, code, demo }) => (
            <div
              key={id}
              className="bg-gray-900/40 backdrop-blur-md border border-gray-700 rounded-2xl p-6 hover:shadow-lg hover:shadow-cyan-500/10 hover:border-cyan-500/50 duration-300 flex flex-col h-full group"
            >
              {/* Top Section: Logo + Title */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={src}
                  alt={name}
                  className="w-16 h-16 rounded-lg object-cover shadow-md group-hover:scale-105 duration-300"
                />
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 duration-300">
                  {name}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                {description}
              </p>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                {tech.map((item, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs font-medium bg-gray-800 text-cyan-400 rounded-full border border-gray-700"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Buttons (Code & Live Demo) */}
              <div className="flex items-center gap-4 mt-auto">
                {/* Code Button */}
                <a
                  href={code}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 border border-gray-600 hover:border-white transition-all duration-200 text-sm font-semibold"
                >
                  <FaGithub size={18} /> Code
                </a>

                {/* Live Demo Button (Only for PingUp) */}
                {demo && (
                  <a
                    href={demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-200 text-sm font-semibold"
                  >
                    <FaExternalLinkAlt size={16} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
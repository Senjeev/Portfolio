import React from "react";
// Frontend & Languages
import Html from "../assets/Portfolio/html5.png";
import CSS from "../assets/Portfolio/CSS.png";
import JavaScript from "../assets/Portfolio/JavaScript.png";
import ReactImg from "../assets/Portfolio/react_.png";
import Tailwind from "../assets/Portfolio/CSS.png"; // check if this is correct
import Redux from "../assets/Portfolio/Redux.png";
import Cpp from "../assets/Portfolio/cpp-logo.png";
import Java from "../assets/Portfolio/Java.png";
import Python from "../assets/Portfolio/CSS.png"; // Make sure to add this image!

// Backend & DB
import Node from "../assets/Portfolio/node.png";
import Express from "../assets/Portfolio/Express.png";
import fastapi from "../assets/Portfolio/fastapi.jpg";
import Mongo from "../assets/Portfolio/Mongo.png";
import Sql from "../assets/Portfolio/Sql.jpg";

// Tools & DevOps
import GitHub from "../assets/Portfolio/GitHub.png";
import Grafana from "../assets/Portfolio/Grafana.png";
import Power_BI from "../assets/Portfolio/Power_BI.png";
import Postman from "../assets/Portfolio/Postman.png";
import docker from "../assets/Portfolio/docker.png";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { id: 1, src: Cpp, title: "C++", style: "shadow-blue-600" },
        { id: 2, src: Java, title: "Java", style: "shadow-orange-500" },
        { id: 3, src: Python, title: "Python", style: "shadow-yellow-400" },
        { id: 4, src: JavaScript, title: "JavaScript", style: "shadow-yellow-500" },
      ],
    },
    {
      title: "Frontend Development",
      skills: [
        { id: 5, src: Html, title: "HTML", style: "shadow-orange-600" },
        { id: 6, src: CSS, title: "CSS", style: "shadow-blue-500" },
        { id: 7, src: ReactImg, title: "React", style: "shadow-cyan-400" },
        { id: 8, src: Tailwind, title: "Tailwind", style: "shadow-sky-400" },
        { id: 9, src: Redux, title: "Redux", style: "shadow-purple-500" },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { id: 10, src: Node, title: "Node JS", style: "shadow-green-500" },
        { id: 11, src: Express, title: "Express", style: "shadow-gray-400" },
        { id: 12, src: fastapi, title: "FastApi", style: "shadow-gray-400" }

      ],
    },
    {
      title: "Databases",
      skills: [
        { id: 12, src: Mongo, title: "MongoDB", style: "shadow-green-400" },
        { id: 13, src: Sql, title: "SQL", style: "shadow-blue-400" },
      ],
    },
    {
      title: "Tools & DevOps",
      skills: [
        { id: 14, src: Postman, title: "Postman", style: "shadow-orange-600" },
        { id: 15, src: docker, title: "Docker", style: "shadow-yellow-600" },
        { id: 16, src: GitHub, title: "GitHub", style: "shadow-gray-500" },
        { id: 17, src: Grafana, title: "Grafana", style: "shadow-orange-500" },
        { id: 18, src: Power_BI, title: "Power BI", style: "shadow-yellow-600" },
        ,
      ],
    },
  ];

  return (
    <div
      name="skills"
      className="w-full h-auto min-h-screen bg-gradient-to-b from-gray-800 to-black text-white pt-28 pb-10"
    >
      <div className="max-w-screen-2xl p-4 md:px-16 mx-auto flex flex-col justify-center w-full h-full">
        
        {/* Header */}
        <div className="pb-12">
          <h2 className="text-4xl sm:text-5xl font-bold inline-block relative z-10">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white">
              Skills
            </span>
            <span className="absolute bottom-1 left-0 w-full h-3 bg-cyan-500/20 -z-10 -skew-x-12 rounded-sm"></span>
          </h2>
          <p className="text-gray-400 mt-6 text-lg sm:text-xl font-light max-w-2xl leading-relaxed">
            A comprehensive technical stack honed through academic excellence and professional experience.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="flex flex-col gap-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="flex flex-col gap-6 animate-fadeIn">
              
              {/* Category Title */}
              <div className="flex items-center gap-4">
                <div className="w-2 h-8 bg-cyan-500 rounded-full"></div>
                <h3 className="text-2xl font-bold text-gray-200">
                  {category.title}
                </h3>
                <div className="flex-grow h-[1px] bg-gray-800/50"></div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                {category.skills.map((skill) => (
                  <div
                    key={skill.id}
                    className={`relative flex flex-col items-center justify-center p-4 rounded-xl bg-gray-900/40 border border-gray-800 hover:border-cyan-500/30 transition-all duration-300 group hover:-translate-y-1 ${skill.style}`}
                  >
                    {/* Glow Effect on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300"></div>
                    
                    <img
                      src={skill.src}
                      alt={skill.title}
                      className="w-14 h-14 object-contain mb-3 drop-shadow-md group-hover:scale-110 transition-transform duration-300"
                    />
                    <p className="text-gray-400 font-medium text-sm group-hover:text-white transition-colors">
                      {skill.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Skills;
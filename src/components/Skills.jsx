import React from "react";
import Html from "../assets/Portfolio/html5.png";
import CSS from "../assets/Portfolio/CSS.png";
import GitHub from "../assets/Portfolio/GitHub.png";
import Grafana from "../assets/Portfolio/Grafana.png";
import JavaScript from "../assets/Portfolio/JavaScript.png";
import Node from "../assets/Portfolio/node.png";
import Power_BI from "../assets/Portfolio/Power_BI.png";
import react from "../assets/Portfolio/react_.png";
import Tailwind from "../assets/Portfolio/CSS.png";

const Skills = () => {
  const skills = [
    {
      id: "1",
      src: Html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: "2",
      src: CSS,
      title: "CSS",
      style: "shadow-blue-200",
    },
    {
      id: "3",
      src: GitHub,
      title: "GitHub",
      style: "shadow-gray-500",
    },

    {
      id: "5",
      src: react,
      title: "React",
      style: "shadow-blue-500",
    },
    {
      id: "4",
      src: JavaScript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: "6",
      src: Tailwind,
      title: "Tailwind",
      style: "shadow-blue-700",
    },
    {
      id: "8",
      src: Node,
      title: "Node",
      style: "shadow-green-500",
    },
    {
      id: "9",
      src: Power_BI,
      title: "Power BI",
      style: "shadow-yellow-200",
    },
    {
      id: "7",
      src: Grafana,
      title: "Grafana",
      style: "shadow-orange-800",
    },
  ];
  return (
    <div
      name="experience" 
      className="md:h-screen mx-auto bg-gradient-to-b from-gray-800  to-black w-full "
    >
      <div className=" max-w-screen-lg w-full flex flex-col justify-center h-full mx-auto p-4 text-white">
        <div className="mt-20">
          <p className="mt-4 text-4xl font-bold inline border-b-4 border-gray-500 p-2">
            Experience
          </p>
          <p className="mt-8">
            These are the technologies, I've worked with...{" "}
          </p>
        </div>
        <div className="grid  grid-cols-2 sm:grid-cols-3 gap-8 text-center py-12 px-8 sm:px-0 ">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className={
                "shadow-md hover:scale-105 duration-200 py-2 rounded-lg  " +
                " " +
                skill.style
              }
            >
              <img src={skill.src} className="w-20 mx-auto"></img>
              <div className=""> 
              <p className="mt-4">{skill.title}</p>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

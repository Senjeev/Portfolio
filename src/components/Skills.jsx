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
import Cpp from "../assets/Portfolio/cpp-logo.png";
import redux from "../assets/Portfolio/Redux.png";
import java from "../assets/Portfolio/Java.png";
import sql from "../assets/Portfolio/Sql.jpg";
import express from "../assets/Portfolio/Express.png";
import Mongo from "../assets/Portfolio/Mongo.png";
import Postman from "../assets/Portfolio/Postman.png";
const Skills = () => {
  const skills = [
    {
      id: "1",
      src: Cpp,
      title: "C++",
      style: "shadow-blue-300",
    },
    {
      id: "2",
      src: java,
      title: "Java",
      style: "shadow-orange-300",
    },
    {
      id: "3",
      src: Html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: "4",
      src: CSS,
      title: "CSS",
      style: "shadow-blue-200",
    },
    {
      id: "5",
      src: Tailwind,
      title: "Tailwind",
      style: "shadow-blue-700",
    },
    {
      id: "6",
      src: JavaScript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: "7",
      src: react,
      title: "React",
      style: "shadow-blue-500",
    },
    {
      id: "8",
      src: redux,
      title: "Redux",
      style: "shadow-red-300",
    },
    {
      id: "9",
      src: express,
      title: "Express",
      style: "shadow-yellow-100",
    },
    {
      id: "10",
      src: Node,
      title: "Node",
      style: "shadow-green-500",
    },
    {
      id: "11",
      src: Mongo,
      title: "MongoDB",
      style: "shadow-green-300",
    },
    {
      id: "12",
      src: sql,
      title: "SQL",
      style: "shadow-orange-300",
    },
    {
      id: "13",
      src: Postman,
      title: "Postman",
      style: "shadow-orange-700",
    },
    {
      id: "14",
      src: Power_BI,
      title: "Power BI",
      style: "shadow-yellow-200",
    },
    {
      id: "15",
      src: Grafana,
      title: "Grafana",
      style: "shadow-orange-800",
    },
    {
      id: "16",
      src: GitHub,
      title: "GitHub",
      style: "shadow-gray-500",
    },
  ];
  return (
    <div
      name="skills"
      className="md:h-screen mx-auto  bg-gradient-to-b from-gray-800 to-black w-full"
    >
      <div className="max-w-screen-lg w-full flex flex-col justify-center h-full mx-auto p-4 text-white">
        <div className="mt-20">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Skills
          </p>
          <p className="mt-2">These are the technologies I've worked with...</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-6 gap-8 text-center py-8 px-8 sm:px-0">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className={
                "shadow-md hover:scale-105 duration-200 py-2 justify-center rounded-lg " +
                skill.style
              }
            >
              <img src={skill.src} className="w-20 mx-auto" alt={skill.title} />
              <p className="mt-4">{skill.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

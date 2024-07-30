import React from "react";
import p1 from "../assets/Portfolio/p1.jpg";
import p2 from "../assets/Portfolio/p2.jfif";
import p3 from "../assets/Portfolio/p3.jpg";
import p4 from "../assets/Portfolio/p4.png";
const Portfolio = () => {
  const projects = [
    {
      id: 1,
      src: p1,
    },
    { id: 2, src: p2 },
    {
      id: 3,
      src: p3,
    },
    {
      id: 4,
      src: p4,
    },
  ];
  return (
    <div
      name="portfolio"
      className="w-full bg-gradient-to-b from-black to-gray-800 text-white md:h-screen"
    >
      <div className="h-full w-full max-w-screen-lg p-4 mx-auto flex flex-col justify-center">
        <div className="mt-10">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Here are some of my works...</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="shadow-md shadow-gray-600 rounded-lg w-fit"
            >
              <img
                src={proj.src}
                alt=" "
                style={{ width: "200px", height: "180px" }}
                className="rounded-md duration-200 hover:scale-105"
              ></img>
              <div className=" flex items-center justify-center ">
                <button className="w-1/2 py-3 m-2 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

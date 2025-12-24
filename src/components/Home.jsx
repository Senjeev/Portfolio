import React from "react";
import profile from "../assets/profile.jpeg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      // CHANGED: 'pt-28' for top spacing, 'min-h-screen' for scrolling
      className="w-full min-h-screen bg-gradient-to-b from-black via-black to-gray-600 text-white pt-28 md:pt-0 flex items-center"
    >
      {/* CHANGED: max-w-screen-2xl and md:px-24 to spread content wider */}
      <div className="w-full max-w-screen-2xl mx-auto flex flex-col items-center justify-between px-4 md:px-24 md:grid md:grid-cols-3 md:gap-16 h-full">

        {/* 1. Left Section: Intro Text */}
        <div className="flex flex-col justify-center animate-fadeIn text-center md:text-left mb-12 md:mb-0">
          {/* ADDED: animate-pulse for the repeating fade effect */}
          <h2 className="text-4xl sm:text-6xl font-bold leading-tight animate-pulse">
            Transforming Ideas <br /> Into Reality.
          </h2>
          <h3 className="text-xl sm:text-2xl mt-6 text-cyan-400 font-semibold">
            Software Developer | Tech Enthusiast
          </h3>
          <p className="text-gray-400 py-6 text-base sm:text-lg leading-relaxed">
            A passionate developer dedicated to building robust and scalable web 
            applications. I specialize in leveraging modern technologies to solve 
            complex problems and deliver seamless user experiences.
          </p>

          <div className="flex justify-center md:justify-start">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group w-fit flex items-center px-6 py-3 my-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 transition-transform duration-300 shadow-lg shadow-cyan-500/30"
            >
              View My Work
              <span className="group-hover:rotate-90 duration-300 ml-1">
                <MdOutlineKeyboardArrowRight size={25} />
              </span>
            </Link>
          </div>
        </div>

        {/* 2. Center Section: Profile Image */}
        <div className="w-full flex justify-center items-center mb-12 md:mb-0 animate-slideUp">
          <div className="relative w-3/4 md:w-full max-w-md">
             {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl blur opacity-30 animate-pulse"></div>
            <img
              src={profile}
              alt="Profile"
              className="relative rounded-2xl w-full shadow-2xl hover:scale-[1.02] transition-transform duration-300 border border-gray-700 object-cover"
            />
          </div>
        </div>

        {/* 3. Right Section: Quick Highlights */}
        {/* CHANGED: justify-self-end to push it slightly to the right edge */}
{/* Right Section: Core Competencies */}
        <div className="w-full flex flex-col justify-center animate-fadeIn delay-200 bg-gray-900/50 p-6 rounded-xl border border-gray-700 md:bg-transparent md:border-none md:p-0 md:items-start">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white text-center md:text-left border-b-4 border-cyan-500 inline-block w-fit mx-auto md:mx-0 pb-1">
            What I Bring
          </h2>
          <ul className="space-y-6 text-gray-300 text-lg w-full">
            <li className="flex items-start gap-4">
              <span className="text-2xl mt-1 text-cyan-400">⚡</span> 
              <div>
                <span className="font-semibold text-white block">Full-Stack Development</span>
                <span className="text-sm">Building end-to-end MERN applications.</span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-2xl mt-1 text-cyan-400">🔧</span> 
              <div>
                <span className="font-semibold text-white block">Backend Engineering</span>
                <span className="text-sm">Scalable logic using Node, Express & Python (FastAPI).</span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-2xl mt-1 text-cyan-400">🎨</span> 
              <div>
                <span className="font-semibold text-white block">Responsive UI Design</span>
                <span className="text-sm">Modern interfaces with React, Redux & Tailwind.</span>
              </div>
            </li>
            {/* UPDATED LAST POINT */}
            <li className="flex items-start gap-4">
              <span className="text-2xl mt-1 text-cyan-400">🧩</span> 
              <div>
                <span className="font-semibold text-white block">Strategic Problem Solving</span>
                <span className="text-sm">Turning complex requirements into efficient logic.</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
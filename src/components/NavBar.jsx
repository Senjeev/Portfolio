import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "experience" },
    { id: 4, link: "projects" },
    { id: 5, link: "skills" },
    { id: 6, link: "contact" },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black/80 backdrop-blur-md fixed z-50 top-0 left-0 border-b border-gray-800 shadow-lg shadow-cyan-500/5">
      
      <style>{`
        @keyframes typing-loop {
          0% { width: 0; }
          40% { width: 100%; } /* Finishes typing at 40% of the loop */
          90% { width: 100%; } /* Stays visible until 90% */
          100% { width: 0; }   /* Snaps back to 0 to restart */
        }
        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: #22d3ee }
        }
        .typewriter-text {
          overflow: hidden;
          border-right: .15em solid #22d3ee;
          white-space: nowrap;
          margin: 0 auto;
          letter-spacing: .05em;
          /* 6s total loop: Types fast, waits, then restarts */
          animation: 
            typing-loop 6s steps(30, end) infinite, 
            blink-caret .75s step-end infinite;
        }
      `}</style>

      {/* 1. Logo Section */}
      <div>
        <h1 className="text-4xl sm:text-5xl font-signature ml-2 cursor-pointer hover:scale-105 duration-300">
          <Link to="home" smooth duration={500} className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 drop-shadow-lg">
            Senjeev Ganesan
          </Link>
        </h1>
      </div>

      {/* 2. CENTERED QUOTE (Animated & Repeating) */}
      <div className="hidden xl:flex absolute left-1/2 transform -translate-x-1/2 flex-col items-center">
        <div className="w-fit">
            <p className="typewriter-text text-xl font-medium text-gray-300 italic">
            " ...Turning <span className="text-cyan-400 font-bold">Logic</span> into Magic... "
            </p>
        </div>
      </div>

      {/* 3. Desktop Menu */}
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:text-cyan-400 duration-200 relative group"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
          </li>
        ))}
      </ul>

      {/* 4. Hamburger Icon */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-50 text-gray-400 md:hidden hover:text-cyan-400 duration-200"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* 5. Mobile Menu Overlay */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-xl text-gray-400 z-40">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl hover:text-cyan-400 hover:scale-110 duration-200"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
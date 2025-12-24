import React from "react";
import { FaUniversity, FaMapMarkerAlt, FaAward } from "react-icons/fa";

const About = () => {
  return (
    <div
      name="about"
      // Keep the original gradient background
      className="w-full h-auto min-h-screen bg-gradient-to-b from-gray-800 to-black text-white py-20"
    >
      {/* CHANGED: max-w-screen-2xl and md:px-16 to spread content wider */}
      <div className="max-w-screen-2xl p-4 md:px-16 mx-auto flex flex-col justify-center w-full h-full">
        
        {/* Header - UPDATED COLOR */}
        <div className="pb-12">
          <h2 className="text-5xl font-bold inline-block relative z-10">
            {/* CHANGED: Gradient to cyan-to-white for better contrast */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white">
              About Me
            </span>
            {/* Decorative underline element */}
            <span className="absolute bottom-1 left-0 w-full h-3 bg-cyan-500/20 -z-10 -skew-x-12 rounded-sm"></span>
          </h2>
          <p className="text-gray-400 mt-6 text-xl font-light max-w-3xl leading-relaxed">
            Get to know the person behind the code—my background, education, and what drives me.
          </p>
        </div>

        {/* Two Column Layout - CHANGED gap to xl:gap-24 for more breathing room on large screens */}
        <div className="grid md:grid-cols-2 gap-10 xl:gap-24 items-start">
          
          {/* Left Side: Visual Stats Card */}
          <div className="flex flex-col gap-6 sticky top-28">
            
            {/* Location Card */}
            <div className="bg-black/20 backdrop-blur-sm p-6 rounded-xl border border-gray-600 hover:border-cyan-500 hover:scale-105 duration-300 shadow-lg group">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-cyan-500/20 rounded-full text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white duration-300">
                    <FaMapMarkerAlt size={25} />
                </div>
                <div>
                    <h3 className="font-bold text-xl">Avinashi, Tiruppur</h3>
                    <p className="text-gray-400 text-sm">Current Residence</p>
                </div>
              </div>
            </div>

            {/* Education Card */}
            <div className="bg-black/20 backdrop-blur-sm p-6 rounded-xl border border-gray-600 hover:border-blue-500 hover:scale-105 duration-300 shadow-lg group">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-500/20 rounded-full text-blue-400 group-hover:bg-blue-500 group-hover:text-white duration-300">
                    <FaUniversity size={25} />
                </div>
                <div>
                    <h3 className="font-bold text-xl">MSc Decision & Computing Sciences</h3>
                    <p className="text-gray-400 text-sm">Coimbatore Institute of Technology</p>
                </div>
              </div>
            </div>

            {/* CGPA Card */}
            <div className="bg-black/20 backdrop-blur-sm p-6 rounded-xl border border-gray-600 hover:border-yellow-500 hover:scale-105 duration-300 shadow-lg group">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-yellow-500/20 rounded-full text-yellow-400 group-hover:bg-yellow-500 group-hover:text-white duration-300">
                    <FaAward size={25} />
                </div>
                <div>
                    <h3 className="font-bold text-xl">CGPA: 8.70</h3>
                    <p className="text-gray-400 text-sm">Academic Excellence</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Side: Biography Text - WIDER & CLEANER */}
          <div className="flex flex-col justify-center">
            {/* CHANGED: text-lg to text-xl and added leading-relaxed for better readability */}
            <p className="text-xl leading-relaxed text-gray-300 text-justify">
              I am <span className="text-white font-semibold">Senjeev G</span> from Avinashi, a dedicated computer science graduate who has 
              completed an MSc in Decision and Computing Sciences at Coimbatore Institute of Technology 
              (CGPA: 8.7). I have a strong foundation in data structures, algorithms, and 
              object-oriented programming, with hands-on skills in <span className="text-cyan-400 font-semibold">C++, Java, Python, and JavaScript</span>.
            </p>
            <br />
            <p className="text-xl leading-relaxed text-gray-300 text-justify">
              My journey into programming began with HTML, CSS, and PHP, where I built an e-Sevai 
              clone project, and gradually evolved into full-stack development using the MERN stack. 
              I enjoy building end-to-end web applications and have developed projects like an 
              expense tracker, real-time chat app, and social platform that strengthened my 
              understanding of both frontend and backend systems. Driven by curiosity and 
              continuous learning, I am passionate about solving problems and creating practical 
              software solutions.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
import React from "react";
import profile from "../assets/profile.jpeg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className=" w-full h-screen bg-gradient-to-b from-black via-black to-gray-600 text-white"
    >
      <div className=" mx-auto flex flex-col items-center justify-center h-full py-8 px-28 md:flex-row ">
        <div className="flex flex-col justify-center h-full">
          <h2 className="font-bold text-4xl sm:text-7xl ">
            I'm a Software Developer
          </h2>
          <p className="text-gray-500 max-w-md py-4">
            Having a wonderful exeprience in software projects,which made me to
            work on web application using technologies like
            ReactJS,Tailwindcss,NodeJS Currently learning on full stack
            development side using MERN....
          </p>
          <div className="">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white px-6 py-3 my-2 items-center flex w-fit bg-gradient-to-b rounded-md from-cyan-500 to-blue-500"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight></MdOutlineKeyboardArrowRight>
              </span>
            </Link>
          </div>
        </div>

        <div className="  ">
          <img
            src={profile}
            alt="My Profile"
            className=" mx-auto w-3/5 rounded-xl md:h-full "
          ></img>
        </div>
        <div className=" w-full">
          <div className="">
            <h2 className=" flex flex-row mx-auto max-w-md font-bold  text-3xl sm:text-5xl m-5">
              {" "}
              Ex-Intern at ANVAI.AI
            </h2>
            <p className="mt-2 text-gray-500 max-w-md">
              Integrated log entries across all product functions to enhance performance
              monitoring and developed a Grafana dashboard for real-time log
              tracking. Additionally, I created an AWS dashboard to monitor
              services and optimize costs, ensuring efficiency and resource
              management. Tools used include Python, Grafana, and AWS.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Software Engineer",
      company: "Adapt.io",
      date: "Dec 2024 – Nov 2025",
      location: "Coimbatore",
      description: [
        "Architected scalable asynchronous web crawlers processing tens of thousands of domains per day.",
        "Containerized FastAPI and MongoDB services using Docker and deployed on GCP for scalable backend operations.",
        "Engineered a Chrome extension with automation scripts for domain validation and database updates.",
        "Optimized the contact refresh pipeline, reducing redundant database records by over 10%.",
        "Delivered validated client data for large-scale pipelines by refining data verification workflows."
      ],
      tech: ["Python", "Java", "FastAPI", "MongoDB", "Docker", "Postman"]
    },
    {
      id: 2,
      role: "Software Engineer Intern",
      company: "Anvai.ai",
      date: "Jun 2023 – Nov 2023",
      location: "Remote",
      description: [
        "Implemented centralized logging systems across multiple product modules to improve observability.",
        "Deployed interactive Grafana dashboards for real-time performance tracking and log visualization.",
        "Developed an AWS-based cost analysis dashboard to highlight resource usage and enable cost optimization."
      ],
      tech: ["Python", "Grafana", "AWS"]
    },
  ];

  return (
    <div
      name="experience"
      // pt-28 ensures the title starts below the fixed navbar
      className="w-full h-auto min-h-screen bg-gradient-to-b from-gray-800 to-black text-white pt-28 pb-10"
    >
      <div className="max-w-screen-2xl p-4 md:px-16 mx-auto flex flex-col justify-center w-full h-full">
        
        {/* Header Section */}
        <div className="pb-12">
          <h2 className="text-4xl sm:text-5xl font-bold inline-block relative z-10">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white">
              Experience
            </span>
            <span className="absolute bottom-1 left-0 w-full h-3 bg-cyan-500/20 -z-10 -skew-x-12 rounded-sm"></span>
          </h2>
          <p className="text-gray-400 mt-6 text-lg sm:text-xl font-light max-w-2xl leading-relaxed">
            My professional journey in building scalable software and optimizing data workflows.
          </p>
        </div>

        {/* Experience Cards Layout */}
        <div className="flex flex-col gap-8">
          {experiences.map(({ id, role, company, date, location, description, tech }) => (
            <div
              key={id}
              className="bg-black/20 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-gray-700 hover:border-cyan-500 duration-300 shadow-lg group"
            >
              {/* Card Header: Role & Company */}
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-cyan-500/10 rounded-full text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white duration-300">
                    <FaBriefcase size={20} className="sm:text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-400 duration-300">
                      {role}
                    </h3>
                    <p className="text-base sm:text-lg text-gray-300 font-medium">{company}</p>
                  </div>
                </div>

                {/* Date & Location Badges */}
                <div className="flex flex-wrap gap-2 text-sm text-gray-400">
                  <div className="flex items-center gap-2 bg-gray-800 px-3 py-1 rounded-full border border-gray-700">
                    <FaCalendarAlt /> {date}
                  </div>
                  <div className="flex items-center gap-2 bg-gray-800 px-3 py-1 rounded-full border border-gray-700">
                    <FaMapMarkerAlt /> {location}
                  </div>
                </div>
              </div>

              {/* Description Bullets */}
              <ul className="space-y-3 mb-6">
                {description.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300 leading-relaxed text-sm sm:text-lg">
                    <span className="text-cyan-500 mt-1 min-w-[10px]">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mt-4 border-t border-gray-700 pt-6">
                {tech.map((item, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs sm:text-sm bg-gray-900 border border-gray-600 rounded-md text-cyan-400 hover:border-cyan-500 cursor-default transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
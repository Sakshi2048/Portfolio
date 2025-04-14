import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaReact,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiCplusplus,
  SiPython,
  SiCanva,
  SiExpress,
  SiPostman,
} from "react-icons/si";
import { PiFigmaLogoLight } from "react-icons/pi";

function Skills() {
  const skills = [
    { icon: FaHtml5, name: "HTML5", color: "text-red-600" },
    { icon: FaCss3Alt, name: "CSS3", color: "text-blue-500" },
    { icon: FaJs, name: "JavaScript", color: "text-yellow-500" },
    { icon: FaBootstrap, name: "Bootstrap", color: "text-purple-600" },
    { icon: FaReact, name: "React", color: "text-blue-400" },
    { icon: SiTailwindcss, name: "TailwindCSS", color: "text-teal-500" },
    { icon: FaNodeJs, name: "Node.js", color: "text-green-600" },
    { icon: SiExpress, name: "Express.js", color: "text-zinc-400" },
    { icon: SiMongodb, name: "MongoDB", color: "text-green-500" },
    { icon: SiMysql, name: "MySQL", color: "text-blue-600" },
    { icon: SiPostman, name: "Postman", color: "text-orange-500" },
    { icon: SiCplusplus, name: "C++", color: "text-blue-700" },
    { icon: SiPython, name: "Python", color: "text-yellow-400" },
    { icon: FaGithub, name: "GitHub", color: "text-zinc-400" },
    { icon: SiCanva, name: "Canva", color: "text-blue-500" },
    { icon: PiFigmaLogoLight, name: "Figma", color: "text-yellow-600" },
  ];

  const technologies = [
    "Object Oriented Programming",
    "DSA",
    "Operating System",
    "Computer Networks",
    "Database Management",
    "Cloud Computing",
  ];

  return (
    <div className="flex space-x-6">
      {/* Skills Section */}
      <div className="bg-gray-950 backdrop-blur-md rounded-2xl shadow-xl p-6 w-2/3 max-w-5xl border-2 border-gray-900">
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          My <span className="text-blue-500">Tech Stack</span>
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-8 gap-4">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center bg-zinc-700/50 hover:bg-zinc-700 p-4 rounded-lg transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
            >
              {/* Skill Icon */}
              <skill.icon className={`${skill.color} text-4xl`} />
              {/* Skill Name */}
              <span className="text-zinc-300 mt-2 text-sm">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Course Work Section */}
      <div className="backdrop-blur-md rounded-2xl shadow-xl p-6 w-1/3 max-w-5xl border-2 bg-gray-950 border-gray-900">
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Course <span className="text-blue-500">Work</span>
        </h2>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-zinc-700 text-white text-sm rounded-md px-2 py-1 hover:bg-zinc-600 transition-all duration-300 transform hover:scale-110"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;

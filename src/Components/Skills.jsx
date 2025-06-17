import { useState } from "react";
import { VscVscode } from "react-icons/vsc";
import { RiGeminiFill } from "react-icons/ri";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiCplusplus,
  SiPython,
  SiCanva,
  SiFigma,
} from "react-icons/si";

const categories = [
  "All",
  "Web Development",
  "Databases & Tools",
  "Programming Languages",
  "Core CS Concepts",
];

const skills = {
  "Web Development": [
    { icon: FaHtml5, name: "HTML5", color: "text-red-600" },
    { icon: FaCss3Alt, name: "CSS3", color: "text-blue-500" },
    { icon: FaJs, name: "JavaScript", color: "text-yellow-500" },
    { icon: FaBootstrap, name: "Bootstrap", color: "text-purple-600" },
    { icon: FaReact, name: "React", color: "text-blue-400" },
    { icon: SiTailwindcss, name: "TailwindCSS", color: "text-teal-500" },
    { icon: FaNodeJs, name: "Node.js", color: "text-green-600" },
    { icon: SiExpress, name: "Express.js", color: "text-zinc-400" },
    { icon: SiMongodb, name: "MongoDB", color: "text-green-500" },
  ],
  "Databases & Tools": [
    { icon: SiMongodb, name: "MongoDB", color: "text-green-500" },
    { icon: SiMysql, name: "MySQL", color: "text-blue-600" },
    { icon: SiPostman, name: "Postman", color: "text-orange-500" },
    { icon: RiGeminiFill, name: "Gemini", color: "text-sky-400" },
    { icon: FaGithub, name: "GitHub", color: "text-gray-300" },
    { icon: VscVscode, name: "VS Code", color: "text-sky-400" },
    { icon: FaGitAlt, name: "Git", color: "text-orange-400" },
    { icon: SiCanva, name: "Canva", color: "text-blue-500" },
    { icon: SiFigma, name: "Figma", color: "text-yellow-600" },
  ],
  "Programming Languages": [
    { icon: SiCplusplus, name: "C++", color: "text-blue-700" },
    { icon: FaJs, name: "JavaScript", color: "text-yellow-500" },
    { icon: SiPython, name: "Python", color: "text-blue-400" },
  ],

  "Core CS Concepts": [
    { name: "Object Oriented Programming", color: "text-green-500" },
    { name: "Data Structures & Algorithms", color: "text-blue-400" },
    { name: "System Programming & Operating System", color: "text-yellow-500" },
    { name: "Computer Networks", color: "text-pink-400" },
    { name: "Database Management System", color: "text-orange-500" },
    { name: "Cloud Computing", color: "text-teal-400" },
  ],
};

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState("All");

  const allSkills = Object.values(skills).flat();
  const selectedSkills =
    activeCategory === "All" ? allSkills : skills[activeCategory];

  const hasIcons = selectedSkills.some((s) => s.icon);

  return (
    <div
      className=" bg-gradient-to-t from-[#050E1F] via-[#010b1c] to-black text-white px-10 py-12 flex flex-col items-center"
      id="skills"
    >
      <h2 className="text-4xl font-bold mb-4 text-center">
        My <span className="text-blue-500">Skills</span>
      </h2>
      <p className="text-gray-400 text-center max-w-4xl mb-8">
        A diverse skill set that empowers me to create responsive,
        user-friendly, scalable, and intelligent digital solutions.
      </p>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full border border-zinc-700 transition duration-300 ${
              activeCategory === cat
                ? "bg-blue-700 text-white"
                : "bg-zinc-800 text-zinc-300 hover:bg-blue-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div
        className={`grid gap-6 w-full max-w-6xl ${
          selectedSkills.length <= 3
            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center"
            : hasIcons
            ? "grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-9"
            : "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
        }`}
      >
        {selectedSkills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-zinc-950 border-zinc-800 border-1 hover:bg-zinc-700 hover:scale-110 p-4 rounded-xl transition-transform"
          >
            {skill.icon && (
              <skill.icon
                size={30}
                className={`${skill.color} mb-2 transition-transform duration-300`}
              />
            )}
            <span className={`text-sm font-medium ${skill.color}`}>
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

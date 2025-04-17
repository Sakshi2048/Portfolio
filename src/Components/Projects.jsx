import React, { useState } from "react";
import { FaReact, FaNodeJs, FaPython, FaGithub, FaConfluence } from "react-icons/fa";
import { RiGeminiFill } from "react-icons/ri";
import { FaAws } from "react-icons/fa6";
import {
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiFlask,
  SiPython,
  SiTypescript,
  SiExpress,
  SiEjs,
  SiFlutter,
  SiJavascript,
  SiJira
} from "react-icons/si";


import codedocs from "../assets/ProjectsImages/codedocs.png"
import crop from "../assets/ProjectsImages/crop.png";
import pricehunt from "../assets/ProjectsImages/pricehunt.png";
import hackohire from "../assets/ProjectsImages/HomePage.png";
import food from "../assets/ProjectsImages/food.png";

const techIcons = {
  "React.js": <FaReact className="text-blue-400" />,
  Tailwind: <SiTailwindcss className="text-teal-500" />,
  "Tailwind CSS": <SiTailwindcss className="text-teal-500" />,
  "Node.js": <FaNodeJs className="text-green-600" />,
  Flask: <SiFlask className="text-gray-300" />,
  Gemini: <RiGeminiFill className="text-sky-400" />,
  Firebase: <SiFirebase className="text-yellow-500" />,
  MongoDB: <SiMongodb className="text-green-500" />,
  Flutter: <SiFlutter className="text-sky-500" />,
  "Express.js": <SiExpress className="text-gray-400" />,
  AWS: <FaAws className="text-orange-500" />,
  JavaScript: <SiJavascript className="text-yellow-400" />,
  EJS: <SiEjs className="text-purple-400" />,
  Typescript: <SiTypescript className="text-blue-500" />,
  Jira: <SiJira className="text-blue-500" />,
  Python: <FaPython className="text-yellow-500" />,  
  Confluence: <FaConfluence className="text-blue-500" />,

  
  Streamlit: (
    <img
      src="https://seeklogo.com/images/S/streamlit-logo-1A3B208AE4-seeklogo.com.png"
      alt="Streamlit"
      className="w-7 h-7 rounded-full"
    />
  ),
  Tensorflow: (
    <img
      src="https://seeklogo.com/images/T/tensorflow-logo-02FCED4F98-seeklogo.com.png"
      alt="TensorFlow"
      className="w-7 h-7 rounded-full"
    />
  ),
  Numpy: (
    <img
      src="https://seeklogo.com/images/N/numpy-logo-479C24EC79-seeklogo.com.png"
      alt="NumPy"
      className="w-7 h-7 rounded-full"
    />
  ),
  Pandas: (
    <img
      src="https://th.bing.com/th/id/OIP.JyjxWSGGUln8eb8idBZ8VQAAAA?rs=1&pid=ImgDetMain"
      alt="Pandas"
      className="w-7 h-7 rounded-full"
    />
  ),
  OpenCV: (
    <img
      src="https://th.bing.com/th/id/OIP.Q-wgyMJtkHKZr0L9x5ub7AHaHa?rs=1&pid=ImgDetMain"
      alt="OpenCV"
      className="w-7 h-7 rounded-full "
    />
  ),
};


const MiniCard = ({ title, shortDesc, index, isActive, onClick }) => (
  <div
    className={`cursor-pointer p-3 rounded-md shadow-md text-sm font-semibold transition-all duration-300 text-white bg-zinc-900 hover:bg-gray-900 ${
      isActive ? "ring-2 ring-gray-800 scale-105" : ""
    }`}
    onClick={() => onClick(index)}
  >
    <div className="text-yellow-600 font-bold">{title}</div>
    <div className="text-xs text-zinc-300 mt-1">{shortDesc}</div>
  </div>
);

const ProjectCard = ({ imageSrc, title, description, technologies, link }) => {
  return (
    <div className="flex flex-col lg:flex-row bg-zinc-900 rounded-lg shadow-md overflow-hidden transition duration-300 ease-in-out hover:scale-[1.01] p-4" id="projects">
      <img
        src={imageSrc}
        alt={title}
        className="w-full lg:w-1/2  object-cover"
      />
      <div className="p-4 flex flex-col justify-between lg:w-1/2">
        <div>
          <h3 className="text-blue-500 font-bold text-3xl mb-2">{title}</h3>
          <p className="text-zinc-400 mb-4 text-sm lg:text-base">
            {description}
          </p>
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 mb-4 text-sm"
        >
          View Project ↗
        </a>
        <div className="flex flex-wrap gap-0 text-3xl">
          {technologies.map((tech, index) => (
            <span key={index} className="bg-zinc-950 p-2 rounded-full">
              {techIcons[tech] || null}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      imageSrc: hackohire,
      title: "Hack-O-Hire",
      shortDesc: "Automated requirement generation",
      description:
        "Automated Requirement Generation. AI-powered code documentation system that automates the generation of clear, structured documentation. A Generative AI is used for generating documentation.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, porro animi dignissimos, veritatis alias reprehenderit facere quo laudantium dolorum deserunt, quasi sapiente incidunt!",
      technologies: [
        "React.js",
        "Tailwind",
        "Node.js",
        "Flask",
        "Gemini",
        "Firebase",
        "MongoDB",
        "Jira",
        "Confluence"
      ],
      link: "https://docs.google.com/presentation/d/1sMU1hyan8z3TuMn-Yjd-NtVGnBYsDl0E/edit?usp=drive_link&ouid=116382940946142346104&rtpof=true&sd=true",
    },
    {
      imageSrc: codedocs,
      title: "CodeDocs",
      shortDesc: "AI-based documentation tool",
      description:
        "An AI-powered solution that transforms the way you document code! No more tedious manual documentation — this tool automatically generates clear, concise explanations from your code snippets. Boost your productivity by instantly writing, running, and testing code with seamless IDE integration, and collaborate with your team in real-time using Collaborative Coding for effortless teamwork.",
      technologies: [
        "React.js",
        "Tailwind",
        "Node.js",
        "Flask",
        "Gemini",
        "Firebase",
        "MongoDB",
      ],
      link: "https://github.com/Sakshi2048/CodeDocs.git",
    },

    {
      imageSrc: food,
      title: "Food Recognition",
      shortDesc: "Indian Food Recognition using ML",
      description:
        "An AI-driven application for recognizing Indian foods from images using Machine Learning. The model, built with ResNet50, classifies various regional Indian dishes with high accuracy. It uses data augmentation and preprocessing to improve model performance. Deployed on Streamlit, the app allows users to upload food images for instant recognition and provides an interactive experience.",
        technologies: [
          "Python",
          "Streamlit",
          "Tensorflow",
         "Numpy",
          "Pandas",
          "OpenCV",
         
        ],
      link: "https://github.com/Sakshi2048/FoodRecognition.git",
    },

    {
      imageSrc: crop,
      title: "PlantPulse",
      shortDesc: "AI crop disease detection app",
      description:
        " PlantPulse is an AI-powered mobile application designed to help farmers detect and manage crop diseases efficiently. By leveraging Convolutional Neural Networks (CNNs), image processing, and AI-generated recommendations, PlantPulse provides farmers with early warnings, treatment suggestions, and prevention techniques. The Flutter-based mobile app ensures a user-friendly experience, enabling modern solutions for agricultural challenges.",
      technologies: [
        "Flutter",
        "Node.js",
        "Express.js",
       "Gemini",
        "Flask",
        "AWS",
        "MongoDB",
      ],
      link: "https://github.com/Sakshi2048/Crop-Disease-Detection-App.git",
    },
    {
      imageSrc: pricehunt,
      title: "PriceHunt",
      shortDesc: "Price comparison platform",
      description:
        "This project aims to provide users with a convenient platform to compare prices of products across multiple e-commerce websites in one place. With the integration of Gemini, a chatbot feature, users can effortlessly search for products through images or text queries, as well as ask any questions related to the products. Additionally, the project includes a graphical representation of the price trends over the last 6 months, allowing users to make informed purchasing decisions.",
      technologies: [
        "React.js",
        "Tailwind",
        "JavaScript",
        "EJS",
        "Typescript",
        "Express.js",
        "Node.js",
        "MongoDB",
      ],
      link: "https://github.com/Sakshi2048/PriceHunt.git",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-black py-12 px-6 md:px-20">
       <h2 className="text-white font-bold text-4xl text-center pb-10">
        My <span className="text-blue-500">Projects</span>
      </h2>
      <div className="flex flex-wrap justify-center gap-4 mb-10 text-center">
        {projects.map((project, index) => (
          <MiniCard
            key={index}
            title={project.title}
            shortDesc={project.shortDesc}
            index={index}
            isActive={index === activeIndex}
            onClick={setActiveIndex}
          />
        ))}
      </div>

      <div className="transition-all duration-500">
        <ProjectCard {...projects[activeIndex]} />
      </div>
    </section>
  );
};

export default Projects;

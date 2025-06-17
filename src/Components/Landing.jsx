import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Link as ScrollLink } from "react-scroll";

const Landing = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#050E1F] via-[#01102a]  to-black text-white flex flex-col md:flex-row items-center justify-between px-20 overflow-hidden">
      {/* Left Side: Text Content */}
      <div className="relative z-10 w-full md:w-1/2 h-full flex flex-col justify-center items-center text-center md:items-start md:text-left px-4 py-20  backdrop-blur-sm rounded-xl">
        <p className="text-sm tracking-widest text-blue-300 uppercase">
          Turning Complex Ideas into Realities
        </p>

        <h2 className="text-4xl sm:text-5xl font-bold mt-4">
          Hey there! <span className="wave-hand text-5xl sm:text-6xl">👋</span>
        </h2>

        <h1 className="text-3xl sm:text-5xl font-bold mt-2">
          I’m <span className="text-yellow-500">Sakshi Marbhal</span>
        </h1>

        <h3 className="text-xl sm:text-3xl font-medium text-blue-500 mt-4">
          <TypeAnimation
            sequence={[
              "Full Stack Web Developer",
              2000,
              "GenAI Enthusiast",
              2000,
              "UI/UX Designer",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </h3>

        <p className="text-base sm:text-lg text-gray-300 mt-6 max-w-xl">
          I love building modern, user-friendly web applications using the MERN
          stack.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            offset={-300}
            spy={true}
            className="bg-blue-500 hover:bg-white hover:text-black px-6 py-3 rounded-full font-medium transition duration-300 max-w-xs w-full sm:w-auto text-center cursor-pointer"
          >
            View Projects
          </ScrollLink>
          <a
            href="https://drive.google.com/file/d/1n9ZxO8TqxyoAmVGCgGqlzibwD8ioQ_jq/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-blue-500 hover:bg-white hover:text-black px-6 py-3 rounded-full font-medium transition duration-300 max-w-xs w-full sm:w-auto text-center"
          >
            View Resume
          </a>
        </div>
      </div>

   {/* Right Side: 3D Model */}
<div className="hidden md:flex z-10 w-full md:w-1/2 justify-center items-center py-10">
  <model-viewer
    src="/model.glb"
    alt="3D Developer Model"
    auto-rotate
    camera-controls
    disable-zoom
    style={{ width: "100%", height: "600px" }}
  ></model-viewer>
</div>

    </section>
  );
};

export default Landing;

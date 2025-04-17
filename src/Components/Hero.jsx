import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Link as ScrollLink } from "react-scroll";

const Hero = () => {
  return (
    <section
      className="w-full pt-24  relative flex flex-col md:flex-row items-center justify-center bg-black text-white px-6"
      id="home"
    >
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0 md:space-x-8">
        {/* 3D Model on the Left - Hidden on small screens */}
        <div className="hidden md:block w-full md:w-1/2">
          <model-viewer
            src="/model.glb"
            alt="3D Web Developer Model"
            auto-rotate
            camera-controls
            style={{ width: "100%", height: "600px" }}
          ></model-viewer>
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6 px-2 md:px-0">
          <p className="text-sm tracking-widest text-blue-300 uppercase">
            Turning Complex Ideas into Realities
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold">
            Hey there!{" "}
            <span className="wave-hand text-4xl sm:text-5xl">👋</span>
          </h2>

          <h1 className="text-2xl sm:text-4xl font-bold">
            I’m <span className="text-yellow-500">Sakshi Marbhal</span> <br />
            <span className="text-blue-400 text-xl sm:text-3xl font-medium">
              a&nbsp;
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
            </span>
          </h1>

          <p className="text-base sm:text-lg text-gray-300">
            I love building modern, user-friendly web applications using the
            MERN stack.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              offset={-300}
              spy={true}
              className="bg-blue-500 hover:bg-white hover:text-black px-6 py-3 rounded-full font-medium transition duration-300 max-w-xs w-full sm:auto text-center cursor-pointer"
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
      </div>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <ScrollLink
          to="about"
          smooth={true}
          duration={500}
          offset={-70}
          className="cursor-pointer"
        >
          <div className="animate-bounce w-10 h-10 bg-transparent border border-blue-500 rounded-full flex items-center  justify-center  transition-transform duration-300 hover:scale-110">
            <span
              className="text-blue-500 text-3xl drop-shadow-[0_0_15px_rgba(59,130,246,0.9)]"
              style={{
                textShadow:
                  "0 0 10px rgba(59,130,246,0.7), 0 0 20px rgba(59,130,246,0.5)",
              }}
            >
              ↓
            </span>
          </div>
        </ScrollLink>
      </div>
    </section>
  );
};

export default Hero;

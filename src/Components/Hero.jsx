import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Link as ScrollLink } from "react-scroll";

const Hero = () => {
  return (
    <section
      className="relative w-full h-screen bg-black text-white overflow-hidden"
      id="home"
    >
      {/* Fullscreen 3D Model */}
      <div className="absolute inset-0 z-0">
        <model-viewer
          src="/model.glb"
          alt="3D Web Developer Model"
          auto-rotate
          camera-controls
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        ></model-viewer>
      </div>

      {/* Text Overlay */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center items-center text-center px-4 bg-black/60 backdrop-blur-sm">
        <p className="text-sm tracking-widest text-blue-300 uppercase">
          Turning Complex Ideas into Realities
        </p>

        <h2 className="text-4xl sm:text-5xl font-bold mt-4">
          Hey there!{" "}
          <span className="wave-hand text-5xl sm:text-6xl">👋</span>
        </h2>

        <h1 className="text-3xl sm:text-5xl font-bold mt-2">
          I’m <span className="text-yellow-500">Sakshi Marbhal</span>
        </h1>

        <h3 className="text-xl sm:text-3xl font-medium text-blue-400 mt-4">
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

        <p className="text-base sm:text-lg text-gray-300 mt-6 max-w-2xl">
          I love building modern, user-friendly web applications using the MERN stack.
        </p>

        {/* Buttons */}
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

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
        <ScrollLink
          to="about"
          smooth={true}
          duration={500}
          offset={-70}
          className="cursor-pointer"
        >
          <div className="animate-bounce w-10 h-10 border border-blue-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
            <span
              className="text-blue-500 text-3xl"
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

import React from "react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section
      className="w-full pt-12  flex items-center justify-center bg-black text-white px-6"
      id="home"
    >
      <div className="max-w-7xl w-full flex items-center justify-between space-x-8">
        {/* 3D Model on the Left */}
        <model-viewer
          src="/model.glb"
          alt="3D Web Developer Model"
          auto-rotate
          camera-controls
          style={{ width: "60%", height: "600px" }}
        ></model-viewer>

        {/* Text Content on the Right */}
        <div className="text-center sm:text-left space-y-6 w-1/2 pr-16">
          <p className="text-sm text-center tracking-widest text-blue-300 uppercase">
            Turning Complex Ideas into Realities
          </p>

          <h2 className="text-4xl font-bold text-center">
            Hey there! <span className="wave-hand text-5xl">👋</span>
          </h2>

          <h1 className="text-4xl font-bold text-center  text-white">
            I’m <span className="text-yellow-500">Sakshi Marbhal</span> <br />
            <span className="text-blue-400 text-3xl font-medium">a&nbsp;
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

          <p className="text-lg text-gray-300 text-center">
            I love working with React and Tailwind CSS to create modern and
            user-friendly designs.
          </p>

          {/* Buttons */}
          <div className="flex justify-center gap-4 mt-6 ">
            <a
              href="#projects"
              className="bg-blue-500 hover:bg-white hover:text-black px-6 py-3 rounded-full font-medium transition duration-300"
              offset={-300}
            >
              View Projects
            </a>
            <a
              href="https://drive.google.com/file/d/1n9ZxO8TqxyoAmVGCgGqlzibwD8ioQ_jq/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-blue-500 hover:bg-white hover:text-black px-6 py-3 rounded-full font-medium transition duration-300"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

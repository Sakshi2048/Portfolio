import React from "react";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";

function CTA() {
  const navigate = useNavigate();

  return (
    <div>
      <section className="body-font px-30 bg-black" id="contact">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="lg:w-4/5 md:w-1/2 md:pr-16 lg:pr-6 pr-2">
            <h1 className="title-font font-bold text-3xl text-gray-200">
              <span className="text-blue-400">Curious</span> to Know More?
            </h1>
            <p className="leading-relaxed mt-4 text-gray-400">
              Apart from development and cutting-edge tech, I'm actively
              involved in co-curricular activities like organizing events,
              participating in hackathons, and engaging with communities. <br />{" "}
              I believe in a holistic growth journey — blending tech,
              creativity, and collaboration!
            </p>
          </div>
          <div className="lg:w-1/8 md:w-1/4 rounded-lg flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <a
              href="mailto:sakshimarbhal248@gmail.com"
              className="bg-blue-500 hover:bg-white text-white hover:text-black px-4 py-3 rounded-full font-medium transition duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CTA;

import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="relative isolate overflow-hidden bg-gray-950 py-20 px-6 md:px-20">
      {/* Background Pattern */}
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="pattern-bg"
            width="200"
            height="200"
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          strokeWidth="0"
          fill="url(#pattern-bg)"
        />
      </svg>

      <div className="relative container mx-auto px-4 z-10">
        {" "}
        {/* z-10 to bring content forward */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-500 mb-4">Get <span className="text-white">Connected!</span></h2>{" "}
          {/* White text for contrast */}
          <p className="text-zinc-400 leading-relaxed px-10">
            {" "}
            {/* Lighter text for description */}
            Feel free to reach out if you have any questions or need assistance. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae aliquid officiis porro quaerat. Reprehenderit illum ipsum voluptas quo fugit in nisi officiis dignissimos?
          </p>


          <div className="flex gap-1 mt-4 justify-center">
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <FaGithub className="text-white hover:text-gray-200 text-xl  p-2 rounded-full " />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin className="text-blue-500 hover:text-blue-500 text-5xl p-2  " />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaInstagram className="text-pink-400 hover:text-pink-500 text-5xl p-2 " />
            </a>
          </div>
        
        </div>
       
      </div>
    </section>
  );
};

export default Contact;

import React from "react";
import { GraduationCap } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

function Navbar() {
  return (
    <div>
      <header className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/5 border-b border-white/20 shadow-lg z-50 flex items-center p-5 justify-between">
        <div className="ml-8 flex items-center text-white">
          <GraduationCap
            size={28}
            className="cursor-pointer text-blue-500 hover:text-blue-500"
          />
          <span className=" text-blue-500 text-xl font-bold ml-2">
            My Portfolio
          </span>
        </div>

        <nav className="flex flex-wrap items-center text-white text-base">
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
            className="ml-5 hover:text-blue-500 hover:font-bold flex items-center font-semibold cursor-pointer"
          >
            Home
          </ScrollLink>

          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
            className="ml-8 hover:text-blue-300 flex items-center font-semibold cursor-pointer"
          >
            About Me
          </ScrollLink>

          <ScrollLink
            to="skills"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
            className="ml-5 hover:text-blue-300 flex items-center font-semibold cursor-pointer"
          >
            Skills
          </ScrollLink>

          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            spy={true}
            offset={-300}
            className="ml-5 hover:text-blue-300 flex items-center font-semibold cursor-pointer"
          >
            Projects
          </ScrollLink>

          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
            className="ml-5 mr-10 hover:text-blue-300 flex items-center font-semibold cursor-pointer"
          >
            Contact
          </ScrollLink>
          <a
            href="https://drive.google.com/file/d/1n9ZxO8TqxyoAmVGCgGqlzibwD8ioQ_jq/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              const link = document.createElement("a");
              link.href =
                "https://drive.google.com/uc?export=download&id=1n9ZxO8TqxyoAmVGCgGqlzibwD8ioQ_jq";
              link.download = "Sakshi_Resume.pdf";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            <button className="bg-blue-500 hover:bg-white hover:text-black px-6 py-1 rounded-full font-medium transition duration-300">
              Resume
            </button>
          </a>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;

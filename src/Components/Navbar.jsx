import React, { useState } from "react";
import { GraduationCap, Menu, X } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <header className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/5 border-b border-white/20 shadow-lg z-50 p-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center text-white">
            <GraduationCap size={28} className="text-blue-500" />
            <span className="text-blue-500 text-xl font-bold ml-2">
              My Portfolio
            </span>
          </div>

          {/* Hamburger Icon (Mobile) */}
          <div className="md:hidden">
            {menuOpen ? (
              <X
                size={28}
                className="text-white cursor-pointer"
                onClick={() => setMenuOpen(false)}
              />
            ) : (
              <Menu
                size={28}
                className="text-white cursor-pointer"
                onClick={() => setMenuOpen(true)}
              />
            )}
          </div>

          {/* Navigation Links */}
          <nav
            className={`${
              menuOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row absolute md:static top-16 left-0 w-full md:w-auto bg-black/70 md:bg-transparent px-6 md:px-0 py-4 md:py-0 space-y-4 md:space-y-0 md:space-x-6 text-white font-semibold transition-all duration-300 z-40
    items-center text-center`}
          >
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              className="cursor-pointer hover:text-blue-500"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </ScrollLink>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              className="cursor-pointer hover:text-blue-300"
              onClick={() => setMenuOpen(false)}
            >
              About Me
            </ScrollLink>
            <ScrollLink
              to="skills"
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              className="cursor-pointer hover:text-blue-300"
              onClick={() => setMenuOpen(false)}
            >
              Skills
            </ScrollLink>
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              spy={true}
              offset={-300}
              className="cursor-pointer hover:text-blue-300"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              className="cursor-pointer hover:text-blue-300"
              onClick={() => setMenuOpen(false)}
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
        </div>
      </header>
    </div>
  );
}

export default Navbar;

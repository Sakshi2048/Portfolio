import { TypeAnimation } from "react-type-animation";
import profile from "../assets/ExtraImages/profile2.jpg";

export default function About() {
  return (
    <div
      className="bg-black text-white w-full flex flex-col items-center px-8 md:pt-16 md:pb-28 "
      id="about"
    >
      <h2 className="text-4xl font-bold mb-4 text-center">
        About <span className="text-blue-500">Me</span>
      </h2>

      <div className="flex flex-col md:flex-row items-stretch justify-between w-full max-w-6xl gap-4 ">
        {/* Left Text Section */}
        <div className="md:w-2/3 flex flex-col justify-between">
          <div className="pl-4">
            <h1 className="text-2xl sm:text-2xl font-extrabold leading-tight pt-10 text-white">
              Transforming Imagination into <br />
              <span className="text-yellow-400">
                <TypeAnimation
                  sequence={[
                    "Beautiful & Scalable Web Applications",
                    2000,
                    "",
                    "Modern & Responsive UIs",
                    2000,
                    "",
                    "Seamless Digital Experiences",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </h1>
            <p className="text-md text-zinc-400 leading-relaxed mt-2 text-justify">
              I'm a passionate web developer who loves crafting smart,
              <span className="font-semibold text-zinc-200">
                {" "}
                user-friendly web applications.
              </span>
              <br /> I have hands-on experience in UI/UX design, frontend
              development, GenAI-powered application development. I enjoy
              blending clean UI with powerful backend logic, making sure
              performance and usability go hand in hand. I believe in learning
              by building, and I’m always exploring ways to solve real-world
              problems with tech. As a fast learner, I collaborate closely with
              team members & clients to bring their ideas to life and adapt
              quickly to new technologies and frameworks. Lately, I’ve been
              leveraging{" "}
              <span className="font-semibold text-zinc-200">
                Generative AI
              </span>{" "}
              to build intelligent, adaptive solutions that enhance user
              experience and functionality. Apart from coding, you'll find me
              diving into new tech trends and technologies.
            </p>
          </div>

          <div className="flex gap-2 mt-4 pl-4">
            <a
              href="https://www.linkedin.com/in/sakshim2048"
              className="bg-blue-500 hover:bg-white text-white hover:text-black px-4 py-3 rounded-full font-medium transition duration-300"
            >
              Get Connected
            </a>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="md:w-1/3 h-full flex justify-center items-center">
          <img
            src={profile}
            alt="Profile"
            className="w-64 h-84 object-cover rounded-lg shadow-lg mx-auto"
          />
        </div>
      </div>
    </div>
  );
}


import { TypeAnimation } from 'react-type-animation';
export default function About() {
  return (
    <div className="bg-black text-white w-full flex flex-col items-center px-8 md:pt-16 md:pb-16" id="about">
      <h2 className="text-4xl font-bold mb-4 text-center">
        About <span className="text-blue-500">Me</span>
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl">
        
        <div className="max-w-3xl mt-2">
          
        <h1 className="text-2xl sm:text-2xl font-extrabold leading-tight pt-10 text-white">
  Transforming Imagination into <br />
  <span className="text-yellow-400">
    <TypeAnimation
      sequence={[
        "Beautiful & Scalable Web Applications", // text
        2000, // wait
        "", // clear
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
          <p className="text-md text-zinc-400 leading-relaxed mt-2">
            I'm a passionate web developer who loves crafting smart,
            <span className="font-semibold text-zinc-200 ">
              {" "}
              user-friendly web applications.
            </span>
            <br /> I enjoy blending clean UI with powerful backend logic, making
            sure performance and usability go hand in hand. I believe in
            learning by building, and I’m always exploring ways to solve
            real-world problems with tech. Whether it’s front-end flair or
            backend brains, I like working across the stack. Lately, I’ve been
            leveraging{" "}
            <span className="font-semibold text-zinc-200">
              Generative AI
            </span>{" "}
            to build intelligent, adaptive solutions that enhance user
            experience and functionality. Apart from coding, you'll find me
            diving into new tech trends and technologies.
            <br />
          </p>

          {/* Social Icons */}
          <div className="flex gap-2 mt-4">
            <a
              href="#projects"
              className="bg-blue-500 hover:bg-white hover:text-black px-6 py-3 rounded-full font-medium transition duration-300"
            >
              Know more
            </a>
            {/* <a href="https://github.com" target="_blank" rel="noreferrer">
              <FaGithub className="text-white hover:text-gray-200 text-5xl bg-gray-800 p-2 rounded-full border border-gray-600" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin className="text-white hover:text-blue-500 text-5xl bg-gray-800 p-2 rounded-full border border-gray-600" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaInstagram className="text-white hover:text-pink-500 text-5xl bg-gray-800 p-2 rounded-full border border-gray-600" />
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}

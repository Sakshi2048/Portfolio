import Navbar from "../Components/Navbar";
import Education from "../Components/Education";
import CCA from "../Components/CCA";
import Awards from "../Components/Awards";
import Certificates from "../Components/Certificates";
export default function About() {
  return (
    <div className="bg-black min-h-screen" >
      <Navbar />
      <div
        className="bg-black text-white px-28 flex flex-col items-center"
        id="skills"
      >
        <h2 className="text-4xl font-bold mb-4 text-center">
          About <span className="text-blue-500"> me</span>
        </h2>
        <p className="text-zinc-500 text-center text-s max-w-6xl mb-8">
          I believe in a holistic growth journey — blending tech, creativity,
          and collaboration!
        </p>
      </div>
      <div className="">
      <Education />
      
      </div>
      <Awards/>
      <Certificates/>
    </div>
  );
}

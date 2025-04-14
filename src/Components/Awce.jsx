import React from "react";

const Awce = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 p-6 md:p12 bg-black text-white">
      {/* Education Section with Timeline */}
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl font-bold text-yellow-400 mb-6">Education</h2>
        <div className="relative border-l-2 border-yellow-400 ml-4 space-y-10">
          {/* Node 1 */}
          <div className="ml-6 relative">
            <div className="absolute -left-8 top-1.5 w-4 h-4 bg-yellow-400 rounded-full border-2 border-black"></div>
            <h3 className="text-xl font-semibold">PICT, Pune</h3>
            <p className="text-gray-400">2022 – Present</p>
            <p>B.E - Computer Engineering</p>
          </div>
          {/* Node 2 */}
          <div className="ml-6 relative">
            <div className="absolute -left-8 top-1.5 w-4 h-4 bg-yellow-400 rounded-full border-2 border-black"></div>
            <h3 className="text-xl font-semibold">S.S.C. College, Junnar</h3>
            <p className="text-gray-400">2020 – 2022</p>
            <p>12th (PCMB)</p>
          </div>
          {/* Node 3 */}
          <div className="ml-6 relative">
            <div className="absolute -left-8 top-1.5 w-4 h-4 bg-yellow-400 rounded-full border-2 border-black"></div>
            <h3 className="text-xl font-semibold">JNV, Pune</h3>
            <p className="text-gray-400">2015 – 2020</p>
            <p>10th - CBSE</p>
          </div>
        </div>
      </div>

      {/* Awards & Achievements */}
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl font-bold mb-6">
          <span className="text-white">Awards & </span>
          <span className="text-blue-500">Achievements</span>
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-yellow-400 font-semibold">Pulzion Web & App Hackathon</h3>
            <p className="text-gray-400">Runner-up at Pulzion Web & App Hackathon 2023.</p>
          </div>
          <div>
            <h3 className="text-yellow-400 font-semibold">NTSE Scholar</h3>
            <p className="text-gray-400">Cleared all stages of the National Talent Search Examination.</p>
          </div>
          <div>
            <h3 className="text-yellow-400 font-semibold">XENIA’25 Coordinator</h3>
            <p className="text-gray-400">Coordinated and led XENIA’25, an annual technical event under the PCSB club, with 2000+ registrations.</p>
          </div>
          <div>
            <h3 className="text-yellow-400 font-semibold">C++ Fundamentals Speaker</h3>
            <p className="text-gray-400">Delivered a session on fundamental C++ concepts to more than 150 first-year students.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awce;

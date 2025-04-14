import React from "react";

function Education() {
  const educationDetails = [
    {
      logo: "https://th.bing.com/th?id=OIP.y22Dchg46bB1vHeV_ETaZwAAAA&w=150&h=150&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
      institute: "PICT, Pune",
      duration: "2022 - Present",
      degree: "B.E - Computer Engg.",
    },
    {
      logo: "https://images.shiksha.com/mediadata/images/1591683889phpJ9JINH.jpg",
      institute: "S.S.C.College, Junnar",
      duration: "2020 - 2022",
      degree: "12th (PCMB)",
    },
    {
      logo: "https://th.bing.com/th?id=OIP.i944OZFlFEsjaamq5uObxgHaIr&w=230&h=270&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
      institute: "JNV , Pune",
      duration: "2015 - 2020",
      degree: "10th - CBSE",
    },
  ];

  return (
    <div className=" bg-black flex justify-center pb-10">
      <div className="bg-black backdrop-blur-md rounded-2xl shadow-xl p-6 w-full max-w-6xl border-2 ">
        <h2 className="text-3xl font-bold  text-white mb-6">
          Edu<span className="text-yellow-500">cation</span>
        </h2>

        {/* Row Layout for Education Cards */}
        <div className="flex justify-between items-center space-x-6">
          {educationDetails.map((edu, index) => (
            <div
              key={index}
              className="flex  bg-zinc-700/50 p-2 items-center rounded-lg w-1/3 transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              {/* Logo Section */}
              <img
                src={edu.logo}
                alt={`${edu.institute} Logo`}
                className="w-16 h-16 object-contain rounded-lg border-2 border-zinc-700 mr-4"
              />

              {/* Text Details */}
              <div>
                <h1 className="text-yellow-500 text-lg font-semibold">
                  {edu.institute}
                </h1>
                <span className="text-zinc-400 text-sm">{edu.duration}</span>
                <p className="text-zinc-300">{edu.degree}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Education;

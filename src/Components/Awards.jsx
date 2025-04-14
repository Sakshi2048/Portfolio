import React from "react";

function Awards() {
  const awards = [
    {
      title: "Pulzion Web & App Hackathon",
      description: "Runner-up at Pulzion Web & App Hackathon 2023.",
    },
    {
      title: "NTSE Scholar",
      description:
        "Cleared all stages of the National Talent Search Examination.",
    },
    {
      title: "XENIA’25 Coordinator",
      description:
        "Coordinated and led XENIA’25, an annual technical event under the PCSB club, with 2000+ registrations.",
    },
    {
      title: "C++ Fundamentals Speaker",
      description:
        "Delivered a session on fundamental C++ concepts to more than 150 first-year students.",
    },
  ];

  return (
    <div>
      <section className="text-gray-600 body-font bg-black">
        <div className="container px-16 py-6 mx-auto">
          <div className="flex flex-col text-center w-full mb-10">
            <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-200">
              Awards & <span className="text-blue-500">Achievements</span>
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-400">
              Here are a few milestones that have shaped my academic and
              technical journey.
            </p>
          </div>
          <div className="flex flex-wrap">
            {awards.map((award, index) => (
              <div
                key={index}
                className="xl:w-1/4 lg:w-1/2 md:w-full px-8 p-6 border-opacity-60"
              >
                <h2 className="text-lg sm:text-xl text-yellow-500 font-medium title-font mb-2">
                  {award.title}
                </h2>
                <p className="leading-relaxed text-base mb-4 text-gray-500">
                  {award.description}
                </p>
                <span className="text-blue-500 inline-flex items-center cursor-pointer hover:underline">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Awards;

import React, { useState } from "react";
import { Trophy, Award, Users, Code2 } from "lucide-react";

const clubsList = [
  {
    logo: "https://th.bing.com/th/id/OIP.s_arK-OmWqU9AnB9wF6U-AHaHa?rs=1&pid=ImgDetMain",
    name: "PICT CSI Student Branch (PCSB)",
    position: "Web Developer",
    description: `• Coordinated XENIA'25, the annual technical event.\n• Led the development of the official XENIA'25 website.\n• Mentored 150+ students on fundamental C++ concepts.`,
    link: "https://www.linkedin.com/company/pict-csi",
  },
  {
    logo: "https://www.nss.gtu.ac.in/images/nss.png",
    name: "National Service Scheme (NSS)",
    position: "Member & Volunteer",
    description: `• Participated in environmental initiatives like tree plantation drives.\n• Volunteered in organizing and supporting blood donation camps.`,
    link: "https://www.linkedin.com/company/pictnss",
  },
  {
    logo: "https://media-exp1.licdn.com/dms/image/C4E0BAQGtNS5QMPEo-w/company-logo_200_200/0?e=2159024400&v=beta&t=qGnQweyUAeXPCyIrQbFKARzAaibjzqdY3lFxsDhOlkI",
    name: "Katalyst",
    position: "Student Mentee",
    description: `• An NGO focused on women’s empowerment.\n• Trained in corporate etiquette, communication, and leadership skills.\n• Participated in regular workshops on soft skills and professional development.`,
    link: "https://katalystindia.org/",
  },
];

const educationList = [
  {
    institute: "Pune Institute of Computer Technology, Pune",
    duration: "2022 - Present",
    degree: "B.E - Computer Engg.",
    logo: "https://img.collegepravesh.com/2017/02/PICT-Logo.jpg",
    link: "https://www.pict.edu/",
  },
  {
    institute: "Shri Shiv Chhatrapati College, Junnar ",
    duration: "2020 - 2022",
    degree: "Higher Secondary School (HSC)",
    logo: "https://th.bing.com/th/id/OIP.4Q8yotXQLr4q2h8GLtm7BwHaHw",
    link: "https://ssccollegejunnar.org/",
  },
  {
    institute: "Jawahar Navodaya Vidyalaya, Pune",
    duration: "2015 - 2020",
    degree: "10th - CBSE",
    logo: "https://jnvalumni.net/media/jnvLogo.png",
    link: "https://www.navodaya.gov.in/nvs/nvs-school/PUNE/en/home/",
  },
];

const awards = [
  {
    icon: <Trophy className="w-5 h-5 text-yellow-400 mr-2" />,
    title: "Pulzion Web & App Hackathon",
    description:
      "Runner-up of an AI-based Hackathon organized by PICT ACM Chapter.",
    link: "https://www.linkedin.com/posts/sakshim2048_codedocs-codedocs-hackathon-activity-7248897339388518401-TqO0",
  },
  {
    icon: <Users className="w-5 h-5 text-yellow-400 mr-2" />,
    title: "FE Carnival Coordinator",
    description:
      "Coordinated FE Carnival with 280+ registrations for 1st-year students.",
    link: "https://www.linkedin.com/posts/sakshim2048_overallcoordinator-fecarnival-csipict-activity-7252659935572828160-yIw1",
  },
  {
    icon: <Users className="w-5 h-5 text-yellow-400 mr-2" />,
    title: "XENIA’25 Coordinator",
    description:
      "Coordinated XENIA’25, a tech event under PCSB, with 2000+ registrations.",
    link: "https://www.linkedin.com/posts/pict-csi_xenia25-pcsb-csi-activity-7298976359454793728-gxwG",
  },
  {
    icon: <Code2 className="w-5 h-5 text-yellow-400 mr-2" />,
    title: "C++ Fundamentals Speaker",
    description: "Delivered a session on C++ to 150+ 1st-year students.",
    link: "https://www.linkedin.com/posts/sakshim2048_pcsb-cppsig-codingbeginners-activity-7277997063802380288-QojR",
  },
];

const certificates = [
    {
      logo: "https://evidyut.in/images/logos/12.png",
      title: "AI-ML Virtual Internship",
      date: "January 2025 - March 2025",
      link: "https://drive.google.com/file/d/1iA6NQvbYXoXsHXfh7vSlNEKKfm8Ugpo3/view?usp=sharing",
    },
    {
      logo: "https://media.licdn.com/dms/image/v2/D4D0BAQHjeDfclaytKg/company-logo_200_200/company-logo_200_200/0/1712674670740/aws_cloud_club_pict_logo?e=1750291200&v=beta&t=v2sUUL9cBtxpNPn0LT25UVVGlS6tk1EoScFVqTR5S7Q",
      title: "AWS Cloud Fundamentals",
      date: "August 2024",
      link: "https://drive.google.com/file/d/11IM_TRsaU2fB9AqjFbNDtfl8fCSV9ZGP/view?usp=drive_link",
    },
    {
      logo: "https://th.bing.com/th/id/OIP.FRF_lnZzWro9V50Ifq7-JQHaEK?rs=1&pid=ImgDetMain",
      title: "Web Design for Web Developers",
      date: "Completed : August 2024",
      link: "https://drive.google.com/file/d/1yXs_npqSQS24MQPKVBIKpovzDsKW_YHo/view?usp=sharing",
    },
    {
      logo: "https://th.bing.com/th/id/OIP.FRF_lnZzWro9V50Ifq7-JQHaEK?rs=1&pid=ImgDetMain",
      title: "Coding Interview Preparation - The Softer Skills",
      date: "Completed : July 2024",
      link: "https://drive.google.com/file/d/1eEnaiXaOPUzablo_wCmAX5R1PiwWrFiN/view?usp=sharing",
    },
    {
      logo: "https://logowik.com/content/uploads/images/goldman-sachs3788.logowik.com.webp",
      title: "iWE League Scholars Program 2024",
      date: "June 2024",
      link: "https://drive.google.com/file/d/1Nu3ppNvt59KdkWZcUtjJvbTYqrYrY0_p/view?usp=sharing",
    },
    {
      logo: "https://pictinc.org/assets/logo-d2Ig4sgZ.svg",
      title: "INC'23 - Volunteering & Management ",
      date: "April 2023",
      link: "https://drive.google.com/file/d/1YB2BdyZGElnGiDXqy9-pbojD8mBYeffy/view?usp=sharing",
    },
  ];

function Section() {
  const [activeTab, setActiveTab] = useState("education");

  const tabClasses = (tab) =>
    `tab-btn px-4 py-1 rounded-full  transition-colors duration-300 border cursor-pointer ${
      activeTab === tab
        ? "bg-blue-500 text-white border-transparent"
        : "bg-zinc-800 text-white border-zinc-400 hover:bg-zinc-600"
    }`;

  return (
    <section className=" bg-gradient-to-b from-[#050E1F] via-[#01102a] to-black text-white py-5">
      <div className="max-w-5xl mx-auto px-6">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {["education", "awards", "clubs", "certificates"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={tabClasses(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Content */}
        {activeTab === "education" && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {educationList.map((edu, idx) => (
              <div
                key={idx}
                className="bg-gray-900 border border-gray-700 p-4 rounded-lg flex gap-4"
              >
                <img
                  src={edu.logo}
                  alt="logo"
                  className="w-14 h-14 object-contain rounded"
                />
                <div>
                  <a
                    href={edu.link}
                    className="text-yellow-400 font-semibold hover:underline"
                    target="_blank"
                  >
                    {edu.institute}
                  </a>
                  <p className="text-sm text-gray-400">{edu.duration}</p>
                  <p className="text-sm">{edu.degree}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "awards" && (
          <div className="grid sm:grid-cols-2 gap-6">
            {awards.map((award, idx) => (
              <div
                key={idx}
                className="bg-gray-900 border border-gray-700 p-4 rounded-lg"
              >
                <div className="flex items-center mb-2">
                  {award.icon}
                  <a
                    href={award.link}
                    className="text-yellow-400 font-semibold hover:underline"
                    target="_blank"
                  >
                    {award.title}
                  </a>
                </div>
                <p className="text-sm text-gray-300">{award.description}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "clubs" && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {clubsList.map((club, idx) => (
              <div
                key={idx}
                className="bg-gray-900 border border-gray-700 p-4 rounded-lg"
              >
                <div className="flex items-center gap-3 mb-2">
                  <img
                    src={club.logo}
                    alt={club.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <a
                      href={club.link}
                      className="text-blue-400 font-medium hover:underline"
                      target="_blank"
                    >
                      {club.name}
                    </a>
                    <p className="text-sm text-gray-400">{club.position}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-300 whitespace-pre-line">
                  {club.description}
                </p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "certificates" && (
          <div className="grid sm:grid-cols-2 gap-4 px-8">
            {certificates.map((cert, idx) => (
              <div
                key={idx}
                className="bg-gray-900 border border-gray-700 py-2 px-2 rounded-lg flex items-center gap-4"
              >
                <img
                  src={cert.logo}
                  alt={cert.title}
                  className="w-12 h-12 object-contain rounded-full"
                />
                <div>
                  <a
                    href={cert.link}
                    className="text-white font-medium hover:underline"
                    target="_blank"
                  >
                    {cert.title}
                  </a>
                  <p className="text-sm text-gray-400">{cert.date}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Section;

import React, { useState } from "react";
import { Trophy, Award, Users, Code2, ChevronRight } from "lucide-react";


// Clubs list moved above the state
const clubsList = [
  {
    logo: "https://th.bing.com/th/id/OIP.s_arK-OmWqU9AnB9wF6U-AHaHa?rs=1&pid=ImgDetMain",
    name: "PICT CSI Student Branch (PCSB)",
    position: "Web Developer",
    description:
      "• Coordinated XENIA'25, the annual technical event.\n" +
      "• Led the development of the official XENIA'25 website.\n" +
      "• Mentored 150+ students on fundamental C++ concepts.",
    link:"https://www.linkedin.com/company/pict-csi",
  },
  {
    logo: "https://www.nss.gtu.ac.in/images/nss.png",
    name: "National Service Scheme (NSS)",
    position: "Member & Volunteer",
    description:
      "• Participated in environmental initiatives like tree plantation drives.\n" +
      "• Volunteered in organizing and supporting blood donation camps.",
      link:"https://www.linkedin.com/company/pictnss",
  },
  {
    logo: "https://media-exp1.licdn.com/dms/image/C4E0BAQGtNS5QMPEo-w/company-logo_200_200/0?e=2159024400&v=beta&t=qGnQweyUAeXPCyIrQbFKARzAaibjzqdY3lFxsDhOlkI",
    name: "Katalyst",
    position: "Student Mentee",
    description:
      "• An NGO focused on women’s empowerment.\n" +
      "• Trained in corporate etiquette, communication, and leadership skills.\n" +
      "• Participated in regular workshops on soft skills and professional development.",
      link:"https://katalystindia.org/",
  },
];

function Section() {
  const [activeTab, setActiveTab] = useState("education");

  const tabClasses = (tab) =>
    `tab-btn px-3 sm:px-6 py-2 sm:py-3 w-fit sm:w-auto justify-center sm:justify-start title-font font-medium inline-flex items-center leading-none tracking-wider rounded-full ${
      activeTab === tab
        ? "bg-blue-500 text-white"
        : "text-gray-400 hover:text-gray-200"
    }`;
  
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
      logo: "https://th.bing.com/th/id/OIP.4Q8yotXQLr4q2h8GLtm7BwHaHw?w=244&h=255&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
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
      description: "Runner-up of a AI based Hackathon organized by the PICT ACM Student Chapter & sponsored by Worqhat.",
      link:"https://www.linkedin.com/posts/sakshim2048_codedocs-codedocs-hackathon-activity-7248897339388518401-TqO0?utm_source=share&utm_medium=member_desktop&rcm=ACoAADgl-34BwXrKSnPp-pgrVH0hUkFlGgnwnCA",
    },
    // {
    //   icon: <Award className="w-5 h-5 text-yellow-400 mr-2" />,
    //   title: "NTSE Scholar",
    //   description:
    //     "Cleared all stages of the National Talent Search Examination.",
    //     link:"https://www.linkedin.com/in/sakshim2048/",
    // },
    {
      icon: <Users className="w-5 h-5 text-yellow-400 mr-2" />,
      title: "FE Carnival Coordinator",
      description:
        "Coordinated and led FE Carnival, a fun and engaging event designed for 1st year students to connect & collaborate, with 280+ registrations.",
        link:"https://www.linkedin.com/posts/sakshim2048_overallcoordinator-fecarnival-csipict-activity-7252659935572828160-yIw1?utm_source=share&utm_medium=member_desktop&rcm=ACoAADgl-34BwXrKSnPp-pgrVH0hUkFlGgnwnCA",
      
    },
    {
      icon: <Users className="w-5 h-5 text-yellow-400 mr-2" />,
      title: "XENIA’25 Coordinator",
      description:
        "Coordinated and led XENIA’25, an annual technical event under the PCSB club, with 2000+ registrations.",
        link:"https://www.linkedin.com/posts/pict-csi_xenia25-pcsb-csi-activity-7298976359454793728-gxwG?utm_source=share&utm_medium=member_desktop&rcm=ACoAADgl-34BwXrKSnPp-pgrVH0hUkFlGgnwnCA ",
      
    },
    {
      icon: <Code2 className="w-5 h-5 text-yellow-400 mr-2" />,
      title: "C++ Fundamentals Speaker",
      description:
        "Delivered a session on fundamental C++ concepts to more than 150 first-year students.",
        link:"https://www.linkedin.com/posts/sakshim2048_pcsb-cppsig-codingbeginners-activity-7277997063802380288-QojR?utm_source=share&utm_medium=member_desktop&rcm=ACoAADgl-34BwXrKSnPp-pgrVH0hUkFlGgnwnCA",
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

  return (
    <section className="text-gray-600 bg-black body-font">
      <div className="container max-w-5xl px-5 pb-16 mx-auto flex flex-wrap flex-col">
        {/* Tabs */}
        <div className="flex mx-auto flex-wrap mb-12 gap-x-6 gap-y-4">
          <button
            onClick={() => setActiveTab("education")}
            className={tabClasses("education")}
          >
            Education
          </button>
          <button
            onClick={() => setActiveTab("awards")}
            className={tabClasses("awards")}
          >
            Awards
          </button>
          <button
            onClick={() => setActiveTab("clubs")}
            className={tabClasses("clubs")}
          >
            Clubs & Societies
          </button>
          <button
            onClick={() => setActiveTab("certificates")}
            className={tabClasses("certificates")}
          >
            Certificates
          </button>
        </div>

        {/* Education */}
        {activeTab === "education" && (
          <div className="text-center w-full mb-10">
            <h1 className="text-2xl text-white font-bold title-font mb-6">
              Schools & <span className="text-blue-400">Academics</span>
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {educationList.map((edu, idx) => (
                <div
                  key={idx}
                  className="border border-gray-700 rounded-lg p-3 text-left text-white bg-gray-900 flex items-start gap-4"
                >
                  <img
                    src={edu.logo}
                    alt={`${edu.institute} logo`}
                    className="w-16 h-16 object-contain rounded"
                  />
                  <div>
                    <a
                      href={edu.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-md font-medium text-yellow-400 hover:underline cursor-pointer"
                    >
                      {edu.institute}
                    </a>

                    <p className="text-sm text-gray-400">{edu.duration}</p>
                    <p className="text-sm">{edu.degree}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Awards */}
        {activeTab === "awards" && (
          <div className="text-center w-full mb-10 text-white">
            <h1 className="text-2xl font-bold title-font mb-6">
              Awards & <span className="text-blue-400">Achievements</span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-2 md:px-0">
              {awards.map((award, idx) => (
                <div
                  key={idx}
                  className="bg-gray-900 border border-gray-700 p-4 rounded-lg text-left"
                >
                  <div className="flex items-center mb-1">
                    {award.icon}
                    <a
                      href={award.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-md text-yellow-400 font-medium hover:underline cursor-pointer"
                    >
                      {award.title}
                    </a>
                  </div>
                  <p className="text-sm text-gray-300">{award.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Clubs */}
        {activeTab === "clubs" && (
  <div className="text-center w-full mb-10 text-white">
    <h1 className="text-2xl font-bold title-font mb-6">
      Clubs & <span className="text-blue-400">Societies</span>
    </h1>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {clubsList.map((club, idx) => (
        <div
          key={idx}
          className="border border-gray-700 rounded-lg p-3 bg-gray-900 text-left"
        >
          <div className="flex items-center gap-3 mb-2">
            <img
              src={club.logo}
              alt={club.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <h3 className="text-md text-blue-400 font-medium">
                <a href={club.link} target="_blank" rel="noopener noreferrer">
                  {club.name}
                </a>
              </h3>
              <p className="text-sm text-gray-400">{club.position}</p>
            </div>
          </div>
          <div className="text-sm text-gray-300 whitespace-pre-line border-t border-gray-700 pt-2 pl-1">
            {club.description}
          </div>
        </div>
      ))}
    </div>
  </div>
)}

        {/* Certificates */}
        {activeTab === "certificates" && (
          <div className="text-center w-full mb-10 text-white px-6">
            <h1 className="text-2xl font-bold title-font mb-6">
              Certifications & <span className="text-blue-400">Courses</span>
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 px-2 md:px-0">
              {certificates.map((cert, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 border border-gray-700 rounded-lg p-2 bg-gray-900 text-left"
                >
                  <img
                    src={cert.logo}
                    alt={cert.title}
                    className="w-12 h-12 p-1 rounded-full object-cover"
                  />
                  <div>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-md text-gray-100 font-medium hover:underline cursor-pointer"
                    >
                      {cert.title}
                    </a>

                    <p className="text-sm text-gray-400">{cert.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Section;

import React from "react";

function Footer() {
  return (
    <footer className="flex flex-col space-y-10 justify-center pb-6 bg-gradient-to-t from-[#050E1F] via-[#000610] to-black">
      {/* Social Links */}
      <div className="flex justify-center space-x-5">
        <a
          href="https://github.com/Sakshi2048"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 hover:scale-110 transition-transform"
        >
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            className="w-8 h-8"
          >
            <title>GitHub</title>
            <path d="M12 .297c-6.63 0-12 5.373-12 12 
              0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 
              0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61
              C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 
              1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 
              3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 
              0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 
              0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 
              1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 
              3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 
              1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92 
              .42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 
              0 .315.21.69.825.57C20.565 22.092 
              24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
          </svg>
        </a>

        <a
          href="https://www.linkedin.com/in/sakshim2048"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/fluent/30/000000/linkedin-2.png"
            alt="LinkedIn"
            className="w-10 h-10 hover:scale-110 transition-transform"
          />
        </a>

        {/* <a
          href="https://leetcode.com/u/Sakshi_2048/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://th.bing.com/th/id/OIP.c8tftoDPAy61rPWcJ2oOdwAAAA?rs=1&pid=ImgDetMain"
            alt="LeetCode"
            style={{ width: "30px", height: "30px" }}
            className="w-10 h-10 hover:scale-110 transition-transform"
          />
        </a> */}

        <a
          href="mailto:sakshimarbhal248@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/fluent/30/000000/new-post.png"
            alt="Email"
            className="w-10 h-10 hover:scale-110 transition-transform"
          />
        </a>

        <a
          href="https://www.instagram.com/sakshi_20.48"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/fluent/30/000000/instagram-new.png"
            alt="Instagram"
            className="w-10 h-10 hover:scale-110 transition-transform"
          />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-center text-gray-300 text-sm">
        &copy; SakshiMarbhal 2025 All rights reserved
      </p>
    </footer>
  );
}

export default Footer;

import React from "react";

function Footer() {
  return (
    <footer className="flex flex-col space-y-10 justify-center p-10 bg-zinc-950">
      {/* Social Links */}
      <div className="flex justify-center space-x-5">
        <a
          href="https://github.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/fluent/30/000000/github.png"
            alt="GitHub"
            className="w-10 h-10 hover:scale-110 transition-transform"
          />
        </a>
      
        <a
          href="https://linkedin.com/in/your-profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/fluent/30/000000/linkedin-2.png"
            alt="LinkedIn"
           className="w-10 h-10 hover:scale-110 transition-transform"
          />
        </a>

        <a
          href="https://leetcode.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://th.bing.com/th/id/OIP.c8tftoDPAy61rPWcJ2oOdwAAAA?rs=1&pid=ImgDetMain"
            alt="LeetCode"
            style={{ width: "30px", height: "30px" }}
            className="w-10 h-10 hover:scale-110 transition-transform"
          />
        </a>

        <a
          href="mailto:your.email@example.com"
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
          href="https://instagram.com/your-username"
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
      <p className="text-center text-gray-400 text-sm">
        &copy; 2025 All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;

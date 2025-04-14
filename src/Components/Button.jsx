import React from "react";

export const Button = ({ children, className = "", variant = "primary", ...props }) => {
  const baseStyle = "font-semibold rounded-lg px-4 py-2 transition-colors duration-200";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-300 text-gray-800 hover:bg-gray-100",
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

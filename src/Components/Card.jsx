import React from "react";

export const Card = ({ children, className = "" }) => {
  return (
    <div className={`bg-black shadow-lg rounded-xl overflow-hidden ${className}`}>
      {children}
    </div>
  );
};

export const CardContent = ({ children, className = "" }) => {
  return <div className={`p-6 ${className}`}>{children}</div>;
};

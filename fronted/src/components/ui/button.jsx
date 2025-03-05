import React from "react";

export const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-md transition-all ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

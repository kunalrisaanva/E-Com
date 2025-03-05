import React from "react";

export const Input = ({ type = "text", className, ...props }) => {
  return (
    <input
      type={type}
      className={`border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none ${className}`}
      {...props}
    />
  );
};

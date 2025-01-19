import React from "react";

export default function Button({ onClick, children, ...props }) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-10 right-10 rounded-full p-4 bg-gray-100"
      {...props}
    >
      {children}
    </button>
  );
}

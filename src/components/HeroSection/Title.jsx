import React from "react";

export default function Title({ children }) {
  return (
    <h1 className="text-center font-light text-accent text-3xl md:text-4xl lg:text-5xl">
      {children}
    </h1>
  );
}
